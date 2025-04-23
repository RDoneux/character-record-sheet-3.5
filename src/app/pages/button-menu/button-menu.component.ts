import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-button-menu',
  imports: [RouterLink, RouterModule, MatIconModule],
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.scss',
})
export class ButtonMenuComponent {}
