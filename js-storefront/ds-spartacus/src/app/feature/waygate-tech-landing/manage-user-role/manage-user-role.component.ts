import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslationService } from '@spartacus/core';
import moment from 'moment';
import { RoleManagementService } from './manage-user-role.service';
import {
  USER_ROLE_STATUS,
  UserDetails,
  UserListResult,
} from './manage-user-role.model';
import saveAs from 'file-saver';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'app-manage-user-role',
  templateUrl: './manage-user-role.component.html',
  styleUrls: ['./manage-user-role.component.scss'],
})
export class ManageUserRoleComponent implements OnInit {
  breadcrumbs: { name: string; url: string }[] = [];
  totalCount: number = 0;
  selectedRole: string = '';
  selectedTableRole: string = '';
  selectedStatus: boolean;
  searchTerm: any;
  pageSizes = [10, 20, 50, 100];
  noData: boolean;
  isPopupOpen = false;
  startRange = 1;
  currentPageSize = 10;
  endRange = this.currentPageSize;
  totalPages: number = 10;
  currentPage: number = 1;
  userData: UserListResult;

  params: any;
  roleOptions: { label: string; value: string }[] = [
    {
      label: 'waygate.manage-user.allRoles',
      value: USER_ROLE_STATUS.ALL_ROLES,
    },
    {
      label: 'waygate.manage-user.viewRoles',
      value: USER_ROLE_STATUS.VIEW_ACCESS,
    },
    {
      label: 'waygate.manage-user.fullRoles',
      value: USER_ROLE_STATUS.FULL_ACCESS,
    },
  ];
  customerOptions: { name: string; id: string }[] = [];
  selectedCustomer: string;
  editIndex: number;
  accessIndex: number;
  showLoader: boolean = false;
  selectedUserDetail: UserDetails;
  customerNameNumber: string;
  isInternalActive: boolean = true;
  customerNameNumberCopy: string;
  searchControl = new FormControl('');
  constructor(
    private translationService: TranslationService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private roleManageService: RoleManagementService,
    private custAccService: CustomerAccountService
  ) {}

  ngOnInit(): void {
    this.custAccService.getCurrentCustomerAccount().subscribe((customer) => {
      this.customerNameNumber = customer.name + '-' + customer.uid;
    });
    this.translationService
      .translate('dashboard.manageUser')
      .subscribe((res: string) => {
        this.breadcrumbs = [
          {
            name: res,
            url: '/waygate/manage-role',
          },
        ];
      });

    this.updateLangForOptions(this.roleOptions, 'label');

    this.activateRoute.queryParams.subscribe((params: any) => {
      this.params = {
        ...this.params,
        ...params,
        page: params?.page || 0,
        searchTerm: params?.searchTerm || '',
        pageSize: params?.pageSize || 10,
        sort: params?.sort || 'byNameAsc',
        filterRoles: params?.filterRoles || '',
        isInternalusers: params?.isInternalusers || 'false',
      };
      this.isInternalActive =
        this.params.isInternalusers === 'true' ? true : false;
      console.log(
        this.params.isInternalusers === 'true',
        this.params.isInternalusers
      );
      this.searchControl.setValue(this.params.searchTerm);
      this.selectedRole = this.params.filterRoles;
      this.getOrders();
    });
    setTimeout(() => {
      this.roleOptions = [...this.roleOptions];
    }, 500);

    this.searchControl.valueChanges
      .pipe(debounceTime(1000)) // Delay for 500 milliseconds
      .subscribe((searchValue) => {
        if (searchValue != this.params?.searchTerm) {
          this.search();
        }
      });
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translationService.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }

  editUserDetail(i: number, userDetail: UserDetails): void {
    this.selectedUserDetail = userDetail;
    this.editIndex = i;
    this.selectedTableRole = userDetail.dsRoles;
    this.selectedStatus = !userDetail.loginDisabled;
  }

  updateUser(): void {
    const params = {
      loginDisabled: !this.selectedStatus,
      role: this.selectedTableRole,
      uid: this.selectedUserDetail.uid,
    };
    this.roleManageService.updateStatus(params).subscribe({
      next: (res) => {
        if (res) {
          this.getOrders();
        }
      },
      error: (err) => {},
    });
  }

  loginChange(env, i): void {
    this.selectedStatus = env.target.checked;
  }

  getOrders(): void {
    this.closeEdit();
    this.showLoader = true;
    this.params = {
      ...this.params,
    };
    this.roleManageService.getUserList(this.params).subscribe({
      next: (userList: UserListResult) => {
        this.showLoader = false;
        this.userData = userList;
        this.totalCount = userList?.pagination?.totalResults;
        this.startRange =
          userList?.pagination?.currentPage * userList?.pagination?.pageSize +
          1;
        this.endRange = Math.min(
          this.startRange + userList?.pagination?.pageSize - 1,
          userList?.pagination?.totalResults
        );
        this.totalPages = userList?.pagination?.totalPages;
        this.currentPage = userList?.pagination?.currentPage + 1;
        this.currentPageSize = userList?.pagination?.pageSize;
        if (this.params.isInternalusers) {
          this.isInternalActive =
            this.params.isInternalusers === 'true' ? true : false;
        }
      },
      error: (error) => {
        this.showLoader = false;
      },
    });
  }

  onUserClick(isInternalusers: boolean): void {
    this.setRoute({
      isInternalusers: isInternalusers,
      page: 0,
    });
  }
  onRoleChange(event): void {
    this.setRoute({
      filterRoles: event.value,
      page: 0,
    });
  }

  onCustomerChange(event): void {
    this.selectedCustomer = event.value;
  }

  search(): void {
    this.setRoute({
      searchTerm: this.searchControl.value,
      page: 0,
    });
  }

  onChangeAccount() {
    this.isPopupOpen = true;
  }
  closePopup(selectedAccount?: any) {
    if (selectedAccount) {
      console.log('Selected account:', selectedAccount);
      this.params = {
        ...this.params,
        b2bUnit: selectedAccount.uid,
      };
      this.customerNameNumberCopy =
        selectedAccount.name + '-' + selectedAccount.uid;
      this.getOrders();
    }
    this.isPopupOpen = false;
  }
  downloadXls(): void {
    this.params = {
      ...this.params,
      searchTerm: this.searchControl.value,
    };
    this.roleManageService.getDetailsinXLSFormat(this.params).subscribe({
      next: (res) => {
        if (res !== null && res !== undefined) {
          const currentDate = moment(new Date()).format('D-MMM-yyyy');
          let fileName = 'UsersList_' + currentDate;
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

  sort(sortCode): void {
    this.setRoute({ sort: sortCode, page: 0 });
  }

  protected setRoute(queryParams): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.activateRoute,
    });
  }

  handleChange(event, type, user): void {
    this.selectedTableRole =
      type === 'fullAccessType' ? 'UG_ADMIN_ORDER_STORE' : 'UG_VIEW_STORE';
  }

  pageSizeChanged(event): void {
    this.currentPageSize = parseInt(event?.target?.value);
    this.setRoute({ pageSize: this.currentPageSize, page: 0 });
  }

  pageSelected(pageNo): void {
    if (1 <= pageNo) {
      this.currentPage = parseInt(pageNo);
      this.setRoute({ page: this.currentPage - 1 });
    }
  }

  createArray(N): number[] {
    let newArr = [];
    for (let i = 1; i <= N; i++) {
      newArr.push(i);
    }
    return newArr;
  }

  getPageArray(): number[] {
    return this.createArray(this.totalPages);
  }

  async getTranslatedText(key) {
    let message = key;
    await this.translationService.translate(key).subscribe((res) => {
      message = res;
      return res;
    });
    return message;
  }

  closeEdit() {
    this.editIndex = -1;
    delete this.selectedUserDetail;
  }
}
