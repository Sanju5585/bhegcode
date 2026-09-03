import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfiguratorPriceSummaryServiceService {
  private configurationIncompleteSubject = new BehaviorSubject<boolean>(false);
  configurationIncompleteSubject$ =
    this.configurationIncompleteSubject.asObservable();
  showError(show: boolean) {
    this.configurationIncompleteSubject.next(show);
  }
}
