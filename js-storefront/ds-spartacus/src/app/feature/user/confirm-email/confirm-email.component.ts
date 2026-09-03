import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OccEndpointsService } from '@spartacus/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum RegisterStatus {
  ENABLED = 'ENABLED',
  NOCHANGE = 'NOCHANGE',
  DISABLED = 'DISABLED',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  ACTIVE = 'ACTIVE',
  COMPLETE = 'COMPLETE',
  INCOMPLETE = 'INCOMPLETE',
  CANCELLED = 'CANCELLED',
  CANCEL = 'CANCEL',
}

@Component({
  selector: 'app-confirm-email',
  standalone: false,
  templateUrl: './confirm-email.component.html',
  styleUrl: './confirm-email.component.scss',
})
export class ConfirmEmailComponent {
  pageStatus: string = '';
  accountMsg: any;
  registerStatus = RegisterStatus;
  email: any = '';
  response$: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private occEndpointsService: OccEndpointsService,
    private http: HttpClient
  ) {
    this.route.url.subscribe((urlSegments: any[]) => {
      this.pageStatus = urlSegments[0].path;
      this.email = urlSegments[1].path;
      switch (this.pageStatus) {
        case 'confirm-email':
          this.activateAccount(urlSegments);
          break;
        case 'cancel-activation':
          this.cancelActivation(urlSegments);
          break;
        case 'resend-email':
          this.resendEmail(urlSegments);
          break;
      }
    });
  }

  activateAccount(urlSegments) {
    const url = this.occEndpointsService.buildUrl(
      'register/user/validateActivation/' +
        urlSegments[1].path +
        '/' +
        urlSegments[2].path
    );
    this.response$ = this.http.get(url, { responseType: 'text' as 'json' });
  }
  resendEmail(urlSegments) {
    const url = this.occEndpointsService.buildUrl(
      'register/user/resend/' + urlSegments[1].path + '/'
    );
    this.response$ = this.http.get(url, { responseType: 'text' as 'json' });
  }
  cancelActivation(urlSegments) {
    const url = this.occEndpointsService.buildUrl(
      'register/user/cancelRequest/' +
        urlSegments[1].path +
        '/' +
        urlSegments[2].path
    );
    this.response$ = this.http.get(url, { responseType: 'text' as 'json' });
  }
}
