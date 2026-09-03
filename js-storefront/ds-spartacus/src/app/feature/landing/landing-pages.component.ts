import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AuthService,
  CmsService,
  GlobalMessageService,
  GlobalMessageType,
  StorageSyncType,
  WindowRef,
} from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { BreadcrumbService } from '../../shared/components/breadcrumb/breadcrumb.service';
import { CommonService } from '../../shared/services/common.service';
import { MainService } from '../../shared/services/main.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-landing-pages',
  templateUrl: './landing-pages.component.html',
})
export class LandingPagesComponent implements OnInit, OnDestroy {
  user$: Observable<unknown>;
  userType = '';
  outageBannerComponent$: Observable<any> =
    this.cmsService.getComponentData<any>('OutageBannerComponent');
  showOutageBanner = false;

  constructor(
    protected authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private globalMessageService: GlobalMessageService,
    private breadcrumbService: BreadcrumbService,
    private cmsService: CmsService,
    private commonService: CommonService,
    protected winRef: WindowRef,
    private mainService: MainService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mainService.setTitle('Industrial Store | Baker Hughes')
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        setTimeout(() => {
          const currentUrl = event.urlAfterRedirects;
          if (currentUrl === '/' || currentUrl.includes('/homepage') || currentUrl === '') {
            this.mainService.setTitle('Industrial Store | Baker Hughes');
          }
        }, 100);
      });
    this.breadcrumbService.showHideBreadcrumb(false);
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = 'current';
          return this.userAccountFacade.get();
        } else {
          this.userType = 'anonymous';
          return of(undefined);
        }
      })
    );

    this.user$.subscribe(
      (res) => {
        if (res) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );

    this.showOutageBanner = this.getOutageBannerDisplayFromStorage()
      ? false
      : true;

    // If banner message is closed for more than 7 days, show the outage message
    if (!this.showOutageBanner) {
      const bannerDate = this.getOutageBannerDisplayFromStorage();
      const timeDifference =
        new Date().getTime() - new Date(bannerDate).getTime();
      const daysDifference = timeDifference / (1000 * 3600 * 24);
      if (daysDifference >= 7) {
        this.showOutageBanner = true;
        this.removeOutageBannerDisplayFromStorage();
      }
    }
  }

  ngOnDestroy(): void {
    this.breadcrumbService.showHideBreadcrumb(true);
  }

  closeOutageBanner() {
    this.showOutageBanner = false;
    this.setOutageBannerDisplayToStorage(new Date().toString());
  }

  setOutageBannerDisplayToStorage(showHideBanner: string) {
    const storageType = StorageSyncType.LOCAL_STORAGE;
    const storage = this.commonService.getStorage(storageType, this.winRef);
    this.commonService.persistToStorage(
      'outage-banner',
      showHideBanner,
      storage
    );
  }

  getOutageBannerDisplayFromStorage() {
    const storageType = StorageSyncType.LOCAL_STORAGE;
    const storage = this.commonService.getStorage(storageType, this.winRef);
    return this.commonService.readFromStorage(storage, 'outage-banner');
  }

  removeOutageBannerDisplayFromStorage() {
    const storageType = StorageSyncType.LOCAL_STORAGE;
    const storage = this.commonService.getStorage(storageType, this.winRef);
    return this.commonService.removeFromStorage(storage, 'outage-banner');
  }
}
