import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuickOrderService {
  public $getOrderBulk = new BehaviorSubject(null);
  public navigationDataSource = new BehaviorSubject(false);
  private viewSubject = new BehaviorSubject<'products' | 'address'>('products');
  view$ = this.viewSubject.asObservable();
  private loaderSubject = new BehaviorSubject<boolean>(false);
  loader$ = this.loaderSubject.asObservable();

  constructor() {}

  sendQuickOrderList(value: any) {
    this.$getOrderBulk.next(value);
  }

  getQuickOrderList() {
    return this.$getOrderBulk.asObservable();
  }

  setNavigation(flag) {
    this.navigationDataSource.next(flag);
  }
  getNavigation() {
    return this.navigationDataSource.asObservable();
  }

  showProducts(){
    this.viewSubject.next('products');
  }

  showAddress(){
    this.viewSubject.next('address');
  }

  showLoader(){
    this.loaderSubject.next(true);
  }

  hideLoader(){
    this.loaderSubject.next(false);
  }
}
