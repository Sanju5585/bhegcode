import { Action } from '@ngrx/store';

export const GET_RMA_DATA = '[Rma Data] Get Rma Detail Data';

export class GetCurrentRmaDetails implements Action {
  readonly type = GET_RMA_DATA;
}

export type RMADetailActions = GetCurrentRmaDetails;
