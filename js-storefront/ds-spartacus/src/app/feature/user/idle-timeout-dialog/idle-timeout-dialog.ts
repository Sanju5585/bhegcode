import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  SecurityContext,
} from '@angular/core';
import { Router } from '@angular/router';
import { LaunchDialogService } from '@spartacus/storefront';
import { interval, Subscription } from 'rxjs';
import {
  AuthStorageService,
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_ANONYMOUS,
  OccEndpointsService,
} from '@spartacus/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { UserRoleService } from '../../../shared/services/user-role.service';

@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'ds-idle-timeout-dialog',
  templateUrl: './idle-timeout-dialog.html',
  styleUrls: ['./idle-timeout-dialog.scss'],
})
export class IdleSessionTimeoutDialogComponent implements OnInit, OnDestroy {
  public secondsToDday;
  subscription = new Subscription();
  private startTime: number | null = null;
  private counterdownInterval: any;
  constructor(
    public launchDialogService: LaunchDialogService,
    private router: Router
  ) {
    //private idle: Idle
  }

  ngOnInit(): void {
    this.launchDialogService.data$.subscribe((data) => {
      this.secondsToDday = data.timeout;
    });

    // this.subscription.add(
    //   interval(1000).subscribe((x) => {
    //     this.secondsToDday = this.secondsToDday - 1;
    //     if (this.secondsToDday == 0) {
    //       this.closeModal('logout');
    //       // this.logout();
    //     }
    //   })
    // );
    this.startCountDown();
  }

  closeModal(reason) {
    this.clearInetrval();
    this.launchDialogService.closeDialog(reason);
    // if (reason == 'logout') {
    //   this.logout();
    // }
  }

  logout() {
    //console.log('idle-timeout logout');
    //this.router.navigate(['logout']);
    // this.authStorageService
    //   .getToken()
    //   .pipe()
    //   .subscribe(
    //     (data) => {
    //       if (data && data.access_token) {
    //         if (data.access_token) {
    //           const url = `dslogin/revoke/${data.access_token}`;
    //           const loginUrl = this.occEndpointsService.buildUrl(url);
    //           this.http
    //             .get(loginUrl, { responseType: 'text' as 'json' })
    //             .subscribe(
    //               (res: any) => {
    //                 console.log('revoke token',res);
    //                 if (res) {
    //                   const userType = OCC_USER_ID_ANONYMOUS;
    //                   this.userRoleService.getCurrentUserRole(userType);
    //                   localStorage.clear();
    //                   let returnUrl = res?.split('?')[1]?.split('=')[1];
    //                   returnUrl = returnUrl
    //                     ? returnUrl
    //                     : this.sanitizer.sanitize(
    //                         SecurityContext.URL,
    //                         window.location.origin
    //                       );
    //                   window.location.href = this.sanitizer.sanitize(
    //                     SecurityContext.URL,
    //                     returnUrl
    //                   );
    //                 } else {
    //                   this.globalMessageService.add(
    //                     'Something went wrong on logout.',
    //                     GlobalMessageType.MSG_TYPE_ERROR,
    //                     10000
    //                   );
    //                 }
    //               },
    //               (err) => {
    //                 this.globalMessageService.add(
    //                   'Something went wrong on logout.',
    //                   GlobalMessageType.MSG_TYPE_ERROR,
    //                   10000
    //                 );
    //               }
    //             );
    //         }
    //       }
    //     },
    //     (error) => {
    //       this.globalMessageService.add(
    //         error,
    //         GlobalMessageType.MSG_TYPE_ERROR,
    //         5000
    //       );
    //       window.scrollTo(0, 0);
    //     }
    //   );
  }

  startCountDown() {
    this.startTime = Date.now();
    this.counterdownInterval = setInterval(() => {
      const elasped = Math.floor((Date.now() - (this.startTime || 0)) / 1000);
      this.secondsToDday = Math.max(60 - elasped, 0);
      if (this.secondsToDday == 0) {
        this.closeModal('logout');
      }
    }, 1000);
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  clearInetrval() {
    if (this.counterdownInterval) {
      clearInterval(this.counterdownInterval);
      this.counterdownInterval = null;
    }
  }
}
