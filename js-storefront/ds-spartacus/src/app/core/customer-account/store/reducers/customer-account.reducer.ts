import { CustomerAccount, SalesArea } from '../customer-account.model';
import * as FromCustomerAccountActions from '../actions/customer-account.action';
import { HttpErrorModel } from '@spartacus/core';
import { createReducer, on } from '@ngrx/store';

let customerAccountObj = {} as CustomerAccount;
let customerGuestSalesAreaObj = {} as SalesArea;

export interface CustomerAccountState {
  currentCustomerAccount: CustomerAccount;
  customerAccountLoaded: boolean;
  favCustomerAccounts: CustomerAccount[] | HttpErrorModel;
  recentCustomerAccounts: CustomerAccount[] | HttpErrorModel;
  guestSalesAreas: SalesArea[];
  currentGuestSalesArea: SalesArea;
  productLine?: string;
  customerUserType?: string;
  accessCSRProductLines?: string[];
}

const initialState: CustomerAccountState = {
  currentCustomerAccount: customerAccountObj,
  customerAccountLoaded: false,
  favCustomerAccounts: [],
  recentCustomerAccounts: [],
  guestSalesAreas: [],
  currentGuestSalesArea: customerGuestSalesAreaObj,
  productLine: '',
  customerUserType: '',
  accessCSRProductLines: [],
};

export const customerAccountReducer = createReducer(
  initialState,
  on(FromCustomerAccountActions.SetCustomerAccount, (state, { payload }) => ({
    ...state,
    currentCustomerAccount: {
      ...state.currentCustomerAccount,
      ...payload,
      selectedSalesArea: payload.salesAreaObjectDataList.filter(
        (en) => en['active'] === true
      )[0],
    },
    customerAccountLoaded: true,
  })),
  on(
    FromCustomerAccountActions.UpdateCurrentCustomerAccount,
    (state, { payload }) => ({
      ...state,
      currentCustomerAccount: {
        ...state.currentCustomerAccount,
        ...payload,
      },
    })
  ),
  on(FromCustomerAccountActions.LoadFavCustomerAccounts, (state, {}) => ({
    ...state,
    favCustomerAccounts: {
      ...state.favCustomerAccounts,
    },
  })),
  on(
    FromCustomerAccountActions.LoadFavCustomerAccountsSuccess,
    (state, { payload }) => ({
      ...state,
      favCustomerAccounts: {
        ...state.favCustomerAccounts,
        ...payload,
      },
    })
  ),
  on(
    FromCustomerAccountActions.LoadFavCustomerAccountsFail,
    (state, { payload }) => ({
      ...state,
      favCustomerAccounts: {
        ...state.favCustomerAccounts,
        ...payload,
      },
    })
  ),
  on(FromCustomerAccountActions.AddFavCustomerAccount, (state, { payload }) => {
    let updatedFavList: CustomerAccount[] = [];
    updatedFavList = Object.assign([], state.favCustomerAccounts);
    updatedFavList.push(payload);
    return {
      ...state,
      favCustomerAccounts: {
        ...updatedFavList,
      },
    };
  }),
  on(
    FromCustomerAccountActions.RemoveFavCustomerAccount,
    (state, { payload }) => {
      let favList: CustomerAccount[] = [];
      favList = Object.assign([], state.favCustomerAccounts);
      return {
        ...state,
        favCustomerAccounts: favList.filter((fav) => {
          return fav.uid != payload.uid;
        }),
      };
    }
  ),
  on(FromCustomerAccountActions.LoadRecentCustomerAccounts, (state, {}) => ({
    ...state,
    recentCustomerAccounts: {
      ...state.recentCustomerAccounts,
    },
  })),
  on(
    FromCustomerAccountActions.LoadRecentCustomerAccountsSuccess,
    (state, { payload }) => ({
      ...state,
      recentCustomerAccounts: {
        ...state.recentCustomerAccounts,
        ...payload,
      },
    })
  ),
  on(
    FromCustomerAccountActions.LoadRecentCustomerAccountsFail,
    (state, { payload }) => ({
      ...state,
      recentCustomerAccounts: {
        ...state.recentCustomerAccounts,
        ...payload,
      },
    })
  ),
  on(FromCustomerAccountActions.LoadGuestSalesAreas, (state, {}) => ({
    ...state,
  })),
  on(
    FromCustomerAccountActions.LoadGuestSalesAreasSuccess,
    (state, { payload }) => {
      let salesArea;
      if (payload) {
        salesArea = Object.values(payload).filter((val) => val.active == true);
      }
      return {
        ...state,
        guestSalesAreas: {
          ...state.guestSalesAreas,
          ...payload,
        },
        currentGuestSalesArea: salesArea?.length > 0 ? salesArea[0] : {},
      };
    }
  ),
  on(
    FromCustomerAccountActions.LoadGuestSalesAreasFail,
    (state, { payload }) => ({
      ...state,
      guestSalesAreas: {
        ...state.guestSalesAreas,
        ...payload,
      },
    })
  ),
  on(FromCustomerAccountActions.UpateGuestSalesArea, (state, { payload }) => ({
    ...state,
    currentGuestSalesArea: {
      ...payload,
    },
  })),

  on(FromCustomerAccountActions.setProductLine, (state, { payload }) => ({
    ...state,
    productLine: payload,
  })),
  on(
    FromCustomerAccountActions.UpdateAvaiableProductLine,
    (state, { payload }) => ({
      ...state,
      currentCustomerAccount: {
        ...state.currentCustomerAccount,
        visibleCategories: payload,
      },
    })
  ),
  on(FromCustomerAccountActions.setCustomerUserType, (state, { payload }) => ({
    ...state,
    customerUserType: payload,
  })),
  on(
    FromCustomerAccountActions.setAccessCSRProductLines,
    (state, { payload }) => ({
      ...state,
      accessCSRProductLines: payload,
    })
  )
);
// export function customerAccountReducer(
//   state = initialState,
//   action: FromCustomerAccountActions.CustomerAccountActions
// ) {
//   switch (action.type) {
//     case FromCustomerAccountActions.SET_CUST_ACCOUNT:
//       const selectedLegalEntity = action.payload.salesAreaObjectDataList.filter(
//         (en) => en['active'] === true
//       )[0];
//       return {
//         ...state,
//         currentCustomerAccount: {
//           ...state.currentCustomerAccount,
//           ...action.payload,
//           selectedSalesArea: selectedLegalEntity,
//         },
//         customerAccountLoaded: true,
//       };
//     case FromCustomerAccountActions.GET_CUST_ACCOUNT:
//       return {
//         ...state,
//         currentCustomerAccount: {
//           ...state.currentCustomerAccount,
//         },
//       };
//     case FromCustomerAccountActions.UPDATE_CUST_ACCOUNT:
//       return {
//         ...state,
//         currentCustomerAccount: {
//           ...state.currentCustomerAccount,
//           ...action.payload,
//         },
//       };
//     case FromCustomerAccountActions.LOAD_FAV_CUST_ACCOUNTS:
//       return {
//         ...state,
//         favCustomerAccounts: {
//           ...state.favCustomerAccounts,
//         },
//       };
//     case FromCustomerAccountActions.LOAD_FAV_CUST_ACCOUNTS_SUCCESS:
//       return {
//         ...state,
//         favCustomerAccounts: {
//           ...state.favCustomerAccounts,
//           ...action.payload,
//         },
//       };
//     case FromCustomerAccountActions.LOAD_FAV_CUST_ACCOUNTS_FAIL:
//       return {
//         ...state,
//         favCustomerAccounts: {
//           ...state.favCustomerAccounts,
//           ...action.payload,
//         },
//       };
//     case FromCustomerAccountActions.ADD_FAV_CUST_ACCOUNT:
//       let updatedFavList: CustomerAccount[] = [];
//       updatedFavList = Object.assign([], state.favCustomerAccounts);
//       updatedFavList.push(action.payload);
//       return {
//         ...state,
//         favCustomerAccounts: {
//           ...updatedFavList,
//         },
//       };
//     case FromCustomerAccountActions.REMOVE_FAV_CUST_ACCOUNT:
//       let favList: CustomerAccount[] = [];
//       favList = Object.assign([], state.favCustomerAccounts);
//       return {
//         ...state,
//         favCustomerAccounts: favList.filter((fav) => {
//           return fav.uid != action.payload.uid;
//         }),
//       };
//     case FromCustomerAccountActions.LOAD_RECENT_CUST_ACCOUNTS:
//       return {
//         ...state,
//         recentCustomerAccounts: {
//           ...state.recentCustomerAccounts,
//         },
//       };
//     case FromCustomerAccountActions.LOAD_RECENT_CUST_ACCOUNTS_SUCCESS:
//       return {
//         ...state,
//         recentCustomerAccounts: {
//           ...state.recentCustomerAccounts,
//           ...action.payload,
//         },
//       };
//     case FromCustomerAccountActions.LOAD_RECENT_CUST_ACCOUNTS_FAIL:
//       return {
//         ...state,
//         recentCustomerAccounts: {
//           ...state.recentCustomerAccounts,
//           ...action.payload,
//         },
//       };
//     case FromCustomerAccountActions.LOAD_GUEST_SALES_AREA:
//       return {
//         ...state,
//       };
//     case FromCustomerAccountActions.LOAD_GUEST_SALES_AREA_SUCCESS:
//       let salesArea;
//       if (action.payload) {
//         salesArea = Object.values(action.payload).filter(
//           (val) => val.active == true
//         );
//       }
//       return {
//         ...state,
//         guestSalesAreas: {
//           ...state.guestSalesAreas,
//           ...action.payload,
//         },
//         currentGuestSalesArea: salesArea.length > 0 ? salesArea[0] : {},
//       };
//     case FromCustomerAccountActions.LOAD_GUEST_SALES_AREA_FAIL:
//       return {
//         ...state,
//         guestSalesAreas: {
//           ...state.guestSalesAreas,
//           ...action.payload,
//         },
//       };
//     case FromCustomerAccountActions.UPDATE_GUEST_SALES_AREA:
//       return {
//         ...state,
//         currentGuestSalesArea: {
//           ...action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// }