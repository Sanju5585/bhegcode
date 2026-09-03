import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  SERVER_URL: string = 'https://localhost:7002/';
  constructor(private httpClient: HttpClient) {}

  public upload_old(data, uploadURL) {
    // let headers = new HttpHeaders({
    //   'Content-Type': 'multipart/form-data'
    //   // 'Authorization': this.basic
    // });
    // let options = { headers: headers };

    //let uploadURL = this.SERVER_URL + 'rma/rmaForm';
    // let uploadURL = this.SERVER_URL + 'rma/uploadFile1'
    return this.httpClient
      .post<any>(uploadURL, data, {
        reportProgress: true,
        // observe: 'events'
      })
      .pipe(
        map((event) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              const progress = Math.round((100 * event.loaded) / event.total);
              return { status: 'progress', message: progress };

            case HttpEventType.Response:
              return event.body;
            default:
              return 'Unhandled event: ${event.type}';
          }
        })
      );
  }

  public upload(data, uploadURL) {
    const req = new HttpRequest('POST', uploadURL, data, {
      reportProgress: true,
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      }),
    });

    return this.httpClient.request(req);
  }

  public upload_test(data, uploadURL) {
    return this.httpClient.post<any>(uploadURL, data, { reportProgress: true });
  }
}
