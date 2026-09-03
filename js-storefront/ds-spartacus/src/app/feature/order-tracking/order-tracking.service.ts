import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { AuthService } from '@spartacus/core';
import { switchMap } from 'rxjs/operators';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { use } from 'i18next';
import { ApiService } from '../../core/http/api.service';
@Injectable({
  providedIn: 'root',
})
export class OrderTrackingService {
  emitTileStatusOrder = new BehaviorSubject<any>('All Orders');
  emitOrderDetail = new BehaviorSubject<any>(null);
  emitGuestOrderDetail = new BehaviorSubject<any>(null);
  httpParams: HttpParams;
  user$: any;
  userType: string;

  constructor(
    public apiService: ApiService,
    private auth: AuthService,
    private userAccountFacade: UserAccountFacade,
    private http: HttpClient
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
    const urlParams = [
      'users',
      this.userType,
      'orderHistory',
      'orderDetails',
      orderId,
    ];
    let apiUrl = this.apiService.constructUrl(urlParams);
    let params = { fields: 'DEFAULT' };
    return this.apiService.getData(apiUrl, params);
  }

  getRefreshOrders(params) {
    const urlParams = [
      'users',
      this.userType,
      'orderHistory',
      'customerOrderStatus',
    ];
    let apiUrl = this.apiService.constructUrl(urlParams);
    if (params.orderStatus) {
      this.httpParams = new HttpParams({
        fromObject: {
          pageNumber: params.pageNumber,
          status: params.status,
          orderStatus: params.orderStatus,
          searchByValue: params.searchTerm,
          fromDate: params.fromDate,
          toDate: params.toDate,
          pageSize: params.pageSize,
          sortBy: params.sortBy,
          isRefreshedFlag: params.isRefreshedFlag,
          customerNumber: params.customerNumber,
        },
      });
    } else {
      this.httpParams = new HttpParams({
        fromObject: {
          pageNumber: params.pageNumber,
          status: params.status,
          searchByValue: params.searchTerm,
          fromDate: params.fromDate,
          toDate: params.toDate,
          pageSize: params.pageSize,
          sortBy: params.sortBy,
          isRefreshedFlag: params.isRefreshedFlag,
          customerNumber: params.customerNumber,
        },
      });
    }
    if (params.productLinesList) {
      this.httpParams = this.httpParams.append(
        'productLinesList',
        params.productLinesList
      );
    }
    return this.apiService.postQueryData(apiUrl, null, this.httpParams);
  }
  getOrders(params) {
    const urlParams = [
      'users',
      this.userType,
      'orderHistory',
      'customerOrderStatus',
    ];
    let apiUrl = this.apiService.constructUrl(urlParams);
    const httpParams = new HttpParams({
      fromObject: params,
    });
    return this.apiService.postQueryData(apiUrl, null, httpParams);
  }
  getNotifications() {
    const urlParams = ['users', this.userType, 'orderNotifications'];
    let apiUrl = this.apiService.constructUrl(urlParams);
    // let params = { fields: 'DEFAULT' };
    return this.apiService.getData(apiUrl);
  }
  readNotifications(orderId) {
    const urlParam = ['users', this.userType, 'orderRead', orderId];
    const apiUrl = this.apiService.constructUrl(urlParam);
    return this.http.post(apiUrl, '', { responseType: 'text' });
  }
  getDetailsinXLSFormat(Searchparams) {
    const urlParam = [
      'users',
      this.userType,
      'orderHistory',
      'exportOrdersToExcel',
    ];
    const apiUrl = this.apiService.constructUrl(urlParam);

    let params = new HttpParams();
    if (Searchparams.searchTerm > 0) {
      params = params.append('searchByValue', Searchparams.searchTerm);
    }
    if (Searchparams.status) {
      params = params.append('statusFilter', Searchparams.status);
    }
    if (Searchparams.fromDate) {
      params = params.append('fromDate', Searchparams.fromDate);
    }
    if (Searchparams.toDate) {
      params = params.append('toDate', Searchparams.toDate);
    }
    if (Searchparams.sortBy) {
      params = params.append('sort', Searchparams.sortBy);
    }
    if (Searchparams.productLinesList) {
      params = params.append('productLine', Searchparams.productLinesList);
    }
    if (
      Searchparams.excludeDefaultSoldTo !== null ||
      Searchparams.excludeDefaultSoldTo !== undefined
    ) {
      params = params.append(
        'excludeDefaultSoldTo',
        Searchparams.excludeDefaultSoldTo
      );
    }
    params = params.append('pageSize', Searchparams.pageSize);
    params = params.append('page', Searchparams.pageNumber.toString());

    return this.apiService.getData_Excel(apiUrl, params);
  }

  repeatOrder(orderNumber, cartId) {
    const urlParam = ['users', this.userType, 'carts', cartId, 'reOrder'];

    let params = new HttpParams();
    params = params.append('code', orderNumber);
    params = params.append('fields', 'FULL');
    params = params.append('rfqFlag', 'true');
  }

  getInquiryTypes() {
    const urlParam = ['users', this.userType, 'inquirydetails'];
  }

  submitInquiryToCSR(
    businessName,
    datePlaced,
    enquiryType,
    inquiryDetails,
    orderNumber,
    poNumber,
    productLine,
    soldToId,
    emailIds,
    token
  ) {
    const urlParam = ['users', this.userType, 'orderHistory', 'orderInquiry'];
    const apiUrl = this.apiService.constructUrl(urlParam);
    let apiParams = {};
    if (emailIds) {
      apiParams = {
        businessName: businessName,
        datePlaced: datePlaced,
        enquiryType: enquiryType,
        googleCaptcha: token,
        inquiryDetails: inquiryDetails,
        orderNumber: orderNumber,
        poNumber: poNumber,
        productLine: productLine,
        soldToId: soldToId,
        emailIds: emailIds,
      };
    } else {
      apiParams = {
        businessName: businessName,
        datePlaced: datePlaced,
        enquiryType: enquiryType,
        googleCaptcha: token,
        inquiryDetails: inquiryDetails,
        orderNumber: orderNumber,
        poNumber: poNumber,
        productLine: productLine,
        soldToId: soldToId,
      };
    }
    return this.apiService.postData(apiUrl, apiParams);
  }

  getAllDocuments(orderNumber, customerNumber) {
    const urlParam = [
      'users',
      this.userType,
      'orderHistory',
      'fetchOrderAttachments',
    ];
    const apiUrl = this.apiService.constructUrl(urlParam);
    const apiParams = {
      customerNumber: customerNumber,
      orderCode: orderNumber,
    };
    return this.apiService.getData(apiUrl, apiParams);
  }

  downloadDocument(docNumber, fileName, fileType, customerNumber) {
    const urlParam = [
      'users',
      this.userType,
      'orderHistory',
      'downloadOrderDocAttachment',
    ];
    const apiUrl = this.apiService.constructUrl(urlParam);
    let params = new HttpParams();
    const apiParams = {
      customerNumber: customerNumber,
      orderNumber: docNumber,
      fileType: fileType,
      fileName: fileName,
    };
    if (fileType.toUpperCase() == 'XLS' || fileType.toUpperCase() == 'XLSX') {
      return this.apiService.getData_Excel(apiUrl, apiParams);
    }
    return this.apiService.getData_Cache_PDF(apiUrl, apiParams);
  }
  shareRmaDetail(orderNumber, customerNumber, email, token) {
    const urlParam = ['users', this.userType, 'orderHistory', 'shareDSOrders'];
    const apiUrl = this.apiService.constructUrl(urlParam);
    this.httpParams = new HttpParams({
      fromObject: {
        orderNo: orderNumber,
        customerNo: customerNumber,
        emailIds: email,
        googleCaptcha: token,
      },
    });
    return this.apiService.postQueryData(apiUrl, {}, this.httpParams);
  }

  getMessages() {
    return this.apiService.getData(
      '/assets/i18n-assets/en/order-tracking.json'
    );
  }
}
