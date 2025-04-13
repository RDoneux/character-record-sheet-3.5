import { Component } from '@angular/core';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import {
  ABILITIES_DEFAULT,
  IAbilities,
  IAbilitiesForm,
} from './interfaces/i-abilities';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { debounceTime } from 'rxjs';
import { TitleComponent } from '../../components/title/title.component';
import { UtilsService } from '../../../../services/utils.service';

@Component({
  selector: 'app-abilities',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TitleComponent,
  ],
  templateUrl: './abilities.component.html',
  styleUrl: './abilities.component.scss',
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
