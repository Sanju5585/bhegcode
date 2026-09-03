import { Injectable, Inject } from '@angular/core';
import { ApiService } from '../../core/http/api.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

declare const ACC: any;

@Injectable({
  providedIn: 'root',
})
export class MyFavoritesService {
  constructor(private apiService: ApiService) {}

  getFavourite(parms) {
    return this.apiService.getData(
      environment.apis.getFavourites + '?pageSize=' + parms
    );
  }

  getFavouriteSearch(parmsText, parmsSize) {
    return this.apiService.getData(
      environment.apis.getFavourites +
        '?pageSize=' +
        parmsSize +
        '&text=' +
        parmsText
    );
  }

  removeAllFavourite(params) {
    return this.apiService.postData(environment.apis.removeSingleFavs, params);
  }

  leavenote(params) {
    return this.apiService.postData(environment.apis.leaveanote, params);
  }

  addToFavourite(param) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const data = new HttpParams({
      fromObject: {
        'productCodes[]': param,
        CSRFToken: ACC['config']['CSRFToken'],
      },
    });
    return this.apiService.postData(environment.apis.addToFavList, data);
  }

  removeFromFavourite(param) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const data = new HttpParams({
      fromObject: {
        'productCodes[]': param,
        CSRFToken: ACC['config']['CSRFToken'],
      },
    });
    return this.apiService.postData(environment.apis.removeSingleFavs, data);
  }
}
