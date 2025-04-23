import { Component, signal, WritableSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-button-menu',
  imports: [RouterLink, RouterModule, MatIconModule],
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.scss',
})
export class ButtonMenuComponent {
  title: WritableSignal<string | null> = signal<string | null>(null);

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.title.set(params['name']);
    });
  }
}
