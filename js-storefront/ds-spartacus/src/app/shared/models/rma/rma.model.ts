export class RmaEntry {
  partNumber: string;
  similarPart?: boolean;
  accessoryPartNumbers?: any[];
  entryNumber?: number;
  serialNumber?: any[];
  quantity?: number;
  returnToSiteCode?: string;
  returnToSiteName?: string;
  availableSites?: any[];
  pricingInfo?: any;
  serviceOfferings?: ServiceOffering[];
  parentServiceOfferings?: ServiceOffering[];
  problemDescription?: string;
  availableSitesList?: SiteList[];
  returnToSiteId?: string;
  accessoryProducts?: any[];
  formattedPrice?: string;
  isAccessory?: boolean;
  price?: number;
  additionalInfo?: AdditionalInfo;
  productDetails?: string;
  offeringDataList?: [];
}
export class ServiceOffering {
  offeringType?: string;
  offeringCode?: string;
  offeringPrice?: number;
  offeringDiscount?: number;
  offeringText?: string;
  problemDescription?: string;
  otherDetails?: string;
  availableSitesList?: SiteList[];

  constructor() {
    this.offeringType = '';
    this.offeringCode = '';
    this.offeringPrice = null;
    this.offeringDiscount = null;
    this.offeringText = '';
    this.problemDescription = '';
    this.otherDetails = '';
    this.availableSitesList = [];
  }
}

export class AdditionalInfo {
  isAccessoryPresent: boolean;
  manufactureYear: string;
  recommendedAccessories: string;
  serviceNotes: string;
  warrantyStatement: string;

  constructor() {
    this.isAccessoryPresent = false;
    this.manufactureYear = '';
    this.recommendedAccessories = '';
    this.serviceNotes = '';
    this.warrantyStatement = '';
  }
}

export interface SiteList {
  siteId: string;
  siteName: string;
}

export enum ReturnTypeId {
  credit = 'RETURNFORCREDIT',
  scrap = 'RETURNFORSCRAP',
  replace = 'RETURNFORREPLACE',
}

export class ReturnType {
  type: ReturnTypeId;
  labelName: string;
}

export const OTHER_PART_NUMBER = 'other';
