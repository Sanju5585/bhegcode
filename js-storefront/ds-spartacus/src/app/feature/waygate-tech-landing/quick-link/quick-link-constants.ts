import { AllProductLine } from '../../../shared/enums/availableProductList.enum';

const commonLinks = [
  {
    name: 'waygate.quick-links.browseProducts',
    iconImg: '../../../../assets/img/browseProductsIcon.svg',
  },
  { 
    name: 'waygate.quick-links.myOrders', 
    iconImg: '../../../../assets/img/myOrdersIcon.svg' 
  },
  { 
    name: 'waygate.quick-links.myReturns', 
    iconImg: '../../../../assets/img/myReturnsIcon.svg' 
  },
  { 
    name: 'waygate.quick-links.createRma', 
    iconImg: '../../../../assets/img/CreateRMA.svg' 
  },
  {
    name: 'waygate.quick-links.calibrationCertificate',
    iconImg: '../../../../assets/img/calibrationIcon.svg',
  },
  {
    name: 'waygate.quick-links.trackOrder',
    iconImg: '../../../../assets/img/trackOrderIcon.svg',
  },
  {
    name: 'waygate.quick-links.customerSupport',
    iconImg: '../../../../assets/img/customerSupportIcon.svg',
  },
  {
    name: 'waygate.quick-links.supportingLinks',
    iconImg: '../../../../assets/img/supportiveLinksIcon.svg',
  },
];

const specificLinks = {
  [AllProductLine.panametrics]: [
    '/panametrics/categories/ECOM_LVL1_00000002/Panametrics',
    '/panametrics/my-orders',
    '/panametrics/my-returns',
    '/panametrics/create-rma',
    '/panametrics/calibration-data',
    '/panametrics/track-order',
    '/panametrics/contactus',
    '/list-of-portals',
  ],
  [AllProductLine.waygate]: [
    '/waygate/categories/ECOM_LVL1_00000001/Waygate-Technologies',
    '/waygate/my-orders',
    '/waygate/my-returns',
    '/waygate/create-rma',
    '/waygate/calibration-data',
    '/waygate/track-order',
    '/waygate/contactus',
    '/list-of-portals',
  ],
  [AllProductLine.druck]: [
    '/druck/categories/ECOM_LVL1_00000008/Druck',
    '/druck/my-orders',
    '/druck/my-returns',
    '/druck/create-rma',
    '/druck/calibration-data',
    '/druck/track-order',
    '/druck/contactus',
    '/list-of-portals',
  ],
  [AllProductLine.bently]: [
    '/cordant/categories/ECOM_LVL1_00000006/cordant',
    '/cordant/my-orders',
    '/cordant/my-returns',
    '/cordant/create-rma',
    '/cordant/quick-order',
    '/cordant/track-order',
    '/cordant/contactus',
    '/list-of-portals',
  ],
  [AllProductLine.reuterStokes]: [
    '/reuter-stokes/categories/ECOM_LVL1_00000009/Reuter-Stokes',
    '/reuter-stokes/my-orders',
    '/reuter-stokes/my-returns',
    '/reuter-stokes/create-rma',
    '/reuter-stokes/calibration-data',
    '/reuter-stokes/track-order',
    '/reuter-stokes/contactus',
    '/list-of-portals',
  ],
};

export const quickLinks = Object.fromEntries(
  Object.entries(specificLinks).map(([key, links]) => [
    key,
    commonLinks.map((link, index) => ({ ...link, link: links[index] })),
  ])
);
