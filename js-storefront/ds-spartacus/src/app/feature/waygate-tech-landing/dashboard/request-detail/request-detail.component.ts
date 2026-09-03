import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountDetails, AccountStatus } from '../dashboard.model';
import { DashboardService } from '../dashboard.service';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { GlobalMessageService, GlobalMessageType, TranslationService } from '@spartacus/core';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';
import { HttpResponse } from '@angular/common/http';
import saveAs from 'file-saver';

@Component({
  standalone: false,
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss'],
})
export class RequestDetailComponent implements OnInit, OnChanges, OnDestroy {
  public myForm: FormGroup;
  @Input() selectedAccount!: AccountDetails;
  @Input() action: any = {};
  @Output() refreshEvent = new EventEmitter<string>();
  submitForm: boolean = false;
  isReadOnlyForm: boolean = false;
  showChildLoader: boolean = false;
  _accountStatus = AccountStatus;
  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private globalMessageService: GlobalMessageService,
    private launchDialogService: LaunchDialogService,
    private translate: TranslationService,
  ) {}

  ngOnInit() {
    this.initForm();
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  ngOnDestroy() {
    this.submitForm = false;
    this.myForm.reset();
  }

  initForm() {
    this.isReadOnlyForm = false;
    this.myForm = this.fb.group({
      accountLinking: this.fb.array([]),
    });
    if (this.selectedAccount?.accountLinking?.length > 0) {
      this.selectedAccount?.accountLinking.forEach((account, index) => {
        this.customerAccounts.push(
          this.fb.group({
            customerNumber: [account.customerNumber || '', Validators.required],
            salesareaList: this.fb.array(
              account.salesareaList && account.salesareaList.length > 0
                ? account.salesareaList.map((area) => {
                    return this.createNewSalasArea(area);
                  })
                : [this.createNewSalasArea()]
            ),
          })
        );
      });
    } else {
      this.addCustomerFormControl();
      this.customerAccounts
        .at(0)
        .patchValue({ customerNumber: this.selectedAccount.accountNumber });
    }
    if (
      AccountStatus.pending != this.selectedAccount.approvalStatus &&
      AccountStatus.onHold != this.selectedAccount.approvalStatus
    ) {
      this.isReadOnlyForm = true;
      this.myForm.disable();
    }
  }

  ngOnChanges(changes: SimpleChanges | any) {
    if (
      changes.action &&
      [
        AccountStatus.approved,
        AccountStatus.rejected,
        AccountStatus.onHold,
      ].includes(changes.action.currentValue?.status)
    ) {
      this.submitForm = true;
      if (
        this.myForm?.valid &&
        changes.action.currentValue?.status == AccountStatus.approved
      ) {
        this.openCommetBox(changes.action.currentValue?.status);
      } else if (
        changes.action.currentValue?.status == AccountStatus.rejected ||
        changes.action.currentValue?.status == AccountStatus.onHold
      ) {
        this.submitForm = false;
        this.openCommetBox(changes.action.currentValue?.status);
      }
    }
  }

  onSubmit(status, comments?) {
    if (
      (this.myForm?.valid && status == AccountStatus.approved) ||
      status == AccountStatus.rejected ||
      status == AccountStatus.onHold
    ) {
      this.showChildLoader = true;
      const accountLinking = this.myForm.value.accountLinking.map(
        (acc: any) => {
          return {
            customerNumber: acc?.customerNumber,
            salesareaList: acc?.salesareaList.map((area) => area.salesArea),
          };
        }
      );
      const prams = {
        status,
        accountLinking: JSON.stringify(accountLinking),
        accessid: this.selectedAccount.accessRequestId,
        comments: comments || '',
        reqStatusVal: this.selectedAccount.approvalStatus,
        // requestAccessId: this.selectedAccount.accessRequestId,
      };
      this.dashboardService.updateStatus(prams).subscribe(
        (res: any) => {
          this.showChildLoader = false;
          if (`errorMessageList` in res && res.errorMessageList.length > 0) {
            let accountNumberIndex = 0;
            let salesAreaIndex = 0;
            const errors = res.errorMessageList;
            accountLinking.forEach((acc, index) => {
              const accountNumberErrorString = `Invalid SoldTo Number at ${accountNumberIndex}`;
              if (errors.includes(accountNumberErrorString)) {
                this.customerAccounts
                  .at(index)
                  .get('customerNumber')
                  .setErrors({ serverError: 'Invalid sold to number' });
              }
              acc.salesareaList.forEach((area, areaIndex) => {
                const salesAreaErrorString = `Invalid SalesArea at ${salesAreaIndex}`;
                if (errors.includes(salesAreaErrorString)) {
                  this.getSalasArea(index)
                    .at(areaIndex)
                    .get('salesArea')
                    .setErrors({ serverError: 'Invalid sales area' });
                }
                salesAreaIndex++;
              });
              accountNumberIndex++;
              this.globalMessageService.add(
                this.getTranslatedText(`dashboard.invalidData`),
                GlobalMessageType.MSG_TYPE_ERROR,
                5000
              );
            });
          } else {
            this.globalMessageService.add(
              res?.updatesuccessflag,
              GlobalMessageType.MSG_TYPE_CONFIRMATION,
              5000
            );
            this.refreshEvent.emit(null);
          }
          window.scrollTo(0, 0);
        },
        (error) => {
          this.showChildLoader = false;
        }
      );
    } else {
      //this.clearAction.emit('');
    }
  }

  get customerAccounts(): FormArray {
    return this.myForm.get('accountLinking') as FormArray;
  }

  addCustomerFormControl() {
    this.customerAccounts.push(this.createNewAccount());
  }

  addSalasArea(customerIndex) {
    this.getSalasArea(customerIndex).push(this.createNewSalasArea());
  }

  createNewAccount(): FormGroup {
    return this.fb.group({
      customerNumber: [null, Validators.required],
      salesareaList: this.fb.array([this.createNewSalasArea()]),
    });
  }

  createNewSalasArea(data?) {
    return this.fb.group({
      salesArea: [
        data || '',
        [
          Validators.required,
          // Validators.pattern(/^[0-9]{4,6}_[a-zA-Z]{2}_[a-zA-Z]{2,}$/),
          Validators.pattern(/^[0-9a-zA-Z-_]*$/),
        ],
      ],
    });
  }

  removeCustomerFormControl(i) {
    this.customerAccounts.removeAt(i);
  }

  getSalasArea(customerIndex: number): FormArray {
    return this.customerAccounts
      .at(customerIndex)
      .get('salesareaList') as FormArray;
  }

  removeSalesAreaFormControl(customerIndex, salesAreaIndex) {
    return this.getSalasArea(customerIndex).removeAt(salesAreaIndex);
  }

  openCommetBox(status) {
    const commentDialog = this.launchDialogService.openDialog(
      DS_DIALOG.CSR_REQUEST_REJECT_ACTION,
      undefined,
      undefined,
      { status }
    );
    if (commentDialog) {
      commentDialog.pipe(take(1)).subscribe((value) => {});
      this.launchDialogService.dialogClose.pipe(take(2)).subscribe((value) => {
        if (value !== undefined && value?.action == 'submit') {
          this.onSubmit(status, value?.comment);
        }
      });
    }
  }

  downloadAttachment(code: string) {
    return this.dashboardService
      .getRequestDetailsinXLSFormat({ mediaCode: code })
      .subscribe({
        next: (r) => this.saveAsWithServerName(r),
        error: (error) => {},
      });
  }

  saveAsWithServerName(
    response: HttpResponse<Blob>,
    defaultName = 'NoName.pdf'
  ) {
    const fileName = response.headers
      .get('content-disposition')
      .split(';')
      .map((h) => h.trim())
      .filter((h) => h.startsWith('filename='))
      .reduce((h) => (h.length === 1 ? h[0] : defaultName))
      .replace('filename=', '');
    saveAs(response.body, fileName);
  }

  getDetailName(detailKey: string): string {
    switch (detailKey) {
      case 'DUNS_BREAD_SHEET_NUMBER':
        return this.getTranslatedText(`dashboard.dunBreadstreetNumber`);
      case 'SERIAL_NUMBER':
        return this.getTranslatedText(`dashboard.serialNumber`);
      case 'PO_NUMBER':
        return this.getTranslatedText(`dashboard.poNumber`);
      case 'INVOICE_NUMBER':
        return this.getTranslatedText(`dashboard.invoiceNumber`);
    }
  }

  getDownloadNameMediaCode(nameCode: string): {
    mediaCode: string;
    downloadName: string;
  } {
    let nameCodeArray = nameCode.split('-');
    return {
      mediaCode: nameCodeArray[0],
      downloadName: nameCodeArray[1],
    };
  }
}
