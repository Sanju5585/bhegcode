import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { SiteEquipmentsService } from '../services/site-equipments.service';
import { NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../../core/http/api.service';
import { MainService } from '../../../shared/services/main.service';

declare var $: any;

export interface PartResult {
  partNumber: string;
  partImageIRL: string;
  partName: string;
  productAccessData: any;
}

@Component({
  standalone: false,
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css'],
})
export class AddEquipmentComponent implements OnInit {
  isButtonClicked: boolean = false;
  isSerialSearch: boolean = true;
  pageNum: number = 0;
  isRestore: boolean = false;
  dateValidation: any = {
    max: new Date(),
    min: new Date(1950, 4, 12),
  };
  disableSerialNumber: boolean = false;
  disablePartNumber: boolean = false;
  disableLastServiceDate: boolean = false;
  showPartialPartLoader: boolean = false;
  arrPartialPartAutoSearchResult: any = [];
  showPartialPartList: boolean = false;
  isEquipUpdate: boolean = false;
  isEquipmentError: boolean = false;
  errorMsg: string = '';
  isPartInvalid: boolean = false;
  isSerialInvalid: boolean = false;
  arrCustomers: any = [];
  selectedCustomer: any;
  showCustomersInfo: boolean = false;
  noSerialSearchResults: boolean = false;
  showPartValidateBox: boolean = false;
  disablePartField: boolean = false;
  disableSerialNumberInput: boolean = false;
  partNumber: string = '';
  showSearchType: boolean = false;
  showSerialHelp: boolean = false;
  partResult: PartResult;
  showPartResult: boolean = false;
  showNoResult: boolean = false;
  arrPartSearchResult: any = [];
  serialNoHelp: string = '';
  showPartLoader: boolean = false;
  partialPartNumber: string = '';
  arrPartAutoSearchResult: any = [];
  showPartList: boolean = false;
  showPartHelp: boolean = false;
  isEquipmentAdded: boolean = false;
  autoPartSearchAPI: string = environment.apis.msePartAutoSearchList;
  partSearchAPI: string = environment.apis.MSEPartSearchResult;
  @ViewChild('f') form: NgForm;
  model: MySiteEquipment = new MySiteEquipment();
  selectedSerialSearchType: any = '';
  serialSearchTypeList: any = [];
  showSerialSearchError: boolean = false;
  selectedSerialNumber: string = '';
  serialSearchInProgress: boolean = false;
  showSerialNumResults: boolean = false;
  showError: boolean = false;
  isSimilarPart: boolean = false;
  serialNumberCount: any = 1;
  additionalSerialNums: string = '';
  selectedId: string = '';
  serialNumSearchApi: string = environment.apis.MSESerialNoSearchResult;
  serialNumSearchResults: any = [];
  test: any = {
    additionalInfo: '123',
    location: '123123',
    serialNumber: '21234',
    misc: '2323',
  };
  @Output() updateEvent: EventEmitter<any> = new EventEmitter();
  archivedData: any = {};
  @ViewChild('partNumberInput') partNumberInput;
  @ViewChild('partNumberList') partNumberList;
  @ViewChild('endCustomerDropdown') endCustomerDropdown;
  @ViewChild('endCustomerDropdownButton') endCustomerDropdownButton;

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    public eqService: SiteEquipmentsService,
    private mainService: MainService,
    private equipmentService: SiteEquipmentsService,
    private dataService: ApiService,
    private route: ActivatedRoute
  ) {
    document.addEventListener('click', this.bodyClick.bind(this));
    if (this.route['_routerState'].snapshot.url.indexOf('edit') > -1) {
      this.bindEquipData();
    } else if (
      this.route['_routerState'].snapshot.url.indexOf('add-part') > -1
    ) {
      this.model.partNumber = this.route.snapshot.paramMap.get('partNumber');
      this.model.partName = this.route.snapshot.queryParams['partName'];
    }

    if (this.route.snapshot.paramMap.get('partNumber')) {
      this.model.partNumber = this.route.snapshot.paramMap.get('partNumber');
    }
    if (this.route.snapshot.queryParams['partName']) {
      this.model.partName = this.route.snapshot.queryParams['partName'];
    }

    let lastDate = this.model.lastServiceDate
      ? this.model.lastServiceDate.replace(/ /g, '')
      : '';
    this.model.lastServiceDate = new Date(lastDate) as any;
    // this.datePipe.transform(this.model.lastServiceDate, 'yyyy-MM-dd');
  }

  ngOnInit() {
    if (!this.isEquipUpdate) {
      this.model.serviceInterval = '';
    }
    this.model.partNumber =
      this.route.snapshot.paramMap.get('partNumber') || '';
    this.mainService.breadCrumbs = [];
    const breadCrumbs = [
      { name: 'Home', path: '/home', isExternalLink: true },
      { name: 'My Equipment', path: '/site-equipment' },
      { name: 'Add New Equipment', path: '/site-equipment/add' },
    ];
    this.mainService.breadCrumbs.push(...breadCrumbs);
    this.mainService.setTitle('BH Digital Solutions Store | Add Equipment');
    this.partResult = {
      partNumber: '',
      partName: '',
      partImageIRL: '',
      productAccessData: {},
    };

    this.serialSearchTypeList = [
      {
        id: 0,
        name: 'Equals',
        isDefault: false,
      },
      {
        id: 1,
        name: 'Starts With',
        isDefault: true,
      },
      {
        id: 2,
        name: 'Contains',
        isDefault: false,
      },
      {
        id: 3,
        name: 'Ends With',
        isDefault: false,
      },
    ];

    this.selectedSerialSearchType = this.serialSearchTypeList[1];
    this.arrCustomers = [
      {
        id: 0,
        name: 'Select a Customer',
      },
    ];
    if (this.arrCustomers.length == 1) {
      this.fetchCustomersInfo();
    }
    this.selectedCustomer = this.arrCustomers[0];
  }
  checkRange() {
    if (
      +this.model.serviceInterval > 60 ||
      +this.model.serviceInterval < 1 ||
      +this.model.serviceInterval != parseInt(this.model.serviceInterval)
    ) {
      this.model.serviceInterval = '1';
    }
  }
  bindEquipData() {
    this.route.params
      .pipe(
        switchMap((params) =>
          this.eqService.getEquipmentDetail(
            params['partNumber'],
            params['serialNumber'],
            this.route.snapshot.queryParams['isReload']
          )
        )
      )
      .subscribe((details: any) => {
        this.model = JSON.parse(JSON.stringify(details));
        this.archivedData = JSON.parse(JSON.stringify(details));
        this.isEquipUpdate = true;
        if (
          this.model.lastServiceDate &&
          this.model.lastServiceDate.toString() != 'Invalid Date'
        ) {
          this.model.lastServiceDate = this.datePipe.transform(
            this.model.lastServiceDate,
            'yyyy-MM-dd'
          );
        }

        if (this.model.endCustomerName) {
          this.selectedCustomer = {
            name: this.model.endCustomerName,
            id: this.model.endCustomer,
          };
        }

        if (!this.isRestore) {
          this.invokePartSerialLookup('');
        }

        if (
          this.model['manElFlag'] &&
          this.model['manElFlag'].toLowerCase() == 'y'
        ) {
          if (this.model.partNumber) {
            this.disablePartNumber = true;
          }
          if (this.model.serialNumber) {
            this.disableSerialNumber = true;
          }
          if (
            this.model.lastServiceDate &&
            this.model.lastServiceDate.toString() != 'Invalid Date'
          ) {
            this.disableLastServiceDate = true;
          }
        }
      });
  }

  onViewAllClick() {
    this.router.navigate(['/', 'site-equipment', 'manEL']).then(
      (nav) => {},
      (err) => {}
    );
  }

  private fetchCustomersInfo() {
    this.equipmentService.fetchCustomersData().subscribe((result: any) => {
      if (result && result.length > 0) {
        this.arrCustomers = [];
        for (const eachCust of result) {
          this.arrCustomers.push({
            id: eachCust.customerNumber,
            name: eachCust.customerName + ' & ' + eachCust.customerNumber,
          });
        }
        // If the equipment is to be updated, endcustomername to current customer.
        if (this.isEquipUpdate) {
          this.arrCustomers.forEach((element) => {
            if (element.name === this.model.endCustomerName) {
              this.selectedCustomer = element;
            }
          });
        }
      }
    });
  }

  public showErrorMsg() {
    if (this.partNumber != '' && !this.showError) {
      this.showError = false;
      this.showPartList = false;
    } else if (this.partNumber == '') {
      this.showError = false;
      this.showPartLoader = false;
    } else {
      this.showError = true;
    }
  }

  changeSearchType() {
    this.showSearchType = true;
  }

  changeCustomersInfo() {
    this.showCustomersInfo = true;
  }

  onSearchTypeSelect(type: any, event) {
    this.selectedSerialSearchType = type;
    this.showSearchType = false;
    event.preventDefault();
  }

  onCustomerSelect(cust: any, event) {
    this.selectedCustomer = cust;
    this.model.endCustomerName = cust.name;
    this.model.endCustomer = cust.id;
    this.showCustomersInfo = false;
    event.preventDefault();
  }

  onSerialInput(val) {
    if (val == '') this.isSerialInvalid = true;
    else this.isSerialInvalid = false;
  }

  onPartInput(val) {
    if (val == '') this.isPartInvalid = true;
    else this.isPartInvalid = false;
  }

  onSubmit(el: HTMLElement) {
    if (!this.model.partNumber && !this.model.serialNumber) {
      this.isSerialInvalid = true;
      this.isPartInvalid = true;
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
      return;
    }
    //Format date
    if (
      this.model.lastServiceDate &&
      this.model.lastServiceDate.toString() != 'Invalid Date'
    ) {
      this.model.lastServiceDate = this.datePipe.transform(
        this.model.lastServiceDate,
        'yyyy-MM-dd'
      );
    }

    this.model.serviceInterval =
      <any>this.model.serviceInterval < 1 ? '' : this.model.serviceInterval;

    this.model['addUpdateFlag'] = 'CP_ADD';
    if (this.isEquipUpdate) this.model['addUpdateFlag'] = 'CP_UPDATE';
    this.equipmentService
      .addEquipments([[this.model]])
      .subscribe((res: any) => {
        if (res && res[0]['responseType'] == 'S') {
          this.isEquipmentAdded = true;
          this.mainService.showMessage(
            'Equipment data added Successfully!',
            'success'
          );
          if (!this.isEquipUpdate) {
            this.onResetForm();
          }
          setTimeout(() => {
            this.isEquipmentAdded = false;
            //Navigate to MEL on successful update

            if (this.isEquipUpdate) {
              this.router
                .navigate(
                  [
                    '/',
                    'site-equipment',
                    this.model.partNumber,
                    this.model.serialNumber,
                  ],
                  { queryParams: { isReload: true } }
                )
                .then(
                  (nav) => {},
                  (err) => {}
                );
            } else {
              this.router
                .navigate(['/', 'site-equipment'], {
                  queryParams: { isReload: true },
                })
                .then(
                  (nav) => {},
                  (err) => {}
                );
            }
          }, 2000);
        } else if (res && res[0]['responseType'] == 'E') {
          if (res[0]['message'] == 'Cannot Update') {
            let partNum = this.route.snapshot.paramMap.get('partNumber') || '';
            let serialNum =
              this.route.snapshot.paramMap.get('serialNumber') || '';
            if (
              partNum != this.model.partNumber ||
              serialNum != this.model.serialNumber
            ) {
              // Archive old data and send updated records to API
              this.processExistingRecords(
                this.archivedData,
                'archive',
                'process',
                el
              );
            }
          }
        } else {
          this.isEquipmentAdded = false;
          this.isEquipmentError = true;
          this.errorMsg = res[0]['message'];
          this.mainService.showMessage(this.errorMsg, 'error');
          this.onResetForm();
          setTimeout(() => {
            this.isEquipmentError = false;
          }, 3000);
        }
      });
  }

  private processExistingRecords(dataToSend, callType, callStatus, el) {
    if (!dataToSend.partNumber && !dataToSend.serialNumber) {
      this.isSerialInvalid = true;
      this.isPartInvalid = true;

      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    // Format date
    dataToSend.lastServiceDate = this.datePipe.transform(
      dataToSend.lastServiceDate,
      'yyyy-MM-dd'
    );

    if (callType == 'archive') {
      dataToSend['addUpdateFlag'] = 'CP_UPDATE';
      dataToSend['removeFlag'] = true;
    } else {
      dataToSend['addUpdateFlag'] = 'CP_ADD';
    }
    this.equipmentService.addEquipments([dataToSend]).subscribe((res: any) => {
      if (res && res[0]['responseType'] == 'S') {
        //this.isEquipmentAdded = true;
        if (callStatus != 'terminate') {
          this.processExistingRecords(this.model, 'add', 'terminate', el);
        } else {
          this.isEquipmentAdded = true;
          this.mainService.showMessage(
            'Equipment data added Successfully!',
            'success'
          );
          if (!this.isEquipUpdate) {
            this.onResetForm();
          }
          setTimeout(() => {
            this.isEquipmentAdded = false;
            //Navigate to MEL on successful update
            if (this.isEquipUpdate) {
              this.router
                .navigate(
                  [
                    '/',
                    'site-equipment',
                    this.model.partNumber,
                    this.model.serialNumber,
                  ],
                  { queryParams: { isReload: true } }
                )
                .then(
                  (nav) => {},
                  (err) => {}
                );
            } else {
              this.router
                .navigate(['/', 'site-equipment'], {
                  queryParams: { isReload: true },
                })
                .then(
                  (nav) => {},
                  (err) => {}
                );
            }
          }, 3000);
        }
      }
    });
  }

  onResetForm() {
    this.form.reset();
    this.disableSerialNumber = false;
    this.disablePartNumber = false;
    this.disableLastServiceDate = false;
    this.selectedCustomer = this.arrCustomers[0];
  }
  onRestoreForm() {
    this.isRestore = true;
    this.bindEquipData();
  }
  onPartHelpClose() {
    this.showPartHelp = false;
    this.showSerialHelp = false;
  }
  onPartHelpClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.showPartHelp = true;
  }

  onSerialHelpClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.showSerialHelp = true;
  }

  onPartCloseClick() {
    this.disablePartNumber = false;
  }

  onSerialCloseClick() {
    this.disableSerialNumber = false;
  }

  public onPartChange(event) {
    if (event.target.value == '') {
      // $('#part-number').css('background-image','none');
      this.showPartList = false;
      this.arrPartAutoSearchResult = [];
    } else {
      this.autoSearch(event);
    }
  }

  public onPartialPartChange(event) {
    if (event.target.value == '') {
      // $('#part-number').css('background-image','none');
      this.showPartialPartList = false;
      this.arrPartialPartAutoSearchResult = [];
    } else {
      this.autoPartialPartSearch(event);
    }
  }

  activatePartField() {
    this.partNumber = '';
    // $("#part-number").css("background-image","none");
    // $('#part-number').css('padding-left','12px');
    this.disablePartField = false;
    this.showPartValidateBox = false;
    this.showError = false;
  }

  public clearSearchResults() {
    if (this.partialPartNumber == '') {
      this.showPartLoader = false;
    }
  }

  public countSerialNo(countType: string) {
    if (countType === 'plus') {
      this.serialNumberCount++;
    } else if (this.serialNumberCount != 1) {
      this.serialNumberCount--;
    }
  }

  validateQuantity(event: KeyboardEvent) {
    if (
      !(
        (event.keyCode > 95 && event.keyCode < 106) ||
        (event.keyCode > 47 && event.keyCode < 58) ||
        event.keyCode == 8
      )
    ) {
      return false;
    }
  }

  public setPartNumberToField(partData) {
    this.model.partNumber = partData.code;
    let parName = partData.name;
    this.model.partName = parName.slice(0, 40);
    this.showPartList = false;
    this.arrPartAutoSearchResult = [];
    this.disablePartNumber = true;
  }

  public setPartialPartNumberToField(partNo, mediaURL) {
    this.partialPartNumber = partNo;
    this.showPartialPartList = false;
    this.arrPartialPartAutoSearchResult = [];
  }

  // check part and serial number availability in DB.
  invokePartSerialLookup(srText) {
    // Remove invoking lookup
    return;
    if (
      (this.model.serialNumber as any).trim() == '' ||
      (this.model.partNumber as any).trim() == ''
    ) {
      return;
    }

    let isExactSearch = false;
    if (srText.length == 18) {
      isExactSearch = true;
    }

    const lookupParams = {
      partNum: this.model.partNumber,
      srNum: this.model.serialNumber,
      exactSearch: isExactSearch,
    };
    this.eqService
      .invokeMELPartSerialLookup(lookupParams)
      .subscribe((res: any) => {
        if (res) {
          this.disableSerialNumber = true;
          this.disablePartNumber = true;
          if (
            this.model.lastServiceDate &&
            this.model.lastServiceDate.toString() != 'Invalid Date'
          ) {
            this.disableLastServiceDate = true;
          }
        } else {
          this.disableSerialNumber = false;
          this.disablePartNumber = false;
          this.disableLastServiceDate = false;
        }
      });
  }

  private autoSearch(searchText) {
    if (searchText.length == 0) return;
    this.showPartLoader = true;
    let urlParams = {
      term: this.model.partNumber,
    };
    this.dataService
      .getData(this.autoPartSearchAPI, urlParams)
      .subscribe((res: object) => {
        if (res && JSON.stringify(res) != '{}') {
          this.arrPartAutoSearchResult = [];
          this.showPartList = true;
          for (let eachProduct of res['products']) {
            this.showPartLoader = false;
            this.arrPartAutoSearchResult.push(eachProduct);
          }
        } else {
          this.arrPartAutoSearchResult = [];
          this.showPartList = false;
          this.showPartLoader = false;
        }
        if (this.arrPartAutoSearchResult.length == 0) {
          this.showPartList = false;
        }
        this.showPartLoader = false;
      });
  }

  private autoPartialPartSearch(searchText) {
    if (searchText.length == 0) return;
    this.showPartialPartLoader = true;
    let urlParams = {
      term: this.partialPartNumber,
    };
    this.dataService
      .getData(this.autoPartSearchAPI, urlParams)
      .subscribe((res: object) => {
        if (res && JSON.stringify(res) != '{}') {
          this.arrPartialPartAutoSearchResult = [];
          this.showPartialPartList = true;
          for (let eachProduct of res['products']) {
            if (eachProduct['code'].includes(this.partialPartNumber)) {
              this.showPartialPartLoader = false;
              this.arrPartialPartAutoSearchResult.push(eachProduct);
            }
          }
        } else {
          // this.showNoResult = false;
          this.arrPartialPartAutoSearchResult = [];
          this.showPartialPartList = false;
          this.showPartialPartLoader = false;
        }
        if (this.arrPartialPartAutoSearchResult.length == 0) {
          this.showPartialPartList = false;
        }
        this.showPartialPartLoader = false;
      });
  }

  public invokePartSearch() {
    let urlParams = {
      partNum: this.partialPartNumber,
      srNum: this.serialNoHelp,
    };
    $('.overlayloader').show();
    this.dataService
      .getData(this.partSearchAPI, urlParams)
      .subscribe((res: any) => {
        this.arrPartSearchResult = [];
        if (res && res.length > 0) {
          this.showPartResult = true;
          // this.showNoResult = false;
          this.showPartHelp = true;
          for (let eachPart of res) {
            this.partResult.partNumber = eachPart['code'];
            this.partResult.partName = eachPart['name'];
            this.partResult.partImageIRL = eachPart['mediaurl']
              ? eachPart['mediaurl']
              : '/_ui/responsive/theme-lambda/images/missing_product_en_65x65.jpg';
            this.partResult.productAccessData = eachPart['productAccessData'];
            $('.overlayloader').hide();
            this.arrPartSearchResult.push(
              JSON.parse(JSON.stringify(this.partResult))
            );
          }
        } else {
          this.showPartResult = false;
          $('.overlayloader').hide();
        }
        $('.overlayloader').hide();
      });
  }

  public showSalesAreaMsg(eachPart) {
    if (
      eachPart.productAccessData &&
      eachPart.productAccessData.isServicePresentInOtherSalesArea
    ) {
      return true;
    } else {
      return false;
    }
  }

  public setOtherPart(event) {
    event.preventDefault();
    this.model.partNumber = 'Other';
    this.disablePartNumber = true;
    this.showPartHelp = false;
  }

  public copyPartNumber(
    partNo,
    isSimilar?: boolean,
    mediaURL?: string,
    eachPart?: any
  ) {
    if (isSimilar) {
      this.model.partNumber = partNo;
    } else {
      this.model.partNumber = partNo;
    }
    this.showPartHelp = false;
    this.arrPartSearchResult = [];
    this.showPartResult = false;
    this.partialPartNumber = '';
    this.serialNoHelp = '';
  }

  selectPart(partNum, id, selectedSerial) {
    this.model.serialNumber = selectedSerial;
    this.showSerialHelp = false;
    this.serialNumSearchResults = [];
    this.showSerialNumResults = false;
    this.selectedSerialNumber = '';
    this.invokePartSerialLookup('');
  }

  selectSimilarPart(partNum, id, selectedSerial) {
    this.model.serialNumber = selectedSerial;
    this.showSerialHelp = false;
    this.serialNumSearchResults = [];
    this.showSerialNumResults = false;
    this.selectedSerialNumber = '';
    this.invokePartSerialLookup('');
  }

  setButtonEvent() {
    this.isButtonClicked = true;
  }

  fetchSerialNumSearchResults() {
    if (this.selectedSerialNumber && this.selectedSerialNumber.length < 3) {
      this.showSerialSearchError = true;
      return;
    }
    this.showSerialSearchError = false;
    this.serialSearchInProgress = true;
    let urlParams = {
      searchType:
        this.selectedSerialSearchType.id > 0
          ? this.selectedSerialSearchType.id
          : '',
      srNum: this.selectedSerialNumber,
      pageSize: 250,
      pageNumber: this.pageNum,
      isSerialSearch: this.isSerialSearch,
    };
    this.dataService
      .getData(this.serialNumSearchApi, urlParams)
      .subscribe((res: any) => {
        if (this.isButtonClicked) {
          this.serialNumSearchResults = [];
        }
        if (res && res.length > 0) {
          // this.serialNumSearchResults = res;
          this.mainService.forceStopLoader = true;
          this.showSerialNumResults = true;
          this.noSerialSearchResults = false;
          this.isButtonClicked = false;

          res.forEach((result, index) => {
            let categoryDetails = this.getCategories(result.brandName);
            result.currentCategory = categoryDetails.currentCat;
            result.categoryHierarchy = categoryDetails.catHierarchy;
            result.partImage = result['mediaurl']
              ? result['mediaurl']
              : '/_ui/responsive/theme-lambda/images/missing_product_en_65x65.jpg';
          });
          this.serialNumSearchResults.push(...res);
          this.isSerialSearch = false;
          this.pageNum++;
          this.fetchSerialNumSearchResults();
        } else if (!res) {
          this.pageNum = 0;
          this.isSerialSearch = true;
          if (this.serialNumSearchResults.length == 0) {
            this.noSerialSearchResults = true;
          }
          this.mainService.forceStopLoader = false;
        } else {
          // this.noSerialSearchResults = true;
          this.isSerialSearch = false;
          this.pageNum++;
          this.fetchSerialNumSearchResults();
        }
        this.serialSearchInProgress = false;
      });
  }

  getCategories(brandName) {
    let categoryHierarchy = [],
      sortedCategories: any[];
    sortedCategories = brandName;
    sortedCategories.sort((left, right): number => {
      if (left.code < right.code) return -1;
      if (left.code > right.code) return 1;
      return 0;
    });

    sortedCategories.forEach((category, index, object) => {
      categoryHierarchy.push(category.name);
    });

    return {
      catHierarchy: categoryHierarchy.join(' > '),
      currentCat: categoryHierarchy[categoryHierarchy.length - 1],
    };
  }

  confirmAddAll() {
    $('#addAllToMEL').modal('show');
  }

  bodyClick() {
    if (
      this.partNumberInput &&
      !this.partNumberInput.nativeElement.contains(event.target) &&
      this.partNumberList &&
      !this.partNumberList.nativeElement.contains(event.target)
    ) {
      this.showPartList = false;
    }
    if (
      this.endCustomerDropdownButton &&
      !this.endCustomerDropdownButton.nativeElement.contains(event.target) &&
      this.endCustomerDropdown &&
      !this.endCustomerDropdown.nativeElement.contains(event.target)
    ) {
      this.showCustomersInfo = false;
    }
  }
}
class MySiteEquipment {
  constructor(
    public location: string = '',
    public serialNumber: string = '',
    public partNumber: string = '',
    public partName: string = '',
    public assetNumber: string = '',
    public lastServiceDate: string = '',
    public serviceInterval: string = '',
    public endCustomerName: string = '',
    public endCustomer: string = '',
    public htsCode: string = '',
    public additionalInfo: string = ''
  ) {}
}
