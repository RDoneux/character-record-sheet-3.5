import { Type } from '@angular/core';
import { SKILLS_DEFAULT } from '../../character-sheet/fragments/skills/interfaces/i-skill';

export const fragmentMenu: { [key in Fragment]: any } = {
  abilities: () =>
    import(
      '../../character-sheet/fragments/abilities/abilities/abilities.component'
    ).then((m) => m.AbilitiesComponent),
  attacks: () =>
    import('../../character-sheet/fragments/attacks/attacks.component').then(
      (m) => m.AttacksComponent,
    ),
  'base-combat': () =>
    import(
      '../../character-sheet/fragments/base-combat/base-combat.component'
    ).then((m) => m.BaseCombatComponent),
  'base-info': () =>
    import(
      '../../character-sheet/fragments/base-info/base-info.component'
    ).then((m) => m.BaseInfoComponent),
  gear: () =>
    import('../../character-sheet/fragments/gear/gear.component').then(
      (m) => m.GearComponent,
    ),
  'hit-points': () =>
    import(
      '../../character-sheet/fragments/hit-points/hit-points.component'
    ).then((m) => m.HitPointsComponent),
  initiative: () =>
    import(
      '../../character-sheet/fragments/initiative/initiative.component'
    ).then((m) => m.InitiativeComponent),
  possessions: () =>
    import(
      '../../character-sheet/fragments/possessions/possessions.component'
    ).then((m) => m.PossessionsComponent),
  'saving-throws': () =>
    import(
      '../../character-sheet/fragments/saving-throws/saving-throws.component'
    ).then((m) => m.SavingThrowsComponent),
  skills: () =>
    import('../../character-sheet/fragments/skills/skills.component').then(
      (m) => m.SkillsComponent,
    ),
  spells: () =>
    import('../../character-sheet/fragments/spells/spells.component').then(
      (m) => m.SpellsComponent,
    ),
};

export const Fragment = {
  ABILITIES: 'abilities',
  ATTACKS: 'attacks',
  BASE_COMBAT: 'base-combat',
  BASE_INFO: 'base-info',
  GEAR: 'gear',
  HIT_POINTS: 'hit-points',
  INITIATIVE: 'initiative',
  POSSESSIONS: 'possessions',
  SAVING_THROWS: 'saving-throws',
  SKILLS: 'skills',
  SPELLS: 'spells',
} as const;
export type Fragment = (typeof Fragment)[keyof typeof Fragment];
