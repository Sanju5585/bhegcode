import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { ICON_TYPE, LaunchDialogService } from '@spartacus/storefront';

@Component({
  standalone: false,
  selector: 'ds-add-accessories-dialog',
  templateUrl: './add-accessories-dialog.html',
  styleUrls: ['./add-accessories-dialog.scss'],
})
export class AddAccessoriesDialogComponent implements OnInit {
  iconTypes = ICON_TYPE;

  @ViewChild('dialog', { read: ElementRef })
  dialog: ElementRef;
  availableAccessories: any[];
  selectedAccessories: any[] = [];
  reason: string;

  @ViewChildren('productSelectCB') selectionCheckboxes: QueryList<any>;

  constructor(
    protected launchDialogService: LaunchDialogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.launchDialogService.data$.subscribe((data) => {
      this.availableAccessories = data?.availableAccessories;
    });
  }

  closeModal(reason?: any): void {
    this.reason = reason;
    if (reason != 'close') {
      this.launchDialogService.closeDialog(this.selectedAccessories);
    } else {
      this.launchDialogService.closeDialog(reason);
    }
  }

  onAccProductClick(evt?, product?) {
    const checkValue = evt?.target.checked;
    if (checkValue) {
      this.selectedAccessories.push(product);
    } else {
      this.selectedAccessories = this.selectedAccessories?.filter(
        (item) => item.code !== product.code
      );
    }
  }

  onAccProductLabelClick(product) {
    this.selectionCheckboxes.toArray().filter((element) => {
      if (element.nativeElement.value == product.code) {
        element.nativeElement.checked = !element.nativeElement.checked;
        element.nativeElement.isChecked = !element.nativeElement.isChecked;
        element.nativeElement.click(element, product);
      }
    });
  }
}
