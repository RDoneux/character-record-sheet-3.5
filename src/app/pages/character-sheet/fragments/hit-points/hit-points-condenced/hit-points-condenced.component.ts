import {
  Component,
  signal,
  TemplateRef,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { initaliseFormModule } from '../../../../../utils/form-module-utils';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderService } from '../../../../../services/form-builder.service';
import { LocalStorageService } from '../../../../../services/local-storage.service';
import {
  HIT_POINTS_DEFAULT,
  IHitPoints,
  IHitPointsForm,
} from '../interfaces/i-hit-points';
import { HitPointsComponent } from '../hit-points.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-condenced-hit-points',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './hit-points-condenced.component.html',
  styleUrl: './hit-points-condenced.component.scss',
})
export class HitPointsCondencedComponent {
  @ViewChild('hitPointsDialog') hitPointsDialog!: TemplateRef<any>;

  damageAmount: WritableSignal<number> = signal<number>(1);

  get hitPoints(): IHitPoints {
    return this.hitPointsForm.getRawValue();
  }

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilderService,
    private dialog: MatDialog,
  ) {}

  hitPointsForm!: FormGroup<IHitPointsForm>;

  ngOnInit() {
    const [form] = initaliseFormModule<IHitPoints, IHitPointsForm>(
      HitPointsComponent.STORAGE_KEY,
      HIT_POINTS_DEFAULT,
      this.localStorage,
      this.formBuilder,
    );

    this.hitPointsForm = form;
  }

  openHitPointsDialog() {
    this.dialog.open(this.hitPointsDialog);
  }

  onDamageAmountChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.damageAmount.set(value ? parseInt(value) : 0);
  }

  onDamage() {
    const currentHitPoints = this.hitPointsForm.get('currentHitPoints')
      ?.value as number;

    if (currentHitPoints - this.damageAmount() <= -9) {
      this.hitPointsForm.patchValue({
        currentHitPoints: -9,
      });
      return;
    }

    const newHitPoints = currentHitPoints - this.damageAmount();
    this.hitPointsForm.patchValue({
      currentHitPoints: newHitPoints,
    });
  }

  onHeal() {
    const currentHitPoints = this.hitPointsForm.get('currentHitPoints')
      ?.value as number;
    const maxHitPoints = this.hitPointsForm.get('totalHitPoints')?.value ?? 0;

    if (currentHitPoints + this.damageAmount() > maxHitPoints) {
      this.hitPointsForm.patchValue({
        currentHitPoints: maxHitPoints,
      });
      return;
    }

    const newHitPoints = currentHitPoints + this.damageAmount();
    this.hitPointsForm.patchValue({
      currentHitPoints: newHitPoints,
    });
  }
}
