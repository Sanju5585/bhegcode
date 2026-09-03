import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { SalesArea } from '../../../../core/customer-account/store/customer-account.model';
import { ProductCategoriesService } from '../../../../core/product-catalog/services/product-categories.service';

@Component({
  standalone: false,
  selector: 'ds-waygate-customer-account-slider',
  templateUrl: './waygate-customer-account-slider.component.html',
  styleUrls: ['./waygate-customer-account-slider.component.scss'],
})
export class WaygateCustomerAccountSliderComponent
  implements OnInit, OnDestroy
{
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  guestSalesAreas$: Observable<SalesArea[]>;
  activeSalesArea$: Observable<SalesArea>;
  updatedLegalEntityObj: any;
  legalEntities: SalesArea[];

  @Input() salesAreadata;
  @Input() activeSalesArea;
  @Output() closeSlider = new EventEmitter<boolean>();

  constructor(
    private authService: AuthService,
    private custAccountService: CustomerAccountService,
    private renderer: Renderer2,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService
  ) {
    this.renderer.addClass(document.body, 'modal-open');
  }

  ngOnInit(): void {
    this.guestSalesAreas$ = this.custAccountService.getGuestSalesAreas();
    this.activeSalesArea$ = this.custAccountService.getCurrentGuestSalesArea();

    this.guestSalesAreas$.subscribe((res) => {
      this.legalEntities = res;
    });
    window.scrollTo(0, 0);
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }

  close() {
    this.closeSlider.emit(false);
    this.custAccountService.sliderSource.next(false);
  }

  onLegalEntityRadioChange(event) {
    const evtTarget = event.target;
    if (evtTarget.checked) {
      this.updatedLegalEntityObj = this.getLegalEntityFromUid(
        evtTarget.value
      )[0];
    }
  }

  getLegalEntityFromUid(uid) {
    return Object.values(this.legalEntities).filter(
      (val) => val.salesAreaId == uid
    );
  }

  onUpdateBtnClick() {
    this.updatedLegalEntityObj = {
      ...this.updatedLegalEntityObj,
      active: true,
    };

    this.custAccountService.updateGuestSalesArea(this.updatedLegalEntityObj);
    this.custAccountService.refreshPostGuestSalesAreaSwitch();

    this.globalMessageService.add(
      this.getTranslatedText('customer-account.companyChangedSuccess'),
      GlobalMessageType.MSG_TYPE_CONFIRMATION
    );
    this.close();
  }

  getLegalEntityRadioBtnLabel(entity) {
    let label =
      entity.salesAreaName + ' (' + entity.salesAreaId.split('_')[1] + ')';
    if (entity.address?.formattedAddress) {
      label = label + ' | ' + entity.address?.formattedAddress;
    }
    return label;
  }
}
