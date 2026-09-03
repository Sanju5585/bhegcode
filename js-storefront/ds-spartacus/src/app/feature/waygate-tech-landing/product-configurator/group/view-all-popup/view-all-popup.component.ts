import { ChangeDetectorRef, Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import {
  AuthService,
  FeatureConfigService,
  GlobalMessageService,
  GlobalMessageType,
  LanguageService,
  Product,
  ProductService,
  RoutingService,
} from '@spartacus/core';
import { OrderHistoryFacade } from '@spartacus/order/root';
import {
  CommonConfigurator,
  CommonConfiguratorUtilsService,
  ConfiguratorRouter,
  ConfiguratorRouterExtractorService,
} from '@spartacus/product-configurator/common';
import {
  ConfigFormUpdateEvent,
  Configurator,
  ConfiguratorAttributeCompositionContext,
  ConfiguratorCartService,
  ConfiguratorCommonsService,
  ConfiguratorExpertModeService,
  ConfiguratorGroupsService,
  ConfiguratorQuantityService,
  ConfiguratorStorefrontUtilsService,
} from '@spartacus/product-configurator/rulebased';
import {
  CurrentProductService,
  IntersectionService,
  LAUNCH_CALLER,
  LaunchDialogService,
} from '@spartacus/storefront';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import {
  delay,
  distinctUntilChanged,
  filter,
  map,
  skip,
  switchMap,
  take,
} from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'app-view-all-popup',
  templateUrl: './view-all-popup.component.html',
  styleUrls: ['./view-all-popup.component.scss'],
})
export class ViewAllPopupComponent {
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

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  form: FormGroup;
  selectedValue: string | null = null;
  loading$ = new BehaviorSubject<boolean>(false);

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

  activeLanguage$: Observable<string> = this.languageService.getActive();
  uiType = Configurator.UiType;

  ngOnInit(): void {
    let i = 0;
    let defaultflag = false;
    for (i = 0; i < this.data.attribute.values.length; i++) {
      if (this.data.attribute.values[i].selected == true) {
        defaultflag = true;
        break;
      }
    }
    if (defaultflag == false) i = 0;
    this.form = this.fb.group({
      selectedOption: [this.data.attribute.values[i].valueCode],
    });

    this.form.get('selectedOption')?.valueChanges.subscribe((value) => {
      this.selectedValue = value;
    });
  }

  finishSelection() {
    this.loading$.next(true);
    this.configuratorCommonsService.updateConfiguration(
      this.data.owner.key,
      {
        ...this.data.attribute,
        selectedSingleValue: this.form.get('selectedOption').value,
      },
      Configurator.UpdateType.ATTRIBUTE
    );
    this.dialog.closeAll();
  }

  onClose() {
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
