import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { OccEndpointsService } from '@spartacus/core';
import { ApiService } from '../../http/api.service';

import * as fromProductCategoriesAction from '../store/actions/product-categories.action';
import * as fromProductCategoriesSelectors from '../store/selectors/product-categories.selector';
import { DsAppState } from '../../../store/app.reducer';
import { ConfiguratorActions } from '@spartacus/product-configurator/rulebased';

@Injectable({ providedIn: 'root' })
export class ProductCategoriesService {
  constructor(
    private apiService: ApiService,
    private store: Store<DsAppState>,
    private occEndpointsService: OccEndpointsService
  ) {}

  loadDefaultProductCategories(userId: string) {
    this.store.dispatch(
      new fromProductCategoriesAction.FetchAllProductCategories(userId)
    );
  }

  fetchDefaultProductCategories() {
    return this.store.select(
      fromProductCategoriesSelectors.fetchProductCategories
    );
  }

  getProductCategoryFromId(id: string) {
    let url = this.occEndpointsService.buildUrl('/users/current/' + id);
    return this.apiService.getData(url);
  }

  fetchSelectedAccessories() {
    return this.store.select(
      fromProductCategoriesSelectors.fetchSelectedAccessories
    );
  }

  fetchQuickOrderDatafromStore() {
    return this.store.select(
      fromProductCategoriesSelectors.fetchQuickOrderData
    );
  }

  fetchQuickOrderVCPricesfromStore() {
    return this.store.select(
      fromProductCategoriesSelectors.fetchQuickOrderVCPriceData
    );
  }
  setQuickOrderParts(parts: any) {
    this.store.dispatch(
      new fromProductCategoriesAction.SetQuickOrderParts(parts)
    );
  }

  setVCConfigPrices(data) {
    this.store.dispatch(
      new fromProductCategoriesAction.SetVCProductsAndPricesForQuickOrder(data)
    );
  }

  forceCreateNewConfig(owner) {
    this.store.dispatch(
      new ConfiguratorActions.CreateConfiguration({
        owner: owner,
        forceReset: true,
      })
    );
  }
}
