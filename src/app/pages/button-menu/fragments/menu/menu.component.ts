import { Component } from '@angular/core';
import { MenuButtonComponent } from '../../components/menu-button/menu-button.component';
import { FormFragment } from '../../../../interfaces/i-form-fragments';

@Component({
  selector: 'app-menu',
  imports: [MenuButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  fragments = Object.values(FormFragment);
}
