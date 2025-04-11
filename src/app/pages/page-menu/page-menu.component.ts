import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-menu',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './page-menu.component.html',
  styleUrl: './page-menu.component.scss',
})
export class PageMenuComponent {}
