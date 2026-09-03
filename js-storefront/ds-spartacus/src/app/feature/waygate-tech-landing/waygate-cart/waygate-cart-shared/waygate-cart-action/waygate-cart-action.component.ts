import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { Actions, ofType } from '@ngrx/effects';
import { LaunchDialogService } from '@spartacus/storefront';
import { saveAs } from 'file-saver';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { CustomerAccountService } from '../../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../../core/dialog/dialog.config';
import { AllProductLine } from '../../../../../shared/enums/availableProductList.enum';
import { SharedCartService } from '../../../../cart/cart-shared/shared-cart.service';
import { CartType } from '../../../../../shared/models/cartType.models';
import { ApiService } from '../../../../../core/http/api.service';

export enum SmallLargeDevice {
  SMALL_DEVICES = 'smaller-device',
  LARGER_DEVICES = 'large-device',
}
@Component({
  standalone: false,
  selector: 'app-waygate-cart-action',
  templateUrl: './waygate-cart-action.component.html',
  styleUrls: ['./waygate-cart-action.component.scss'],
})
export class WaygateCartActionComponent implements OnInit {
  userId;
  cartId$: Observable<string> = this.activeCartFacade.getActiveCartId();
  cartId: string;

  headerMenuOpened: boolean = false;
  @Input()
  userType = 'current';

  @Input()
  cart$: Observable<any>;

  @Output()
  scrollToEntry: EventEmitter<any> = new EventEmitter();

  @Output()
  updateCart: EventEmitter<any> = new EventEmitter();

  @Output() isPartialShipping: EventEmitter<any> = new EventEmitter();
  @Input() earlyShipment: boolean;
  cart;
  activeCartSubscription: Subscription;
  isPartialShipment: boolean = false;
  productLine: string;
  productLines = AllProductLine;
  isShipmentSelectionDisabled: boolean = false;
  disableCheckboxItem: boolean = false;

  constructor(
    private actions$: Actions,
    private cRef: ChangeDetectorRef,
    private multiCartFacade: MultiCartFacade,
    private activeCartFacade: ActiveCartFacade,
    private sharedCartService: SharedCartService,
    private launchDialogService: LaunchDialogService,
    private globalMessageService: GlobalMessageService,
    private custAccService: CustomerAccountService,
    private translate: TranslationService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.sharedCartService.earlyShipmentCheckboxState.subscribe((res) => {
      if (res) {
        this.disableCheckboxItem = res;
        this.disableCheckbox();
      }
    });
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.cart$.subscribe((res) => {
      this.cart = res;

      if (this.cart?.cartType === CartType.Typ1) {
      this.earlyShipment = true;
      this.disableCheckboxItem = true;
//       if (this.cartId){
//       this.sharedCartService.onEarlyShipmentService(true, this.cartId);
// }
      }


      this.isShipmentSelectionDisabled = this.cart?.entries?.length === 1;
      this.isPartialShipment = !this.cart.isShipCompleteOrder;
    });
    this.activeCartSubscription = this.cartId$.subscribe(
      (success) => {
        if (success) {
          this.cartId = success;
        }
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );

    this.sharedCartService.isShipmentPrefernce$.subscribe(
      (shipmentPrefernce) => {
        if (shipmentPrefernce) {
          this.isPartialShipment = shipmentPrefernce;
        }
      }
    );
    this.sharedCartService.setCheckAvailabilityFlag([], true);
  }

  handleChange(event) {
    if (event.target.value == "'Partial'") {
      this.isPartialShipment = true;
      this.sharedCartService.updateisShipmentPrefernce(this.isPartialShipment);
      const Obj = {
        endCustomerNumber: null,
        guestConfirmEmail: null,
        guestEmail: null,
        isEndCustomerChanged: false,
        shipmentMethod: false,
      };
      this.sharedCartService
        .updateShipmentType(this.cartId, Obj)
        .subscribe((res) => {
          this.multiCartFacade.loadCart({
            cartId: this.cartId,
            userId: this.userType,
            extraData: {
              active: true,
            },
          });
          this.actions$
            .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
            .pipe(take(1))
            .subscribe(
              (r) => {
                this.updateCart.emit(true);
                this.cRef.detectChanges();
              },
              (error) => {
                this.globalMessageService.add(
                  error,
                  GlobalMessageType.MSG_TYPE_ERROR,
                  5000
                );
                window.scrollTo(0, 0);
              }
            );
        });
    } else {
      this.isPartialShipment = false;
      this.sharedCartService.updateisShipmentPrefernce(this.isPartialShipment);
      this.openShipmentDialog(event);
    }
  }
  openShipmentDialog(event) {
    const componentdata = {};

    const completeOrderDialog = this.launchDialogService.openDialog(
      DS_DIALOG.COMPLETE_ORDER,
      undefined,
      undefined,
      componentdata
    );
    if (completeOrderDialog) {
      completeOrderDialog.pipe(take(1)).subscribe((value) => {});
      this.launchDialogService.dialogClose.subscribe((value) => {
        if (value != undefined) {
          if (value == 'confirm-complete-order') {
            this.confirmShipment();
          } else if (value == 'close-complete-order') {
            const Obj = {
              endCustomerNumber: null,
              guestConfirmEmail: null,
              guestEmail: null,
              isEndCustomerChanged: false,
              shipmentMethod: false,
            };
            this.isPartialShipment = true;
            this.sharedCartService.updateisShipmentPrefernce(
              this.isPartialShipment
            );
            this.sharedCartService
              .updateShipmentType(this.cartId, Obj)
              .subscribe((res) => {
                this.multiCartFacade.loadCart({
                  cartId: this.cartId,
                  userId: this.userType,
                  extraData: {
                    active: true,
                  },
                });
                this.actions$
                  .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
                  .pipe(take(1))
                  .subscribe(
                    (r) => {
                      this.updateCart.emit(true);
                      this.cRef.detectChanges();
                    },
                    (error) => {
                      this.globalMessageService.add(
                        error,
                        GlobalMessageType.MSG_TYPE_ERROR,
                        5000
                      );
                      window.scrollTo(0, 0);
                    }
                  );
                // this.sharedCartService.updateisShipmentPrefernce(false);
                // this.cRef.detectChanges();
              });
          }
        }
        this.cRef.detectChanges();
      });
    }
  }
  confirmShipment() {
    const Obj = {
      endCustomerNumber: null,
      guestConfirmEmail: null,
      guestEmail: null,
      isEndCustomerChanged: false,
      shipmentMethod: true,
    };
    this.isPartialShipment = false;
    this.sharedCartService
      .updateShipmentType(this.cartId, Obj)
      .subscribe((res) => {
        this.multiCartFacade.loadCart({
          cartId: this.cartId,
          userId: this.userType,
          extraData: {
            active: true,
          },
        });
        this.actions$
          .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
          .pipe(take(1))
          .subscribe(
            (r) => {
              this.updateCart.emit(true);
              this.isPartialShipping.emit(this.isPartialShipment);
              this.cRef.detectChanges();
            },
            (error) => {
              this.globalMessageService.add(
                error,
                GlobalMessageType.MSG_TYPE_ERROR,
                5000
              );
              window.scrollTo(0, 0);
            }
          );
      });
  }
  printPage(meadiaDevice) {
    if (meadiaDevice === SmallLargeDevice.SMALL_DEVICES)
      this.headerMenuSelected();
    window.print();
  }
  downloadCart(meadiaDevice) {
    if (meadiaDevice === SmallLargeDevice.SMALL_DEVICES)
      this.headerMenuSelected();
    this.sharedCartService.downloadCart(this.cartId).subscribe((res) => {
      let fileName = this.cartId;
      const blob = new Blob([res], { type: 'application/vnd.ms.excel' });
      const file = new File([blob], fileName + '.xls', {
        type: 'application/vnd.ms.excel',
      });
      saveAs(file);
    });
  }

  generateBudgetaryPDF() {
    const d = new Date(Date.now());
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    const fileName = `${this.cart?.saleaAreaID?.split('_')[0]}_${d.toDateString()}_${hours}-${minutes}-${seconds}`;
    const cartID = this.cart?.code;
    this.sharedCartService.getBudgetaryPDF(fileName, cartID).subscribe({
      next: (response: Blob) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        saveAs(blob, `${fileName}.pdf`);
      },
      error: (err) => {
        console.error('PDF download failed', err);
      },
    });
  }
  generateBudgetaryExcel() {
    const d = new Date(Date.now());
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    const fileName = `${this.cart?.saleaAreaID?.split('_')[0]}_${d.toDateString()}_${hours}-${minutes}-${seconds}`;
    const cartID = this.cart?.code;
    this.sharedCartService.getBudgetaryExcel(fileName, cartID).subscribe({
      next: (response: Blob) => {
        //this.downloadFile(response, `${fileName}.xlsx`);
        const blob = new Blob([response], { type: 'application/pdf' });
        saveAs(blob, `${fileName}.xlsx`);
      },
      error: (err) => {
        console.error('Excel download failed', err);
      },
    });
  }

  // Hide early shipment for panametrics and film orders
  showEarlyShipment(cartType: CartType): boolean {
    return (
      this.productLine != AllProductLine.panametrics
      // cartType != CartType.Typ1
    );
  }

  onEarlyShipmentChange(ev) {
    const checked: boolean = ev.target.checked;
    this.sharedCartService.onEarlyShipmentService(checked, this.cartId);
  }

  openSaveCartModal(meadiaDevice) {
    if (meadiaDevice === SmallLargeDevice.SMALL_DEVICES)
      this.headerMenuSelected();
    const componentData = {
      currentCart: this.cart,
    };
    const saveCartModalRef = this.launchDialogService.openDialog(
      DS_DIALOG.SAVE_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );
    saveCartModalRef.pipe(take(1)).subscribe((value) => {});
  }

  disableCheckbox() {
    this.earlyShipment = false;
  }

  ngOnDestroy(): void {
    if (this.activeCartSubscription) {
      this.activeCartSubscription.unsubscribe();
    }
  }
  headerMenuSelected() {
    this.headerMenuOpened = !this.headerMenuOpened;
  }
}
