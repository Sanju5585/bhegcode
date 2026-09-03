import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SecurityContext,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_CURRENT,
  TranslationService,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { RestoreCartModel } from '../saved-cart.model';
import { SavedCartService } from '../service/saved-cart.service';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { Actions, ofType } from '@ngrx/effects';
import { CartActions } from '@spartacus/cart/base/core';
import { take } from 'rxjs';
import { CommerceTypes } from '../../../shared/models/commerceTypes.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: false,
  selector: 'app-view-sales-area',
  templateUrl: './view-sales-area.component.html',
  styleUrls: ['./view-sales-area.component.scss'],
})
export class ViewSalesAreaComponent implements OnInit {
  @Output() resetData: EventEmitter<any> = new EventEmitter();
  @ViewChild('mymodal') mymodal;
  cartId: any;
  salesAreaName: string;
  salesAreaId: string;
  cartName: string;
  cartModel: RestoreCartModel;
  currentSalesArea: string;
  currentSalesAreaId: string;
  currentAccount;
  currentUid;
  type;
  msgFlag: boolean = false;
  activeCart: number = 0;
  exist: boolean = false;
  activeCartId: any;
  commerceType: String;
  productLine: String;
  newMessage: string;
  constructor(
    private launchDialogService: LaunchDialogService,
    private savedCartService: SavedCartService,
    private router: Router,
    private customerAccountService: CustomerAccountService,
    private activeService: ActiveCartFacade,
    private cd: ChangeDetectorRef,
    private multiCartFacade: MultiCartFacade,
    private actions$: Actions,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    public sanitizer: DomSanitizer
  ) {
    this.cartModel = new RestoreCartModel();
  }

  ngOnInit(): void {
    this.activeService.getEntries().subscribe((res) => {
      this.activeCart = res?.length;
    });
    this.customerAccountService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.savedCartService.getValidation().subscribe((res) => {
      if (res?.data) {
        this.cartId = res?.data.code;
        this.cartName = res?.data.name;
        this.salesAreaName = res.data?.saleaAreaName;
        this.salesAreaId = res.data?.saleaAreaID;
        this.type = res?.type;
        this.commerceType = res?.commerceType;
      }
    });

    this.activeService.getActiveCartId().subscribe((cartId) => {
      this.activeCartId = cartId;
    });

    this.activeService.getActive().subscribe({
      next: (activeCart: any) => {
        const activeCartCommercetype: any = activeCart.commerceType;
        const activeText = (text) =>
          text == 'BUY' ? 'order' : text == 'QUOTE' ? 'quote' : 'return';
        if (this.activeCart > 0) {
          this.newMessage =
            this.getTranslatedText(`savedCart.currentlyACtiveCart`) +
            activeText(activeCartCommercetype) +
            ` ${this.getTranslatedText(`savedCart.cartRestoreYour`)} ${
            activeText(this.commerceType).charAt(0).toUpperCase() +
            activeText(this.commerceType).slice(1)
          } ${this.getTranslatedText(`savedCart.needToSaveCurrent`)} ${
              activeText(activeCartCommercetype).charAt(0).toUpperCase() +
              activeText(activeCartCommercetype).slice(1)
            } ${this.getTranslatedText(`savedCart.cartYouSaved`)} ${
            activeText(activeCartCommercetype).charAt(0).toUpperCase() +
            activeText(activeCartCommercetype).slice(1)
          } ${this.getTranslatedText(`savedCart.cartWillBeAvailable`)}`;
        }
      },
    });

    this.getCurrentSalesArea();
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  getCurrentSalesArea() {
    this.customerAccountService.getCurrentCustomerAccount().subscribe((res) => {
      if (res) {
        this.currentAccount = res?.name;
        this.currentUid = res?.uid;
        this.currentSalesArea = res?.selectedSalesArea?.salesAreaName;
        this.currentSalesAreaId = res?.selectedSalesArea?.salesAreaId;
        if (
          this.currentSalesArea !== this.salesAreaName &&
          this.currentSalesAreaId !== this.salesAreaId
        ) {
          this.msgFlag = true;
        }
      } else {
        this.msgFlag = false;
        this.currentSalesArea = '';
        this.currentSalesAreaId = '';
      }
    });
  }

  restoreCart() {
    this.changeSalesArea();
    this.cartModel.cartName = this.cartName;
    this.cartModel.keepRestoredCart = false;
    this.cartModel.preventSaveActiveCart = false;
    this.savedCartService
      .restorCart(this.cartId, this.cartModel)
      .subscribe((res) => {
        this.closeModal();
        this.multiCartFacade.loadCart({
          cartId: this.cartId,
          userId: OCC_USER_ID_CURRENT,
          extraData: {
            active: true,
          },
        });
        this.actions$
          .pipe(ofType(CartActions.LOAD_CART_SUCCESS))
          .pipe(take(1))
          .subscribe(
            (r) => {
              this.cd.detectChanges();
              this.launchDialogService.closeDialog('restored');
              if (this.type == 'detail') {
                if (this.commerceType == 'RETURNS') {
                  this.router.navigate([`/${this.productLine}/returns/cart`]);
                } else if (this.commerceType == CommerceTypes.QUOTE) {
                  window.location.href = `${this.productLine}/quote/cart`;
                } else {
                  window.location.href = `${this.productLine}/cart`;
                }
              } else {
                this.savedCartService.setValidation({
                  data: null,
                  type: 'normal',
                });
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
      });
  }

  changeSalesArea() {
    if (
      this.currentSalesArea !== this.salesAreaName &&
      this.currentSalesAreaId !== this.salesAreaId
    ) {
      this.customerAccountService
        .updateSalesArea(this.salesAreaId, this.currentUid)
        .subscribe((res: any) => {
          this.cd.detectChanges();
          this.customerAccountService.updateAvaiableProductLine(
            res?.visibleCategories || []
          );
          this.customerAccountService.refreshPostCustomAccSwitch(
            this.salesAreaId.split('_')[1]
          );
        });
    }
  }

  checkCartBeforeSave() {
    this.exist = false;
    let param = {
      page: 0,
      saveCartName: this.cartName,
      show: 'Page',
    };
    if (this.activeCart > 0) {
      this.savedCartService
        .checkExistingName(param, this.activeCartId)
        .subscribe((res) => {
          if (res == true) {
            this.exist = true;
          }
          if (res == false) {
            this.restoreCart();
          }
        });
    } else {
      this.restoreCart();
    }
  }

  onChange(e, type) {
    e.target.value = this.sanitizer.sanitize(
      SecurityContext.HTML,
      e.target.value
    );
    if (type === 'cart') {
      this.cartName = e.target.value;
    }
  }

  closeModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }

  ngOnDestroy() {
    this.savedCartService.setValidation(null);
  }
}
