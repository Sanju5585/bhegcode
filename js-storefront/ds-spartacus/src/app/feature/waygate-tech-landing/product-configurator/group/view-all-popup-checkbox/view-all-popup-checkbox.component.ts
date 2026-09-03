import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import {
  FeatureConfigService,
  LanguageService,
  Product,
  ProductService,
  RoutingService,
} from '@spartacus/core';
import { OrderHistoryFacade } from '@spartacus/order/root';
import {
  CommonConfigurator,
  CommonConfiguratorUtilsService,
  ConfiguratorRouterExtractorService,
} from '@spartacus/product-configurator/common';
import {
  Configurator,
  ConfiguratorAttributeQuantityService,
  ConfiguratorCartService,
  ConfiguratorCommonsService,
  ConfiguratorExpertModeService,
  ConfiguratorGroupsService,
  ConfiguratorQuantityService,
  ConfiguratorStorefrontUtilsService,
} from '@spartacus/product-configurator/rulebased';
import {
  IntersectionService,
  LaunchDialogService,
} from '@spartacus/storefront';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'app-view-all-popup-checkbox',
  templateUrl: './view-all-popup-checkbox.component.html',
  styleUrls: ['./view-all-popup-checkbox.component.scss'],
})
export class ViewAllPopupCheckboxComponent {
  constructor(
    protected configuratorCommonsService: ConfiguratorCommonsService,
    protected configRouterExtractorService: ConfiguratorRouterExtractorService,
    private productService: ProductService,
    protected routingService: RoutingService,
    protected configuratorCartService: ConfiguratorCartService,
    protected featureConfigService: FeatureConfigService,
    protected orderHistoryFacade: OrderHistoryFacade,
    protected commonConfiguratorUtilsService: CommonConfiguratorUtilsService,
    protected launchDialogService: LaunchDialogService,
    protected intersectionService: IntersectionService,
    // eslint-disable-next-line @typescript-eslint/unified-signatures
    protected configuratorQuantityService: ConfiguratorQuantityService,
    protected configuratorGroupsService: ConfiguratorGroupsService,
    protected languageService: LanguageService,
    protected configUtils: ConfiguratorStorefrontUtilsService,
    protected configExpertModeService: ConfiguratorExpertModeService,
    public dialog: MatDialog,
    protected fb: FormBuilder,
    protected configUtilsService: ConfiguratorStorefrontUtilsService,
    protected quantityService: ConfiguratorAttributeQuantityService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  attributeCheckBoxForms = new Array<UntypedFormControl>();
  form: FormGroup;
  selectedValues: any[] = [];
  loading$ = new BehaviorSubject<boolean>(false);

  ownerKey: string;
  protected readonly typePrefix = 'AttributeType_';
  product$: Observable<Product> = this.configRouterExtractorService
    .extractRouterData()
    .pipe(
      switchMap((routerData) =>
        this.configuratorCommonsService.getConfiguration(routerData.owner)
      ),
      map((configuration) => {
        switch (configuration.owner.type) {
          case CommonConfigurator.OwnerType.PRODUCT:
          case CommonConfigurator.OwnerType.CART_ENTRY:
            return configuration.productCode;
          case CommonConfigurator.OwnerType.ORDER_ENTRY:
            return configuration.overview.productCode;
        }
      }),
      switchMap((productCode) => this.productService.get(productCode))
    );

  toggleSelection(optionId: any, nam: any, selected: boolean) {
    const localAttributeValue = {
      valueCode: optionId,
      name: nam,
      quantity: 1,
      selected: selected,
    };
    const index = this.selectedValues.findIndex(
      (item) => item.valueCode === optionId
    );
    if (index == -1) {
      this.selectedValues.push(localAttributeValue);
    } else {
      this.selectedValues.splice(index, 1);
    }
  }
  isSelected(optionId: any): boolean {
    return this.selectedValues.some((item) => item.valueCode === optionId);
  }

  activeLanguage$: Observable<string> = this.languageService.getActive();
  uiType = Configurator.UiType;

  ngOnInit(): void {
    let arr = [];
    for (let i = 0; i < this.data.attribute.values.length; i++) {
      if (this.data.attribute.values[i].selected == true) {
        const localAttributeValue = {
          valueCode: this.data.attribute.values[i].valueCode,
          name: this.data.attribute.values[i].name,
          quantity: 1,
          selected: true,
        };
        this.selectedValues.push(localAttributeValue);
      }
    }
    const disabled = !this.allowZeroValueQuantity;

    for (let i = 0; i < this.data.attribute.values.length; i++) {
      let attributeCheckBoxForm;

      if (this.data.attribute.values[i].selected) {
        attributeCheckBoxForm = new UntypedFormControl({
          value: true,
          disabled: false,
        });
      } else {
        attributeCheckBoxForm = new UntypedFormControl(false);
      }
      this.attributeCheckBoxForms.push(attributeCheckBoxForm);
    }
  }

  get allowZeroValueQuantity(): boolean {
    return this.quantityService.allowZeroValueQuantity(this.data.attribute);
  }

  onClose() {
    this.dialog.closeAll();

    const sValues =
      this.configUtilsService.assembleValuesForMultiSelectAttributes(
        this.attributeCheckBoxForms,
        this.data.attribute
      );

    this.configuratorCommonsService.updateConfiguration(
      this.data.owner.key,
      {
        ...this.data.attribute,
        values: sValues,
      },
      Configurator.UpdateType.ATTRIBUTE
    );
  }
  closePopUp() {
    this.dialog.closeAll();
  }

  getComponentKey(attribute: Configurator.Attribute): string {
    return attribute.uiTypeVariation?.includes(
      Configurator.CustomUiTypeIndicator
    )
      ? this.typePrefix + attribute.uiTypeVariation
      : this.typePrefix + attribute.uiType;
  }

  get expMode(): Observable<boolean> {
    return this.configExpertModeService.getExpModeActive();
  }

  createGroupId(groupId?: string): string | undefined {
    return this.configUtils.createGroupId(groupId);
  }

  displayConflictDescription(group: Configurator.Group): boolean {
    return (
      group.groupType !== undefined &&
      this.configuratorGroupsService.isConflictGroupType(group.groupType) &&
      group.name !== ''
    );
  }

  isConflictGroupType(groupType: Configurator.GroupType | undefined): boolean {
    return groupType
      ? this.configuratorGroupsService.isConflictGroupType(groupType)
      : false;
  }
}
