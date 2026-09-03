import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { DatePipe } from '@angular/common';
import { TranslationService } from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';
import { NotificationsService } from '../notifications.service';

@Component({
  standalone: false,
  selector: 'app-detailed-notification-page',
  templateUrl: './detailed-notification-page.component.html',
  styleUrls: ['./detailed-notification-page.component.scss'],
})
export class DetailedNotificationPageComponent implements OnInit {
  notificationsResponse = [];
  notificationsList: any;
  isActive: boolean;
  unreadNotifications = [];
  readNotifcations = [];
  public searchParams: any = {};
  deleteTabOnSuccess: boolean = false;
  searchTerm = '';
  SerialNumber;
  partNumber;
  serialNumber;
  showSpinner: boolean = false;
  currentlyLoading: boolean = false;
  sortByValue: string;
  oldestToLatest;
  latestToOldest;
  i: any;

  sortBy = {
    itemGroups: [
      {
        items: [
          {
            label: 'notifications.latestToOldest',
            value: 'latestToOldest',
          },
          {
            label: 'notifications.oldestToLatest',
            value: 'oldestToLatest',
          },
        ],
      },
    ],
  };

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
    private launchDialogService: LaunchDialogService,
    private router: Router,
    private route: ActivatedRoute,
    public notificationService: NotificationsService,
    protected globalMessageService: GlobalMessageService,
    private datePipe: DatePipe,
    private breadCrumbService: BreadcrumbService,
    private translate: TranslationService
  ) {
    this.noticationFilters.fromDate = this.datePipe.transform(
      this.defaultFromDate.setMonth(this.defaultToDate.getMonth() - 2),
      'yyyy-MM-dd'
    );
    this.readNoticationDismissFilters.fromDate = this.datePipe.transform(
      this.defaultFromDate.setMonth(this.defaultToDate.getMonth() - 2),
      'yyyy-MM-dd'
    );
    this.unreadNoticationDismissFilters.fromDate = this.datePipe.transform(
      this.defaultFromDate.setMonth(this.defaultToDate.getMonth() - 2),
      'yyyy-MM-dd'
    );
  }
  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('notifications.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.getAllNotifications(this.noticationFilters);
    this.sortBy.itemGroups.forEach(group => {
      this.updateLangForOptions(group.items,'label')
     });
  }

  updateLangForOptions(options: any[], key: string) {
    options.forEach((object: any) => {
      this.translate.translate(object[key]).subscribe((res) => {
        object[key] = res;
      });
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  getAllNotifications(filters) {
    this.currentlyLoading = true;
    let notificationsList = [];
    this.notificationService
      .getAllNotifications(filters)
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
  closeModal() {
    this.launchDialogService.closeDialog(undefined);
  }

  openDismissAllPage() {
    this.launchDialogService.closeDialog(undefined);
    const dismissAllDialog = this.launchDialogService.openDialog(
      DS_DIALOG.DISMISS_ALL_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (dismissAllDialog) {
      dismissAllDialog.pipe(take(1)).subscribe((value) => {
        if (value) {
          this.dismissAllUnreadNotifications();
        }
      });
    }
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
        this.getAllNotifications(this.noticationFilters);
        this.showSpinner = false;
      });
  }

  openReadDismissAllPage() {
    this.launchDialogService.closeDialog(undefined);
    const readDismissAllDialog = this.launchDialogService.openDialog(
      DS_DIALOG.READ_DISMISS_ALL_DIALOG,
      undefined,
      undefined,
      {}
    );
    if (readDismissAllDialog) {
      readDismissAllDialog.pipe(take(1)).subscribe((value) => {
        if (value) {
          this.dismissAllReadNotifications();
        }
      });
    }
  }

  readNoticationDismissFilters: any = {
    MANorMELflag: 'CP_ALL',
    dismissAll: 'read',
    fields: 'DEFAULT',
    filterBy: 'totalItems',
    fromDate: this.datePipe.transform(this.defaultFromDate, 'yyyy-MM-dd'),
    refreshFlag: true,
    toDate: this.datePipe.transform(this.defaultToDate, 'yyyy-MM-dd'),
  };

  dismissAllReadNotifications() {
    this.currentlyLoading = true;
    this.showSpinner = true;
    //this.noticationFilters.dismissAll=true
    this.notificationService
      .getAllNotifications(this.readNoticationDismissFilters)
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
        this.getAllNotifications(this.noticationFilters);
        this.showSpinner = false;
      });
  }

  closeConfirmationTab() {
    this.deleteTabOnSuccess = false;
  }

  backToHome() {
    this.router.navigate(['/home']);
  }

  fillFlag() {
    this.isActive = !this.isActive;
  }

  flagNotifcation(partNumber, serialNumber, isFlag) {
    const flagFilters: any = {
      fields: 'DEFAULT',
      partNumber: partNumber,
      serialNumber: serialNumber,
      setFlag: isFlag,
    };
    this.notificationService.flagNotifications(flagFilters).subscribe(
      (res: any) => {
        this.getAllNotifications(this.noticationFilters);
      },
      (error) => {
        this.globalMessageService.add(
          this.getTranslatedText('notifications.flagNotificationFailed'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  markReadNotifications(partNumber, serialNumber, marksReadFlag) {
    const readFilters: any = {
      fields: 'DEFAULT',
      marksRead: marksReadFlag,
      partNumber: partNumber,
      serialNumber: serialNumber,
    };
    this.notificationService.markReadNotifications(readFilters).subscribe(
      (res: any) => {
        this.getAllNotifications(this.noticationFilters);
      },
      (error) => {
        this.globalMessageService.add(
          this.getTranslatedText('notifications.flagNotificationFailed'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  dismissedNotifications(partNumber, serialNumber, isFlag, isDelete) {
    this.showSpinner = true;
    this.partNumber = partNumber;
    this.serialNumber = serialNumber;
    const dismissedFilters: any = {
      fields: 'DEFAULT',
      partNumber: partNumber,
      serialNumber: serialNumber,
      setDismissed: isFlag,
    };
    this.notificationService
      .dismissedReadNotifications(dismissedFilters)
      .subscribe(
        (res: any) => {
          this.showSpinner = false;
          if (isDelete == true) {
            this.deleteTabOnSuccess = true;
          }
          if (isDelete == false) {
            this.deleteTabOnSuccess = false;
          }
          this.getAllNotifications(this.noticationFilters);
        },
        (error) => {
          this.globalMessageService.add(
            this.getTranslatedText('notifications.dismissNotificationFailed'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          window.scrollTo(0, 0);
        }
      );
    this.unreadNotifications.splice(partNumber, serialNumber);
  }

  undoDeletedNotification() {
    this.dismissedNotifications(
      this.partNumber,
      this.serialNumber,
      false,
      false
    );
  }

  protected setRoute(queryParams): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }

  sortBySelect(event) {
    if (event.target.value == '') {
      this.getAllNotifications(this.noticationFilters);
    } else {
      this.currentlyLoading = true;
      let notificationsList = [];
      let sortByFilters: any = {
        MANorMELflag: 'CP_ALL',
        fields: 'DEFAULT',
        filterBy: 'totalItems',
        fromDate: this.datePipe.transform(this.defaultFromDate, 'yyyy-MM-dd'),
        groupBy: 'DEFAULT',
        refreshFlag: true,
        sortBy: event.detail,
        toDate: this.datePipe.transform(this.defaultToDate, 'yyyy-MM-dd'),
      };
      this.getAllNotifications(sortByFilters);
      /* this.notificationService.getAllNotifications(sortByFilers).subscribe((res:any)=>{
        this.currentlyLoading = false
        this.notificationsResponse = [res]
        if (res) {
          this.notificationsResponse.forEach((notifications) => {
            notificationsList.push({
              label: notifications.attributeValue,
              value: notifications.attributeId,
            })
          })
        }
      })*/
    }
  }

  searchNotifications(event) {
    if (event.target.value == '') {
      this.getAllNotifications(this.noticationFilters);
    } else {
      this.currentlyLoading = true;
      let notificationsList = [];
      this.notificationService
        .searchNotifications(event.target.value)
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
              notifications.isRead === true &&
              notifications.isDismissed === false
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
  }
  openEquipmentDetails(partNumber, serialNumber, customer, marksReadFlag) {
    this.router.navigate(['/equipment-details'], {
      queryParams: {
        partNumber: partNumber,
        serialNumber: serialNumber,
        customer: customer,
      },
    });
    const readFilters: any = {
      fields: 'DEFAULT',
      marksRead: marksReadFlag,
      partNumber: partNumber,
      serialNumber: serialNumber,
    };
    this.notificationService.markReadNotifications(readFilters).subscribe(
      (res: any) => {
        this.getAllNotifications(this.noticationFilters);
      },
      (error) => {
        this.globalMessageService.add(
          this.getTranslatedText('notifications.flagNotificationFailed'),
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }
}
