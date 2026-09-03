import { Component } from '@angular/core';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { LanguageService } from '@spartacus/core';
import { LANGUAGES } from '../../../shared/models/language.model';

@Component({
  selector: 'app-new-guest-homepage',
  standalone: false,
  templateUrl: './new-guest-homepage.component.html',
  styleUrl: './new-guest-homepage.component.scss',
})
export class NewGuestHomepageComponent {
  allProductsLine = AllProductLine;
  currentLang: string = 'en';

  constructor(protected languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.getActive().subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  isEnglish(): boolean {
    return this.currentLang === 'en';
  }
}
