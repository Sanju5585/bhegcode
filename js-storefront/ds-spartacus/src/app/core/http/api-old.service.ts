import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getData(API_URL: string, param?: any) {
    return this.http.get(API_URL, { params: param });
  }

  public getDataExcel(API_URL: string, param?: any) {
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

  public getDataCSV(API_URL: string, param?: any) {
    return this.http
      .get(API_URL, {
        responseType: 'blob',
        headers: new HttpHeaders({
          'Content-Type': 'application/csv',
        }),
        params: param,
      })
      .pipe(retry(1));
  }

  public getDataPDF(API_URL: string, param?: any) {
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

  public getDataPDFDetail(API_URL: string, param?: any) {
    return this.http
      .post(API_URL, param, {
        responseType: 'blob',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(retry(1));
  }

  public getDataMSDoc(API_URL: string, param?: any) {
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
  public getDataJPG(API_URL: string, param?: any) {
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
  public getDataPNG(API_URL: string, param?: any) {
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

  public uploadFileWithProgress(
    API_URL: string,
    requestBody: any,
    options?: any
  ) {
    return this.http.post(API_URL, requestBody, {
      reportProgress: true,
      responseType: 'json',
      observe: 'events',
    });
  }

  public postData(API_URL: string, requestBody: any, options?: any) {
    return this.http.post(API_URL, requestBody, options);
  }

  public deleteData(API_URL: string, id?: any) {
    return this.http.delete(API_URL);
  }
  public deleteAllData(API_URL: string, id: any) {
    return this.http.delete(API_URL, id);
  }

  public updateData(API_URL: string, param?: any) {
    return this.http.put(API_URL, param);
  }

  public patchData(API_URL: string, requestBody: any, options?: any) {
    return this.http.patch(API_URL, requestBody, options).pipe(retry(1));
  }

  public putData_options(API_URL: string, requestBody: any, options?: any) {
    return this.http.put(API_URL, requestBody, options).pipe(retry(1));
  }

  public putData(API_URL: string, param?: any) {
    return this.http.put(API_URL, param);
  }

  protected handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
