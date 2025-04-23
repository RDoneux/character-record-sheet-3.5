import { Component } from '@angular/core';
import { FormBuilderService } from '../../../../../services/form-builder.service';
import { LocalStorageService } from '../../../../../services/local-storage.service';
import {
  ABILITIES_DEFAULT,
  IAbilities,
  IAbilitiesForm,
} from '../interfaces/i-abilities';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilsService } from '../../../../../services/utils.service';
import { initaliseFormModule } from '../../../../../utils/form-module-utils';
import { TitleComponent } from '../../../components/title/title.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-abilities',
  imports: [
    ReactiveFormsModule,
    TitleComponent,
    MatFormFieldModule,
    MatInputModule,
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
    const [form, formChanges] = initaliseFormModule<IAbilities, IAbilitiesForm>(
      AbilitiesComponent.STORAGE_KEY,
      ABILITIES_DEFAULT,
      this.localStorage,
      this.formBuilder,
    );

    this.abilitiesForm = form;
  }

  getAbilityAbbreviation(ability: string): string {
    return this.utils.abilityAbbreviation(ability);
  }
}
