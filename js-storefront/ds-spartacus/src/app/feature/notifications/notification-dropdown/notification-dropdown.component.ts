import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NotificationsService } from '../notifications.service';

@Component({
  standalone: false,
  selector: 'app-notification-dropdown',
  templateUrl: './notification-dropdown.component.html',
  styleUrls: ['./notification-dropdown.component.scss'],
})
export class NotificationDropdownComponent implements OnInit {
  props: any = {};

  notificationOpened = false;
  @Input() notificationsResponse = [];
  notificationsList: any;
  currentlyLoading: boolean = false;
  unreadNotifications = [];
  readNotifcations = [];
  filteredNotification = [];
  getNotificationCount: number = 0;

  public defaultFromDate: Date = new Date();
  public defaultToDate: Date = new Date();

  noticationFilters: any = {
    MANorMELflag: 'CP_ALL',
    fields: 'DEFAULT',
    filterBy: 'totalItems',
    fromDate: this.datePipe.transform(this.defaultFromDate, 'yyyy-MM-dd'),
    refreshFlag: true,
    toDate: this.datePipe.transform(this.defaultToDate, 'yyyy-MM-dd'),
  };

  constructor(
    private router: Router,
    public notificationService: NotificationsService,
    private datePipe: DatePipe
  ) {
    this.noticationFilters.fromDate = this.datePipe.transform(
      this.defaultFromDate.setMonth(this.defaultToDate.getMonth() - 2),
      'yyyy-MM-dd'
    );
  }

  ngOnInit(): void {
    this.getNotifications();
    this.filteredNotification = this.notificationsResponse.filter(
      (notifications) => notifications.isDismissed === false
    );
    this.notificationService.getUpdatedCount = this.notificationsResponse;
  }

  viewDetailedNotifications() {
    this.router.navigate(['/detailed-notification-page']);
  }

  getNotifications() {
    this.currentlyLoading = true;
    let notificationsList = [];
    this.notificationService
      .getAllNotifications(this.noticationFilters)
      .subscribe((res: any) => {
        this.currentlyLoading = false;
        this.notificationsResponse = res;
        this.filteredNotification = this.notificationsResponse.filter(
          (notifications) => notifications.isDismissed === false
        );
        this.notificationService.getUpdatedCount =
          this.filteredNotification.length;
        if (res) {
          this.notificationsResponse.forEach((notifications) => {
            notificationsList.push({
              label: notifications.attributeValue,
              value: notifications.attributeId,
            });
          });
        }
      });
  }

  dismissedNotifications(partNumber, serialNumber, isFlag) {
    const dismissedFilters: any = {
      fields: 'DEFAULT',
      partNumber: partNumber,
      serialNumber: serialNumber,
      setDismissed: isFlag,
    };
    this.notificationService
      .dismissedReadNotifications(dismissedFilters)
      .subscribe((res: any) => {
        this.ngOnInit();
        //this.getAllNotifications()
      });
    this.unreadNotifications.splice(partNumber, serialNumber);
  }

  openEquipmentDetails(partNumber, serialNumber, customer) {
    this.router.navigate(['/equipment-details'], {
      queryParams: {
        partNumber: partNumber,
        serialNumber: serialNumber,
        customer: customer,
      },
    });
  }
}
