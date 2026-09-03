import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import {
  CmsConfig,
  NotAuthGuard,
  UrlModule,
  I18nModule,
  ConfigModule,
  provideConfig,
} from '@spartacus/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  DIALOG_TYPE,
  FormErrorsModule,
  PageSlotModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { IdleSessionTimeoutDialogComponent } from '../idle-timeout-dialog/idle-timeout-dialog';
import { AccessDeniedComponent } from '../access-denied/access-denied.component';
import { SsoRedirectComponent } from '../sso-redirect/sso-redirect.component';
import { ReactivateComponent } from '../reactivate/reactivate.component';
import { ProductDeniedComponent } from '../product-denied/product-denied.component';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { ConfirmEmailComponent } from '../confirm-email/confirm-email.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    UrlModule,
    I18nModule,
    FormErrorsModule,
    PageSlotModule,
    SpinnerModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ReturningCustomerLoginComponent: {
          component: LoginFormComponent,
          guards: [NotAuthGuard],
        },
      },
      /* i18n: {
        backend: {
          loadPath: environment.deployPath + 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          common: ['loginForm'],
        },
      }, */
    } as CmsConfig),
  ],
  providers: [
    CommonModule,
    provideConfig({
      launch: {
        [DS_DIALOG.IDLE_TIMEOUT]: {
          inlineRoot: true,
          component: IdleSessionTimeoutDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  declarations: [
    LoginFormComponent,
    IdleSessionTimeoutDialogComponent,
    AccessDeniedComponent,
    SsoRedirectComponent,
    ReactivateComponent,
    ProductDeniedComponent,
    ConfirmEmailComponent,
  ],
  exports: [LoginFormComponent, IdleSessionTimeoutDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginFormModule {}
