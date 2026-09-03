import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TranslateService implements Resolve<any> {
  public translate: any;
  constructor(private http: HttpClient) {
    this.translate = {};
  }

  resolve() {
    return Observable.create((observer) => {
      let lang = 'en';
      lang = document.querySelector('html').attributes['lang'].value;
      lang = lang ? lang : 'en';

      /* if (environment.production && lang == 'en') {
        observer.next('');
        observer.complete('');
        return;
      } */
      this.http
        .get(environment.translate_path + 'base_' + lang + '.JSON')
        .subscribe((tData) => {
          this.translate = tData;
          observer.next('');
          observer.complete('');
        });
    });
  }
}
