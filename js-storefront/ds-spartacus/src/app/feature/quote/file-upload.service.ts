import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OccEndpointsService } from '@spartacus/core';
import { ApiService } from '../../core/http/api.service';
@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(
    private apiService: ApiService,
    private occEndpointsService: OccEndpointsService
  ) {}

  // Returns an observable
  upload(quoteId, file): Observable<any> {
    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('file', file, file.name);

    // Make http post request over api
    // with formData as req
    const API_URL = this.occEndpointsService.buildUrl(
      `users/anonymous/quote/${quoteId}/uploadQuoteAttachment`
    );

    return this.apiService.postData(API_URL, formData);
  }
}
