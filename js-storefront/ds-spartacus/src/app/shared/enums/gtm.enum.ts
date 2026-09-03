export enum GtmEvents {
  ViewItemList = `view_item_list`,
  ViewItem = `view_item`,
  Login = `login`,
  LoginError = `login_error`,
  SelectItem = `select_item`,
  AddToCart = `add_to_cart`,
  AddToWishlist = `add_to_wishlist`,
  ViewCart = `view_cart`,
  RemoveFromCart = `remove_from_cart`,
  BeginCheckout = `begin_checkout`,
  AddShippingInfo = `add_shipping_info`,
  AddPaymentInfo = `add_payment_info`,
  Purchase = `purchase`,
  PriceLookupVC = `price_lookup_vc`,
  QuickOrderTableDisplay = `quick_order_table_display`,
}

export enum LoginMethod {
  Local = 'LOCAL',
  Okta = 'OKTA',
}

export enum StoreTypeEnum {
  Waygate = 'Waygate',
  Bently_nevada = 'Cordant',
  Panametrics = 'Panametrics',
  Dsstore = 'DSStore',
  Druck = 'Druck',
  ReuterStokes = 'Reuter Stokes',
}

export enum ItemListTypeEnum {
  Search = 'Search',
  FeaturedProducts = 'Featured Products',
  BestSellers = 'Best Sellers',
  ProductListing = 'Product Listing',
  ProductDetail = 'Product Details',
  QuickOrder = 'Quick Order',
  MyFavourite = 'My Favorites',
  Cart = 'Cart',
  Checkoutpage = 'Checkout Page',
  SavedCart = 'Saved Cart',
}

export enum PaymentTypeEnum {
  CreditCard = 'Credit Card',
  PO = 'Purchase Order',
}

export type LoginMethodType = LoginMethod.Local | LoginMethod.Okta;

export type StoreType =
  | StoreTypeEnum.Waygate
  | StoreTypeEnum.Bently_nevada
  | StoreTypeEnum.Panametrics
  | StoreTypeEnum.Dsstore
  | StoreTypeEnum.Druck
  | StoreTypeEnum.ReuterStokes;

export type ItemListType =
  | ItemListTypeEnum.Search
  | ItemListTypeEnum.FeaturedProducts
  | ItemListTypeEnum.BestSellers
  | ItemListTypeEnum.ProductListing
  | ItemListTypeEnum.ProductDetail
  | ItemListTypeEnum.QuickOrder
  | ItemListTypeEnum.MyFavourite
  | ItemListTypeEnum.Checkoutpage
  | ItemListTypeEnum.Cart
  | ItemListTypeEnum.SavedCart;

export type PaymentType = PaymentTypeEnum.CreditCard | PaymentTypeEnum.PO;
