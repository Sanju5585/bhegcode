import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../../../core/http/api.service';
import { OccEndpointsService } from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class AddressModelService {
  private $address = new BehaviorSubject(null);
  private $addAddress = new BehaviorSubject(null);
  private $addAddressFlag = new BehaviorSubject(null);
  private selectedEca: string | null;
  private selEcaText: object | null;
  private $selEcaText = new BehaviorSubject(null);
  private $addToCartFromAddrModel = new BehaviorSubject(null);  
  private ecaUpdatedProduct$ = new BehaviorSubject<any>(null);

  constructor(private apiService: ApiService,
              private occEndpoints: OccEndpointsService,
  )
   {}

setUpdatedProduct(product: any) {
  this.ecaUpdatedProduct$.next(product);
}

getUpdatedProduct() {
  return this.ecaUpdatedProduct$.asObservable();
}


  public getAddressList(cartId, shipTo?) {
    const params = ['users', 'current', 'dscheckout', cartId, 'addresses'];
    const apiUrl = this.apiService.constructUrl(params);
    if (shipTo) {
      const queryparams = {
        shipTo: true,
      };
      return this.apiService.getData(apiUrl, queryparams);
    } else {
      return this.apiService.getData(apiUrl);
    }
  }
  public getBillToAddressList(cartId) {
    const params = [
      'users',
      'current',
      'dscheckout',
      cartId,
      'billToAddresses',
    ];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl);
  }
  public getPayerAddressList(cartId) {
    const params = ['users', 'current', 'dscheckout', cartId, 'payerAddresses'];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.getData(apiUrl);
  }
  public selectAddress(cartId, code, currentAddress?: any) {
    let addressfor;
    if (currentAddress == 'shipping') addressfor = 'ship-address';
    else if (currentAddress == 'billtoAddress') addressfor = 'billto-address';
    else if (currentAddress == 'payer') addressfor = 'payer-address';
    else if (currentAddress == 'enduser') addressfor = 'enduser-address';
    else addressfor = 'enduser-address';

    const params = [
      'users',
      'current',
      'dscheckout',
      cartId,
      addressfor,
      'select',
    ];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = { selectedAddressCode: code };
    return this.apiService.getData(apiUrl, apiParams);
  }

  public searchAddress(cartId, searchCode, companyAsc) {
    const params = [
      'users',
      'current',
      'dscheckout',
      cartId,
      'address',
      searchCode,
    ];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = { state: companyAsc };
    return this.apiService.getData(apiUrl, apiParams);
  }
  public searchPayerAddress(cartId, searchCode, companyAsc) {
    const params = [
      'users',
      'current',
      'dscheckout',
      cartId,
      'payerAddress',
      searchCode,
    ];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = { state: companyAsc };
    return this.apiService.getData(apiUrl, apiParams);
  }
  public searchBillToAddress(cartId, searchCode, companyAsc) {
    const params = [
      'users',
      'current',
      'dscheckout',
      cartId,
      'BillToAddress',
      searchCode,
    ];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = { state: companyAsc };
    return this.apiService.getData(apiUrl, apiParams);
  }

  public addAddress(cartId, obj, currentAddress?: any) {
    let addressfor;
    if (currentAddress == 'shipping') addressfor = 'createShipAddress';
    else if (currentAddress == 'enduser') addressfor = 'createEndUserAddress';
    else addressfor = 'createEndUserAddress';

    const params = ['users', 'current', 'dscheckout', cartId, addressfor];
    const apiUrl = this.apiService.constructUrl(params);
    return this.apiService.postData(apiUrl, obj);
  }
  
reloadProductWithEca(productCode: string, ecaCode: string, userId: string) {
  const url = this.occEndpoints.buildUrl('product', {
    urlParams: {
      userId: userId || 'current'
    },
    queryParams: {
      productCode,
      ecaCode
    },
    scope: 'details'
  });
  return this.apiService.getData(url);
}


  public getCountry(cartId, shipping) {
    const apiParams = ['dscountries'];
    const url = this.apiService.constructUrl(apiParams);
    return this.apiService.getData(url);
  }

  public getRegion(cartId, code) {
    const params = ['dscountries', code, 'dsregions'];
    const apiUrl = this.apiService.constructUrl(params);
    const apiParams = { countryIso: code };
    return this.apiService.getData(apiUrl, apiParams);
  }

  setAddress(value) {
    this.$address.next(value);
  }

  getAddress(): Observable<any> {
    return this.$address.asObservable();
  }

  setAddAddress(value) {
    this.$addAddress.next(value);
  }

  getAddAddress(): Observable<any> {
    return this.$addAddress.asObservable();
  }

  setAddAddressFlag(value) {
    this.$addAddressFlag.next(value);
  }

  getAddAddressFlag(): Observable<any> {
    return this.$addAddressFlag.asObservable();
  }

  set setSelectedEca(value) {
    this.selectedEca = value;
  }
  get getSelectedEca() {
    return this.selectedEca;
  }

  set setSelEcaText(value) {
    this.selEcaText = value;
    this.$selEcaText.next(value);
  }
  get getSelEcaText() {
    return this.selEcaText;
  }

  get getEcaTextObservable() {
    return this.$selEcaText.asObservable();
  }

  set setAddToCartFromAddrModel(value) {
    this.$addToCartFromAddrModel.next(value);
  }

  get getAddToCartFromAddrModel() {
    return this.$addToCartFromAddrModel.asObservable();
  }
}
