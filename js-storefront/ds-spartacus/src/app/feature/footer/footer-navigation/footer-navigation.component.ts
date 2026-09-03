import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmsNavigationComponent, CmsService } from '@spartacus/core';
import {
  CmsComponentData,
  NavigationNode,
  NavigationService,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

declare const Optanon: any;

export enum FOOTER_NAVIGATION_MENUS {
  ABOUT_US = 0,
  PRIVACY = 1,
  CONTACT_US = 2,
  COOKIES = 3,
  TERMS_CONDITIONS = 4,
}

@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'ds-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  styleUrls: ['./footer-navigation.component.scss'],
})
export class FooterNavigationComponent implements OnInit {
  navNodes$: Observable<NavigationNode>;
  constructor(
    protected componentData: CmsComponentData<CmsNavigationComponent>,
    private navService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navNodes$ = this.navService.getNavigationNode(
      this.componentData.data$
    );
  }

  onLinkClick(node, i) {
    switch (i) {
      case FOOTER_NAVIGATION_MENUS.COOKIES:
        Optanon.ToggleInfoDisplay();
        break;
      case FOOTER_NAVIGATION_MENUS.PRIVACY:
        (window as any).open(node.url, '_blank');
        break;
      case FOOTER_NAVIGATION_MENUS.CONTACT_US:
        this.router.navigate([node.url]);
        break;
      case FOOTER_NAVIGATION_MENUS.ABOUT_US:
        (window as any).open(node.url, '_blank');
        break;
      case FOOTER_NAVIGATION_MENUS.TERMS_CONDITIONS:
        const termsDocUrl = environment.occBaseUrl + node.url;
        (window as any).open(termsDocUrl, '_blank');
        break;
      default:
        this.router.navigate([node.url]);
        break;
    }
  }
}
