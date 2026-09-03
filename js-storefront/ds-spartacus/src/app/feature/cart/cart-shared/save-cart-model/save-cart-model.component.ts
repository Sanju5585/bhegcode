import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  SecurityContext,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Actions, ofType } from '@ngrx/effects';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
  User,
} from '@spartacus/core';
import { ICON_TYPE, LaunchDialogService } from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { SharedCartService } from '../shared-cart.service';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { SavedCartService } from '../../../saved-cart/service/saved-cart.service';
import { ApiService } from '../../../../core/http/api.service';
import { environment } from '../../../../../environments/environment';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';

@Component({
  standalone: false,
  selector: 'app-save-cart-model',
  templateUrl: './save-cart-model.component.html',
  styleUrls: ['./save-cart-model.component.scss'],
})
export class SaveCartModelComponent implements OnInit {
  iconTypes = ICON_TYPE;
  modalIsOpen = false;
  cartName = '';
  cartDescription = '';
  nameErrorMessage = '';
  duplicateErrorMessage = '';
  showCartError = false;
  showDuplicateCartErr = false;

  currentUser;

  @Input() public currentCart: any = null;

  createSavedCartForm = this.fb.group({
    description: [''],
    cartName: ['', Validators.required],
  });
  dataSource = [];
  userType: string;
  existFlag: string;

  constructor(
    private launchDialogService: LaunchDialogService,
    private fb: FormBuilder,
    public apiService: ApiService,
    private auth: AuthService,
    private userAccountFacade: UserAccountFacade,
    private multiCartFacade: MultiCartFacade,
    private globalMessageService: GlobalMessageService,
    private sharedCartService: SharedCartService,
    private actions$: Actions,
    protected activeCartFacade: ActiveCartFacade,
    private translate: TranslationService,
    private savedCartService: SavedCartService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.launchDialogService.data$.subscribe((data) => {
      this.currentCart = data?.currentCart;
    });
    this.getUserData().subscribe(
      (user) => {
        this.currentUser = user;
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
    this.loadCartData();
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  public getUserData(): Observable<User> {
    return this.auth.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userAccountFacade.get();
        } else {
          return of(undefined);
        }
      })
    );
  }

  dismissModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }

  checkExistingName() {
    let param = {
      page: 0,
      saveCartName: this.cartName,
      show: 'Page',
    };
    this.savedCartService
      .checkExistingName(param, this.currentCart.code)
      .pipe(take(1))
      .subscribe((res: any) => {
        this.existFlag = res;
        if (this.existFlag == 'true') {
          return;
        } else {
          if (this.createSavedCartForm.valid) {
            const PRE_URL =
              environment.occBaseUrl +
              environment.occPrefix +
              environment.occBaseSite;
            this.apiService
              .patchData(
                `${PRE_URL}/users/current/carts/${this.currentCart.code}/save`,
                {},
                {
                  params: {
                    saveCartName: this.cartName,
                    saveCartDescription: this.cartDescription,
                  },
                }
              )
              .pipe(take(1))
              .subscribe(
                (res: any) => {
                  this.multiCartFacade.createCart({
                    userId: 'current',

                    extraData: {
                      active: true,
                    },
                  });
                  this.actions$
                    .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(1))
                    .subscribe((res: any) => {
                      this.multiCartFacade.loadCart({
                        userId: 'current',
                        cartId: res.payload.cartId,
                        extraData: {
                          active: true,
                        },
                      });
                      this.actions$
                        .pipe(ofType(CartActions.LOAD_CART_SUCCESS), take(1))
                        .subscribe((res) => {
                          this.globalMessageService.add(
                            {
                              key: 'savedCart.cartSaveSuccess',
                              params: { cartName: this.cartName },
                            },
                            GlobalMessageType.MSG_TYPE_CONFIRMATION,
                            9000
                          );
                          window.scrollTo(0, 0);
                          this.dismissModal(
                            this.getTranslatedText('buyCart.dismissAfterSave')
                          );
                        });
                    });
                },
                (err) => {
                  let errorMsg = '';
                  if (err !== undefined && err['error'] !== undefined) {
                    if (err.error?.errors[0]?.message == '102') {
                      this.showCartError = false;
                      this.showDuplicateCartErr = true;
                      this.duplicateErrorMessage =
                        this.getTranslatedText('buyCart.cartExists');
                    } else if (err.error?.errors[0]?.message == '101') {
                      this.sharedCartService.maxSavedCartErrorNotification.next(
                        true
                      );
                      setTimeout(() => {
                        this.sharedCartService.maxSavedCartErrorNotification.next(
                          false
                        );
                      }, 9000);

                      setTimeout(() => {
                        window.scrollTo(0, 0);
                      }, 1500);
                      this.dismissModal(
                        this.getTranslatedText('buyCart.dismissAfterSave')
                      );
                    } else {
                      this.globalMessageService.add(
                        this.getTranslatedText('buyCart.issueWhileSavingCart'),
                        GlobalMessageType.MSG_TYPE_ERROR,
                        5000
                      );
                    }
                  }
                }
              );
          } else {
            this.createSavedCartForm.markAllAsTouched();
          }
        }
      });
  }

  onSubmit() {
    this.existFlag = 'false';
    this.nameErrorMessage = '';
    this.cartName = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, this.cartName.trim()),
      REGULAR_PATTERN.alphaNumeric
    );
    this.cartDescription = testRegex(
      this.sanitizer.sanitize(
        SecurityContext.HTML,
        this.cartDescription.trim()
      ),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    if (!this.cartName.trim().length) {
      this.showDuplicateCartErr = false;
      this.showCartError = true;
      this.nameErrorMessage = this.getTranslatedText('buyCart.enterCartName');
      return;
    }
    this.checkExistingName();
  }

  loadCartData() {
    const url = this.apiService.constructUrl([
      'users',
      'current',
      `carts?savedCartsOnly=true&fields=FULL&pageSize=30&sort=byDateSaved`,
    ]);
    this.apiService.getData(url).subscribe(
      (data: any) => {
        this.dataSource = data['carts'];
      },
      (err) => {
        this.globalMessageService.add(
          err,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
        this.dataSource = [];
      }
    );
  }
}
