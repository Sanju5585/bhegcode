import { Component, OnInit } from '@angular/core';
import { LandingPagesService } from '../../landing-pages.service';
import { Router } from '@angular/router';
import { OrderTrackingService } from '../../../order-tracking/order-tracking.service';
import { RmaTrackingService } from '../../../rma/rma-tracking/rma-tracking.service';

@Component({
  standalone: false,
  selector: 'app-order-and-return',
  templateUrl: './order-and-return.component.html',
  styleUrls: ['./order-and-return.component.scss'],
})
export class OrderAndReturnComponent implements OnInit {
  recentData = false;
  index = 0;
  orderData;
  rmaData;
  custmerAcc = [];
  constructor(
    private landingPagesService: LandingPagesService,
    public rmaTrackingService: RmaTrackingService,
    public orderTrackingService: OrderTrackingService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getRecentOrder();
    this.getRecentReturn();
  }

  getRecentOrder() {
    this.landingPagesService.recentOrder().subscribe((res: any) => {
      this.orderData = res.orderData;
      this.custmerAcc = res.baseCustomerAccount.split('-');
    });
  }

  getRecentReturn() {
    this.landingPagesService.recentReturn().subscribe((res: any) => {
      this.recentData = res.rmaHeaderStatusDetails;
    });
  }

  orderredirect(code, element) {
    this.orderTrackingService.emitOrderDetail.next(element);
    this.router.navigate(['/order-details', code]);
  }
  rmaredirect(rmaNumber, element) {
    this.rmaTrackingService.emitRmaDetail.next(element);
    this.router.navigate(['/rma-details', rmaNumber]);
  }
}
