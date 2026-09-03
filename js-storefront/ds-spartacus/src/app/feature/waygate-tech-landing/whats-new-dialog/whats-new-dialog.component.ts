import { Component } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-whats-new-dialog',
  standalone: false,
  templateUrl: './whats-new-dialog.component.html',
  styleUrl: './whats-new-dialog.component.scss'
})
export class WhatsNewDialogComponent {
  data: any;
  productLine: string;
  dontshowagain;
  @ViewChild('contentRef') contentRef!: ElementRef;
  win = this.windowRef.nativeWindow;

  
  constructor(private launchDialogService: LaunchDialogService,
              private customerAccService: CustomerAccountService,
              private windowRef: WindowRef,
  ) {

    this.launchDialogService.data$.subscribe((data) => {
      this.data = data;
    });

  } 

  ngOnInit(): void {
  this.customerAccService.getProductLine().subscribe((productLine) => {
  this.productLine = productLine;    
  if(this.productLine){  
  const dontshowKey = `whatsNewHidden_${this.productLine}`;
  this.dontshowagain = dontshowKey;
  }
});

}

ngAfterViewInit() {
  this.updateLinks();
}

updateLinks() {
  if (!this.contentRef) return;

  const links = this.contentRef.nativeElement.querySelectorAll('a');

  links.forEach((link: HTMLAnchorElement) => {

    const url = link.href;
    const isExternal = url.startsWith(window.location.origin);
    if (isExternal) {
        link.removeAttribute('target');
    } else {
      link.setAttribute('target', '_blank');           
      link.setAttribute('rel', 'noopener noreferrer');  
    }

  });
}


  
close() {
  this.launchDialogService.closeDialog({ action: 'close' });
}

dontShowAgain() {
  const release = this.data?.releaseNumber;
  if(this.productLine){
  this.win.localStorage.setItem(this.dontshowagain, 'true');
  this.launchDialogService.closeDialog({ action: 'dontShow' });
  }
}

}
