export interface UserListResult {
  results?: UserDetails[] | null;
  sorts?: SortsEntity[] | null;
  pagination: Pagination;
}
export interface SortsEntity {
  code: string;
  name: string;
  selected: boolean;
}
export interface Pagination {
  pageSize: number;
  currentPage: number;
  sort: string;
  totalPages: number;
  totalResults: number;
}

export interface UserDetails {
  dsRoles: string;
  editedBy : string;
  editedTime : string;
  email: string;
  lastLogin: string;
  loginDisabled: boolean;
  isInternalusers: boolean;
  name: string;
  uid: string;
}
export enum USER_ROLE_STATUS {
  ALL_ROLES = '',
  VIEW_ACCESS = 'UG_VIEW_STORE',
  FULL_ACCESS = 'UG_ADMIN_ORDER_STORE',
}
