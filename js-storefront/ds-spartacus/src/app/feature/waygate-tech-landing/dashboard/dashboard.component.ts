import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslationService } from '@spartacus/core';
import { DashboardService } from './dashboard.service';
import {
  AccountListResult,
  AccountStatus,
  DashboardStatusCount,
} from './dashboard.model';
import { LaunchDialogService } from '@spartacus/storefront';
import { debounceTime, switchMap, take, tap } from 'rxjs/operators';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import {
  AllProductLine,
  AllProductLineNames,
} from '../../../shared/enums/availableProductList.enum';
import moment from 'moment';
import saveAs from 'file-saver';
import { FormControl } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  breadcrumbs: any[] = [];
  statusCount: DashboardStatusCount = {
    pendingApprovalCount: 0,
    approvedCount: 0,
    onHoldCount: 0,
    rejectedCount: 0,
    completedCount: 0,
    all: 0,
  };

  pageSizes = [10, 20, 50, 100];
  startRange = 1;
  totalCount = 0;
  currentPageSize = 10;

  endRange = this.currentPageSize;
  showRequestDetails: boolean = false;
  totalPages: number;
  currentPage: number = 1;
  newAction: any = { status: '' };
  selectedAccount: any = {};
  params: any = {};
  avaiableStatus = AccountStatus;
  customerList: any[] = [];
  statusLabel = {
    [AccountStatus.pending]: `dashboard.pendingStatusText`,
    [AccountStatus.onHold]: `dashboard.onHoldStatusText`,
    [AccountStatus.rejected]: `dashboard.rejectedStatusText`,
    [AccountStatus.approved]: `dashboard.accessPendingStatusText`,
    [AccountStatus.completed]: `dashboard.accessGrantedStatusText`,
  };
  showLoader: boolean;
  showRequestDetailLoader: boolean;
  selectedProductLines: { value: string; label: string }[] = [];
  selectedProduct: string = '';
  defaultFromDate: Date = new Date();
  defaultToDate: Date = new Date();
  name: string = '';
  productline: string = '';
  searchControl = new FormControl('');
  constructor(
    private translationService: TranslationService,
    private activateRoute: ActivatedRoute,
    private dashboardService: DashboardService,
    private router: Router,
    private launchDialogService: LaunchDialogService,
    private customerAccountService: CustomerAccountService
  ) {
    this.defaultFromDate.setFullYear(this.defaultFromDate.getFullYear() - 1);
    this.onRouteChange();
  }

  ngOnInit() {
    this.translationService
      .translate('dashboard.registrationRequest')
      .subscribe((res: string) => {
        this.breadcrumbs = [
          {
            name: res,
            url: '/dashboard',
          },
        ];
      });
    this.searchControl.valueChanges
      .pipe(debounceTime(1000)) // Delay for 500 milliseconds
      .subscribe((searchValue) => {
        if (searchValue != this.params?.name) {
          this.search();
        }
      });
    this.customerAccountService.getAccessCSRProductLines().subscribe({
      next: (productLines: any) => {
        this.selectedProductLines = [];
        if (typeof productLines === 'object' && productLines.length > 0) {
          this.translationService
            .translate('dashboard.allProductLines')
            .subscribe((res: string) => {
              this.selectedProductLines.push({
                value: '',
                label: res,
              });
            });
          productLines.forEach((item) => {
            let modItem = item;
            if (
              AllProductLineNames[item] ===
              AllProductLineNames[AllProductLine.bently]
            ) {
              modItem = AllProductLine.bently;
            }
            this.selectedProductLines.push({
              value: modItem,
              label: AllProductLineNames[item],
            });
          });
        }
      },
    });
  }

  onRouteChange() {
    this.customerAccountService
      .getProductLine()
      .pipe(
        tap((productline) => (this.productline = productline)),
        switchMap(() => this.activateRoute.queryParams)
      )
      .subscribe((params: any) => {
        // In this block we are are finding the which period are selected like 3, 6, 12 or 24 months
        this.params = {
          ...this.params,
          ...params,
          page: params?.page || 0,
          reqStatusVal:
            AccountStatus[params?.reqStatusVal] || AccountStatus.all,
          pageSize: params?.pageSize || 10,
          productLine:
            params?.productLine === '' || params?.productLine
              ? params?.productLine
              : this.productline,
          name: params?.name || '',
          fromDate:
            params?.fromDate ||
            this.convertDate(this.defaultFromDate, 'yyyy-mm-dd'),
          toDate:
            params?.toDate ||
            this.convertDate(this.defaultToDate, 'yyyy-mm-dd'),
        };
        if (this.params.productLine || this.params.productLine === '') {
          if (this.params.productLine === AllProductLine.bently) {
            this.selectedProduct = AllProductLine.bently;
            this.params.productLine = AllProductLine.bently;
          } else {
            this.selectedProduct = this.params.productLine;
          }
        }

        if (this.params.name) {
          this.searchControl.setValue(this.params.name);
        }

        if (!this.params.fromDate) {
        } else {
          this.defaultFromDate = new Date(
            this.convertDate(this.params.fromDate, 'time')
          );
        }

        if (!this.params.toDate) {
          const date = new Date();
          this.defaultToDate.setDate(date.getFullYear() + 1);
        } else {
          this.defaultToDate = new Date(
            this.convertDate(this.params.toDate, 'time')
          );
        }
        this.fetchCount();
        this.getUserList();
      });
  }

  refreshTable(event) {
    this.closeReqDetail();
    this.fetchCount();
    this.getUserList();
  }

  fetchCount() {
    const params = {
      toDate: this.params.toDate,
      fromDate: this.params.fromDate,
      name: this.searchControl.value,
      productLine: this.selectedProduct,
    };
    this.dashboardService
      .getStatusCount(params)
      .subscribe((resData: DashboardStatusCount) => {
        this.statusCount = resData;
        this.statusCount.all = Object.keys(resData).reduce(
          (sum, key) => sum + parseFloat(resData[key] || 0),
          0
        );
      });
  }

  getUserList() {
    this.showLoader = true;
    const params = { ...this.params };
    // this.noData = false;
    // this.customerList$ = ;
    if (this.params.reqStatusVal === this.avaiableStatus.all) {
      delete params.reqStatusVal;
    }
    this.dashboardService
      .getCustomerList(params)
      // .pipe(share());
      .subscribe(
        (customerData: AccountListResult) => {
          this.showLoader = false;
          this.customerList = customerData?.results || [];

          this.totalCount = customerData?.pagination?.totalResults;
          this.startRange =
            customerData?.pagination?.currentPage *
              customerData?.pagination?.pageSize +
            1;
          this.endRange = Math.min(
            this.startRange + customerData?.pagination?.pageSize - 1,
            customerData?.pagination?.totalResults
          );
          this.totalPages = customerData?.pagination?.totalPages;
          this.currentPage = customerData?.pagination?.currentPage + 1;
          this.currentPageSize = customerData?.pagination?.pageSize;
        },
        (error) => {
          this.showLoader = false;
        }
      );
  }

  pageSizeChanged(event) {
    this.currentPageSize = parseInt(event?.target?.value);
    this.setRoute({ pageSize: this.currentPageSize, page: 0 });
  }

  pageSelected(pageNo) {
    if (1 <= pageNo) {
      this.currentPage = parseInt(pageNo);
      this.setRoute({ page: this.currentPage - 1 });
    }
  }

  createArray(N) {
    let newArr = [];
    for (let i = 1; i <= N; i++) {
      newArr.push(i);
    }
    return newArr;
  }

  getPageArray() {
    return this.createArray(this.totalPages);
  }

  /**
   * @description this will update the selected status and change the route with selected status, call api
   * @returns void
   */
  onStatusChange(selectedStatus): void {
    this.setRoute({
      reqStatusVal: selectedStatus,
      // orderStatus: this.selectedTile,
      page: 0,
    });
  }

  protected setRoute(queryParams): void {
    this.closeReqDetail();
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.activateRoute,
    });
  }

  async getTranslatedText(key) {
    let message = key;
    await this.translationService.translate(key).subscribe((res) => {
      message = res;
      return res;
    });
    return message;
  }

  sort(sortCode) {
    this.setRoute({ sortBy: sortCode, page: 0 });
  }

  getClass = (orderStatus) => {
    return orderStatus.replace(/\s/g, '').replace(/\&/g, '');
  };

  onSelectedCustomerAction(account: any) {
    if (this.showRequestDetails) {
      this.closeReqDetail();
    }
    this.fecthCustomerDetails(account?.accessRequestId);
  }

  onUpdateStatus(status) {
    this.newAction = { status };
  }

  closeReqDetail() {
    this.showRequestDetails = false;
    this.newAction = { status: '' };
    this.selectedAccount = {};
  }

  fecthCustomerDetails(accessRequestId) {
    this.showRequestDetailLoader = true;
    this.dashboardService.getCustomerDetail(accessRequestId).subscribe(
      (account: any) => {
        this.showRequestDetailLoader = false;
        this.showRequestDetails = true;
        this.selectedAccount = account;
      },
      (error) => {
        this.selectedAccount = {};
        this.showRequestDetails = false;
        this.showRequestDetailLoader = false;
      }
    );
  }

  showAccessCriteria() {
    const ruleList = this.selectedAccount.approvalRuleList;
    const approvalDialog = this.launchDialogService.openDialog(
      DS_DIALOG.CSR_APPROVAL_CRITERIA_LIST,
      undefined,
      undefined,
      { ruleList }
    );
    if (approvalDialog) {
      approvalDialog.pipe(take(1)).subscribe((value) => {});
      this.launchDialogService.dialogClose
        .pipe(take(2))
        .subscribe((value) => {});
    }
  }

  onProductLineChange(event) {
    this.setRoute({
      productLine: event.value,
      page: 0,
    });
  }

  search() {
    this.setRoute({
      name: this.searchControl.value,
      page: 0,
    });
  }

  downloadXls() {
    const params = { ...this.params };
    if (this.params.reqStatusVal === this.avaiableStatus.all) {
      delete params.reqStatusVal;
    }
    return this.dashboardService.getDetailsinXLSFormat(params).subscribe({
      next: (res) => {
        if (res !== null && res !== undefined) {
          const currentDate = moment(new Date()).format('D-MMM-yyyy');
          let fileName = 'CSRList_' + currentDate;
          const blob = new Blob([res], { type: 'application/vnd.ms.excel' });
          const file = new File([blob], fileName + '.xlsx', {
            type: 'application/vnd.ms.excel',
          });
          saveAs(file);
        } else {
        }
      },
      error: (error) => {},
    });
  }

  dateFromChange(event) {
    this.setRoute({
      fromDate: this.convertDate(event, 'yyyy-mm-dd'),
      page: 0,
    });
  }

  dateToChange(event) {
    this.setRoute({
      toDate: this.convertDate(event, 'yyyy-mm-dd'),
      page: 0,
    });
  }

  convertDate(date, type): any {
    switch (type) {
      case 'dd/mm/yyyy':
        return moment(date).format('DD/MM/YYYY');
      case 'yyyy-mm-dd':
        return moment(date).format('YYYY-MM-DD');
      case 'time':
        const d = moment(date, 'YYYY-MM-DD').format('YYYY/MM/DD');
        return d;
      default:
        return new Date(date);
    }
  }
}
