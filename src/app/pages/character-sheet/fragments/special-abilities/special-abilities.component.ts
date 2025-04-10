import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { debounceTime } from 'rxjs';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import {
  ISpecialAbilitiesForm,
  ISpecialAbilities,
  SPECIAL_ABILITIES_DEFAULT,
} from './interfaces/i-special-abilities';
import { MatIconModule } from '@angular/material/icon';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-special-abilities',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './special-abilities.component.html',
  styleUrl: './special-abilities.component.scss',
})
export class SpecialAbilitiesComponent {
  static readonly STORAGE_KEY = 'specialAbilities';

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilderService
  ) {}

  specialAbilitiesForm!: FormGroup<ISpecialAbilitiesForm>;

  ngOnInit() {
    const persistedInfo: ISpecialAbilities | null =
      this.localStorage.load<ISpecialAbilities>(
        SpecialAbilitiesComponent.STORAGE_KEY
      );

    this.specialAbilitiesForm = this.formBuilder.buildForm(
      persistedInfo ? persistedInfo : SPECIAL_ABILITIES_DEFAULT
    );

    this.specialAbilitiesForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(() => {
        this.localStorage.save<ISpecialAbilities>(
          SpecialAbilitiesComponent.STORAGE_KEY,
          this.specialAbilitiesForm.getRawValue()
        );
      });
  }

  get feats() {
    return Object.keys(
      (this.specialAbilitiesForm.get('feats') as FormGroup).controls
    );
  }

  get specialAbilities() {
    return Object.keys(
      (this.specialAbilitiesForm.get('specialAbilities') as FormGroup).controls
    );
  }

  get languages() {
    return Object.keys(
      (this.specialAbilitiesForm.get('languages') as FormGroup).controls
    );
  }

  remove(type: string, index: string) {
    (this.specialAbilitiesForm.get(type) as any).removeControl(index);
  }

  add(type: string, index: string) {
    (this.specialAbilitiesForm.get(type) as any).addControl(
      `${+index + 1}`,
      new FormControl('')
    );
  }
}
