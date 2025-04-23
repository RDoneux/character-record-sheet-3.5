import { Component } from '@angular/core';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import {
  ABILITIES_DEFAULT,
  IAbilities,
  IAbilitiesForm,
} from './interfaces/i-abilities';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { UtilsService } from '../../../../services/utils.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-abilities',
  imports: [ReactiveFormsModule, UpperCasePipe],
  templateUrl: './abilities.component_v2.html',
  styleUrl: './abilities.component_v2.scss',
})
export class AbilitiesComponent {
  static readonly STORAGE_KEY = 'abilities';

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilderService,
    private utils: UtilsService,
  ) {}

  abilitiesForm!: FormGroup<IAbilitiesForm>;
  abilities = Object.keys(ABILITIES_DEFAULT);

  ngOnInit() {
    const persistedAbilities: IAbilities | null =
      this.localStorage.load<IAbilities>(AbilitiesComponent.STORAGE_KEY);

    this.abilitiesForm = this.formBuilder.buildForm(
      persistedAbilities ? persistedAbilities : ABILITIES_DEFAULT,
    );

    this.abilitiesForm.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      this.localStorage.save<IAbilities>(
        AbilitiesComponent.STORAGE_KEY,
        this.abilitiesForm.getRawValue(),
      );
    });
  }

  getAbilityAbbreviation(ability: string): string {
    return this.utils.abilityAbbreviation(ability);
  }
}
