import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { RmaTrackingService } from '../../../rma-tracking.service';
import { SAP_ASCTD_DOC_TYPES } from './associated-documents-types.model';
import { saveAs } from 'file-saver';
import { Location } from '@angular/common';
import { ShareRmaDilogComponent } from '../../share-rma-dilog/share-rma-dilog.component';
import { switchMap, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { DS_DIALOG } from '../../../../../../core/dialog/dialog.config';
import { SAP_RMA_STATUS } from '../../../../../../shared/models/status/rma-status.model';

@Component({
  standalone: false,
  selector: 'vs-associated-documents',
  templateUrl: './associated-documents.component.html',
  styleUrls: ['./associated-documents.component.scss'],
})
export class AssociatedDocumentsComponent implements OnInit {
  fullDocumentsResponse: any;
  viewAllDocuments: any = [];
  user$: Observable<unknown>;
  userType = '';
  @Input() orderNo: any;
  @Input() rmaTrackingResponse: any;
  @Input()
  checkAll: boolean;
  fileExtension;
  downloadLoader = [];
  downloadAllLoader: boolean;
  client: any = { indeterminated: false, checked: false };
  attachmentList: any = [];
  elements: any;
  modalRef: any;

  constructor(
    private rmaTrackingService: RmaTrackingService,
    protected globalMessageService: GlobalMessageService,
    private location: Location,
    private elem: ElementRef,
    private launchDialogService: LaunchDialogService,
    protected authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = 'current';
          return this.userAccountFacade.get();
        } else {
          this.userType = 'anonymous';
          return of(undefined);
        }
      })
    );

    this.user$.subscribe(
      (res) => {
        if (res) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {}
    );
    if (this.userType === 'current') {
      this.fetchAllDocuments();
    }
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  fetchAllDocuments() {
    this.rmaTrackingService
      .getAllDocuments(this.orderNo, this.rmaTrackingResponse?.customerAcct)
      .subscribe(
        (response) => {
          if (response) {
            this.fullDocumentsResponse = response;
            if (
              this.fullDocumentsResponse !== undefined &&
              this.fullDocumentsResponse !== null
            ) {
              // this.arrangeDocuments()
            }
          }
        },
        (error) => {
          this.globalMessageService.add(
            this.getTranslatedText('rma-tracking.issueWhileFetching'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
  }

  // arrangeDocuments() {
  //   let documentSet = []
  //   let documentNodes = [
  //     'invoices',
  //     'customInvoices',
  //     'deliveryNotes',
  //     'salesOrderAck',
  //     'purchaseOrders',
  //     'customerUploadedDocuments',
  //   ]

  //   for (let dn = 0; dn < documentNodes.length; dn++) {
  //     if (this.fullDocumentsResponse[documentNodes[dn]]) {
  //       for (
  //         let i = 0;
  //         i < this.fullDocumentsResponse[documentNodes[dn]].length;
  //         i++
  //       ) {
  //         if (
  //           this.fullDocumentsResponse[documentNodes[dn]][i].fileType == 'xls'
  //         ) {
  //           this.fileExtension = 'xlsx'
  //           documentSet.push({
  //             documentNumber:
  //               this.fullDocumentsResponse[documentNodes[dn]][i].docNumber,
  //             documentName:
  //               this.fullDocumentsResponse[documentNodes[dn]][i].fileName,
  //             documentType:
  //               this.fullDocumentsResponse[documentNodes[dn]][i].fileType,
  //             documentNamingType:
  //               this.fullDocumentsResponse[documentNodes[dn]][i].docType,
  //             documentExtesion: this.fileExtension,
  //           })
  //         } else {
  //           ;(this.fileExtension =
  //             this.fullDocumentsResponse[documentNodes[dn]][i].fileType),
  //             documentSet.push({
  //               documentNumber:
  //                 this.fullDocumentsResponse[documentNodes[dn]][i].docNumber,
  //               documentName:
  //                 this.fullDocumentsResponse[documentNodes[dn]][i].fileName,
  //               documentType:
  //                 this.fullDocumentsResponse[documentNodes[dn]][i].fileType,
  //               documentNamingType:
  //                 this.fullDocumentsResponse[documentNodes[dn]][i].docType,
  //               documentExtesion: this.fileExtension,
  //             })
  //         }
  //       }
  //     }
  //   }
  //   this.viewAllDocuments = documentSet
  // }

  // checkDocumentNameType(documentNode) {
  //   let documentNameType;
  //   switch (documentNode) {
  //     case 'customInvoices':
  //       documentNameType = this.fullDocumentsResponse.customInvFileName;
  //       break;
  //     case 'deliveryNotes':
  //       documentNameType = this.fullDocumentsResponse.delNoteFileName;
  //       break;
  //     case 'invoices':
  //       documentNameType = this.fullDocumentsResponse.invFileName;
  //       break;
  //     case 'purchaseOrders':
  //       documentNameType = this.fullDocumentsResponse.poFileName;
  //       break;
  //     case 'salesOrderAck':
  //       documentNameType = this.fullDocumentsResponse.soaFileName;
  //       break;
  //   }
  //   return documentNameType;
  // }

  // checkDocumentType(documentNode) {
  //   let documentType;
  //   switch (documentNode) {
  //     case 'customInvoices':
  //       documentType = this.fullDocumentsResponse.customInvDocType;
  //       break;
  //     case 'deliveryNotes':
  //       documentType = this.fullDocumentsResponse.delNoteDocType;
  //       break;
  //     case 'invoices':
  //       documentType = this.fullDocumentsResponse.invDocType;
  //       break;
  //     case 'purchaseOrders':
  //       documentType = this.fullDocumentsResponse.poDocType;
  //       break;
  //     case 'salesOrderAck':
  //       documentType = this.fullDocumentsResponse.soaDocType;
  //       break;
  //   }
  //   return documentType;
  // }

  downloadAllFiles() {
    this.viewAllDocuments.forEach((document, index) => {
      this.downloadAllLoader = true;
      this.downloadDocument(document, index);
    });
  }

  downloadDocument(docfileName, docfileType, index?) {
    this.downloadLoader[index] = true;
    let docNumber = this.orderNo;
    //let docType = fileName
    let fileName = docfileName;
    let fileType = docfileType;
    let custAct = this.rmaTrackingResponse?.customerAcct;

    this.rmaTrackingService
      .downloadDocument(docNumber, fileName, fileType, custAct)
      .subscribe(
        (res) => {
          this.downloadLoader[index] = false;
          let count = 0;
          this.downloadLoader.map((element, index) => {
            if (element === true) {
              count++;
            }
          });
          if (count > 0 && this.downloadAllLoader === true) {
          } else {
            this.downloadAllLoader = false;
          }
          if (res !== null && res !== undefined) {
            let fileName = docfileName;
            if (fileType.toLowerCase() == 'pdf') {
              const blob = new Blob([res], { type: 'application/pdf' });
              const file = new File([blob], fileName + '.pdf', {
                type: 'application/pdf',
              });
              saveAs(file);
            } else if (
              fileType.toLowerCase() == 'doc' ||
              fileType.toLowerCase() == 'docx'
            ) {
              const blob = new Blob([res], { type: 'application/msword' });
              const file = new File([blob], fileName + '.doc', {
                type: 'application/msword',
              });
              saveAs(file);
            } else if (
              fileType.toLowerCase() == 'jpg' ||
              fileType.toLowerCase() == 'jpeg'
            ) {
              const blob = new Blob([res], { type: 'application/jpeg' });
              const file = new File([blob], fileName + '.jpg', {
                type: 'application/jpeg',
              });
              saveAs(file);
            } else if (fileType.toLowerCase() == 'png') {
              const blob = new Blob([res], { type: 'application/png' });
              const file = new File([blob], fileName + '.png', {
                type: 'application/png',
              });
              saveAs(file);
            } else if (
              fileType.toLowerCase() == 'xls' ||
              fileType.toLowerCase() == 'xlsx'
            ) {
              const blob = new Blob([res], {
                type: 'application/vnd.ms-excel',
              });
              const file = new File([blob], fileName + '.xlsx', {
                type: 'application/vnd.ms-excel',
              });
              saveAs(file);
            } else if (fileType.toLowerCase() == 'htm') {
              const blob = new Blob([res], {
                type: 'application/htm',
              });
              const file = new File([blob], fileName + '.htm', {
                type: 'application/htm',
              });
              saveAs(file);
            }
          } else {
            this.displayDownloadError(document);
          }
        },
        (error) => {
          this.downloadAllLoader = false;
          this.downloadLoader[index] = false;
          this.displayDownloadError(document);
        }
      );
  }

  generateFileName(document) {
    return document.documentNamingType + '_' + document.documentName;
  }

  displayDownloadError(document) {
    this.globalMessageService.add(
      this.getTranslatedText('rma-tracking.issueDownloading') +
        this.generateFileName(document),
      GlobalMessageType.MSG_TYPE_ERROR,
      5000
    );
    window.scrollTo(0, 0);
  }
  onMasterClick(client, event) {
    this.elements = this.elem.nativeElement.querySelectorAll('.bh-checkbox');
    if (event.target.checked) {
      for (let i = 0; i < this.fullDocumentsResponse.length; i++) {
        this.attachmentList.push(this.fullDocumentsResponse[i]);
        this.client.indeterminated = false;
        this.client.checked = true;
      }
      for (let k = 0; k < this.elements.length; k++) {
        this.elements[k].setAttribute('checked', '');
      }
    } else {
      this.attachmentList = [];
      for (let k = 0; k < this.elements.length; k++) {
        this.elements[k].removeAttribute('checked');
      }
      this.client.indeterminated = false;
      this.client.checked = false;
    }
  }
  checkEntry(event, documentItem) {
    if (event.target.checked) {
      this.attachmentList.push(documentItem);
    } else if (!event.target.checked) {
      const index = this.attachmentList.indexOf(documentItem);
      if (index > -1) {
        this.attachmentList.splice(index, 1);
      }
    }
    if (this.fullDocumentsResponse.length == this.attachmentList.length) {
      this.client.indeterminated = false;
      this.client.checked = true;
    } else if (this.attachmentList.length == 0) {
      this.client.indeterminated = false;
      this.client.checked = false;
    } else if (this.fullDocumentsResponse.length > this.attachmentList.length) {
      this.client.indeterminated = true;
      this.client.checked = false;
    }
  }
  fetchOrderStatusColor(statusResponse) {
    let color = '';
    if (statusResponse !== undefined && statusResponse !== null) {
      const statusObj = statusResponse.toUpperCase();
      switch (statusObj) {
        case SAP_RMA_STATUS.RMA_SUBMITTED:
          color = '#00BF6F';
          break;
        case SAP_RMA_STATUS.AWAITING_ORDERS:
          color = '#E12D39';
          break;
        case SAP_RMA_STATUS.EVALUATING:
          color = '#147D64';
          break;
        case SAP_RMA_STATUS.PROCESSING:
          color = '#299BA3';
          break;
        case SAP_RMA_STATUS.SHIPPED:
          color = '#ED9D22';
          break;
        case SAP_RMA_STATUS.SHIPPED_INVOICED:
          color = '#3EBD93';
          break;
        case SAP_RMA_STATUS.BLOCKED:
          color = '#E12D39';
          break;
      }
    }
    return color;
  }
  shareDetail() {
    const shareRmaDialog = this.launchDialogService.openDialog(
      DS_DIALOG.SHARE_RMA_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (shareRmaDialog) {
      shareRmaDialog.pipe(take(1)).subscribe((value) => {});
    }
  }
  backLink() {
    this.location.back();
  }
  downloadSelectedAttachment() {
    if (this.attachmentList.length) {
      for (let i = 0; i < this.attachmentList.length; i++) {
        this.downloadDocument(
          this.attachmentList[i].fileName,
          this.attachmentList[i].fileType
        );
        if (i == this.attachmentList.length - 1) {
          this.client.indeterminated = false;
          this.client.checked = false;
          this.attachmentList = [];
          for (let k = 0; k < this.elements.length; k++) {
            this.elements[k].removeAttribute('checked');
          }
        }
      }
    }
  }
}
