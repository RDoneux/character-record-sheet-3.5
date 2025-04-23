import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderService } from '../../../../../services/form-builder.service';
import { LocalStorageService } from '../../../../../services/local-storage.service';
import { initaliseFormModule } from '../../../../../utils/form-module-utils';
import { AbilitiesComponent } from '../abilities/abilities.component';
import {
  IAbilitiesForm,
  ABILITIES_DEFAULT,
  IAbilities,
  IAbilityDef,
} from '../interfaces/i-abilities';
import { UpperCasePipe } from '@angular/common';
import { UtilsService } from '../../../../../services/utils.service';

@Component({
  selector: 'app-condenced-abilities',
  imports: [ReactiveFormsModule, UpperCasePipe],
  templateUrl: './abilities-condenced.component.html',
  styleUrl: './abilities-condenced.component.scss',
})
export class AbilitiesCondencedComponent {
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

    formChanges.subscribe((data: IAbilities) => {
      Object.keys(data).forEach((key: string) => {
        const ability: IAbilityDef = data[
          key as keyof IAbilities
        ] as IAbilityDef;
        if (!ability.score) return;
        ability.modifier = this.utils.getAbilityModifier(ability.score);
        form.get(key)?.patchValue(ability);
      });
    });
  }
}
