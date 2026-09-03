import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-waygate-menu-secondary',
  templateUrl: './waygate-menu-secondary.component.html',
  styleUrls: ['./waygate-menu-secondary.component.scss'],
})
export class WaygateMenuSecondaryComponent {
  @Input() list = [];
  @Input() external;
  @Output() closeMenu = new EventEmitter<any>();
  categories = [];
  selecteds = [];

  clicked(event) {
    this.closeMenu.emit(event);
  }
  openSubCategory(categories, index, i) {
    this.categories[index] = categories;
    this.selecteds[index] = i;
    if (index == 0) {
      this.categories[1] = [];
      this.selecteds[1] = [];
    }
  }
  redirectToBynder(url) {
    const bynderUrl = url;
    window.open(bynderUrl, '_blank');
  }
}
