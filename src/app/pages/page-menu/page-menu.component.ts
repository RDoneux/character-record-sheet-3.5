import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FragmentMenuComponent } from '../fragment-menu/fragment-menu.component';

@Component({
  selector: 'app-page-menu',
  imports: [RouterModule, FragmentMenuComponent],
  templateUrl: './page-menu.component.html',
  styleUrl: './page-menu.component.scss',
})
export class PageMenuComponent {}
