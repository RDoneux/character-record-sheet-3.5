import { Component } from '@angular/core';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import {
  ISavingThrows,
  SAVING_THROWS_DEFAULT,
  SavingThrowsForm,
} from './interfaces/i-saving-throws';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TitleComponent } from '../../components/title/title.component';
import { CommonModule } from '@angular/common';
import { SavingThrowAbilityMapPipe } from './pipes/saving-throw-ability-map.pipe';

@Component({
  selector: 'app-saving-throws',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TitleComponent,
    CommonModule,
    SavingThrowAbilityMapPipe
  ],
  templateUrl: './saving-throws.component.html',
  styleUrl: './saving-throws.component.scss',
})
export class SavingThrowsComponent {
  static readonly STORAGE_KEY = 'savingThrows';

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilderService
  ) {}

  savingThrowsForm!: FormGroup<SavingThrowsForm>;

  ngOnInit() {
    const persistedInfo: ISavingThrows | null =
      this.localStorage.load<ISavingThrows>(SavingThrowsComponent.STORAGE_KEY);

    this.savingThrowsForm = this.formBuilder.buildForm(
      persistedInfo ? persistedInfo : SAVING_THROWS_DEFAULT
    );

    this.savingThrowsForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(() => {
        this.localStorage.save<ISavingThrows>(
          SavingThrowsComponent.STORAGE_KEY,
          this.savingThrowsForm.getRawValue()
        );
      });
  }

  get form(): string[] {
    return Object.keys(this.savingThrowsForm.controls)
  }
}
