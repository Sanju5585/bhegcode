import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { I18nModule, provideConfig } from '@spartacus/core';
import { DIALOG_TYPE, SpinnerModule } from '@spartacus/storefront';
import { ReadDismissAllComponent } from './read-dismiss-all/read-dismiss-all.component';
import { DS_DIALOG } from '../../core/dialog/dialog.config';
import { I18Pipe } from '../../shared/pipes/i18.pipe';
import { DetailedNotificationPageComponent } from './detailed-notification-page/detailed-notification-page.component';
import { DismissAllComponent } from './dismiss-all/dismiss-all.component';
import { NotificationDropdownComponent } from './notification-dropdown/notification-dropdown.component';
@NgModule({
  declarations: [
    DetailedNotificationPageComponent,
    DismissAllComponent,
    NotificationDropdownComponent,
    ReadDismissAllComponent,
  ],
  exports: [NotificationDropdownComponent],
  imports: [CommonModule, RouterModule, I18nModule, SpinnerModule],
  providers: [
    provideConfig({
      launch: {
        [DS_DIALOG.READ_DISMISS_ALL_DIALOG]: {
          inlineRoot: true,
          component: ReadDismissAllComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
        [DS_DIALOG.DISMISS_ALL_DIALOG]: {
          inlineRoot: true,
          component: DismissAllComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class NotificationsModule {}
