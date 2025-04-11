import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic-info',
    loadComponent: () =>
      import(
        '../../character-sheet/fragments/base-info/base-info.component'
      ).then((m) => m.BaseInfoComponent),
  },
  {
    path: 'abilities',
    loadComponent: () =>
      import(
        '../../character-sheet/fragments/abilities/abilities.component'
      ).then((m) => m.AbilitiesComponent),
  },
];
