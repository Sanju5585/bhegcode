import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';

@Component({
  standalone: false,
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  user$: Observable<unknown>;
  userType = '';
  constructor(
    protected authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private globalMessageService: GlobalMessageService,
    private customerAccService: CustomerAccountService
  ) {}

  ngOnInit(): void {
    this.customerAccService.disableChangeAccount.next(false);
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = 'current';
          return this.userAccountFacade.get();
        } else {
          this.userType = 'anonymous';
          return of(undefined);
        }
      })
    );

    this.user$.subscribe(
      (res) => {
        if (res) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );
  }
  ngOnDestroy(): void {
    this.customerAccService.disableChangeAccount.next(false);
  }
}
