import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AuthService,
  ForbiddenHandler,
  GlobalMessageService,
  GlobalMessageType,
  HttpErrorHandler,
  HttpResponseStatus,
  OccEndpointsService,
  Priority,
} from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class DSForbiddenHandler extends ForbiddenHandler {
  override responseStatus = HttpResponseStatus.FORBIDDEN;

  override handleError(request: HttpRequest<any>) {
    if (request.url.indexOf('/carts') != -1) {
    } else {
      if (
        request.url.endsWith(
          this.occEndpoints.buildUrl('user', {
            urlParams: { userId: 'current' },
          })
        )
      ) {
        this.authService.logout();
      }
      this.globalMessageService.add(
        { key: 'httpHandlers.forbidden' },
        GlobalMessageType.MSG_TYPE_ERROR
      );
    }
  }

  override getPriority(): Priority {
    return Priority.HIGH;
  }

  constructor(
    protected override globalMessageService: GlobalMessageService,
    protected override authService: AuthService,
    protected override occEndpoints: OccEndpointsService
  ) {
    super(globalMessageService, authService, occEndpoints);
  }
}
