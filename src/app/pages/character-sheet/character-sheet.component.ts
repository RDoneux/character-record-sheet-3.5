import { Component } from '@angular/core';
import { BaseInfoComponent } from './fragments/base-info/base-info.component';
import { AbilitiesComponent } from './fragments/abilities/abilities.component';
import { HitPointsComponent } from './fragments/hit-points/hit-points.component';
import { InitiativeComponent } from './fragments/initiative/initiative.component';
import { SkillsComponent } from './fragments/skills/skills.component';
import { SavingThrowsComponent } from './fragments/saving-throws/saving-throws.component';
import { BaseCombatComponent } from './fragments/base-combat/base-combat.component';
import { AttacksComponent } from './fragments/attacks/attacks.component';
import { GearComponent } from './fragments/gear/gear.component';
import { PossessionsComponent } from './fragments/possessions/possessions.component';
import { SpecialAbilitiesComponent } from './fragments/special-abilities/special-abilities.component';
import { SpellsComponent } from './fragments/spells/spells.component';

@Component({
  selector: 'app-character-sheet',
  imports: [
    BaseInfoComponent,
    AbilitiesComponent,
    HitPointsComponent,
    InitiativeComponent,
    SkillsComponent,
    SavingThrowsComponent,
    BaseCombatComponent,
    AttacksComponent,
    GearComponent,
    PossessionsComponent,
    SpecialAbilitiesComponent,
    SpellsComponent,
  ],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.scss',
})
export class CharacterSheetComponent {}
