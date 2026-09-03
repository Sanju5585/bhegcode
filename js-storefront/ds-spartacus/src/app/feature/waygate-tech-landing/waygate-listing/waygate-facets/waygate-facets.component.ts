import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-waygate-facets',
  templateUrl: './waygate-facets.component.html',
  styleUrls: ['./waygate-facets.component.scss'],
})
export class WaygateFacetsComponent {
  @Input() facets = [];
}
