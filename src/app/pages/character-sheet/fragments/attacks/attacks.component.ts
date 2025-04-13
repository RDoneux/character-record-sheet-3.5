import {
  afterNextRender,
  Component,
  inject,
  Injector,
  ViewChild,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { ATTACK_DEFAULT, IAttack, IAttackForm } from './interfaces/i-attack';
import { debounceTime } from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-attacks',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    TextFieldModule,
  ],
  templateUrl: './attacks.component.html',
  styleUrl: './attacks.component.scss',
})
export class AttacksComponent {
  static readonly STORAGE_KEY = 'attack';
  private _injector = inject(Injector);

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilderService,
  ) {}

  attackForm!: FormGroup<IAttackForm>;

  ngOnInit() {
    const persistedInfo: IAttack | null = this.localStorage.load<IAttack>(
      AttacksComponent.STORAGE_KEY,
    );

    this.attackForm = this.formBuilder.buildForm(
      persistedInfo ? persistedInfo : ATTACK_DEFAULT,
    );

    this.attackForm.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      this.localStorage.save<IAttack>(
        AttacksComponent.STORAGE_KEY,
        this.attackForm.getRawValue(),
      );
    });
  }

  triggerResize() {
    // Wait for content to render, then trigger textarea resize.
    afterNextRender(
      () => {
        this.autosize.resizeToFitContent(true);
      },
      {
        injector: this._injector,
      },
    );
  }

  get formKeys(): string[] {
    return Object.keys(this.attackForm.controls);
  }

  get formLength(): number {
    return Object.keys(this.attackForm.controls).length;
  }

  getAmmoKeys(key: string): string[] {
    return Object.keys(
      (
        (this.attackForm.get(key) as FormGroup).controls[
          'ammunition'
        ] as FormGroup
      ).controls,
    );
  }

  removeWeapon(index: string) {
    (this.attackForm as any).removeControl(index);
  }

  addWeapon(index: string) {
    (this.attackForm as any).addControl(
      `${+index + 1}`,
      this.formBuilder.buildForm(ATTACK_DEFAULT[0]),
    );
  }
}
