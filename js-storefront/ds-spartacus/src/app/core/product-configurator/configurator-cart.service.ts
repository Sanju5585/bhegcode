import { Injectable } from '@angular/core';
import * as AddconfigAction from './ds-configurator-cart.action';
import * as updateConfigAction from './ds-configurator-updatecart.action';
import { CommonConfigurator } from '@spartacus/product-configurator/common';
import {
  Configurator,
  ConfiguratorActions,
  ConfiguratorCartService,
} from '@spartacus/product-configurator/rulebased';
import { take } from 'rxjs';
import { DsConfgiurator } from './ds-configurator.model';

@Injectable()
export class DSConfiguratorCartService extends ConfiguratorCartService {
  override addToCart(
    productCode: string,
    configId: string,
    owner: CommonConfigurator.Owner,
    quantity?: number,
    file?: File,
    mediaCode?: String
  ): void {
    this.activeCartService
      .requireLoadedCart()
      .pipe(take(1))
      .subscribe((cart) => {
        this.userIdService
          .getUserId()
          .pipe(take(1))
          .subscribe((userId) => {
            const addToCartParameters: DsConfgiurator.DSAddToCartParameter = {
              userId: userId,
              cartId: this.commonConfigUtilsService.getCartId(cart),
              productCode: productCode,
              quantity: quantity ?? 1,
              configId: configId,
              owner: owner,
              file: file,
              mediaCode: mediaCode,
            };
            this.store.dispatch(
              new AddconfigAction.DSAddToCart(addToCartParameters)
            );
          });
      });
  }
  override updateCartEntry(
    configuration: Configurator.Configuration,
    file?: File,
    mediaCode?: String
  ): void {
    this.activeCartService
      .requireLoadedCart()
      .pipe(take(1))
      .subscribe((cart) => {
        this.userIdService
          .getUserId()
          .pipe(take(1))
          .subscribe((userId) => {
            const parameters: DsConfgiurator.DSUpdateCartParameters = {
              userId: userId,
              cartId: this.commonConfigUtilsService.getCartId(cart),
              cartEntryNumber: configuration.owner.id,
              configuration: configuration,
              file: file,
              mediaCode: mediaCode,
            };

            this.store.dispatch(
              new updateConfigAction.DSUpdateCartEntry(parameters)
            );
          });
      });
  }
}
