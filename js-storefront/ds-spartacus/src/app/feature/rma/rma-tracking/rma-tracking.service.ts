import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthService } from '@spartacus/core';
import { switchMap } from 'rxjs/operators';
import { OccEndpointsService } from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { ApiService } from '../../../core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class RmaTrackingService {
  emitTileStatus = new BehaviorSubject<any>('All Orders');
  emitRmaDetail = new BehaviorSubject<any>(null);
  user$: Observable<unknown>;
  userType = '';
  rmaCartId$: Observable<string> = this.activeCartFacade.getActiveCartId();
  rmaCartId: string;
  constructor(
    public apiService: ApiService,
    private auth: AuthService,
    private userAccountFacade: UserAccountFacade,
    private activeCartFacade: ActiveCartFacade,
    private occEndpointsService: OccEndpointsService
  ) {
    this.user$ = this.auth.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = 'current';
          return this.userAccountFacade.get();
        } else {
          this.userType = 'anonymous';
          return of(undefined);
        }
      })
    );

    this.user$.subscribe(
      (res) => {
        if (res) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {}
    );
  }

  getOrderTrackingDetails(orderId) {
    const urlParams = ['users', this.userType, 'orders', orderId];
    let apiUrl = this.apiService.constructUrl(urlParams);
    let params = { fields: 'DEFAULT' };
    return this.apiService.getData(apiUrl, params);
  }

  getRefreshOrders(params) {
    //  /{baseSiteId}/users/{userId}/myReturns/fetchRMAStatusForCustomer   --- POST
    const urlParams = [
      'users',
      this.userType,
      'myReturns',
      'fetchRMAStatusForCustomer',
    ];
    let httpParams = new HttpParams({
      fromObject: {
        orderType: params.orderType,
        customerAddedFlag: params.customerAddedFlag,
        customerDeletedFlag: params.customerDeletedFlag,
        fromDate: params.fromDate,
        toDate: params.toDate,
        rmaStatus: params.rmaStatus,
        isRefreshedFlag: params.isRefreshedFlag,
        searchByValue: params.searchByValue,
        sortBy: params.sortBy,
        pageSize: params.pageSize,
        pageNumber: params.pageNumber,
      },
    });
    if (params.productLinesList) {
      httpParams = httpParams.set(
        'productLinesList',
        params.productLinesList
      );
    }
    if (params.customerNumber) {
      httpParams = httpParams.set('customerNumber', params.customerNumber);
    }
    let apiUrl = this.apiService.constructUrl(urlParams);
    return this.apiService.postQueryData(apiUrl, null, httpParams);
  }
  getDetailsinXLSFormat(
    params // https://localhost:7002/myReturns/getRMAExcelData?sortBy=sortByrmaCreatedDSC
  ) {
    const urlParam = ['users', this.userType, 'myReturns', 'getRMAExcelData'];
    const apiUrl = this.apiService.constructUrl(urlParam);

    let httpParamsObj = {
      // orderType: params.orderType,
      // customerAddedFlag: params.customerAddedFlag,
      // customerDeletedFlag: params.customerDeletedFlag,
      fromDate: params.fromDate,
      toDate: params.toDate,
      statusFilter: params.rmaStatus,
      // isRefreshedFlag: params.isRefreshedFlag,
      searchBy: params.searchByValue,
      sortBy: params.sortBy,
      pageSize: params.pageSize,
      pageNumber: params?.pageNumber||0,
    };

    const filteredParams = Object.fromEntries(
      Object.entries(httpParamsObj).filter(
        ([key, value]) => value !== null && value !== '' && value !== undefined
      )
    );

    let httpParams = new HttpParams({
      fromObject: filteredParams,
    });
    if (params.productLinesList) {
      httpParams = httpParams.set('productLines', params.productLinesList);
    }
    if (params.customerNumber) {
      httpParams = httpParams.set('customerNumber', params.customerNumber);
    }
    return this.apiService.getData_Excel(apiUrl, httpParams);
  }

  // repeatOrder(orderNumber, cartId) {
  //   const urlParam = ['users', this.userType, 'carts', cartId, 'reOrder'];
  //   // const apiUrl = this.commonService.constructUrl(urlParam);
  //   let params = new HttpParams();
  //   params = params.append('code', orderNumber);
  //   params = params.append('fields', 'FULL');
  //   params = params.append('rfqFlag', 'true');
  //   // return this.commonService.postData(apiUrl, params);
  // }

  getInquiryTypes() {
    const urlParam = ['users', this.userType, 'inquirydetails'];
    // const apiUrl = this.commonService.constructUrl(urlParam);
    // return this.commonService.getData(apiUrl);
  }

  submitInquiryToCSR(
    rmaNumber,
    purchaseOrderNumber,
    rmaCreatedDate,
    customerAccountId,
    productLine,
    enquiryType,
    userName,
    enquiryDetails,
    enquiryEmail,
    token
  ) {
    //  https://localhost:7002/occ/v2/bhge/users/{userId}/myReturns/rmaEnquiry
    const urlParam = ['users', this.userType, 'myReturns', 'rmaEnquiry'];
    const apiUrl = this.apiService.constructUrl(urlParam);
    let apiParams = {};
    if (enquiryEmail) {
      apiParams = {
        rmaNumber: rmaNumber,
        purchaseOrderNumber: purchaseOrderNumber,
        rmaCreatedDate: rmaCreatedDate,
        customerAccountId: customerAccountId,
        productLine: productLine,
        enquiryType: enquiryType,
        userName: userName,
        enquiryDetails: enquiryDetails,
        emailId: enquiryEmail,
        googleCaptcha: token,
      };
    } else {
      apiParams = {
        rmaNumber: rmaNumber,
        purchaseOrderNumber: purchaseOrderNumber,
        rmaCreatedDate: rmaCreatedDate,
        customerAccountId: customerAccountId,
        productLine: productLine,
        enquiryType: enquiryType,
        userName: userName,
        enquiryDetails: enquiryDetails,
        googleCaptcha: token,
      };
    }

    return this.apiService.postData(apiUrl, apiParams);
  }

  getAllDocuments(orderNumber, customerNumber) {
    //  /{​​​​​​​baseSiteId}​​​​​​​/users/{​​​​​​​userId}​​​​​​​/myReturns/rmaDocuments/{​​​​​​​rmaNumber}
    const urlParam = [
      'users',
      this.userType,
      'myReturns',
      'rmaDocuments',
      orderNumber,
    ];
    const apiUrl = this.apiService.constructUrl(urlParam);
    const apiParams = {
      customerNumber: customerNumber,
    };
    return this.apiService.getData(apiUrl, apiParams);
  }

  downloadDocument(docNumber, fileName, fileType, customerNumber) {
    const urlParam = [
      'users',
      this.userType,
      'myReturns',
      'rmaDocuments',
      docNumber,
      'downloadAttachment',
    ];
    const apiUrl = this.apiService.constructUrl(urlParam);
    let params = new HttpParams();
    const apiParams = {
      customerNumber: customerNumber,
      fileName: fileName,
      fileType: fileType,
    };
    // params = params.append('fileName', fileName)
    // params = params.append('fileType', fileType)
    // if (fileType == 'PDF') {
      if (fileType == 'xls' || fileType == 'xlsx') {
      return this.apiService.getData_Excel(apiUrl, apiParams);
     }
    return this.apiService.postData_File(apiUrl, apiParams);
    // } else if (fileType == 'DOC' || fileType == 'DOCX') {
    //   return this.apiService.getData_Doc(apiUrl, apiParams);
    // } else if (fileType == 'HTM' || fileType == 'HTM') {
    //   return this.apiService.getData_Doc(apiUrl, apiParams);
    // } else if (fileType == 'JPG' || fileType == 'JPG') {
    //   return this.apiService.getData_JPG(apiUrl, apiParams);
    // } else if (fileType == 'PNG' || fileType == 'PNG') {
    //   return this.apiService.getData_PNG(apiUrl, apiParams);
    // } else if (fileType == 'XLS' || fileType == 'XLXS') {
    //   return this.apiService.getData_Excel(apiUrl, apiParams);
    // }
  }

  // shareRmaDetail() {
  //   //  /{baseSiteId}/users/{userId}/myReturns/shareRMA
  //   const urlParam = ['users', 'current', 'myReturns', 'shareRMA']
  //   const apiUrl = this.apiService.constructUrl(urlParam)
  //   return this.apiService.postData(apiUrl)
  // }
  shareRmaDetail(orderNumber, customerNumber, email, token) {
    //  /{baseSiteId}/users/{userId}/orderHistory/shareDSOrders
    const urlParam = ['users', this.userType, 'myReturns', 'shareRMA'];
    const apiUrl = this.apiService.constructUrl(urlParam);
    const httpParams = new HttpParams({
      fromObject: {
        rmaNumber: orderNumber,
        customerNumber: customerNumber,
        emailIds: email,
        googleCaptcha: token,
      },
    });
    return this.apiService.postQueryData(apiUrl, {}, httpParams);
  }
}
