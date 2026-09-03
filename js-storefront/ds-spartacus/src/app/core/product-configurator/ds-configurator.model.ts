import { CommonConfigurator } from '@spartacus/product-configurator/common';
import { Configurator } from '@spartacus/product-configurator/rulebased';

export namespace DsConfgiurator {
  export interface DSAddToCartParameter {
    userId: string;
    cartId: string;
    productCode: string;
    quantity: number;
    configId: string;
    owner: CommonConfigurator.Owner;
    file?: File;
    mediaCode?: String;
  }
  export interface DSUpdateCartParameters {
    userId: string;
    cartId: string;
    cartEntryNumber: string;
    configuration: Configurator.Configuration;
    file: File;
    mediaCode?: String;
  }
}
