import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OCC_USER_ID_CURRENT } from '@spartacus/core';
import { switchMap, take } from 'rxjs/operators';
import { RmaService } from '../../rma-services/rma.service';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { RmaEntry } from '../../../../shared/models/rma/rma.model';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';

@Component({
  standalone: false,
  selector: 'ds-rma-cart-product',
  templateUrl: './rma-cart-product.component.html',
  styleUrls: ['./rma-cart-product.component.scss'],
})
export class RmaCartProductComponent implements OnInit {
  @Input()
  product: any;

  isexpandProductDesc = false;
  selectedLocation;
  productLine: string;

  @Input()
  productSelected: any = false;

  @Input()
  hazardStatus;

  @Input()
  showHeader;

  @Input()
  accessories = [];

  @Output()
  checkedProduct: EventEmitter<any> = new EventEmitter();
  // productForm: FormGroup;
  data: any;

  cartId$ = this.activeCartFacade.getActiveCartId();
  cartId: string;
  showSpinner: boolean;

  selectedSite = '';

  constructor(
    private rmaService: RmaService,
    private multiCartFacade: MultiCartFacade,
    private router: Router,
    private customerAccService: CustomerAccountService,
    private activeCartFacade: ActiveCartFacade
  ) {
    /* this.productForm = new FormGroup({
      location: new FormControl(null),
    }); */
  }

  ngOnInit(): void {
    this.selectedLocation = this.product.availabilityDetails?.find(
      (location) => location.isDefaultPlant == true
    );
    // this.productForm.controls.location.setValue(this.selectedLocation?.plant);
    this.cartId$.subscribe((cartId) => {
      this.cartId = cartId;
    });
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.selectedSite = this.getDefaultAvailabilitySite();
  }

  changeLocation(event) {
    this.selectedLocation = event;
    // this.productForm.controls.location.setValue(this.selectedLocation.plant);
  }

  checkProduct(event) {
    this.productSelected = event.target.checked;
    this.checkedProduct.emit({
      status: this.productSelected,
      entry: this.product,
    });
  }

  cloneRma() {
    this.showSpinner = true;
    let clonedEntryNum;
    this.rmaService
      .cloneRma(OCC_USER_ID_CURRENT, this.product.cartEntryNumber)
      .pipe(
        take(1),
        switchMap((cloned) => {
          clonedEntryNum = cloned;
          return this.rmaService.editRma(OCC_USER_ID_CURRENT, cloned);
        })
      )
      .subscribe((rmaEntry: RmaEntry) => {
        rmaEntry = { ...rmaEntry, entryNumber: clonedEntryNum };
        this.rmaService.sendRmaEntry(rmaEntry);
        this.loadCart();
        this.router.navigate([`/${this.productLine}/returns/cart`]);
      });
  }
  loadCart() {
    this.multiCartFacade.loadCart({
      userId: OCC_USER_ID_CURRENT,
      cartId: this.cartId,
      extraData: {
        active: true,
      },
    });
  }

  editRma() {
    this.showSpinner = true;
    this.rmaService
      .editRma(OCC_USER_ID_CURRENT, this.product.cartEntryNumber)
      .pipe(take(1))
      .subscribe(
        (rmaEntry: RmaEntry) => {
          rmaEntry = { ...rmaEntry, entryNumber: this.product.cartEntryNumber };
          rmaEntry.problemDescription = this.decodeHtml(rmaEntry.problemDescription);
          this.rmaService.sendRmaEntry(rmaEntry);
          this.showSpinner = false;
          this.router.navigate(['rma-form']);
        },
        (error) => {
          this.showSpinner = false;
        }
      );
  }

  onAvailabilitySiteChange(ev, pr) {
    let rmaEntry: RmaEntry = {
      partNumber: pr.product.code,
      entryNumber: pr.cartEntryNumber,
      availableSitesList: pr.availableSitesList,
      returnToSiteId: ev.siteId,
    };
    this.rmaService
      .createRmaEntry(OCC_USER_ID_CURRENT, rmaEntry)
      .subscribe((success) => {
        if (success && success >= 0) {
          /* this.rmaEntry = {
            ...this.rmaEntry,
            entryNumber: success,
          }; */
          /* this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
            if (cartId) {
              this.multiCartFacade.reloadCart(cartId, { active: true });
            }
          }); */
          this.multiCartFacade.reloadCart(this.cartId, { active: true });
        } else {
          console.error('Create RMA failed');
        }
      });
  }
   decodeHtml(html: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  getDefaultAvailabilitySite() {
    const defaultSiteId = this.product.returnLocationId;
    for (const el of this.product.availableSitesList) {
      if (el.siteId == defaultSiteId) {
        return el.siteName + ' - ' + el.siteId;
      }
    }
    return '';
  }
}
