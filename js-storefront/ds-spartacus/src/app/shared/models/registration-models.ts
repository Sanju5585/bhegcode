export class RegFormFields {
  accountTypeList: string[] = [];
  applicationList: Application[] = [];
  countryList: string[] = [];
  dsMarket: string[] = [];
  dsRoles: string[] = [];
  productList: string[] = [];
  subProductList: string[] = [];
}

export interface Application {
  applicationDetails: string;
  applicationId: string;
  applicationName: string;
  applicationStatus: string;
}
