import { Routes } from '@angular/router';
import { PageMenuComponent } from './pages/page-menu/page-menu.component';
import { ButtonMenuComponent } from './pages/button-menu/button-menu.component';

export const routes: Routes = [
  { path: '', redirectTo: 'button-menu', pathMatch: 'full' },
  // {
  //   path: 'character-sheet',
  //   loadComponent: () =>
  //     import('./pages/character-sheet/character-sheet.component').then(
  //       (m) => m.CharacterSheetComponent,
  //     ),
  // },
  // {
  //   path: 'builder',
  //   component: PageMenuComponent,
  //   loadChildren: () =>
  //     import('./pages/page-menu/routes/page-menu.routes').then((m) => m.routes),
  // },
  {
    path: 'button-menu',
    component: ButtonMenuComponent,
    loadChildren: () =>
      import('./pages/button-menu/routes/button-menu.routes').then(
        (m) => m.routes,
      ),
  },
];
