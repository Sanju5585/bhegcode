import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteEquipmentsService } from '../site-equipments.service';
import { TranslationService } from '@spartacus/core';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { saveAs } from 'file-saver';
import { Subscription } from 'rxjs';
import moment from 'moment';
import { MultiCartFacade } from '@spartacus/cart/base/root';
import { environment } from '../../../../environments/environment';
import { ProductReturnService } from '../../../core/product-catalog/services/product-return.service';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
@Component({
  standalone: false,
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.scss'],
})
export class EquipmentDetailsComponent implements OnInit {
  @ViewChild('textval') textval: ElementRef;
  siteLocation: string;
  serviceInterval: string;
  tagandAssetNum: string;
  customeTariff: string;
  additionalInfo: string;
  endCustomerName: any;
  probeSerialNumber: number;
  partNumber: any;
  partName: any;
  probeType: string = '';
  totalEquipmentData: any;
  showUpdate: boolean = false;
  equipmentDetails: boolean = false;
  baseSiteURL = environment.occBaseUrl;
  endCustomersResponse: any;
  endCustomerList;
  endCustomerId;
  productLine: string;
  currentlyLoading: boolean = false;
  showSpinner: boolean = false;
  showPDFSpinner: boolean = false;
  showArchSpinner: boolean = false;
  lastServiceDate: string = '';
  lastCalibrationDate: string = '';
  serviceDueDate: string = '';
  minDate;
  maxDate;
  equipmentStatus;
  monthsDiff;
  private createRmaSubscripton: Subscription;

  endCustomers = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  equipmentStatusValues = {
    itemGroups: [
      {
        items: [
          {
            label: 'equipmentDetails.active',
            value: 'ACTIVE',
          },
          {
            label: 'equipmentDetails.inactive',
            value: 'INACTIVE',
          },
        ],
      },
    ],
  };

  error = {
    siteLocation: '',
    serviceInterval: '',
    endCustomerName: '',
  };

  onChange(e, field) {
    this.error[field] = '';
    this[field] = e.target.value;
  }

  equipmentDetailslData: any = {
    serialNumber: '',
    partNumber: '',
    partName: '',
    location: '',
    lastServiceDate: '',
    serviceInterval: '',
    status: '',
    assetNumber: '',
    htsCode: '',
    endCustomerName: '',
    endCustomer: '',
    lastCalibrationDate: '',
    notes: '',
    productData: {
      mediaurl: '',
    },
  };

  constructor(
    private router: Router,
    public eqService: SiteEquipmentsService,
    private route: ActivatedRoute,
    private translate: TranslationService,
    protected globalMessageService: GlobalMessageService,
    private breadCrumbService: BreadcrumbService,
    private returnProdService: ProductReturnService,
    private customerAccService: CustomerAccountService,
    private multiCartFacade: MultiCartFacade
  ) {}

  getEndCustomer(event) {
    this.endCustomerName = event.detail.label;
    this.endCustomerId = event.detail.value;
  }

  ngOnDestroy(): void {
    this.createRmaSubscripton?.unsubscribe();
  }

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('equipmentDetails.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.currentlyLoading = true;
    this.getEquipmentDetails();
    this.getEndCustomerList();
    this.minDate = new Date();
    this.minDate = this.minDate.setMonth(this.minDate.getMonth() - 24);
    this.maxDate = new Date();
    this.equipmentStatusValues.itemGroups.forEach(group => {
      this.updateLangForOptions(group.items,'label')
     });

     this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translate.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }

  getEquipmentDetails() {
    const lookupParams = {
      partNumber: this.route.snapshot.queryParams['partNumber'],
      serialNumber: this.route.snapshot.queryParams['serialNumber'],
      customer: this.route.snapshot.queryParams['customer'],
    };

    this.eqService.equipmentHistoryLookUp(lookupParams).subscribe(
      (res: any) => {
        if (res.length) {
          this.currentlyLoading = false;
          this.equipmentDetails = true;
          this.totalEquipmentData = res[0];
          this.equipmentDetailslData = res[0];
        }
        if (this.route.snapshot.queryParams['isUpdate'] == 'true') {
          this.showUpdate = true;
          this.equipmentDetails = false;
        }
        if (res.length == 0) {
          this.globalMessageService.add(
            this.getTranslatedText('equipmentDetails.equipmentDetailsNotFound'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          this.router.navigateByUrl('/my-equipments');
        }
      },
      (error) => {
        this.showSpinner = false;
        this.globalMessageService.add(
          this.getTranslatedText('equipmentDetails.globalErrorMsg'),
          GlobalMessageType.MSG_TYPE_ERROR,
          3000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  getEndCustomerList() {
    var customerList = [];
    this.eqService.getEndcustomer().subscribe((res) => {
      this.endCustomersResponse = res;
      this.endCustomersResponse.forEach((customers) => {
        customerList.push({
          label: customers.customerName + '&' + customers.customerNumber,
          value: customers.customerNumber,
        });
      });
    });

    this.endCustomers = {
      itemGroups: [
        {
          items: customerList,
        },
      ],
    };
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  onUpdateEquipmentData() {
    let serviceDueDateFormatted, lastServiceDateFormatted;
    if (this.equipmentDetailslData.serviceDueDate === null) {
      serviceDueDateFormatted = this.equipmentDetailslData.serviceDueDate;
    } else {
      serviceDueDateFormatted = moment(
        this.equipmentDetailslData.serviceDueDate
      ).format('YYYY-MM-DD');
    }
    if (this.equipmentDetailslData.lastServiceDate === null) {
      lastServiceDateFormatted = this.equipmentDetailslData.lastServiceDate;
    } else {
      lastServiceDateFormatted = moment(
        this.equipmentDetailslData.lastServiceDate
      ).format('YYYY-MM-DD');
    }

    let inputParams = [
      [
        {
          addUpdateFlag: 'CP_UPDATE',
          additionalInfo: this.additionalInfo
            ? this.additionalInfo
            : this.equipmentDetailslData.additionalInfo,
          assetNumber: this.equipmentDetailslData.assetNumber
            ? this.tagandAssetNum
            : this.tagandAssetNum,
          endCustomer: this.endCustomerId
            ? this.endCustomerId
            : this.equipmentDetailslData.endCustomer,
          endCustomerName: this.endCustomerName
            ? this.endCustomerName
            : this.equipmentDetailslData.endCustomerName,
          favourites: this.equipmentDetailslData.favourites,
          htsCode: this.equipmentDetailslData.htsCode
            ? this.customeTariff
            : this.customeTariff,
          inactiveFlag: this.equipmentDetailslData.inactiveFlag,
          lastServiceDate: this.lastServiceDate
            ? this.lastServiceDate
            : lastServiceDateFormatted,
          location: this.equipmentDetailslData.location
            ? this.siteLocation
            : this.siteLocation,
          nextServiceDueInMonths:
            this.equipmentDetailslData.nextServiceDueInMonths,
          partName: this.partName
            ? this.partName
            : this.equipmentDetailslData.partName,
          partNumber: this.partNumber
            ? this.partNumber
            : this.equipmentDetailslData.partNumber,
          pinned: this.equipmentDetailslData.pinned,
          removeFlag: this.equipmentDetailslData.removeFlag,
          selectedOption: this.equipmentDetailslData.selectedOption,
          sensorType: this.equipmentDetailslData.sensorType,
          serialNumber: this.equipmentDetailslData.serialNumber,
          serviceDueDate: this.serviceDueDate
            ? this.serviceDueDate
            : serviceDueDateFormatted,
          serviceHistoryDetails: [],
          serviceInterval: this.serviceInterval
            ? this.serviceInterval
            : this.equipmentDetailslData.serviceInterval,
          status: this.equipmentStatus
            ? this.equipmentStatus
            : this.equipmentDetailslData.status,
          thereInMELFlag: this.equipmentDetailslData.thereInMELFlag,
          customer: this.route.snapshot.queryParams['customer']
            ? this.route.snapshot.queryParams['customer']
            : '',
        },
      ],
    ];
    this.showSpinner = true;

    this.eqService.addNewEquipment(inputParams).subscribe(
      (res: any) => {
        if (res) {
          this.showSpinner = false;
          var snapshot = this.route.snapshot;
          const params = { ...snapshot.queryParams };
          delete params['isUpdate'];
          this.getEquipmentDetails();
          let currentUrl = this.router.url;
          this.router
            .navigateByUrl(currentUrl, { skipLocationChange: true })
            .then(() => {
              this.router.navigate([], { queryParams: params });
            });
          this.globalMessageService.add(
            this.getTranslatedText('equipmentDetails.success'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION,
            5000
          );
          window.scrollTo(0, 0);
        }
        this.showUpdate = false;
        this.equipmentDetails = true;
      },
      (error) => {
        this.showSpinner = false;
        this.globalMessageService.add(
          this.getTranslatedText('mySiteEquipment.updateFailed'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  btnClick = function () {
    this.router.navigateByUrl('/my-equipments');
  };

  backClick(partNumber, serialNumber) {
    this.router.navigate(['/equipment-details'], {
      queryParams: { partNumber: partNumber, serialNumber: serialNumber },
    });
  }

  downloadCalibrationPDF() {
    let timestamp = new Date().getTime();
    this.probeSerialNumber = this.equipmentDetailslData.serialNumber;
    this.probeType = this.equipmentDetailslData.sensorType;
    this.showPDFSpinner = true;
    this.eqService
      .downloadCalibrationPDF(this.probeSerialNumber, this.probeType)
      .subscribe((res: Blob) => {
        if (res !== null && res !== undefined) {
          this.showPDFSpinner = false;
          const blob = new Blob([res], { type: 'application/pdf' });
          const file = new File(
            [blob],
            'CalibrationData' + timestamp + '.pdf',
            {
              type: 'application/pdf',
            }
          );
          var fileURL = window.URL.createObjectURL(file);
          window.open(fileURL, '_blank');
        } else {
          this.globalMessageService.add(
            this.getTranslatedText('mySiteEquipment.PDFGenerationFailed'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      });
  }

  getProductfamily() {
    this.eqService.getProductfamily().subscribe((res) => {});
  }

  updateItemDetails() {
    this.showUpdate = true;
    this.equipmentDetails = false;
  }

  cancelUpdate() {
    this.showUpdate = false;
    this.equipmentDetails = true;
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      if (event.target.value.length > 2) {
        event.preventDefault();
        return false;
      }
      return false;
    }
    return true;
  }

  archiveAddToWatchEquipment(actionType) {
    let serviceDueDateFormatted, lastServiceDateFormatted;
    if (this.equipmentDetailslData.serviceDueDate === null) {
      serviceDueDateFormatted = this.equipmentDetailslData.serviceDueDate;
    } else {
      serviceDueDateFormatted = moment(
        this.equipmentDetailslData.serviceDueDate
      ).format('YYYY-MM-DD');
    }
    if (this.equipmentDetailslData.lastServiceDate === null) {
      lastServiceDateFormatted = this.equipmentDetailslData.lastServiceDate;
    } else {
      lastServiceDateFormatted = moment(
        this.equipmentDetailslData.lastServiceDate
      ).format('YYYY-MM-DD');
    }
    let selectedOption;
    let pinned;
    let removeFlag;
    let inactiveFlag;
    let thereInMELFlag;
    let archiving;
    let rawRemoveFlag;
    let manElFlag;
    let favourites;

    if (actionType == 'watchList') {
      selectedOption = 'P';
      pinned = '';
      removeFlag = true;
      inactiveFlag = false;
      thereInMELFlag = false;
      archiving = false;
      rawRemoveFlag = true;
      manElFlag = 'Y';
      favourites = true;
      status = this.equipmentDetailslData.status;
    }

    if (actionType == 'archive') {
      selectedOption = 'A';
      pinned = 'X';
      removeFlag = true;
      inactiveFlag = false;
      thereInMELFlag = false;
      archiving = false;
      rawRemoveFlag = true;
      manElFlag = 'Y';
      favourites = false;
      status = 'ACTIVE';
    }

    if (actionType == 'restore') {
      selectedOption = 'A';
      pinned = this.equipmentDetailslData.pinned;
      removeFlag = true;
      inactiveFlag = false;
      thereInMELFlag = false;
      archiving = false;
      rawRemoveFlag = true;
      manElFlag = '';
      favourites = false;
      status = 'INACTIVE';
    }

    if (actionType == 'remove') {
      selectedOption = 'P';
      pinned = 'X';
      removeFlag = false;
      inactiveFlag = false;
      thereInMELFlag = false;
      archiving = false;
      rawRemoveFlag = true;
      manElFlag = '';
      favourites = false;
      status = this.equipmentDetailslData.status;
    }

    let inParams = [
      [
        {
          addUpdateFlag: 'CP_UPDATE',
          additionalInfo: this.equipmentDetailslData.additionalInfo,
          assetNumber: this.equipmentDetailslData.assetNumber,
          endCustomer: this.equipmentDetailslData.endCustomer,
          endCustomerName: this.equipmentDetailslData.endCustomerName,
          favourites: favourites,
          htsCode: this.equipmentDetailslData.htsCode,
          inactiveFlag: inactiveFlag,
          lastServiceDate: lastServiceDateFormatted,
          location: this.equipmentDetailslData.location,
          partName: this.equipmentDetailslData.partName,
          partNumber: this.equipmentDetailslData.partNumber,
          pinned: pinned,
          removeFlag: removeFlag,
          selectedOption: selectedOption,
          serialNumber: this.equipmentDetailslData.serialNumber,
          serviceDueDate: serviceDueDateFormatted,
          serviceHistoryDetails: [],
          serviceInterval: this.equipmentDetailslData.serviceInterval,
          status: status,
          thereInMELFlag: thereInMELFlag,
        },
      ],
    ];

    this.showArchSpinner = true;
    this.eqService.addNewEquipment(inParams).subscribe((res: any) => {
      if (res) {
        this.showArchSpinner = false;
        this.globalMessageService.add(
          this.getTranslatedText('equipmentDetails.success'),
          GlobalMessageType.MSG_TYPE_CONFIRMATION,
          5000
        );
        window.scrollTo(0, 0);
        this.getEquipmentDetails();
        var snapshot = this.route.snapshot;
        const params = { ...snapshot.queryParams };
        let currentUrl = this.router.url;
        this.router
          .navigateByUrl(currentUrl, { skipLocationChange: true })
          .then(() => {
            this.router.navigate([], { queryParams: params });
          });
      } else {
        this.showArchSpinner = false;
        this.globalMessageService.add(
          this.getTranslatedText('equipmentDetails.failed'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    });
  }

  createNewRma(productData, serialNumber) {
    const updatedProduct = {
      ...productData,
      serialNumber,
      similar: false,
    };
    this.createRmaSubscripton = this.returnProdService
      .rmaValidateAndRedirect(updatedProduct)
      .subscribe((val: any) => {
        if (!val?.modal) {
          this.multiCartFacade.reloadCart(val, {
            active: true,
          });
          this.returnProdService.selectRmaProduct(updatedProduct);
          this.router.navigate([`/${this.productLine}/returns/cart`]);
        }
      });
  }

  onLastServiceDateChange(e) {
    this.lastServiceDate = moment(e).format('YYYY-MM-DD');
  }

  copyPaste(event) {
    if (event.target.value.length >= 1333) {
      this.textval.nativeElement.value =
        this.textval.nativeElement.value.substring(0, 1333);
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }

  onServiceDueDateChange(e) {
    this.serviceDueDate = moment(e).format('YYYY-MM-DD');
  }

  equipmentSelect(event) {
    this.equipmentStatus = event.detail.value;
  }

  stop(event) {
    if (event.target.value.length >= 1333) {
      event.preventDefault();
      return false;
    }
  }
  findserviceDueDate(serviceDueDate) {
    let currentDate = new Date();
    let dueDate = new Date(serviceDueDate);
    let diff = Math.floor(dueDate.getTime() - currentDate.getTime());
    let day = 1000 * 60 * 60 * 24;
    let days = Math.floor(diff / day);
    this.monthsDiff = Math.floor(days);
    if (this.monthsDiff <= 90 && this.monthsDiff >= 0) {
      return true;
    } else {
      return false;
    }
  }
}
