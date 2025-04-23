import { Component } from '@angular/core';
import { AbilitiesCondencedComponent } from '../../../character-sheet/fragments/abilities/abilities-condenced/abilities-condenced.component';
import { HitPointsCondencedComponent } from '../../../character-sheet/fragments/hit-points/hit-points-condenced/hit-points-condenced.component';

@Component({
  selector: 'app-overview',
  imports: [AbilitiesCondencedComponent, HitPointsCondencedComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {}
