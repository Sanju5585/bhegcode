import { Injectable, NgZone } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { MainService } from '../../shared/services/main.service';
import { finalize, retry, switchMap, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

declare const grecaptcha: any;
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public quickStatus: any;
  constructor(
    private http: HttpClient,
    private mainService: MainService,
    private zone: NgZone
  ) {
    this.quickStatus =
      location.href.toLowerCase().search('quick') !== -1 ? true : false;
  }

  public getData(API_URL: string, param?: any) {
    this.mainService.showLoader();
    return this.http.get(API_URL, { params: param }).pipe(
      finalize(() => this.mainService.hideLoader())
      // retry(3)
    );
  }

  public putData(API_URL: string, requestBody?: any) {
    const extention = API_URL.split('.').pop();
    if (extention == 'json') {
      return this.getData(API_URL, requestBody);
    }
    this.mainService.showLoader();

    if (this.quickStatus && !requestBody['googleCaptcha']) {
      return this.getCaptchaToken().pipe(
        map((token) => {
          requestBody['googleCaptcha'] = token;
          requestBody['g-recaptcha-response'] = token;
          return requestBody;
        }),
        switchMap((body) => {
          return this.http.put(API_URL, requestBody).pipe(
            finalize(() => this.mainService.hideLoader()),
            retry(3)
          );
        })
      );
    }

    return this.http.put(API_URL, requestBody).pipe(
      finalize(() => this.mainService.hideLoader()),
      retry(3)
    );
  }

  public putData_options(API_URL: string, requestBody: any, options?: any) {
    return this.http.put(API_URL, requestBody, options);
  }

  public deleteData(API_URL: string, options?: any) {
    return this.http.delete(API_URL, options);
  }

  public patchData(API_URL: string, requestBody: any, options?: any) {
    return this.http.patch(API_URL, requestBody, options).pipe(retry(1));
  }

  public postQueryData(API_URL: string, requestBody: any, options?: any) {
    return this.http.post(API_URL, requestBody, { params: options });
  }

  public postData(API_URL: string, requestBody: any, options?: any) {
    this.mainService.showLoader();

    return this.http.post(API_URL, requestBody, options).pipe(
      finalize(() => this.mainService.hideLoader()),
      retry(3)
    );

  }

  getCaptchaToken() {
    return Observable.create((observer) => {
      grecaptcha['ready']((token1) => {
        this.zone.run(() => {
          try {
            grecaptcha['execute'](window['resitekey'], {
              action: 'homepage',
            }).then((token) => {
              observer.next(token);
            });
          } catch {
            observer.error();
          }
        });
      });
    }).pipe(retry(3));
  }

  public constructUrl(params: string[]) {
    const preUrl =
      environment.occBaseUrl + environment.occPrefix + environment.occBaseSite;
    return preUrl + '/' + params.join('/');
  }

  public getData_Excel(API_URL: string, param?: any) {
    return this.http
      .get(API_URL, {
        responseType: 'blob',
        headers: new HttpHeaders({
          'Content-Type': 'application/vnd.ms-excel',
        }),
        params: param,
      })
      .pipe(retry(1));
  }

  public getData_PDF(API_URL: string, param?: any) {
    return this.http
      .get(API_URL, {
        responseType: 'blob',
        headers: new HttpHeaders({
          'Content-Type': 'application/pdf',
        }),
        params: param,
      })
      .pipe(retry(1));
  }
  public download_PDF(API_URL: string, param?: any) {
    return this.http
      .get(API_URL, {
        responseType: 'blob',
        headers: new HttpHeaders({
          'Content-Type': 'application/pdf',
          Accept: 'application/pdf',
        }),
        params: param,
      })
      .pipe(retry(1));
  }
  public getData_Cache_PDF(API_URL: string, param?: any) {
    return this.http
      .get(API_URL, {
        responseType: 'blob',
        headers: new HttpHeaders({
          'Content-Type': 'application/pdf',
          'Cache-Control': 'no-store',
        }),
        params: param,
      })
      .pipe(retry(1));
  }
  public getData_Doc(API_URL: string, param?: any) {
    return this.http
      .get(API_URL, {
        responseType: 'blob',
        headers: new HttpHeaders({
          'Content-Type': 'application/msword',
        }),
        params: param,
      })
      .pipe(retry(1));
  }
  public getData_JPG(API_URL: string, param?: any) {
    return this.http
      .get(API_URL, {
        responseType: 'blob',
        headers: new HttpHeaders({
          'Content-Type': 'application/jpeg',
        }),
        params: param,
      })
      .pipe(retry(1));
  }
  public getData_PNG(API_URL: string, param?: any) {
    return this.http
      .get(API_URL, {
        responseType: 'blob',
        headers: new HttpHeaders({
          'Content-Type': 'application/png',
        }),
        params: param,
      })
      .pipe(retry(1));
  }
  public getData_Htm(API_URL: string, param?: any) {
    return this.http
      .get(API_URL, {
        responseType: 'blob',
        headers: new HttpHeaders({
          'Content-Type': 'application/htm',
        }),
        params: param,
      })
      .pipe(retry(1));
  }
  public postData_File(API_URL: string, requestBody?: any, options?) {
    return this.http
      .post(API_URL, requestBody, {
        responseType: 'blob',
        params: options,
      })
      .pipe(retry(1));
  }
}
