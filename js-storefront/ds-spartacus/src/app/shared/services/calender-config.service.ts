import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class CalenderConfigService {
  private filterWeekend = true;

  isFilterWeekend = () => this.filterWeekend;
}
