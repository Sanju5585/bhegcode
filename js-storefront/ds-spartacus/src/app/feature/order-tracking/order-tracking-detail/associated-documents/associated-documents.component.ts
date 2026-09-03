import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { OrderTrackingService } from '../../order-tracking.service';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import { Location } from '@angular/common';
import { saveAs } from 'file-saver';
import { TranslationService } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { LaunchDialogService } from '@spartacus/storefront';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { SAP_ORDER_STATUS } from '../../../../shared/models/status/order-status.model';
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
  @Input() checkAll: boolean;
  fileExtension;
  downloadLoader = [];
  downloadAllLoader: boolean;
  fetchAttchedDocLoader: boolean = true;
  @Input() fullResponse;
  client: any = { indeterminated: false, checked: false };
  attachmentList: any = [];
  elements: any;
  modalRef: any;
  favMsg: any;
  customerNumber: any;
  constructor(
    private orderTrackingService: OrderTrackingService,
    protected globalMessageService: GlobalMessageService,
    private location: Location,
    private elem: ElementRef,
    private launchDialogService: LaunchDialogService,
    private translate: TranslationService,
    protected authService: AuthService,
    private userAccountFacade: UserAccountFacade
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

  fetchAllDocuments() {
    let custDetail = this.fullResponse.soldTo.split('-');
    this.customerNumber = custDetail[custDetail.length - 1].trim(' ');
    this.orderTrackingService
      .getAllDocuments(this.orderNo, this.customerNumber)
      .subscribe(
        (response) => {
          this.fetchAttchedDocLoader = false;
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
            this.getTranslatedText('order-tracking.error.removeMsg'),

            GlobalMessageType.MSG_TYPE_CONFIRMATION,
            5000
          );

          window.scrollTo(0, 0);
        }
      );
  }

  arrangeDocuments() {
    let documentSet = [];
    let documentNodes = [
      'invoices',
      'customInvoices',
      'deliveryNotes',
      'salesOrderAck',
      'purchaseOrders',
      'customerUploadedDocuments',
    ];

    for (let dn = 0; dn < documentNodes.length; dn++) {
      if (this.fullDocumentsResponse[documentNodes[dn]]) {
        for (
          let i = 0;
          i < this.fullDocumentsResponse[documentNodes[dn]].length;
          i++
        ) {
          if (documentNodes[dn] == 'invoices') {
            documentSet.push({
              documentNumber: this.fullDocumentsResponse[documentNodes[dn]][i],
              documentName: this.fullDocumentsResponse.invFileName,
              documentType: this.fullDocumentsResponse.invDocType,
              documentNamingType: this.fullDocumentsResponse.invDocType,
            });
          } else if (documentNodes[dn] == 'customInvoices') {
            documentSet.push({
              documentNumber: this.fullDocumentsResponse[documentNodes[dn]][i],
              documentName: this.fullDocumentsResponse.customInvFileName,
              documentType: this.fullDocumentsResponse.customInvDocType,
              documentNamingType: this.fullDocumentsResponse.customInvDocType,
            });
          } else if (documentNodes[dn] == 'deliveryNotes') {
            documentSet.push({
              documentNumber: this.fullDocumentsResponse[documentNodes[dn]][i],
              documentName: this.fullDocumentsResponse.delNoteFileName,
              documentType: this.fullDocumentsResponse.delNoteDocType,
              documentNamingType: this.fullDocumentsResponse.delNoteDocType,
            });
          } else if (documentNodes[dn] == 'salesOrderAck') {
            documentSet.push({
              documentNumber: this.fullDocumentsResponse[documentNodes[dn]][i],
              documentName: this.fullDocumentsResponse.soaFileName,
              documentType: this.fullDocumentsResponse.soaDocType,
              documentNamingType: this.fullDocumentsResponse.soaDocType,
            });
          } else if (documentNodes[dn] == 'purchaseOrders') {
            documentSet.push({
              documentNumber: this.fullDocumentsResponse[documentNodes[dn]][i],
              documentName: this.fullDocumentsResponse.poFileName,
              documentType: this.fullDocumentsResponse.poDocType,
              documentNamingType: this.fullDocumentsResponse.poDocType,
            });
          } else if (documentNodes[dn] == 'customerUploadedDocuments') {
            documentSet.push({
              documentNumber: this.fullDocumentsResponse[documentNodes[dn]][i],
              documentName: this.fullDocumentsResponse.customInvFileName,
              documentType: this.fullDocumentsResponse.customInvDocType,
              documentNamingType: this.fullDocumentsResponse.customInvDocType,
            });
          }
        }
      }
    }
    this.fullDocumentsResponse = documentSet;
  }

  checkDocumentNameType(documentNode) {
    let documentNameType;
    switch (documentNode) {
      case 'customInvoices':
        documentNameType = this.fullDocumentsResponse.customInvFileName;
        break;
      case 'deliveryNotes':
        documentNameType = this.fullDocumentsResponse.delNoteFileName;
        break;
      case 'invoices':
        documentNameType = this.fullDocumentsResponse.invFileName;
        break;
      case 'purchaseOrders':
        documentNameType = this.fullDocumentsResponse.poFileName;
        break;
      case 'salesOrderAck':
        documentNameType = this.fullDocumentsResponse.soaFileName;
        break;
    }
    return documentNameType;
  }

  checkDocumentType(documentNode) {
    let documentType;
    switch (documentNode) {
      case 'customInvoices':
        documentType = this.fullDocumentsResponse.customInvDocType;
        break;
      case 'deliveryNotes':
        documentType = this.fullDocumentsResponse.delNoteDocType;
        break;
      case 'invoices':
        documentType = this.fullDocumentsResponse.invDocType;
        break;
      case 'purchaseOrders':
        documentType = this.fullDocumentsResponse.poDocType;
        break;
      case 'salesOrderAck':
        documentType = this.fullDocumentsResponse.soaDocType;
        break;
    }
    return documentType;
  }

  downloadAllFiles() {
    this.viewAllDocuments.forEach((document, index) => {
      this.downloadAllLoader = true;
      this.downloadDocument(document, index);
    });
  }

  downloadDocument(docfileName, docfileType, index?) {
    this.downloadLoader[index] = true;
    let custDetail = this.fullResponse.soldTo.split('-');
    const customerNumber = custDetail[custDetail.length - 1].trim(' ');
    let docNumber = this.orderNo;
    this.fullDocumentsResponse.forEach((doc) => {
      if (doc.documentType === docfileType) {
        docNumber = doc.documentNumber;
      }
    });

    let fileName = docfileName;
    let fileType = docfileType;
    let custAct = customerNumber;

    this.orderTrackingService
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
            if (fileType == 'PDF') {
              const blob = new Blob([res], { type: 'application/pdf' });
              const file = new File([blob], fileName + '.pdf', {
                type: 'application/pdf',
              });
              saveAs(file);
            } else if (fileType == 'DOC' || fileType == 'docx') {
              const blob = new Blob([res], { type: 'application/msword' });
              const file = new File([blob], fileName + '.doc', {
                type: 'application/msword',
              });
              saveAs(file);
            } else if (fileType == 'JPG' || fileType == 'JPG') {
              const blob = new Blob([res], { type: 'application/jpeg' });
              const file = new File([blob], fileName + '.jpg', {
                type: 'application/jpeg',
              });
              saveAs(file);
            } else if (fileType == 'PNG' || fileType == 'PNG') {
              const blob = new Blob([res], { type: 'application/png' });
              const file = new File([blob], fileName + '.png', {
                type: 'application/png',
              });
              saveAs(file);
            } else if (fileType == 'XLS' || fileType == 'xlsx') {
              const blob = new Blob([res], {
                type: 'application/vnd.ms-excel',
              });
              const file = new File([blob], fileName + '.xlsx', {
                type: 'application/vnd.ms-excel',
              });
              saveAs(file);
            } else if (fileType == 'HTM' || fileType == 'htm') {
              const blob = new Blob([res], {
                type: 'application/htm',
              });
              const file = new File([blob], fileName + '.htm', {
                type: 'application/htm',
              });
              saveAs(file);
            } else {
              const blob = new Blob([res], { type: 'application/pdf' });
              const file = new File([blob], fileName + '.pdf', {
                type: 'application/pdf',
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
      this.getTranslatedText('order-tracking.error.loadingmsg') +
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
  shareDetail() {
    const shareOrderDialog = this.launchDialogService.openDialog(
      DS_DIALOG.SHARE_ORDER_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (shareOrderDialog) {
      shareOrderDialog.pipe(take(1)).subscribe((value) => {});
    }
  }
  backLink() {
    this.location.back();
  }
  downloadSelectedAttachment() {
    if (this.fullDocumentsResponse.length == this.attachmentList.length) {
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
  fetchOrderStatusColor(statusResponse) {
    let color = '';
    if (statusResponse !== undefined && statusResponse !== null) {
      const statusObj = statusResponse.toUpperCase();
      switch (statusObj) {
        case SAP_ORDER_STATUS.ORDER_SUBMITTED:
          color = '#506C65';
          break;
        case SAP_ORDER_STATUS.ORDER_IN_PROGRESS:
          color = '#CB6E17';
          break;
        case SAP_ORDER_STATUS.SHIPPED:
          color = '#044E54';
          break;
        case SAP_ORDER_STATUS.SHIPPED_INVOICED:
          color = '#506C65';
          break;
        case SAP_ORDER_STATUS.BLOCKED:
          color = '#E12D39';
          break;
      }
    }
    return color;
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
}
