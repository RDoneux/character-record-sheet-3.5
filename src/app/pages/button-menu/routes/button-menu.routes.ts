import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    outlet: 'button-menu',
    loadComponent: () =>
      import('../fragments/menu/menu.component').then((m) => m.MenuComponent),
  },
  {
    path: 'overview',
    outlet: 'button-menu',
    loadComponent: () =>
      import('../fragments/overview/overview.component').then(
        (m) => m.OverviewComponent,
      ),
  },
  {
    path: 'abilities',
    outlet: 'button-menu',
    loadComponent: () =>
      import(
        '../../character-sheet/fragments/abilities/abilities-condenced/abilities-condenced.component'
      ).then((m) => m.AbilitiesCondencedComponent),
  },
  {
    path: 'attack',
    outlet: 'button-menu',
    loadComponent: () =>
      import('../../character-sheet/fragments/attacks/attacks.component').then(
        (m) => m.AttacksComponent,
      ),
  },
  {
    path: 'combat',
    outlet: 'button-menu',
    loadComponent: () =>
      import(
        '../../character-sheet/fragments/base-combat/base-combat.component'
      ).then((m) => m.BaseCombatComponent),
  },
  {
    path: 'basic-info',
    outlet: 'button-menu',
    loadComponent: () =>
      import(
        '../../character-sheet/fragments/base-info/base-info.component'
      ).then((m) => m.BaseInfoComponent),
  },
  {
    path: 'gear',
    outlet: 'button-menu',
    loadComponent: () =>
      import('../../character-sheet/fragments/gear/gear.component').then(
        (m) => m.GearComponent,
      ),
  },
  {
    path: 'hit-points',
    outlet: 'button-menu',
    loadComponent: () =>
      import(
        '../../character-sheet/fragments/hit-points/hit-points.component'
      ).then((m) => m.HitPointsComponent),
  },
  {
    path: 'initiative',
    outlet: 'button-menu',
    loadComponent: () =>
      import(
        '../../character-sheet/fragments/initiative/initiative.component'
      ).then((m) => m.InitiativeComponent),
  },
  {
    path: 'possessions',
    outlet: 'button-menu',
    loadComponent: () =>
      import(
        '../../character-sheet/fragments/possessions/possessions.component'
      ).then((m) => m.PossessionsComponent),
  },
  {
    path: 'saving-throws',
    outlet: 'button-menu',
    loadComponent: () =>
      import(
        '../../character-sheet/fragments/saving-throws/saving-throws.component'
      ).then((m) => m.SavingThrowsComponent),
  },
  {
    path: 'skills',
    outlet: 'button-menu',
    loadComponent: () =>
      import('../../character-sheet/fragments/skills/skills.component').then(
        (m) => m.SkillsComponent,
      ),
  },
  {
    path: 'special-abilities',
    outlet: 'button-menu',
    loadComponent: () =>
      import(
        '../../character-sheet/fragments/special-abilities/special-abilities.component'
      ).then((m) => m.SpecialAbilitiesComponent),
  },
  {
    path: 'spells',
    outlet: 'button-menu',
    loadComponent: () =>
      import('../../character-sheet/fragments/spells/spells.component').then(
        (m) => m.SpellsComponent,
      ),
  },
];
