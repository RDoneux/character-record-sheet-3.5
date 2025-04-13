import { Component, input, InputSignal, signal } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  fullTitle: InputSignal<string | undefined> = input<string>();
  shortTitle: InputSignal<string> = input.required<string>();
}
