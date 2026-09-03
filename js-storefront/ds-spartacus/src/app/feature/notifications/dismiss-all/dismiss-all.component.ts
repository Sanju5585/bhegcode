import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LaunchDialogService } from '@spartacus/storefront';
import { NotificationsService } from '../notifications.service';

@Component({
  standalone: false,
  selector: 'app-dismiss-all',
  templateUrl: './dismiss-all.component.html',
  styleUrls: ['./dismiss-all.component.scss'],
})
export class DismissAllComponent implements OnInit {
  closeDismissAllWindow: boolean = false;
  showSpinner: boolean = false;
  notificationsResponse = [];
  notificationsList: any;
  unreadNotifications = [];
  readNotifcations = [];
  currentlyLoading: boolean = false;

  constructor(
    private launchDialogService: LaunchDialogService,
    public notificationService: NotificationsService,
    private datePipe: DatePipe
  ) {
    this.noticationFilters.fromDate = this.datePipe.transform(
      this.defaultFromDate.setMonth(this.defaultToDate.getMonth() - 2),
      'yyyy-MM-dd'
    );
    this.unreadNoticationDismissFilters.fromDate = this.datePipe.transform(
      this.defaultFromDate.setMonth(this.defaultToDate.getMonth() - 2),
      'yyyy-MM-dd'
    );
  }

  ngOnInit(): void {}

  closeModal(reason?: any) {
    this.launchDialogService.closeDialog(reason);
  }

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

  getAllNotifications() {
    //const filters = { ...this.notificationService.melFilters }
    this.currentlyLoading = true;
    let notificationsList = [];
    this.notificationService
      .getAllNotifications(this.noticationFilters)
      .subscribe((res: any) => {
        this.currentlyLoading = false;
        this.notificationsResponse = res;
        this.unreadNotifications = this.notificationsResponse.filter(
          (notifications) =>
            notifications.isRead === false &&
            notifications.isDismissed === false
        );
        this.readNotifcations = this.notificationsResponse.filter(
          (notifications) =>
            notifications.isRead === true && notifications.isDismissed === false
        );
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

  unreadNoticationDismissFilters: any = {
    MANorMELflag: 'CP_ALL',
    dismissAll: 'unread',
    fields: 'DEFAULT',
    filterBy: 'totalItems',
    fromDate: this.datePipe.transform(this.defaultFromDate, 'yyyy-MM-dd'),
    refreshFlag: true,
    toDate: this.datePipe.transform(this.defaultToDate, 'yyyy-MM-dd'),
  };

  dismissAllUnreadNotifications() {
    this.currentlyLoading = true;
    this.showSpinner = true;
    //this.noticationFilters.dismissAll=true
    this.notificationService
      .getAllNotifications(this.unreadNoticationDismissFilters)
      .subscribe((res: any) => {
        /* if(dismissAllFlag == true){
        this.unreadNotifications = this.notificationsResponse.filter(
          (notifications) =>
          notifications.isRead === false && notifications.isDismissed == false
        )
        this.readNotifcations = this.notificationsResponse.filter(
          (notifications) => notifications.isRead === true &&  notifications.isDismissed === false
        )
      }*/
        this.currentlyLoading = false;
        this.notificationsResponse = res;
        this.getAllNotifications();
        this.showSpinner = false;
        this.launchDialogService.closeDialog(true);
      });
  }
}
