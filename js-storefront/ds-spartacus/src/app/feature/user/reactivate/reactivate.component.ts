import { Component, OnInit } from '@angular/core';
import { OccEndpointsService } from '@spartacus/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../../../core/http/api.service';

@Component({
  standalone: false,
  selector: 'app-reactivate',
  templateUrl: './reactivate.component.html',
  styleUrls: ['./reactivate.component.scss'],
})
export class ReactivateComponent implements OnInit {
  private getActiveRoute: Subscription;
  accountMsg = '';
  findSiteName = '';
  constructor(
    protected occEndpointsService: OccEndpointsService,
    private activeRoute: ActivatedRoute,
    protected apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getActiveRoute = this.activeRoute.params.subscribe((params) => {
      let sitename = params['site'];
      this.findSiteName = sitename;

      if (sitename == 'load') {
        let uname = params['id'];
        if (uname) {
          let url = this.occEndpointsService.buildUrl(
            'dshome/account/reactivate/load/' + uname
          );

          this.apiService.getData(url).subscribe((res: any) => {
            if (res == 'ENABLED') {
              this.accountMsg = res;
            } else if (res == 'NOCHANGE') {
              this.accountMsg = res;
            }
          });
        }
      } else if (sitename == 'validate') {
        let email = params['id'];
        let token = params['name'];
        if (email && token) {
          let url = this.occEndpointsService.buildUrl(
            'dshome/account/reactivate/validate/' + email + '/' + token
          );

          this.apiService.getData(url).subscribe((res: any) => {
            if (res == 'ENABLED') {
              this.accountMsg = res;
            } else if (res == 'NOCHANGE') {
              this.accountMsg = res;
            } else if (res == 'DISABLED') {
              this.accountMsg = res;
            }
          });
        }
      }
    });
  }
}
