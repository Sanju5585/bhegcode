import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MainService } from '../../services/main.service';
import { UploadService } from '../../services/upload.service';
import { ApiService } from '../../../core/http/api.service';

declare var jquery: any;
declare var $: any;
declare const ACC: any;

const helpTooltip: string =
  'It is the policy of Baker Hughes Digital Solutions to protect the health of our employees and to provide a safe working environment. To this end, all products and materials returned to DS for service, maintenance, repair, calibration, or for any other reason, that have been contaminated by hazardous materials must be identified. This form must be completed before the RMA Form can be submitted.';

@Component({
  standalone: false,
  selector: 'app-hazard-info',
  templateUrl: './hazard-info.component.html',
  styleUrls: ['./hazard-info.component.css'],
})
export class HazardInfoComponent implements OnInit {
  isHazardSaved: boolean = false;
  isHazardFileRequired: boolean = false;
  deleteHazardFileURL: string = environment.apis.deleteHazardAttachment;
  fileInfo: any = [];
  fileName: string = '';
  csrfToken: any;
  data: any;
  iAgree: any;
  helpTooltip: any = helpTooltip;
  showAddOtherSpecifyText: boolean = false;
  showFluidSpecifyText: boolean = false;
  hazardData: any;
  addOther: string = '';
  fluidUnit: string = '';
  objChemicalDetails: {};
  arrChemicalDetails: any;
  serialNo: number = 1;
  isSelectAll: boolean = false;
  hazardDetails: string = '';
  hazardType: any = [];
  arrChemicalDetailsFiltered: any = [];
  showHazardTab: boolean = false;
  showTabbedBorder: boolean = true;
  rmaFormData: any;
  hazardTypeData: any;
  declarationA: boolean;
  declarationB: boolean = false;
  isSubmit: boolean;
  rawResponse: any = {};
  isViewAll: boolean;
  saveClicked: boolean;
  showAttachedFile: boolean = false;
  hazardUploadURL: string = environment.apis.hazardFileUploadURL;
  fileLoadProgress: boolean = false;
  isFileFormatNotAllowed: boolean = false;
  fileUploadFailed: boolean = false;
  isFileFormatSize: boolean = false;
  fileSize: number = 10000000;

  constructor(
    public apiService: ApiService,
    private mainService: MainService,
    private fileUploadService: UploadService
  ) {}

  ngOnInit() {
    this.csrfToken = ACC['config']['CSRFToken'];
    this.mainService.setTitle('HAZARDOUS MATERIAL DECLARATION (CoSHH Form)');
    const loader = document.querySelector('.overlayloader');
    loader['style']['display'] = '';
    this.apiService
      .getData(environment.apis.getHazardInfo, '')
      .pipe(catchError((obs) => of(false)))
      .subscribe((res) => {
        if (res) {
          this.rawResponse = res;
          this.bindHazardData(res);
        }
        loader['style']['display'] = 'none';
      });
    this.arrChemicalDetails = [
      {
        slNo: this.serialNo,
        isChecked: false,
        chemicalName: '',
        unNo: '',
        msds: '',
        notes: '',
      },
    ];
    this.hazardTypeData = {
      radiationChecked: false,
      biologicalChecked: false,
      solventChecked: false,
      coolantChecked: false,
      acidChecked: false,
      compressedChecked: false,
      adhesivesChecked: false,
      lubricantsChecked: false,
      fuelsChecked: false,
      othersChecked: false,
    };
  }
  bindHazardData(harardData) {
    this.declarationA = harardData.declarationA;
    if (this.declarationA) {
      $('a[href="#hmenu1"]').click();
      this.showHazardTab = true;
      this.showTabbedBorder = false;
    } else {
      $('a[href="#hmenu2"]').click();
      this.showTabbedBorder = false;
    }

    this.declarationB = harardData.declarationB;
    this.iAgree = this.declarationB;
    this.hazardDetails = harardData.hazardInfo;
    if (harardData.chemicalDetails && harardData.chemicalDetails.length > 0) {
      this.arrChemicalDetails = [];
      for (let i = 0; i < harardData.chemicalDetails.length; i++) {
        this.arrChemicalDetails.push({
          slNo: i,
          isChecked: false,
          chemicalName: harardData.chemicalDetails[i].chemicalName,
          unNo: harardData.chemicalDetails[i].un,
          msds: harardData.chemicalDetails[i].isMsdnSupplied ? 'Yes' : 'No',
          notes: harardData.chemicalDetails[i].chemicalNotes,
        });
      }
    }
    if (harardData.hazardType && harardData.hazardType.length > 0) {
      this.hazardType = harardData.hazardType;
      for (let eachHazardType of harardData.hazardType) {
        switch (eachHazardType.toUpperCase()) {
          case 'RADIATION':
            this.hazardTypeData.radiationChecked = true;
            break;
          case 'BIOLOGICAL':
            this.hazardTypeData.biologicalChecked = true;
            break;
          case 'SOLVENTS_ADHESIVES':
            this.hazardTypeData.solventChecked = true;
            break;
          case 'COOLANTS':
            this.hazardTypeData.coolantChecked = true;
            break;
          case 'ACID':
            this.hazardTypeData.acidChecked = true;
            break;
          case 'COMPRESSEDGAS':
            this.hazardTypeData.compressedChecked = true;
            break;
          case 'ADHESIVES':
            this.hazardTypeData.adhesivesChecked = true;
            break;
          case 'LUBRICANTS':
            this.hazardTypeData.lubricantsChecked = true;
            break;
          case 'FUELS':
            this.hazardTypeData.fuelsChecked = true;
            break;
          case 'ALKALI':
            this.hazardTypeData.alkaliChecked = true;
            break;
          default:
            this.hazardTypeData.othersChecked = true;
            break;
        }
      }
    }

    let info = {
      containsFluids: harardData.containsFluids,
      fluidText: harardData.fluidText,
      isOther: harardData.isOther,
      otherText: harardData.otherText,
    };
    Object.assign(this.hazardTypeData, info);

    //bind uploaded hazard file
    if (harardData.hazardFormAttachments) {
      for (let eachAttachment of harardData.hazardFormAttachments) {
        this.fileInfo.push({ fileName: eachAttachment, showFile: true });
      }
    }
  }
  handleHazardTab(target) {
    this.showHazardTab = true;
    this.showTabbedBorder = false;
    if (target == 'yes') {
      this.declarationA = true;
      this.initializeTabContent('yes');
    } else if (target == 'no') {
      this.declarationA = false;
      this.initializeTabContent('no');
    }
    $('.hazard-dec-tab .tab-pane').removeClass('show');
  }
  initializeTabContent(tab) {
    if (tab == 'no') {
      this.hazardTypeData = {
        radiationChecked: false,
        biologicalChecked: false,
        solventChecked: false,
        coolantChecked: false,
        acidChecked: false,
        compressedChecked: false,
        adhesivesChecked: false,
        lubricantsChecked: false,
        fuelsChecked: false,
        othersChecked: false,
      };

      this.arrChemicalDetails = [
        {
          slNo: this.serialNo,
          isChecked: false,
          chemicalName: '',
          unNo: '',
          msds: '',
          notes: '',
        },
      ];
      this.hazardType = [];
      this.hazardDetails = '';
      this.declarationA = false;
      this.declarationB = false;
      $('#hmenu1 label.selected-contamination').removeClass(
        'selected-contamination'
      );
    } else {
      this.declarationA = true;
      this.declarationB = false;
    }
    this.sendMessage();
  }
  private checkContainer() {
    if ($('.nav-tabs').is(':visible')) {
      //if the container is visible on the page
      $('a[href="#menu1"]').click();
    } else {
      setTimeout(this.checkContainer, 50); //wait 50 ms, then try again
    }
  }
  sendMessage() {
    this.hazardData = {
      partNumber: '',
    };
    this.hazardData['hazardousInfo'] = {};
    if (this.hazardType && this.hazardType.length > 0) {
      this.hazardData['hazardousInfo']['hazardType'] = this.hazardType;
    }

    this.hazardData['hazardousInfo']['declarationA'] = this.declarationA;
    this.hazardData['hazardousInfo']['declarationB'] = this.declarationB;

    this.hazardData['hazardousInfo']['hazardInfo'] = this.hazardDetails;

    if (this.arrChemicalDetails && this.arrChemicalDetails.length > 0) {
      this.arrChemicalDetailsFiltered = [];
      this.arrChemicalDetails.forEach((ele) => {
        if (ele.chemicalName || ele.msds) {
          this.arrChemicalDetailsFiltered.push({
            chemicalName: ele.chemicalName,
            un: ele.unNo,
            isMsdnSupplied: ele.msds == 'Yes' ? true : false,
            chemicalNotes: ele.notes,
          });
        }
      });
    }
    this.hazardData['hazardousInfo']['chemicalDetails'] =
      this.arrChemicalDetailsFiltered;
    let info = {
      containsFluids: this.hazardTypeData.containsFluids,
      fluidText: this.hazardTypeData.fluidText,
      isOther: this.hazardTypeData.isOther,
      otherText: this.hazardTypeData.otherText,
    };
    Object.assign(this.hazardData['hazardousInfo'], info);

    // this.messageEvent.emit(this.hazardData);
    this.hazardData['hazardousInfo']['isHazardSaved'] = this.isHazardSaved;
    this.autoSaveHazadData(this.hazardData.hazardousInfo);
  }
  public onMSDSChange(event, index, eachChemical) {
    if (event.target.checked) {
      eachChemical.msds = event.target.value;
      $("label[for='" + event.target.id + "']")
        .removeClass('rma-custom-radio')
        .css('color', '#018374');
      $("label[for='" + event.target.id + "']").addClass(
        'selected-contamination'
      );
      if (event.target.id.includes('lblMsdsYes')) {
        $("label[for='lblMsdsNo_" + index + "']")
          .removeClass('selected-contamination')
          .css('color', '#666666');
      } else if (event.target.id.includes('lblMsdsNo')) {
        $("label[for='lblMsdsYes_" + index + "']")
          .removeClass('selected-contamination')
          .css('color', '#666666');
      }
    } else {
      $("label[for='" + event.target.id + "']").removeClass(
        'selected-contamination'
      );
    }
    this.sendMessage();
  }
  public createHazardList(event) {
    if (event.target.checked) {
      this.hazardType.push(event.target.value);
      $("label[for='" + event.target.id + "']").addClass(
        'selected-contamination'
      );
    } else {
      this.hazardType = this.hazardType.filter(
        (item) => item.toUpperCase() !== event.target.value.toUpperCase()
      );
      $("label[for='" + event.target.id + "']").removeClass(
        'selected-contamination'
      );
    }
    //Invoke auto-save
    this.sendMessage();
  }

  public addChemicalDetails() {
    this.serialNo++;
    this.objChemicalDetails = {
      slNo: this.serialNo,
      isChecked: false,
      chemicalName: '',
      unNo: '',
      msds: '',
      notes: '',
    };
    this.arrChemicalDetails.push(this.objChemicalDetails);
  }
  public deleteChemicalDetails() {
    if (this.arrChemicalDetails.length > 0) {
      this.arrChemicalDetails.forEach((el) => {
        this.arrChemicalDetails = this.arrChemicalDetails.filter((el) => {
          return el.isChecked == false;
        });
      });
    }
    if (this.isSelectAll) {
      this.arrChemicalDetails.forEach((el) => {
        this.arrChemicalDetails = this.arrChemicalDetails.filter((el) => {
          return el.isChecked == true;
        });
      });
      this.isSelectAll = false;
    }
    this.sendMessage();
  }

  autoSaveHazadData(info) {
    this.apiService
      .putData(environment.apis.saveHazardInfo, info)
      .subscribe((res) => {
        if (this.saveClicked) {
          location.href = '/cart';
        }
      });
  }

  saveFormBtnClick() {
    this.isHazardSaved = true;
    for (let eachChemical of this.arrChemicalDetails) {
      if (eachChemical.msds == 'Yes' && this.fileInfo.length == 0) {
        this.isHazardFileRequired = true;
        let currObj = this;
        setTimeout(function () {
          currObj.isHazardFileRequired = false;
        }, 6000);
        return;
      }
    }
    this.saveClicked = true;
    this.sendMessage();
  }

  resetForm() {
    /**
     * TODO: reset form
     */
    this.hazardTypeData = {};
    this.arrChemicalDetails = [
      {
        slNo: this.serialNo,
        isChecked: false,
        chemicalName: '',
        unNo: '',
        msds: '',
        notes: '',
      },
    ];
    this.hazardDetails = null;
    this.declarationB = null;
    this.hazardType = [];
    $('.selected-contamination').removeClass('selected-contamination');
    this.sendMessage();
  }

  uploadFile($event) {
    let cartId = localStorage.getItem('cartID');

    let files = $event.target.files;
    if ($event.target.files[0].size >= this.fileSize) {
      this.isFileFormatSize = true;
      return;
    } else {
      this.isFileFormatSize = false;
    }
    $('.overlayloader').removeAttr('style');
    let ext = files[0].name.split('.').pop().toLowerCase();
    let oldfileTypeList = [
      'gif',
      'png',
      'jpg',
      'jpeg',
      'docx',
      'doc',
      'xls',
      'xlsx',
      'pdf',
      'mov',
    ];
    let fileTypeList = ['jpg', 'pdf'];
    if ($.inArray(ext, fileTypeList) == -1) {
      this.isFileFormatNotAllowed = true;
      $('.overlayloader').hide();
      return;
    } else {
      this.isFileFormatNotAllowed = false;
    }
    this.fileUploadFailed = false;
    const formData: FormData = new FormData();
    formData.append('file', files[0]);

    formData.append('CSRFToken', this.csrfToken);
    if (cartId) formData.append('entryNumber', cartId);
    this.fileLoadProgress = true;
    this.fileUploadService
      .upload(formData, this.hazardUploadURL)
      .subscribe((event) => {
        if (event instanceof HttpResponse) {
          if (event.body) {
            this.fileLoadProgress = false;
            this.fileName = files[0].name;
            this.fileInfo.push({
              fileName: this.fileName,
              showFile: true,
            });
            this.showAttachedFile = true;
            $event.target.value = '';
            this.isHazardFileRequired = false;
          } else {
            this.fileLoadProgress = false;
            this.fileUploadFailed = true;
          }
        }
        $('.overlayloader').css('display', 'none');
      });
  }

  showAttachedFiles(eachFile) {
    eachFile.showFile = false;
    this.fileInfo = this.fileInfo.filter(function (el) {
      return el.fileName != eachFile.fileName;
    });

    let urlParams = { fileName: eachFile.fileName };
    this.apiService
      .getData(this.deleteHazardFileURL, urlParams)
      .subscribe((res) => {
        for (let eachChemical of this.arrChemicalDetails) {
          if (eachChemical.msds == 'Yes' && this.fileInfo.length == 0) {
            this.isHazardFileRequired = true;
          }
        }
      });
  }
}
