import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  httpErrorInterceptors,
  I18nModule,
  provideConfig,
} from '@spartacus/core';

import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
//import { NgIdleModule } from '@ng-idle/core';
import { SpartacusModule } from './spartacus/spartacus.module';
import { CommonModule, DatePipe } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SampleModule } from './feature/sample/sample.module';
import { ComponentLibraryWrapperModule } from './component-library-wrapper.module';
import { AppRoutingModule, OnNavigateConfig } from '@spartacus/storefront';
import { ROUTER_CONFIGURATION } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SpartacusModule,
    SampleModule,
    ComponentLibraryWrapperModule,
    I18nModule,
    // NgIdleModule.forRoot(),
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 300,
      logOnly: environment.production,
    }),
  ],
  providers: [
    DatePipe,
    ...httpErrorInterceptors,
    provideAnimationsAsync(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideConfig(<OnNavigateConfig>{
      enableResetViewOnNavigate: {
        active: false,
      },
    }),
    {
      provide: ROUTER_CONFIGURATION,
      useValue: { scrollPositionRestoration: 'disabled' },
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
