import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from './translate.service';

declare const window: any;

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public breadCrumbs: any = [];
  public isLoading: boolean = true;
  public loaderState: number = 0;
  public routeData: any;
  public pageScroll: Subject<any> = new Subject();
  public isQuickStatus: boolean;
  public forceStopLoader: boolean;

  constructor(
    private titleService: Title,
    private matSnackBar: MatSnackBar,
    private ts: TranslateService
  ) {
    window.onscroll = () => {
      this.pageScroll.next(true);
    };
  }

  setBreadCrumb(b: any[]) {
    this.breadCrumbs = b;
  }

  showLoader() {
    this.loaderState++;
    this.isLoading = true;
  }
  hideLoader() {
    if (this.loaderState > 0) {
      this.loaderState--;
    }
    if (this.loaderState == 0) {
      this.isLoading = false;
    }
  }

  convertToParam(obj: any) {
    let strs = [];
    for (let i in obj) {
      strs.push(i + '=' + obj[i]);
    }
    return strs.join('&');
  }

  setTitle(msg: string) {
    this.titleService.setTitle(msg);
  }

  showMessage(msg: string, type?: string) {
    this.matSnackBar.open(msg, '', { duration: 4000, panelClass: type });
  }

  isValidMail(mailId) {
    let re = /\S+@\S+\.\S+/;
    return re.test(mailId);
  }

  /**
   * @author Sumeet Roy
   * @description used for translation
   * @param value
   * @param args
   */
  transform(value: any, args?: any): any {
    if (args && this.ts.translate[args]) {
      return this.ts.translate[args];
    }
    return value;
  }

  /**
   * @author Aneesh
   * @description Wrapper function used to call JS function in bhgeedge-gtm.js for passing data to Google Analytics.
   * Logic and string format is defined in bhgeedge-gtm.js
   * @param data
   */
  setDataGtmLayer(data) {
    setTimeout(() => {
      window.data.setRMAFormPartNumber(data);
    }, 1000);
  }
}
