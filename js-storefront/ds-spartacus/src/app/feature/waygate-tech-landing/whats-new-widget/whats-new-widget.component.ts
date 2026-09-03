
import { Component, OnInit } from '@angular/core';
import { CmsService, WindowRef } from '@spartacus/core';
import { Observable, take } from 'rxjs';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { LaunchDialogService } from '@spartacus/storefront';
import { OccConfig } from '@spartacus/core';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { AuthService } from '@spartacus/core';

@Component({
  selector: 'app-whats-new-widget',
  standalone: false,
  templateUrl: './whats-new-widget.component.html',
  styleUrl: './whats-new-widget.component.scss'
})
export class WhatsNewWidgetComponent implements OnInit {

  whatsNew$: Observable<any>;
  showImg = true;
  storedRelease;
  release;
  dontshowflag ="";
  productLine: string;
  allProductLine = AllProductLine;
  dontshowagain;
  componentKey: string | null = null;
  storageKey;
  dontshowKey;
  isLoggedIn: boolean;
  win = this.windowRef.nativeWindow;

  

  constructor(private cmsService: CmsService,
              private launchDialogService : LaunchDialogService,
              private occConfig: OccConfig,
              private windowRef: WindowRef,
              private customerAccService: CustomerAccountService,
              private authService: AuthService,
  ) {}
  
data: any;

onClickWhatsnewDialog() {  
 this.showImg = false;
 const dialog = this.launchDialogService.openDialog(
    DS_DIALOG.WHATS_NEW_DIALOG,
    undefined,
    undefined,
    this.data 
  );

  
 if (dialog) {
    dialog.pipe(take(1)).subscribe((result) => {
      this.dontshowflag = this.win.localStorage.getItem(this.dontshowagain);
      if(this.dontshowflag == "true"){
      this.showImg = false;
      }
      else{
        this.showImg = true;
      }
    });
  }

}

getAvatarUrl(): string {
 
 if (this.data?.image?.url) {
    return this.occConfig.backend?.occ?.baseUrl + this.data.image.url;
  }
  return null;

}
  
ngOnInit(): void {
  
 setInterval(() => {
    this.showImg = !(window as any).isSearchOpen;
  }, 100);

  this.authService.isUserLoggedIn().subscribe((success) => {
      if (success) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  this.customerAccService.getProductLine().subscribe((productLine) => {
  this.productLine = productLine;   
  if(this.productLine){ 
   this.storageKey = `ReleaseVersion_${this.productLine}`;
   this.dontshowKey = `whatsNewHidden_${this.productLine}`;
  this.dontshowagain = this.dontshowKey;
  }

    
if (this.productLine === 'cordant') {
  this.componentKey = 'WhatsNewWidgetCordantRelease';

} else if (this.productLine === 'waygate') {
  this.componentKey = 'WhatsNewWidgetRelease';

}

if (!this.componentKey) {
  this.showImg = false;
  return;
}

  this.whatsNew$ =
  this.cmsService.getComponentData(this.componentKey);

  this.whatsNew$  
    .pipe(take(1)) 
    .subscribe(data => {
    console.log('WHATS NEW DATA:', data);    
    this.data = data;         
 if (!data || !this.isLoggedIn) {
    this.showImg = false;
    return;
  }
  
   this.release = this.data?.releaseNumber;
   this.storedRelease = this.win.localStorage.getItem(this.storageKey);
  if (this.storedRelease !== this.release && this.isLoggedIn) {
    this.showImg = false;
    this.onClickWhatsnewDialog();
    if(this.productLine){
    this.storedRelease = this.win.localStorage.setItem(this.storageKey,this.release );
    }
    return;
  }
   
  this.dontshowflag = this.win.localStorage.getItem(this.dontshowagain);
  console.log("dontshowflag "+this.dontshowflag);
  if(this.dontshowflag == "true"){
      this.showImg = false;
  }else{
      this.showImg = true;
  }
    });
  });
}


openWidget() {
  this.whatsNew$.subscribe(data => {
    console.log('Opening widget with data:', data);
  });
}


}
