import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AuthService,
  ProductScope,
  ProductService,
  GlobalMessageType,
  GlobalMessageService,
  TranslationService,
  WindowRef,
} from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Observable, ReplaySubject, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MyFavoritesService } from '../../my-favorites/my-favorites.service';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import {
  BuyActions,
  ReturnActions,
} from '../../../core/product-catalog/model/product-catelog.model';
import { GtmEvents, ItemListTypeEnum } from '../../../shared/enums/gtm.enum';
import { GTMDataLayer } from '../../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';
import { ProductCatelogService } from '../../../core/product-catalog/services/product-catelog.service';
import { ProductReturnService } from '../../../core/product-catalog/services/product-return.service';
import { ApiService } from '../../../core/http/api.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { SetAccessoriesInStore } from '../../../core/product-catalog/store/actions/product-categories.action';
import { ProductCategoriesService } from '../../../core/product-catalog/services/product-categories.service';
import { environment } from '../../../../environments/environment';
import { AddressModelService } from '../../../shared/components/address-model/address-model.service';

@Component({
  standalone: false,
  selector: 'app-waygate-product-details',
  templateUrl: './waygate-product-details.component.html',
  styleUrls: ['./waygate-product-details.component.scss'],
})
export class WaygateProductDetailsComponent implements OnInit, AfterViewInit {
  maxQuantity: number = 9999;
  quantity: number = 1;
  quantityForm = new FormGroup({
    quantity: new FormControl(1),
  });

  isEcaUpdated = false;
  accessories$ = new ReplaySubject<any>(1);
  configurableFlag$: Observable<boolean>;
  user$: Observable<any>;
  params$: Observable<any>;
  queryParams$: Observable<any>;
  product$: Observable<any>;
  breadcrumbs = [];
  product: any;
  isLoggedIn: boolean;
  userType: string;
  returnActions = ReturnActions;
  isPriceAvailable: boolean;
  currentBuyAction: any;
  buyActions = BuyActions;
  currentReturnAction: any;
  productCode: string;
  leadTime: string;
  inStock: boolean;
  currentGuestAction: any;
  favStatus: boolean = false;
  breakUp = false;
  breakUpMenu = false;
  productImages: any;
  selectedImg: any;
  selectedGalleryImgIdx: number;
  productLine: string;
  isProductNotAdded = false;
  relProducts: any[] = [];
  form!: FormGroup;
  optionalAccessoriesForm!: FormArray;
  mandatoryAccessories: any = [];
  configuredProductlist: any = [];
  imgUrl: string;
  showConfigureButton: boolean = false;
  mainProductConfigurable: boolean = false;
  mandatoryAccessoriesConfigurable: boolean = false;
  // configurableFlag: boolean = false;
  constructor(
    private productService: ProductService,
    private auth: AuthService,
    private userAccountFacade: UserAccountFacade,
    private route: ActivatedRoute,
    private productCatelogService: ProductCatelogService,
    private currentProductService: CurrentProductService,
    private myFavouritesService: MyFavoritesService,
    private globalMessageService: GlobalMessageService,
    private cd: ChangeDetectorRef,
    private custAccService: CustomerAccountService,
    private gtmService: GoogleTagManagerService,
    private returnProdService: ProductReturnService,
    private router: Router,
    private apiService: ApiService,
    private translate: TranslationService,
    private fb: FormBuilder,
    protected activeCartFacade: ActiveCartFacade,
    private cdr: ChangeDetectorRef,
    protected winRef: WindowRef,
    private store: Store,
    private productCategoriesService: ProductCategoriesService,
    private addressModelService: AddressModelService
  ) {}

  ngOnInit(): void {
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.user$ = this.auth.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userAccountFacade.get();
        } else {
          return of(undefined);
        }
      })
    );
    this.imgUrl = environment.occBaseUrl;
    this.optionalAccessoriesForm = this.fb.array([]);
    this.form = this.fb.group({
      optionalAccessories: this.optionalAccessoriesForm,
    });
    this.auth.isUserLoggedIn().subscribe((success) => {
      if (success) {
        this.isLoggedIn = true;
        this.userType = 'current';
      } else {
        this.isLoggedIn = false;
        this.userType = 'anonymous';
      }
    });

    this.product$ = this.currentProductService.getProduct(ProductScope.DETAILS);

    this.product$.subscribe((response) => {
      if (response !== null && response !== undefined) {
        this.product = response;
      }
    });
    
this.addressModelService.getUpdatedProduct().subscribe((product) => {

  if (product) {
    this.product = { ...product };
    this.isEcaUpdated = true;

    this.cd.detectChanges();
  }
});


    this.route.params.subscribe((data) => {
      this.optionalAccessoriesForm.clear();
      this.mainProductConfigurable = false;
      this.mandatoryAccessoriesConfigurable = false;
      this.showConfigureButton = false;
      this.getAccessories(data['pCode']).subscribe((response) => {
        this.accessories$.next(response);
        this.cdr.detectChanges();
      });
    });
    this.configurableFlag$ = this.accessories$.pipe(
      map((accessories) => {
        return accessories.references.some(
          (a) => !!a?.target?.configurable === true
        );
      })
    );
    this.accessories$.subscribe((data) => {
      this.optionalAccessoriesForm.clear();
      this.mandatoryAccessories = [];
      data.references.forEach((item) => {
        const a = {
          name: item.target.name,
          code: item.target.code,
          price: item.target.price.formattedValue,
          description: item.target.description,
          selected: false,
          count: 0,
          configurable: item.target.configurable,
          imageUrl: item.target.mediaurl
            ? this.imgUrl + item.target.mediaurl
            : null,
        };
        if (a.configurable) {
          this.configuredProductlist.push(a.code);
          // this.configurableFlag = true;
          this.cdr.detectChanges();
        }
        if (item.referenceType === 'OTHERS')
          this.optionalAccessoriesForm.push(this.createAccessoryGroup(a));
        else {
          if (item.target.configurable === true)
            this.mandatoryAccessoriesConfigurable = true;
          this.mandatoryAccessories.push(a);
        }
      });
    });

    this.params$ = this.route.params;
    this.queryParams$ = this.route.queryParams;

    combineLatest(this.user$, this.queryParams$, this.params$).subscribe(
      (data) => {
        this.product = {};
        this.productService
          .get(data[2]?.pCode, ProductScope.DETAILS)
          .subscribe((product: any) => {
            this.breadcrumbs = [];
            if (!this.isEcaUpdated) {
                  this.product = product;
                }


            // For calling related products
            if (this.product?.code)
              this.getRelatedProducts(this.userType, this.product?.code);

            if (
              product !== null &&
              product !== undefined &&
              !product?.errorCode
            ) {
              const viewItemDataLayer: GTMDataLayer = {
                event: GtmEvents.ViewItem,
                store: this.gtmService.getItemBrand(),
                ecommerce: {
                  currency: this.product?.listPrice?.currencyIso || '',
                  value: this.product?.yourPrice?.value || '',
                  items: [
                    {
                      item_id: this.product?.code,
                      item_name: this.product?.name,
                      index: '',
                      item_brand: this.gtmService.getItemBrand(),
                      item_category: this.product?.breadCrumbs[0]?.name || '',
                      item_category2: this.product?.breadCrumbs[1]?.name || '',
                      item_category3: this.product?.breadCrumbs[2]?.name || '',
                      item_category4: this.product?.breadCrumbs[3]?.name || '',
                      item_category5: this.product?.breadCrumbs[4]?.name || '',
                      item_list_id: ItemListTypeEnum.ProductDetail,
                      item_list_name: ItemListTypeEnum.ProductDetail,
                      price: this.product?.yourPrice?.value || '',
                    },
                  ],
                },
              };
              if (
                this.product &&
                this.product?.estShipData &&
                this.product?.estShipData[0]?.stockQty
              ) {
                viewItemDataLayer.ecommerce.items[0].quantity = Number(
                  this.product?.estShipData[0]?.stockQty
                );
              }
              this.productImages = product.images;
              this.selectedImg = product?.images?.GALLERY
                ? product?.images?.GALLERY[0]
                : null;
              this.selectedGalleryImgIdx = 0;
              if (product?.price?.value == 0) {
                this.isPriceAvailable = false;
              }
              this.currentBuyAction =
                this.productCatelogService.getBuyAction(product);

              this.currentReturnAction =
                this.productCatelogService.getReturnsAction(product);
              this.currentGuestAction =
                this.productCatelogService.getAnonymousActions(this.product);
              this.productCode = product?.code;
              this.leadTime = product?.leadTime;
              const defaultPlant = this.product?.plantAvailableAt?.find(
                (plant) => plant.defaultPlant
              );

              this.gtmService.sendEvent(viewItemDataLayer);
              if (defaultPlant) {
                this.inStock = defaultPlant.stockAvailable >= 1;
              }
            }
            this.breadcrumbs = product?.breadCrumbs?.map(
              (crumb, index, array) => {
                const params = crumb.url.split('/');
                let url;
                if (index === array.length - 1) {
                  url = `/${this.productLine}/product/${
                    this.productCode
                  }/${encodeURIComponent(this.product?.name)}`;
                } else {
                  url = `/${this.productLine}/categories/${params[3]}/${params[1]}`;
                }
                return {
                  name: crumb.name,
                  url: url,
                };
              }
            );
          });
      }
    );
    window.scrollTo(0, 0);
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  navigateTo() {
    let vclist = [];
    let nonvclist = [];
    this.configuredProductlist = [];
    if (this.product.configurable) {
      this.configuredProductlist.push(this.productCode);
    }
    for (let i = 0; i < this.optionalAccessoriesForm.value.length; i++) {
      if (
        this.optionalAccessoriesForm.value[i].selected === true &&
        this.optionalAccessoriesForm.value[i].count > 0 &&
        this.optionalAccessoriesForm.value[i].configurable === true
      ) {
        let a = {
          code: this.optionalAccessoriesForm.value[i].code,
          name: this.optionalAccessoriesForm.value[i].name,
          quantity: this.optionalAccessoriesForm.value[i].count,
          configurable: this.optionalAccessoriesForm.value[i].configurable,
          configId: '',
          complete: false,
        };
        this.configuredProductlist.push(
          this.optionalAccessoriesForm.value[i].code
        );
        vclist.push(a);
      }
    }

    for (let i = 0; i < this.mandatoryAccessories.length; i++) {
      if (this.mandatoryAccessories[i].configurable === true) {
        let a = {
          code: this.mandatoryAccessories[i].code,
          name: this.mandatoryAccessories[i].name,
          quantity: 1,
          configurable: this.mandatoryAccessories[i].configurable,
          configId: '',
          complete: false,
        };
        this.configuredProductlist.push(this.mandatoryAccessories[i].code);
        vclist.push(a);
      }
    }

    for (let i = 0; i < this.optionalAccessoriesForm.value.length; i++) {
      if (
        this.optionalAccessoriesForm.value[i].selected === true &&
        this.optionalAccessoriesForm.value[i].count > 0 &&
        this.optionalAccessoriesForm.value[i].configurable !== true
      ) {
        let a = {
          code: this.optionalAccessoriesForm.value[i].code,
          name: this.optionalAccessoriesForm.value[i].name,
          quantity: this.optionalAccessoriesForm.value[i].count,
          configurable: this.optionalAccessoriesForm.value[i].configurable,
          configId: '',
          complete: false,
        };
        nonvclist.push(a);
      }
    }

    for (let i = 0; i < this.mandatoryAccessories.length; i++) {
      if (this.mandatoryAccessories[i].configurable !== true) {
        let a = {
          code: this.mandatoryAccessories[i].code,
          name: this.mandatoryAccessories[i].name,
          quantity: 1,
          configurable: this.mandatoryAccessories[i].configurable,
          configId: '',
          complete: false,
        };
        nonvclist.push(a);
      }
    }

    const configData = {
      mainProduct: {
        code: this.productCode,
        configurable: this.product.configurable,
        name: this.product.name,
        ...(this.product.configurable && { configId: '', complete: false }),
      },
      vclist: vclist,
      nonvclist: nonvclist,
    };

    localStorage.setItem('configuredData', JSON.stringify(configData));

    this.store.dispatch(new SetAccessoriesInStore(configData));

    if (configData.mainProduct.configurable) {
      this.router.navigate([
        '/configure/vc/product/entityKey/',
        this.productCode,
      ]);
    } else {
      this.router.navigate([
        '/configure/vc/product/entityKey/',
        this.configuredProductlist[this.configuredProductlist.length - 1],
      ]);
    }
  }
  createAccessoryGroup(item: any): FormGroup {
    const group = this.fb.group({
      name: item.name,
      code: item.code,
      price: item.price,
      description: item.description,
      selected: false,
      count: 1,
      configurable: item.configurable,
      imageUrl: item.imageUrl,
    });

    group.valueChanges.subscribe(() => {
      this.checkIfAnyConfigurableSelected();
    });
    return group;
  }
  checkIfAnyConfigurableSelected() {
    const optionalConfigurableSelected =
      this.optionalAccessoriesForm.controls.some(
        (control) =>
          control.get('selected')?.value && control.get('configurable')?.value
      );
    this.showConfigureButton =
      this.product.configurable ||
      this.mandatoryAccessoriesConfigurable ||
      optionalConfigurableSelected;
  }
  increment(index: number) {
    const group = this.optionalAccessoriesForm.at(index);
    group.patchValue({ count: group.value.count + 1 });
  }
  decrement(index: number) {
    const group = this.optionalAccessoriesForm.at(index);
    if (group.value.count > 0) {
      group.patchValue({ count: group.value.count - 1 });
    }
  }

  getLeadTime(lead: string): number {
    return Number(lead);
  }
  getAccessories(productCode: string) {
    let urlParams = [
      'users',
      this.userType,
      'products',
      'accessoriesReferences',
    ];
    let url = this.apiService.constructUrl(urlParams);
    let params = ['MANDATORY', 'OTHERS'];
    return this.apiService.getData(url, {
      productCode: productCode,
      referenceType: params.join(','),
    });
  }
  onFavoriteClick(product) {
    if (this.favStatus == false) {
      this.myFavouritesService
        .addtowhishlist({ productCodes: product.code })
        .subscribe((success) => {
          this.globalMessageService.add(
            this.getTranslatedText('waygate.productAddedFav'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION
          );
          this.favStatus = true;
          this.cd.detectChanges();
        });
    } else {
      this.myFavouritesService
        .removeFromWishlist([product.code])
        .subscribe((success) => {
          this.globalMessageService.add(
            this.getTranslatedText('waygate.productRemovedFav'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION
          );
          this.favStatus = false;
          this.cd.detectChanges();
        });
    }
  }

  closeMenu(event) {
    this.breakUp = false;
  }

  togglePriceBreakup() {
    this.breakUpMenu = !this.breakUpMenu;
  }

  thumbnailImgClicked(gallaryImg, selectedGalleryImgIdx) {
    this.selectedImg = gallaryImg;
    this.selectedGalleryImgIdx = selectedGalleryImgIdx;
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

  isProductNotAddedToCart(isNotAdded: boolean) {
    this.isProductNotAdded = isNotAdded;
  }

  onCloseClick() {
    this.isProductNotAdded = false;
  }
  returnProduct() {
    const updatedProduct = {
      ...this.product,
      similar: false,
    };
    this.returnProdService.selectRmaProduct(updatedProduct);
    this.router.navigate(['/',this.productLine,'create-rma']);
  }

  /*
    getRelatedProducts will return related products,
    fields and referenceType will be static with 'Default' and 'SIMILAR' respectively
   */
  getRelatedProducts(user: string, productCode: string): void {
    const apiParams: {
      fields: string;
      productCode: string;
      referenceType: string;
    } = {
      fields: 'FULL',
      productCode: productCode,
      referenceType: 'SIMILAR',
    };
    let urlParams = ['users', user, 'products', 'productReferences'];
    let url = this.apiService.constructUrl(urlParams);

    this.apiService.getData(url, apiParams).subscribe({
      next: (data: any) => {
        this.relProducts = data;
      },
      error: (error) => {
        this.relProducts = [];
      },
    });
  }
  addtocartacc() {
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      const addToCartData = {
        mainEntry: {
          quantity: this.quantity,
          product: {
            code: this.productCode,
          },
        },
      };
      let acclist = [];
      for (let i of this.optionalAccessoriesForm.value) {
        if (i.selected === true && i.count > 0) {
          acclist.push({
            quantity: i.count,
            product: {
              code: i.code,
            },
          });
        }
      }
      for (let i of this.mandatoryAccessories) {
        acclist.push({
          quantity: 1,
          product: {
            code: i.code,
          },
        });
      }
      let payload = {
        ...addToCartData,
        accessoryEntries: acclist,
      };
      let urlParams = [
        'users',
        this.userType,
        'carts',
        cartId,
        'accessoryEntries',
      ];
      let url = this.apiService.constructUrl(urlParams);
      this.apiService.postData(url, payload).subscribe((res) => {
        this.winRef.location.href = `/${this.productLine}/cart`;
      });
    });
  }
  increaseQuantity(count: any) {
    this.quantity = count;
  }

  decreaseQuantity(count: any) {
    this.quantity = count;
  }
  quantityAdded(count: any) {
    this.quantity = count;
  }
}
