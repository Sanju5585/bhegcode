import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'equipment-accordion',
  templateUrl: './equipment-accordion.component.html',
  styleUrls: ['./equipment-accordion.component.css'],
})
export class EquipmentAccordionComponent {
  @Input() tabName: string;
}
