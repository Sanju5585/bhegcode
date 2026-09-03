export enum AllProductLine {
  waygate = `waygate`,
  bently = `cordant`,
  panametrics = `panametrics`,
  druck = `druck`,
  reuterStokes = `reuter-stokes`,
}

export const ProductLineHomePageURL: any = {
  [AllProductLine.waygate]: `/waygate`,
  [AllProductLine.druck]: `/druck`,
  [AllProductLine.bently]: `/cordant`,
  [AllProductLine.panametrics]: `/panametrics`,
  [AllProductLine.reuterStokes]: `/reuter-stokes`,
};
export enum ProductLineStorageKey {
  productLine = `productLine`,
  avaiableProductLine = `avaiableProductLine`,
}

export const commonCmsPageLabel = {
  [AllProductLine.waygate]: `/waygateHomepage`,
  [AllProductLine.bently]: `/cordant`,
  [AllProductLine.panametrics]: `/panametrics`,
  [AllProductLine.druck]: `/druck`,
  [AllProductLine.reuterStokes]: `/reuter-stokes`,
};

export const quickOrderCmsPageLabel = {
  [AllProductLine.waygate]: `/waygateQuickOrder`,
  [AllProductLine.bently]: `/waygateQuickOrder`,
  [AllProductLine.panametrics]: `/waygateQuickOrder`,
  [AllProductLine.druck]: `/waygateQuickOrder`,
  [AllProductLine.reuterStokes]: `/waygateQuickOrder`,
};

export const cartCheckoutCmsPageLabel = {
  [AllProductLine.waygate]: `/waygateCartCheckout`,
  [AllProductLine.bently]: `/waygateCartCheckout`,
  [AllProductLine.panametrics]: `/waygateCartCheckout`,
  [AllProductLine.druck]: `/waygateCartCheckout`,
  [AllProductLine.reuterStokes]: `/waygateCartCheckout`,
};

export const returnsCheckoutCmsPageLabel = {
  [AllProductLine.waygate]: `/rmaCheckout`,
  [AllProductLine.bently]: `/rmaCheckout`,
  [AllProductLine.panametrics]: `/rmaCheckout`,
  [AllProductLine.druck]: `/rmaCheckout`,
  [AllProductLine.reuterStokes]: `/rmaCheckout`,
};
export const RegisterUrl = {
  Waygate: `${ProductLineHomePageURL[AllProductLine.waygate]}/register`,
  WaygateRegisterProgress: `${
    ProductLineHomePageURL[AllProductLine.waygate]
  }/register/progress-page`,
  WaygateRegisterEmailConfirm: `${
    ProductLineHomePageURL[AllProductLine.waygate]
  }/register/emailConfirmation`,

  Bently: `${ProductLineHomePageURL[AllProductLine.bently]}/register`,
  BentlyRegisterProgress: `${
    ProductLineHomePageURL[AllProductLine.bently]
  }/register/progress-page`,
  BentlyRegisterEmailConfirm: `${
    ProductLineHomePageURL[AllProductLine.bently]
  }/register/emailConfirmation`,

  ReuterStokes: `${
    ProductLineHomePageURL[AllProductLine.reuterStokes]
  }/register`,
  ReuterStokesRegisterProgress: `${
    ProductLineHomePageURL[AllProductLine.reuterStokes]
  }/register/progress-page`,
  ReuterStokesRegisterEmailConfirm: `${
    ProductLineHomePageURL[AllProductLine.reuterStokes]
  }/register/emailConfirmation`,

  Druck: `${ProductLineHomePageURL[AllProductLine.druck]}/register`,
  DruckRegisterProgress: `${
    ProductLineHomePageURL[AllProductLine.druck]
  }/register/progress-page`,
  DruckRegisterEmailConfirm: `${
    ProductLineHomePageURL[AllProductLine.druck]
  }/register/emailConfirmation`,

  Panametrics: `${ProductLineHomePageURL[AllProductLine.panametrics]}/register`,
  PanametricsRegisterProgress: `${
    ProductLineHomePageURL[AllProductLine.panametrics]
  }/register/progress-page`,
  PanametricsRegisterEmailConfirm: `${
    ProductLineHomePageURL[AllProductLine.panametrics]
  }/register/emailConfirmation`,
};

export const PlApiURL = {
  [RegisterUrl.Waygate]: `${AllProductLine.waygate}`,
  [RegisterUrl.Bently]: `${AllProductLine.bently}`,
  [RegisterUrl.Druck]: `${AllProductLine.druck}`,
  [RegisterUrl.Panametrics]: `${AllProductLine.panametrics}`,
  [RegisterUrl.ReuterStokes]: `${AllProductLine.reuterStokes}`,
};

export const AllProductLineNames = {
  [AllProductLine.waygate]: 'Waygate',
  [AllProductLine.bently]: `Cordant`,
  [AllProductLine.panametrics]: `Panametrics`,
  [AllProductLine.druck]: `Druck`,
  [AllProductLine.reuterStokes]: `Reuter Stokes`,
};
