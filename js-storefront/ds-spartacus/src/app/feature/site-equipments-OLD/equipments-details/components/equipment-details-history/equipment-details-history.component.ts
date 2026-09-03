import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SiteEquipmentsService } from '../../../services/site-equipments.service';
import { DatePipe } from '@angular/common';
import { MainService } from '../../../../../shared/services/main.service';

// import * as moment from 'moment'
declare var $: any;

@Component({
  standalone: false,
  selector: 'app-equipment-details-history',
  templateUrl: './equipment-details-history.component.html',
  styleUrls: ['./equipment-details-history.component.css'],
})
export class EquipmentDetailsHistoryComponent implements OnInit {
  @Output() updateDetails: EventEmitter<any> = new EventEmitter();
  serialNumber: string = '';
  partNumber: string = '';
  lstMELHistory: any = [];
  @Input() set dataHistory(dataMELHistory) {
    this.lstMELHistory = dataMELHistory || [];
  }
  @Input() set dataPart(partNum) {
    this.partNumber = partNum;
  }
  @Input() set dataSerial(serialNum) {
    this.serialNumber = serialNum;
  }
  @Input() set dataOwnerMismatch(isOwnerMismatch) {
    if (isOwnerMismatch && isOwnerMismatch.toLowerCase() == 'y') {
      this.isOwnerMismatch = true;
    } else {
      this.isOwnerMismatch = false;
    }
  }
  dateValidation: any = {
    max: new Date(),
    min: new Date(1950, 4, 12),
  };
  isShowHistoryForm: boolean = false;
  selectedService: any = {};
  arrServices: any = [];
  model: any = {};
  serviceOfferingType: string = 'service';
  showOfferingTab: boolean = true;
  public tabIndex: any = 1;
  rmaNumber: string;
  showServices: boolean = false;
  serviceDateDisabled: boolean = false;
  serviceTypeDisabled: boolean = false;
  isOwnerMismatch: boolean = false;
  constructor(
    private eqService: SiteEquipmentsService,
    private datePipe: DatePipe,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.arrServices = [
      {
        id: 0,
        name: 'Repair',
      },
      {
        id: 1,
        name: 'Calibrate',
      },
      {
        id: 2,
        name: 'Upgrade',
      },
      {
        id: 3,
        name: 'Other',
      },
    ];
  }

  changeServices() {
    this.serviceTypeDisabled = false;
    this.showServices = true;
  }
  onServiceSelect(svc: any, event) {
    this.selectedService = svc;
    this.showServices = false;
    this.model.serviceType = svc.name;
  }
  showHistoryForm() {
    this.isShowHistoryForm = true;
    this.model = {};
    this.selectedService = {};
  }
  onCancelAddition() {
    this.model = {};
    this.selectedService = {};
    this.isShowHistoryForm = false;
    this.serviceDateDisabled = false;
    this.serviceTypeDisabled = false;
  }
  createServiceHistory() {
    if (this.validateServiceHistoryForm()) {
      return;
    }
    this.serviceDateDisabled = false;
    this.serviceTypeDisabled = false;
    this.prepareHistoryModel(0, 'add');
    this.eqService.addEquipmentHistory(this.model).subscribe((res: any) => {
      if (res && res[0] && res[0].responseType === 'S') {
        //reload data to page on successful addition
        this.invokeHistoryLookUp();
      } else {
        this.mainService.showMessage(
          'Some error occured, not able to add service history',
          'error'
        );
      }
    });
  }

  private validateServiceHistoryForm() {
    this.serviceDateDisabled = !this.model.serviceDate;
    this.serviceTypeDisabled = !this.model.serviceType;
    if (this.model.serviceDate && this.model.serviceType) {
      return false;
    }
    return true;
  }

  // indx - index to add or delete, ops - operation i.e add/delete
  private prepareHistoryModel(indx, ops) {
    this.model.partNumber = this.partNumber || '';
    this.model.serialNumber = this.serialNumber || '';
    this.model.serviceType = this.selectedService.name;
    if (ops == 'add') {
      this.model['addRemoveFlag'] = 'CP_HIS_ADD';
      this.model['index'] =
        this.lstMELHistory.length > 0
          ? Math.max.apply(
              Math,
              this.lstMELHistory.map(function (o) {
                return o.index;
              })
            ) + 1
          : 1; //send max index
    } else {
      this.model['addRemoveFlag'] = 'CP_HIS_DEL';
      this.model['index'] = indx; //send current index as is for delete
    }
    this.model.serviceDate = this.model.serviceDate
      ? this.datePipe.transform(this.model.serviceDate as any, 'dd-MM-yyyy')
      : '';
  }
  private invokeHistoryLookUp(): any {
    this.updateDetails.emit(true);
    this.isShowHistoryForm = false;
  }

  deleteMELHistory(indx, idx?) {
    this.prepareHistoryModel(indx, 'delete');
    this.eqService.deleteEquipmentHistory(this.model).subscribe((res: any) => {
      if (res && res[0].responseType === 'S') {
        //reload data to page on successful addition
        this.invokeHistoryLookUp();
        //this.lstMELHistory.splice(idx, 1);
        this.isShowHistoryForm = false;
      }
    });
  }
}
