import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { staticRoutes } from './static-routes';
import { RouterModule } from '@angular/router';
import { UrlModule, provideConfig } from '@spartacus/core';
import { defaultRoutingConfig } from './default-routing-config';
import { productLineRoutes } from './productLine-routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // dependend module for semantic URLs
    UrlModule,

    // standard non-spartacus routes
    RouterModule.forChild([...staticRoutes, ...productLineRoutes]),
  ],
  providers: [provideConfig(defaultRoutingConfig)],
})
export class RoutingModule {}
