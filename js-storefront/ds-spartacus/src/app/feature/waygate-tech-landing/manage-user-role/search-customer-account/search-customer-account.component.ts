import { Component, Output, EventEmitter } from '@angular/core';
import { RoleManagementService } from '../manage-user-role.service';
import { ChangeDetectorRef } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { ManageUserRoleComponent } from '../manage-user-role.component';

@Component({
  standalone: false,
  selector: 'app-search-customer-account',
  templateUrl: './search-customer-account.component.html',
  styleUrls: ['./search-customer-account.component.scss']
})
export class SearchCustomerAccountComponent {
  @Output() close = new EventEmitter<void>();
  breadcrumbs: { name: string; url: string }[] = [];
  searchTerm: string = '';
  showLoader: boolean = false;
  filteredAccounts: any[] = [];
  selectedAccount: any;
  searchPerformed: boolean = false;

  constructor(
    private roleManageService: RoleManagementService,
    private cdr: ChangeDetectorRef,
    private translationService: TranslationService,
    private manageUserRoleComponent: ManageUserRoleComponent,
  ) {}

  ngOnInit() {
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
  }

  closePopup() {
    this.close.emit();
  }

  onSearch() {
    if (this.searchTerm.length >= 3) { 
      this.showLoader = true;
      this.searchPerformed = true;
      const params = {
        searchTerm: this.searchTerm,
        page: 0,
        pageSize: 10
      };
  
      this.roleManageService.getAccount(params).subscribe({
        next: (res) => {
          this.showLoader = false;
          this.filteredAccounts = res.results;
          console.log('Search results:', this.filteredAccounts);
          this.cdr.detectChanges(); 
        },
        error: (err) => {
          this.showLoader = false;
          console.error('Error fetching account data:', err);
        }
      });
    } else {
      this.filteredAccounts = [];
      this.searchPerformed = false;
      this.cdr.detectChanges();
    }
  }

  clearSearch() {
    this.searchTerm = '';
    this.filteredAccounts = [];
    this.searchPerformed = false;
    this.cdr.detectChanges(); 
  }

  onSelectAccount(b2bUnit: any) {
    this.selectedAccount = b2bUnit;
  }

  selectAccount() {
    if (this.selectedAccount) {
      this.close.emit(this.selectedAccount);
    } else {
      console.warn('No account selected');
    }
  }
}