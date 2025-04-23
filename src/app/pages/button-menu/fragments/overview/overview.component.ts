import { Component } from '@angular/core';
import { AbilitiesComponent } from '../../../character-sheet/fragments/abilities/abilities/abilities.component';
import { AbilitiesCondencedComponent } from '../../../character-sheet/fragments/abilities/abilities-condenced/abilities-condenced.component';
import { HitPointsComponent } from '../../../character-sheet/fragments/hit-points/hit-points.component';
import { HitPointsCondencedComponent } from '../../../character-sheet/fragments/hit-points/hit-points-condenced/hit-points-condenced.component';

@Component({
  selector: 'app-overview',
  imports: [
    AbilitiesCondencedComponent,
    HitPointsComponent,
    HitPointsCondencedComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {}
