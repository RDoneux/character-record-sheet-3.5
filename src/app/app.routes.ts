import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'character-sheet', pathMatch: 'full' },
  {
    path: 'character-sheet',
    loadComponent: () =>
      import('./pages/character-sheet/character-sheet.component').then(
        (m) => m.CharacterSheetComponent
      ),
  },
];
