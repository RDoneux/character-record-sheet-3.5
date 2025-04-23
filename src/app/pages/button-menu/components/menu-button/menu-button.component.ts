import { Component, input, InputSignal } from '@angular/core';
import { Form } from '@angular/forms';
import { FormFragment } from '../../../../interfaces/i-form-fragments';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-button',
  imports: [RouterLink],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss',
})
export class MenuButtonComponent {
  formFragment: InputSignal<FormFragment> = input.required<FormFragment>();
}
