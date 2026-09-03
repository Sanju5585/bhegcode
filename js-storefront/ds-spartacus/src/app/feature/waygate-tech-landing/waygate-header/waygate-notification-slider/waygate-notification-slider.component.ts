import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';
import { WindowRef } from '@spartacus/core';
import { take } from 'rxjs/operators';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { OrderTrackingService } from '../../../order-tracking/order-tracking.service';

@Component({
  standalone: false,
  selector: 'app-waygate-notification-slider',
  templateUrl: './waygate-notification-slider.component.html',
  styleUrls: ['./waygate-notification-slider.component.scss'],
})
export class WaygateNotificationSliderComponent implements OnDestroy, OnInit {
  params: any;
  orderData: any;
  isComponentLoaded: boolean = false;
  @Input() toggleMarging: boolean = false;
  productLine: string;
  b2bUnit: String;
  readOrders: any;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: PointerEvent) {
    const nativeElement: any = this.eRef.nativeElement;
    const clickedInside: boolean = nativeElement.contains(event.target);
    if (!clickedInside && this.isComponentLoaded) {
      this.close();
    }
  }

  constructor(
    private custAccountService: CustomerAccountService,
    private renderer: Renderer2,
    private eRef: ElementRef,
    private orderTrackingService: OrderTrackingService,
    private router: Router,
    protected winRef: WindowRef
  ) {
    this.renderer.addClass(document.body, 'modal-open');
    this.custAccountService
      .getCurrentCustomerAccount()
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res && res.uid) {
          this.b2bUnit = res.uid;
        }
      });
  }

  ngOnInit() {
    this.custAccountService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.custAccountService.notificationData.subscribe((list) => {
      this.orderData = list;
    });
  }

  ngOnDestroy() {
    this.isComponentLoaded = false;
    this.renderer.removeClass(document.body, 'modal-open');
  }

  close() {
    this.custAccountService.notificationSliderSource.next(false);
  }

  readAction(order: any) {
    if (order?.isOrderRead) {
      this.goToOrderDetails(order?.orderId);
    } else {
      this.orderTrackingService
        .readNotifications(order?.orderId)
        .subscribe((response: any) => {
          if (response) {
            this.orderData?.forEach((entry, index) => {
              if (entry.orderId == order?.orderId) {
                this.orderData[index].isOrderRead = true;
              }
            });
            sessionStorage.setItem(
              `notifications_${this.b2bUnit}`,
              JSON.stringify(this.orderData)
            );
            this.custAccountService.updateNotification(this.orderData);
            this.goToOrderDetails(order?.orderId);
          }
        });
    }
  }

  goToOrderDetails(orderId) {
    this.close();
    this.router.navigate(['/', this.productLine, 'my-orders', orderId]);
  }
}
