import { Component } from '@angular/core';
declare const Optanon: any;
@Component({
  selector: 'app-new-guest-homepage-footer',
  standalone: false,
  templateUrl: './new-guest-homepage-footer.component.html',
  styleUrl: './new-guest-homepage-footer.component.scss'
})
export class NewGuestHomepageFooterComponent {
  contactUsUrl: string;
  copyRightYear: number;
  
  ngOnInit(): void {
    this.yearValue()
    this.contactUsUrl = `/contactus`;
  }
  openCookies() {
    Optanon.ToggleInfoDisplay();
    setTimeout(() => {
      const interval = setInterval(() => {
        const overlay = document.querySelector('.onetrust-pc-dark-filter') as HTMLElement;
        const popup = document.querySelector('.optanon-popup, .onetrust-pc-dialog');
  
        // If popup is closed and overlay is still blocking
        if (!popup && overlay?.style.display === 'block') {
          overlay.style.display = 'none';
          overlay.style.pointerEvents = 'none';
          overlay.style.zIndex = '-1';
  
          ['.main-wrapper', '.header-main', '.footer'].forEach(selector => {
            const el = document.querySelector(selector) as HTMLElement;
            if (el) {
              el.style.zIndex = '9999';
              el.style.pointerEvents = 'auto';
            }
          });
  
          clearInterval(interval);
        }
      }, 500);
    }, 1000);
  }

  yearValue(){
    this.copyRightYear =  new Date().getFullYear();
  }

  openTerms() {
    (window as any).open(
      '../../../assets/pdf/DSe-CommercePortalTermsofUse.pdf',
      '_blank'
    );
  }
}
