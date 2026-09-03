import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { RmaService } from '../../../rma/rma-services/rma.service';
import { RmaEntry } from '../../../../shared/models/rma/rma.model';
import { GlobalMessageService, GlobalMessageType, OCC_USER_ID_CURRENT, TranslationService } from '@spartacus/core';
import { switchMap, take } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { LaunchDialogService } from '@spartacus/storefront';

@Component({
  selector: 'app-returns-cart-item',
  standalone: false,
  templateUrl: './returns-cart-item.component.html',
  styleUrl: './returns-cart-item.component.scss'
})
export class ReturnsCartItemComponent {

  @Input()
  product: any;

  isexpandProductDesc = false;
  selectedLocation;

  @Input()
  productSelected: any = false;

  @Input()
  showHeader;

  @Input()
  accessories = [];

  @Output()
  checkedProduct: EventEmitter<any> = new EventEmitter();
  // productForm: FormGroup;
  data: any;
  @Input()
  checkAll: boolean;
 @Input()
  cartId: string;
  showSpinner: boolean;
  @Input() entryNum = 0;
  @Input()
  itemsCountExAccessories;
  selectedSite = ''; 
  selectedProducts = [];
  productLine: string;
  createRMANativationPath: string;
  cartNumber = 0;
  constructor(
    private rmaService: RmaService,
    private multiCartFacade: MultiCartFacade,
    private router: Router,
    private activeCartFacade: ActiveCartFacade,
    private custAccService: CustomerAccountService,
    private globalMessageService: GlobalMessageService,
      private translate: TranslationService,
      private launchDialogService: LaunchDialogService,
  ) {
  }
  ngOnInit() {
    this.cartNumber = this.entryNum++;
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.selectedProducts[0] =this.product;
      this.createRMANativationPath = `/${this.productLine}/create-rma`;
      //this.createRMANativationPath = '/rma-form';
    });
  }
  checkProduct(event) {
    this.productSelected = event.target.checked;
    this.checkedProduct.emit({
      status: this.productSelected,
      entry: this.product,
    });
  }
  openDeleteDialog(){
    const componentData = {
      cartId: this.cartId,
      totalCartItems: this.itemsCountExAccessories,
      selectedProducts: this.deleteSelected(),
      selectedItemsCount: this.selectedProducts.length,
    };
    const rmaCartDeleteDialog = this.launchDialogService.openDialog(
      DS_DIALOG.RETURNS_CART_DELETE_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (rmaCartDeleteDialog) {
      rmaCartDeleteDialog.pipe(take(1)).subscribe((value) => {
        if (value) {
          if (value == 'clearCart' || value?.instance?.reason == 'clearCart') {
            this.clearCartResponse();
          }
          if (value?.instance?.reason != 'close') this.selectedProducts = [];
        }
      });
    }
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  clearCartResponse() {
    this.globalMessageService.add(
      this.getTranslatedText('rma-cart.rmaCartCleared'),
      GlobalMessageType.MSG_TYPE_CONFIRMATION,
      5000
    );
    window.scrollTo(0, 0);
  }
  deleteSelected(cartLength?) {
    let entries = this.selectedProducts.map(
      (product) => product.cartEntryNumber
    );
    let selectedItems = {
      entryNumber: entries.join(','),
    };
    return selectedItems;
  }
  copyItem(){
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
        this.router.navigate([this.createRMANativationPath]);
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
          this.router.navigate([this.createRMANativationPath]);
        },
        (error) => {
          this.showSpinner = false;
        }
      );
  }
  decodeHtml(html: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
}
