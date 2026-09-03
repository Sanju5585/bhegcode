import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';
import { provideServer } from '@spartacus/setup/ssr';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [
    provideServerRouting(serverRoutes),
    ...provideServer({
      serverRequestOrigin: process.env['SERVER_REQUEST_ORIGIN'],
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
