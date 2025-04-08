import { Component } from '@angular/core';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  ISkills,
  ISkillsForm,
  SkillAbilityMap,
  SKILLS_DEFAULT,
} from './interfaces/i-skill';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../../../services/utils.service';

@Component({
  selector: 'app-skills',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    CommonModule,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  static readonly STORAGE_KEY = 'skills';

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilderService,
    private utils: UtilsService
  ) {}

  skillsForm!: FormGroup<ISkillsForm>;
  skills = Object.keys(SKILLS_DEFAULT);
  skillAbilityMap = SkillAbilityMap;

  ngOnInit() {
    const persistedSkills = this.localStorage.load<ISkillsForm>(
      SkillsComponent.STORAGE_KEY
    );

    this.skillsForm = this.formBuilder.buildForm(
      persistedSkills ? persistedSkills : SKILLS_DEFAULT
    );

    console.log(this.skillsForm);

    this.skillsForm.valueChanges.subscribe(() => {
      this.localStorage.save<ISkills>(
        SkillsComponent.STORAGE_KEY,
        this.skillsForm.getRawValue()
      );
    });
  }

  getSkillAbility(key: string): string {
    return this.utils.abilityAbbreviation(
      SkillAbilityMap[key as keyof ISkills]
    );
  }

  convertCamelCaseToNormalText(camelCase: string): string {
    return this.utils.camelCaseToNormalText(camelCase);
  }

  getFormGroup(key: string): string[] {
    return Object.keys((this.skillsForm.get(key) as FormGroup).controls);
  }
}
