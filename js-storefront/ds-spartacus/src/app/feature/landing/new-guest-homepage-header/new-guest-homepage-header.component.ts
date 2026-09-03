import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '@spartacus/core';
import { LANGUAGES } from '../../../shared/models/language.model';

@Component({
  selector: 'app-new-guest-homepage-header',
  standalone: false,
  templateUrl: './new-guest-homepage-header.component.html',
  styleUrl: './new-guest-homepage-header.component.scss'
})
export class NewGuestHomepageHeaderComponent {
  contactUsUrl: string;
  notificationOpened: boolean=false;
  props: any = {};
  currentLanguage = '';
  
  constructor(
    protected languageService: LanguageService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.contactUsUrl = `/contactus`;
    const itemsArr = [];
    // tslint:disable-next-line: forin
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

  languagedropdown() {
    this.notificationOpened = false;
  }

  onLanguageChange(event) {
    this.languageService.setActive(event.detail?.value);
  }

  getDefaultLanguage() {
    this.languageService.getActive().subscribe((res) => {
      this.currentLanguage = LANGUAGES[res];
    });
  }
}
