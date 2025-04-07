import { Component } from '@angular/core';
import { BaseInfoComponent } from './fragments/base-info/base-info.component';
import { AbilitiesComponent } from './fragments/abilities/abilities.component';
import { HitPointsComponent } from './fragments/hit-points/hit-points.component';
import { InitiativeComponent } from './fragments/initiative/initiative.component';
import { SkillsComponent } from './fragments/skills/skills.component';

@Component({
  selector: 'app-character-sheet',
  imports: [
    BaseInfoComponent,
    AbilitiesComponent,
    HitPointsComponent,
    InitiativeComponent,
    SkillsComponent,
  ],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.scss',
})
export class CharacterSheetComponent {}
