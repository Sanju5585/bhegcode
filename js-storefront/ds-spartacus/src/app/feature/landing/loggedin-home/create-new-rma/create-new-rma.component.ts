import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { environment } from '../../../../../environments/environment';
import { ProductReturnService } from '../../../../core/product-catalog/services/product-return.service';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';

@Component({
  standalone: false,
  selector: 'app-create-new-rma',
  templateUrl: './create-new-rma.component.html',
  styleUrls: ['./create-new-rma.component.scss'],
})
export class CreateNewRmaComponent implements OnInit, OnDestroy {
  private createRmaSubscripton: Subscription;
  showCustomerFiles: boolean = false;
  userDetails;
  productLine: string;

  constructor(
    private productReturnService: ProductReturnService,
    private router: Router,
    private customerAccService: CustomerAccountService,
    private userAccountFacade: UserAccountFacade
  ) {}

  ngOnDestroy(): void {
    this.createRmaSubscripton?.unsubscribe();
  }

  ngOnInit(): void {
    // To check private folder access
    this.userAccountFacade.get().subscribe((res) => {
      this.userDetails = res;
      if (res.hasOwnProperty('isPrivateFolderExists')) {
        this.showCustomerFiles = this.userDetails?.isPrivateFolderExists;
      } else {
        this.showCustomerFiles = false;
      }
    });
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
  }

  createNewRma() {
    // this.productReturnService.rmaValidateAndRedirect(this.modalRef, {});
    this.router.navigate([`/${this.productLine}/returns/cart`]);
    //******************As per Business suggestion no need to check Switch To Returns Cart pop up from home page */
    //  const updatedProduct = {};
    // this.createRmaSubscripton = this.productReturnService
    //   .rmaValidateAndRedirect(this.modalRef, updatedProduct)
    //   .subscribe((val: any) => {
    //     if (!val?.modal) {
    //       this.multiCartFacade.reloadCart(val, {
    //         active: true,
    //       });
    //       this.productReturnService.selectRmaProduct(updatedProduct);
    //       this.router.navigate(['/rma-form']);
    //     }
    //   });
    // ************************* code commented ***********************************
  }

  viewCalibrationData() {
    this.router.navigate(['/calibration-data']);
  }

  viewEquipment() {
    this.router.navigate(['/my-equipments']);
  }

  redirectToBynder() {
    this.router.navigate(['/search-private-folder']);
    const bynderUrl = environment.bynderUrl;
    window.open(bynderUrl, '_blank');
  }
}
