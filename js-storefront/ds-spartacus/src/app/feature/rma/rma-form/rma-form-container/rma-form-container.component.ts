import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalMessageService, GlobalMessageType, OCC_USER_ID_CURRENT, TranslationService } from '@spartacus/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { concatMap, switchMap, take } from 'rxjs/operators';
import { RmaService } from '../../rma-services/rma.service';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { ProductCatelogService } from '../../../../core/product-catalog/services/product-catelog.service';
import { ProductReturnService } from '../../../../core/product-catalog/services/product-return.service';
import { ServiceOfferingCategories } from '../../../../core/rma/models/rma-form.models';
import { BreadcrumbService } from '../../../../shared/components/breadcrumb/breadcrumb.service';
import { CommerceTypes } from '../../../../shared/models/commerceTypes.model';
import {
  RmaEntry,
  OTHER_PART_NUMBER,
} from '../../../../shared/models/rma/rma.model';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'ds-rma-form-container',
  templateUrl: './rma-form-container.component.html',
  host: { class: 'RmaFormPageTemplate' },
  styleUrls: ['./rma-form-container.component.scss'],
})
export class RmaFormContainerComponent implements OnInit, OnDestroy {
  private cart$: Observable<any> = this.activeCartFacade
    .getActive()
    .pipe(
      switchMap((cart: any) =>
        of(
          cart?.commerceType === CommerceTypes.RETURNS
            ? cart
            : this.router.navigate(['']) || this.router.navigate([''])
        )
      )
    );
  stepIndex = 0;
  equipmentValidation: boolean = false;
  submitted: boolean;
  serviceOfferingData: any;
  warrentyClaimFlag: boolean = false;
  selectedProduct: any;
  availableAccessories: any;
  rmaEntry: RmaEntry;
  rmaProductSelectionSubscription: Subject<any> = new Subject();
  serviceOfferingTerms;
  newCartSubscription: Subscription;
  // productLine;
  rmaCartLink;
  constructor(
    private rmaService: RmaService,
    private router: Router,
    private activeCartFacade: ActiveCartFacade,
    private launchDialogService: LaunchDialogService,
    private multiCartFacade: MultiCartFacade,
    private returnProdService: ProductReturnService,
    private cdRef: ChangeDetectorRef,
    private translate: TranslationService,
    private breadCrumbService: BreadcrumbService,
    private globalMessageService: GlobalMessageService,
    private productCatService: ProductCatelogService,
    private custAccService: CustomerAccountService,
  ) {}

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('rma-form.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    // Check already selected product (eg.: from catalog pages, mse, etc)
    this.checkRmaProductSelection();

    // Check already filled RmaEntry object (edit & clone scenario)
    this.checkRmaEntryData();
    // this.custAccService.getProductLine().subscribe((productLine) => {
    //   this.productLine = productLine;
    //   this.rmaCartLink = `/${this.productLine}/returns/cart` ;
    // });
  }

  ngOnDestroy() {
    const newRmaEntry = new RmaEntry();
    this.rmaEntryData(newRmaEntry);
    this.rmaService.sendRmaEntry(newRmaEntry);
    this.returnProdService.selectRmaProduct({});
  }

  nextStep(step, next?) {
    this.stepIndex = step;
    if (this.stepIndex > 3) {
      return;
    }

    switch (this.stepIndex) {
      case 0:
        this.stepIndex += 1;
        return;

      case 1:
        !this.checkEquipmentValidation()
          ? ((this.stepIndex += 1), (this.submitted = false))
          : (this.submitted = true);
        return;

      case 2:
        this.checkServiceOfferingValidation()
          ? ((this.submitted = false), this.addToReturnsCart(step))
          : (this.submitted = true);
        return;

      case 3:
        this.createRmaEntry(step);
        return;
    }
  }

  addToReturnsCart(step) {
    const updatedProduct = {};
    this.stepIndex = step;
    this.activeCartFacade
      .getActive()
      .pipe(
        take(1),
        concatMap((activeCart: any) => {
          if (activeCart.entries?.length > 0) {
            if (activeCart?.commerceType !== CommerceTypes.RETURNS) {
              this.openSwitchCartModal(
                activeCart.commerceType,
                CommerceTypes.RETURNS,
                activeCart.code,
                updatedProduct
              );
            } else {
              this.returnProdService.selectRmaProduct(updatedProduct);
              this.createRmaEntry(this.stepIndex);
            }
            return of({ modal: true });
          } else if (activeCart.entries == undefined || activeCart.entries?.length == 0) {
            this.newCartSubscription = this.productCatService
              .createCartWithType(
                OCC_USER_ID_CURRENT,
                CommerceTypes.RETURNS
              ).pipe(take(1))
              .subscribe((res) => {
                this.returnProdService.selectRmaProduct(updatedProduct);
                this.createRmaEntry(this.stepIndex);
              })
            this.globalMessageService.add(
              'Cart Created Successfully',
              GlobalMessageType.MSG_TYPE_CONFIRMATION,
              3000
            );
          } else {
            return this.productCatService.saveCartType(
              activeCart.code,
              CommerceTypes.RETURNS,
              OCC_USER_ID_CURRENT
            );
          }
        })
      )
      .subscribe((val) => {
        if (val === null) {
          this.createRmaEntry(this.stepIndex);
        }
      });
  }

  goToStep(step) {
    switch (step) {
      case 0:
        this.stepIndex = step;
        return;
      case 1:
        this.stepIndex = step;
        return;
      case 2:
        if (!this.checkEquipmentValidation()) {
          this.stepIndex = step;
        }
        return;
      case 3:
        if (this.checkServiceOfferingValidation()) {
          this.stepIndex = step;
        }
        return;
    }
  }

  private checkEquipmentValidation = () => {
    if (
      this.equipmentValidation &&
      (this.serviceOfferingData ||
        this.rmaEntry?.partNumber === OTHER_PART_NUMBER)
    ) {
      return false;
    }
    return true;
  };

  setEquipmentValidation(event) {
    this.equipmentValidation = event;
  }

  //disable nxt button while removing some text from part number
  setRmapartNumberForm(params: any) {
    let validPartNumber = false;
    if (this.serviceOfferingData && this.rmaEntry && this.selectedProduct) {
      params?.parts?.map((item: any) => {
        if (item.code != params?.searchText) {
          validPartNumber = true;
        }
      });
      if (
        validPartNumber ||
        !this.selectedProduct['code'] ||
        this.serviceOfferingData == null ||
        params?.parts == null
      ) {
        this.equipmentValidation = false;
      }
    }
  }

  disableNextButton = () => {
    switch (this.stepIndex) {
      case 0:
        return false;
      case 1:
        return this.checkEquipmentValidation();
      case 2:
        return !this.checkServiceOfferingValidation();
    }
  };

  checkServiceOfferingValidation() {
    if (this.rmaEntry?.serviceOfferings?.length > 0) {
      if (this.isProbDescMandatory() && !this.rmaEntry?.problemDescription) {
        return false;
      }
      if (
        this.availableAccessories?.length > 0 &&
        (!this.rmaEntry?.accessoryPartNumbers ||
          this.rmaEntry?.accessoryPartNumbers?.length <= 0)
      ) {
        return false;
      }
      if (!this.isServiceOfferingTermsSelected()) {
        return false;
      }
      return true;
    }
    return false;
  }

  isProbDescMandatory() {
    for (let el of this.rmaEntry?.serviceOfferings) {
      if (el.offeringType == ServiceOfferingCategories.REPAIR) {
        return true;
      }
    }
    return false;
  }

  isServiceOfferingTermsSelected() {
    if (this.serviceOfferingTerms) {
      for (const el of this.serviceOfferingTerms) {
        if (el.showServiceOffTerms && !el.serviceOffTermsSelected) {
          return false;
        }
      }
    }
    return true;
  }

  setServiceOfferingData(event) {
    this.serviceOfferingData = event;
  }

  setSelectedProduct(event) {
    this.selectedProduct = event;
  }

  rmaEntryData(event) {
    if (Object.keys(event).length > 0) {
      this.rmaEntry = { ...this.rmaEntry, ...event };
    } else {
      this.rmaEntry = { ...event };
      this.setServiceOfferingData(null);
    }
  }

  setAvailableAccessories(event) {
    this.availableAccessories = event;
  }

  setServiceOfferingTerms(event) {
    this.serviceOfferingTerms = event;
  }

  createRmaEntry(currentStep) {
    if (this.rmaEntry?.additionalInfo?.warrantyStatement) {
      if (this.rmaEntry.additionalInfo.warrantyStatement.length >= 256) {
        this.warrentyClaimFlag = true;
        let warrantyClaimInput = this.rmaEntry.additionalInfo.warrantyStatement;
        this.rmaEntry.additionalInfo.warrantyStatement =
          warrantyClaimInput.replace(/&#34|&#10/g, '');
        return false;
      } else {
        this.warrentyClaimFlag = false;
      }
    }
    this.rmaService
      .createRmaEntry(OCC_USER_ID_CURRENT, this.rmaEntry)
      .subscribe((success) => {
        // updating number of cart based on product addition in cart
        localStorage.setItem('numberOfCart', success);
        if (success && success >= 0) {
          this.rmaEntry = {
            ...this.rmaEntry,
            entryNumber: success,
          };
          this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
            if (cartId) {
              this.multiCartFacade.reloadCart(cartId, { active: true });
            }
          });
          if (currentStep === 2) {
            this.openAddToCartModal();
          } else if (currentStep === 3) {
            this.openGoToHazardFormModal();
          }
        } else {
          console.error('Create RMA failed');
        }
      });
  }

  private openAddToCartModal() {
    const componentData = {
      product: this.selectedProduct,
      loaded$: this.activeCartFacade.isStable(),
      // entry$:this.activeCartFacade.getLastEntry(this.productCode)
    };

    const addToReturnCartDialog = this.launchDialogService.openDialog(
      DS_DIALOG.ADDED_TO_RETURN_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (addToReturnCartDialog) {
      addToReturnCartDialog.pipe(take(1)).subscribe((value) => {
        if (value) {
          this.stepIndex += 1;
        }
      });
    }
  }

  private openGoToHazardFormModal() {
    const goToHazardFormDialog = this.launchDialogService.openDialog(
      DS_DIALOG.GOTO_HAZARD_FORM_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (goToHazardFormDialog) {
      goToHazardFormDialog.pipe(take(1)).subscribe((value) => {
        if (value.instance.reason == false) {
          return; //When user clicks on close popup button keeping the same state.
        } else if (value.instance.reason) {
          this.router.navigate(['/rma-form/hazard-info']);
        } else {
          this.router.navigate(['/rma/cart']);
        }
      });
    }
  }

  checkRmaProductSelection() {
    this.returnProdService
      .getSelectedRmaProduct()
      .subscribe((product) => {
        if (Object.keys(product).length > 0) {
          this.stepIndex = 1;
          this.selectedProduct = product;
          this.cdRef.detectChanges();
        }
      })
      .unsubscribe();
  }

  checkRmaEntryData() {
    this.rmaService.getRmaEntryData
      .subscribe((rmaEntry: RmaEntry) => {
        if (Object.keys(rmaEntry).length > 0) {
          this.rmaEntry = rmaEntry;

          this.rmaEntry = { ...this.rmaEntry, accessoryPartNumbers: [] };
          rmaEntry?.accessoryProducts?.forEach((accEl) => {
            this.rmaEntry.accessoryPartNumbers.push(accEl.code);
          });
          // deleting property as it cannot be passed to saveRma API
          delete this.rmaEntry.accessoryProducts;

          this.stepIndex = 1;
          this.cdRef.detectChanges();
        }
      })
      .unsubscribe();
  }

  private openSwitchCartModal(
    currentCartType,
    switchToCartType,
    cartId,
    product
  ) {
    const componentData = {
      currentCartType: currentCartType,
      switchToCartType: switchToCartType,
      currentCartCode: cartId,
    };
    const switchCartDialog = this.launchDialogService.openDialog(
      DS_DIALOG.RMA_SWITCH_CART_DIALOG,
      undefined,
      undefined,
      componentData
    );
    if (switchCartDialog) {
      switchCartDialog.pipe(take(1)).subscribe((value) => {
        if (value == true || value?.instance?.reason == true) {
          this.returnProdService.selectRmaProduct(product);
          this.createRmaEntry(this.stepIndex);
        }
      });
    }
  }
}
