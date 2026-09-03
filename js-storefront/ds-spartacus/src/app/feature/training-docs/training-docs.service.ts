import { Injectable } from '@angular/core';
import { ApiService } from '../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class TrainingDocsService {
  constructor(private apiService: ApiService) {}

  getTrainingDocList() {
    const urlParam = ['trainingDocument'];
    const apiUrl = this.apiService.constructUrl(urlParam);
    const apiParams = {
      fields: 'DEFAULT',
    };
    return this.apiService.getData(apiUrl, apiParams);
  }

  downloadFile(docName, docType) {
    const urlParam = ['downloadpdf'];
    const apiUrl = this.apiService.constructUrl(urlParam);
    const apiParams = {
      name: docName,
      userId: 'anonymous',
    };
    return this.apiService.getData_PDF(apiUrl, apiParams);
  }
}
