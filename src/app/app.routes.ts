import { Routes } from '@angular/router';
import { PageMenuComponent } from './pages/page-menu/page-menu.component';

export const routes: Routes = [
  { path: '', redirectTo: 'character-sheet', pathMatch: 'full' },
  {
    path: 'character-sheet',
    loadComponent: () =>
      import('./pages/character-sheet/character-sheet.component').then(
        (m) => m.CharacterSheetComponent
      ),
  },
  {
    path: 'page-menu',
    component: PageMenuComponent,
    loadChildren: () =>
      import('./pages/page-menu/routes/page-menu.routes').then((m) => m.routes),
  },
];
