import { Component } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { Router } from '@angular/router';
import { CustomerAccountService } from '../../core/customer-account/customer-account.service';
import { ViewChild, ElementRef } from '@angular/core';
import { HelpResourcesService } from './services/help-resources.service';
import { json } from 'node:stream/consumers';
import { AllProductLine } from '../../shared/enums/availableProductList.enum';


@Component({
  selector: 'app-waygate-help-resources',
  standalone: false,
  templateUrl: './waygate-help-resources.component.html',
  styleUrl: './waygate-help-resources.component.scss'
})
export class WaygateHelpResourcesComponent {

  breadcrumbs: any = [];
  productLine: string;
  activeTab: string = 'faq';
  searchTerm: string = '';  
  private timeout: any;

  tabItems = [
    {
      label: 'FAQ',
      key: 'faq'
    },
    {
      label: 'Resources',
      key: 'resources'
    }
  ];
  
faqs: any[] = [];
filteredFAQs: any[] = [];
openedIndex: number | null = null;


resources: any[] = [];
filteredResources: any[] = [];

    constructor(
    private translate: TranslationService,
    private custAccService: CustomerAccountService,
    protected router: Router,
    private helpResourcesService:HelpResourcesService
  ) {}

 
ngOnInit() {

  this.custAccService.getProductLine().subscribe((productLine) => {
    this.productLine = productLine;
    
if (this.productLine === AllProductLine.waygate) {
      this.tabItems = [
        { label: 'FAQ', key: 'faq' }
      ];
    } else {
      this.tabItems = [
        { label: 'FAQ', key: 'faq' },
        { label: 'Resources', key: 'resources' }
      ];
    }


    this.translate
      .translate('waygate.helpresources')
      .subscribe((res: string) => {
        this.breadcrumbs = [
          {
            name: res,
            url: `/${this.productLine}/help-resources`,
          },
        ];
      });

  });

  this.getFAQs();
  this.getResources();
}


toggleFAQ(index: number) {
  this.openedIndex = this.openedIndex === index ? null : index;
}


handleTabClick(event: any) {
  const text = event?.target?.innerText?.toLowerCase();

  if (text?.includes('faq')) {
    this.activeTab = 'faq';
  }

  if (text?.includes('resources')) {
    this.activeTab = 'resources';
  }
}

goToContact() {
  const url = `/${this.productLine}/contactus`;
  this.router.navigate([url]);
}


getFAQs() {
  this.helpResourcesService.getFAQs().subscribe((res: any[]) => {
    this.faqs = res;
    this.filteredFAQs = this.faqs; 
  });
}


getResources() {
  this.helpResourcesService.getResources().subscribe((res: any[]) => {

    this.resources = res ;
    this.filteredResources = this.resources;
    console.log("Resources :"+ JSON.stringify(this.resources));
  });
}


handleSearch(event: any) {
  const value =
    event?.target?.value ||
    event?.detail?.value ||
    '';
  this.timeout = setTimeout(() => {

  this.searchTerm = value.toLowerCase();

 if (!this.searchTerm) {
      this.filteredFAQs = this.faqs;
      this.filteredResources = this.resources;
      return;
    }
    
 if (this.activeTab === 'faq') {
      this.searchFAQs();
    }

if (this.activeTab === 'resources') {
      this.searchResources();
    }

}, 300);


  //this.applyFilter();

}


applyFilter() {
  if (!this.searchTerm) {
    this.filteredFAQs = this.faqs;
    return;
  }

  this.filteredFAQs = this.faqs.filter(faq =>
    faq.question?.toLowerCase().includes(this.searchTerm) ||
    faq.answer?.toLowerCase().includes(this.searchTerm)
  );
}

searchFAQs() {
  this.helpResourcesService
    .searchFAQs(this.searchTerm)
    .subscribe((res: any[]) => {

      this.filteredFAQs = res && res.length ? res : [];

    });
}

searchResources() {
  this.helpResourcesService
    .searchResources(this.searchTerm)
    .subscribe((res: any[]) => {

      this.filteredResources = res && res.length ? res : [];

    });
}



}
