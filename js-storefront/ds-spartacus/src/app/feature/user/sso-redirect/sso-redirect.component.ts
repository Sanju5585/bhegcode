import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GlobalMessageService,
  GlobalMessageType,
  OccEndpointsService,
} from '@spartacus/core';
import { environment } from '../../../../environments/environment';
import { DSAuthService } from '../../../core/auth/ds-auth.service';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';

@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'ds-sso-redirect',
  templateUrl: './sso-redirect.component.html',
  styleUrls: ['./sso-redirect.component.scss'],
})
export class SsoRedirectComponent implements OnInit, OnDestroy {
  authError$: Observable<any>;
  authErrorSubscription: any;
  unauthorizedUser = false;
  disabledUser = false;
  registerUrl: string = environment.registerUrl;
  errorDetails: any = {
    title: '',
    description: '',
  };
  showError = false;
  registrationLoginUrl: string = environment.accessRegistrationUrl;
  constructor(
    private dsAuthSerice: DSAuthService,
    protected globalMessageService: GlobalMessageService,
    protected gtmService: GoogleTagManagerService,
    private readonly occEndpointsService: OccEndpointsService
  ) {}

  ngOnInit(): void {
    this.authError$ = this.dsAuthSerice.authErrorError$;
    this.authErrorSubscription = this.authError$.subscribe(
      (res: any) => {
        if (res && Object.keys(res).length) {
          this.showError = true;
        }
        if (res?.code == '2000') {
          this.errorDetails.title = 'Request access to this site';
          this.errorDetails.description = `Your account information does not exist. <br />Please click on
          <a href="${this.registerUrl}">Register</a> for requesting access to the
          site.`;
        } else if (res?.code == '2001') {
          this.errorDetails.title = 'Account Disabled';
          this.errorDetails.description = `Your account has been disabled. <br />Please speak to a customer
          service representative or <a href="${this.registerUrl}">Register</a> again.`;
        } else if (res?.code == '2004') {
          this.errorDetails.title = 'Activation Pending';
          this.errorDetails.description = `We have your Access Request but we still need your confirmation response.
          <br />Please find an email from Baker Hughes DS Store, and click the Confirm link to finish your request.`;
        } else if (res?.code == '2005') {
          this.errorDetails.title = 'Request Pending';
          this.errorDetails.description = `Your Access Request is pending with our Customer Care team.
          <br />We will process it and notify you as soon as we can.`;
        } else if (res?.code == '2006') {
          this.errorDetails.title = 'Access Rejected';
          this.errorDetails.description = `Your Access Request has been denied at this time.
          <br />Usually, this is because we cannot identify your existing account or we cannot reach you to verify data.  Please contact our Customer Care, or send a note back on our Site Feedback, if we need to discuss.`;
        } else if (res?.code == '2007') {
          this.errorDetails.title = 'Access Denied';
          this.errorDetails.description = `Your User Account is not assigned to the required group in Login Server.`;
        } else if (res?.code == '2008') {
          this.errorDetails.title = 'Access Pending';
          this.errorDetails.description = `Your Access Request is pending with us.
          <br />We are working on the same & we will notify you as soon as we can.`;
        } else if (res?.code == '2009') {
          this.errorDetails.title = 'Login Failure';
          this.errorDetails.description = `You do not have access the to DS Store.
          <br /><a href="${this.registrationLoginUrl}">Click here</a> to Register.`;
        } else if (res?.code == '2010') {
          let url = this.occEndpointsService.buildUrl(
            `/dshome/account/reactivate/load/${res?.subject}`
          );
          this.errorDetails.title = 'Login Disabled';
          this.errorDetails.description = `Your access has been disabled automatically due to inactivity for more than 90 days.
          <br />Please  <a href="${url}">Click here </a> to reactivate your account.`;
        } else if (res?.code == '2011') {
          this.errorDetails.title = 'Login Disabled';
          this.errorDetails.description = `Your account is disabled by your Manager. Please check your Email to get more details`;
        }
        /* else {
          this.errorDetails.title = 'Login Failure';
          this.errorDetails.description = `Your login attempt to DSStore is unsuccessful.
          <br />Please contact our Customer Care team`;
        } */
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }

  ngOnDestroy(): void {
    this.authErrorSubscription.unsubscribe();
  }
}
