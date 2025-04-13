import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { debounceTime } from 'rxjs';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import {
  IGearForm,
  IGear,
  GEAR_DEFAULT,
  PROTECTIVE_ITEM_DEFAULT,
} from './interfaces/i-gear';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gear',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './gear.component.html',
  styleUrl: './gear.component.scss',
})
export class GearComponent {
  static readonly STORAGE_KEY = 'gear';

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilderService,
  ) {}

  gearForm!: FormGroup<IGearForm>;

  ngOnInit() {
    const persistedInfo: IGear | null = this.localStorage.load<IGear>(
      GearComponent.STORAGE_KEY,
    );

    this.gearForm = this.formBuilder.buildForm(
      persistedInfo ? persistedInfo : GEAR_DEFAULT,
    );

    this.gearForm.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      this.localStorage.save<IGear>(
        GearComponent.STORAGE_KEY,
        this.gearForm.getRawValue(),
      );
    });
  }

  get protectiveItemKeys() {
    return Object.keys(this.gearForm.controls.protectiveItems.controls);
  }

  removeProtectiveItem(index: string) {
    (this.gearForm.controls.protectiveItems as any).removeControl(index);
  }

  addProtectiveItem(index: string) {
    (this.gearForm.controls.protectiveItems as any).addControl(
      `${+index + 1}`,
      this.formBuilder.buildForm(PROTECTIVE_ITEM_DEFAULT),
    );
  }
}
