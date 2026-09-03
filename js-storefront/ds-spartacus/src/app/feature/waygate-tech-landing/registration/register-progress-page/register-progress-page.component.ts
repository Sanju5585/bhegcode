import { AfterViewInit, Component } from '@angular/core';
import { LanguageService } from '@spartacus/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { HostListener } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { LANGUAGES } from '../../../../shared/models/language.model';

declare const Optanon: any;
@Component({
  standalone: false,
  selector: 'app-register-progress-page',
  templateUrl: './register-progress-page.component.html',
  styleUrls: ['./register-progress-page.component.scss'],
})
export class RegisterProgressPageComponent implements AfterViewInit {
  @HostListener('window:popstate', ['$event'])
  onPopState() {
    location.reload();
  }
  currentLanguage = '';
  props: any = {};
  ddWidth = '140px';
  constructor(
    protected languageService: LanguageService,
    protected router: Router,
    private registrationService: RegistrationService
  ) {}

  ngOnInit() {
    const itemsArr = [];
    for (const key in LANGUAGES) {
      itemsArr.push({
        label: LANGUAGES[key],
        value: key,
      });
    }
    this.props = {
      itemGroups: [
        {
          items: [...itemsArr],
        },
      ],
    };
    this.getDefaultLanguage();
  }

  getDefaultLanguage() {
    this.languageService.getActive().subscribe((res) => {
      this.currentLanguage = LANGUAGES[res];
      this.ddWidth = this.registrationService.calculateInputwidth(
        this.currentLanguage
      );
    });
  }

  onLanguageChange(event) {
    this.languageService.setActive(event.detail);
    this.router.navigate(['/register/progress-page']);
  }

  onClickCookie(event: Event) {
    // event.preventDefault();
    Optanon.ToggleInfoDisplay();
  }

  openTerms() {
    const termsDocUrl =
      environment.occBaseUrl +
      `/_ui/responsive/common/images/DSe-CommercePortalTermsofUse.pdf`;
    (window as any).open(termsDocUrl, '_blank');
  }

  logoClick() {
    window.location.href = '/';
  }

  ngAfterViewInit() {
    this.registrationService.hideCommonHeaderFooter();
  }
}
