import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ICON_TYPE } from '@spartacus/storefront';

export enum ViewModes {
  Grid = 'grid',
  List = 'list',
}

@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'ds-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent {
  iconTypes = ICON_TYPE;
  @Input()
  mode;
  @Output()
  modeChange = new EventEmitter<string>();

  constructor() {
    this.mode = sessionStorage.getItem('mode');
  }
  get viewMode() {
    if (
      sessionStorage.getItem('mode') &&
      sessionStorage.getItem('mode') != ''
    ) {
      this.mode = sessionStorage.getItem('mode');
      this.modeChange.emit(this.mode);
    } else {
      this.mode = ViewModes.Grid;
      this.modeChange.emit(this.mode);
      sessionStorage.setItem('mode', this.mode);
    }
    if (this.mode === ViewModes.List) {
      return this.iconTypes.GRID;
    } else if (this.mode === ViewModes.Grid) {
      return this.iconTypes.LIST;
    }
  }
  changeMode() {
    if (sessionStorage.getItem('mode')) {
      this.mode = sessionStorage.getItem('mode');
    }
    const newMode =
      this.mode === ViewModes.Grid ? ViewModes.List : ViewModes.Grid;
    this.modeChange.emit(newMode);
    sessionStorage.setItem('mode', newMode);
  }
}
