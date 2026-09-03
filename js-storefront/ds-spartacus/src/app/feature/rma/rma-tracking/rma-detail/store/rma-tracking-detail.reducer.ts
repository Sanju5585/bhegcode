import * as FromRMADetailActions from '../store/rma-detail.action';

export interface RMADetail {
  rmaDetailData;
}

const initialState: RMADetail = {
  rmaDetailData: null,
};

export function customerAccountReducer(
  state = initialState,
  action: FromRMADetailActions.RMADetailActions
) {
  switch (action.type) {
    case FromRMADetailActions.GET_RMA_DATA:
      return {
        ...state,
        currentCustomerAccount: {
          ...state.rmaDetailData,
        },
      };
  }
}
