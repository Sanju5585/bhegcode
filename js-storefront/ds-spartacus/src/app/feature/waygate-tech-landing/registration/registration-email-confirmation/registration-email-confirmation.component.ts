import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { environment } from '../../../../../environments/environment';
import { TranslationService } from '@spartacus/core';
declare const Optanon: any;

@Component({
  standalone: false,
  selector: 'app-registration-email-confirmation',
  templateUrl: './registration-email-confirmation.component.html',
  styleUrls: ['./registration-email-confirmation.component.scss'],
})
export class RegistrationEmailConfirmationComponent implements OnInit, AfterViewInit {
  @HostListener('window:popstate', ['$event'])
  onPopState() {
    location.reload();
  }

  currentLanguage = '';
  props: any = {};
  ddWidth = '140px';
  productLine: string;
  title: string;
  subtitle: string;
  showloader: boolean = true;

  constructor(
    private custAccService: CustomerAccountService,
    private registrationService: RegistrationService,
    private activateRoute: ActivatedRoute,
    private translate: TranslationService
  ) {
    this.registrationService.hideCommonHeaderFooter();
  }

  ngOnInit(): void {
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });

    const currentRoute = this.activateRoute.snapshot.routeConfig?.path;

    switch (currentRoute) {
      case 'register/emailConfirmation':
        this.handleEmailConfirmation();
        break;
      case 'register/cancel':
        this.handleCancel();
        break;
      case 'register/resendEmail':
        this.handleResendEmail();
        break;
      default:
        this.title = this.getTranslatedText('registration.invalidRoute');
        this.subtitle = this.getTranslatedText('registration.pleaseTryAgain');
        this.showloader = false;
        break;
    }
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  handleEmailConfirmation() {
    this.activateRoute.queryParams
      .pipe(
        switchMap((params) =>
          this.registrationService.verifyEmailConfirmation(
            this.productLine,
            params['email'],
            params['token']
          )
        )
      )
      .subscribe(this.handleApiResponse());
  }

  handleCancel() {
    this.activateRoute.queryParams
      .pipe(
        switchMap((params) =>
          this.registrationService.cancelRegistration(
            this.productLine,
            params['email'],
            params['token']
          )
        )
      )
      .subscribe();
  }

  handleResendEmail() {
    this.activateRoute.queryParams
      .pipe(
        switchMap((params) =>
          this.registrationService.resendEmailConfirmation(
            this.productLine,
            params['email'],
            params['token']
          )
        )
      )
      .subscribe();
  }

  handleApiResponse() {
    return {
      next: (res: { statusCode: string }) => {
        if (res.statusCode === 'SUCCESS') {
          this.title = this.getTranslatedText('registration.emailIsVerified');
          this.subtitle = this.getTranslatedText('registration.proceedToLogIn');
        } else if (res.statusCode === 'ACTIVE') {
          this.title = this.getTranslatedText('registration.alreadyValidated');
          this.subtitle = this.getTranslatedText('registration.proceedToLogIn');
        } else {
          this.title = this.getTranslatedText('registration.linkExpired');
          this.subtitle = this.getTranslatedText('registration.pleaseRegisterAgain');
        }
        this.showloader = false;
      },
      error: () => {
        this.title = this.getTranslatedText('registration.error');
        this.subtitle = this.getTranslatedText('registration.thereIsSomeError');
        this.showloader = false;
      },
    };
  }

  logoClick() {
    window.location.href = '/';
  }

  ngAfterViewInit(): void {
    this.registrationService.hideCommonHeaderFooter();
  }

  onClickCookie(event: Event) {
    Optanon.ToggleInfoDisplay();
  }

  openTerms() {
    const termsDocUrl =
      environment.occBaseUrl +
      `/_ui/responsive/common/images/DSe-CommercePortalTermsofUse.pdf`;
    (window as any).open(termsDocUrl, '_blank');
  }
}