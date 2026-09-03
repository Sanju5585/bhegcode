import { Component, OnInit, SecurityContext } from '@angular/core';
import {
  AuthService,
  CmsService,
  GlobalMessageService,
  AuthRedirectService,
  OccEndpointsService,
  AuthActions,
  OCC_USER_ID_CURRENT,
  UserIdService,
  OAuthLibWrapperService,
} from '@spartacus/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { GtmEvents, LoginMethod } from '../../../shared/enums/gtm.enum';
import { GoogleTagManagerService } from '../../../shared/services/gtm.service';

@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'ds-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loginComponentData$: Observable<any> =
    this.cmsService.getComponentData<any>('LoginFormComponent');
  termsContentData = 'ABC';
  observable$: Observable<any>;
  unsubscribe$: Subject<void> = new Subject<void>();
  sub: Subscription;
  useOktaLogin = environment.useOkta;
  // useOktaLogin = false;
  disableSubmit = true;

  constructor(
    private cmsService: CmsService,
    private formBuilder: FormBuilder,
    protected auth: AuthService,
    protected authRedirectService: AuthRedirectService,
    protected globalMessageService: GlobalMessageService,
    private occEndpointsService: OccEndpointsService,
    private store: Store,
    private userIdService: UserIdService,
    private oAuthLibWrapperService: OAuthLibWrapperService,
    private gtmService: GoogleTagManagerService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    if (!this.useOktaLogin) {
      this.loginForm = this.formBuilder.group({
        termsAgreementRadioGroup: [null, Validators.required],
        userId: [null, Validators.required],
        password: [null, Validators.required],
      });
      this.disableSubmit = false;
    } else {
      this.loginForm = this.formBuilder.group({
        termsAgreementRadioGroup: [null, Validators.required],
      });

      this.loginForm
        .get('termsAgreementRadioGroup')
        .valueChanges.subscribe((val) => {
          if (!val || val === false || val === 'false') {
            this.disableSubmit = true;
          } else {
            this.disableSubmit = false;
          }
        });
    }
  }

  submitTermsForm(): void {
    if (!this.useOktaLogin) {
      this.loginUser();
    } else {
      const loginUrl = this.occEndpointsService.buildUrl(
        'dslogin/redirect_login'
      );
      /* const loginUrl =
        'https://api.cd8zy6g-bakerhugh1-d1-public.model-t.cc.commerce.ondemand.com/occ/v2/bhge/dslogin/redirect_login'; */
      //window.location.href = loginUrl;
      window.location.href = this.domSanitizer.sanitize(
        SecurityContext.URL,
        loginUrl
      );
    }
  }

  protected async loginUser(): Promise<void> {
    const { userId, password } = this.loginForm.controls;
    // this.auth.loginWithCredentials(userId.value.toLowerCase(), password.value)

    try {
      await this.oAuthLibWrapperService.authorizeWithPasswordFlow(
        userId.value,
        password.value
      );

      // OCC specific user id handling. Customize when implementing different backend
      this.userIdService.setUserId(OCC_USER_ID_CURRENT);
      this.gtmService.sendEvent({
        event: GtmEvents.Login,
        authentication_method: LoginMethod.Local,
        user_id: userId.value,
      });

      this.store.dispatch(new AuthActions.Login());

      this.authRedirectService.redirect();
    } catch (error) {
      this.gtmService.sendEvent({
        event: GtmEvents.LoginError,
        authentication_method: LoginMethod.Local,
        user_id: userId.value,
      });
    }
  }

  // getGDPRDoc() {
  //   //window.open('/assets/docs/GDPR.pdf', '_blank');
  //   window.open('/assets/BH_RMA_Process_Latest.pdf', '_blank');
  // }

  enableSubmit() {
    this.disableSubmit = false;
  }
}
