export interface DashboardStatusCount {
  pendingApprovalCount: number;
  approvedCount: number;
  onHoldCount: number;
  rejectedCount: number;
  completedCount: number;
  all?: number;
}

export enum AccountStatus {
  pending = `PENDING_APPROVAL`,
  onHold = `ONHOLD`,
  rejected = `REJECTED`,
  approved = `APPROVED`,
  completed = `COMPLETED`,
  all = `all`,
}

export interface AccountListResult {
  results?: AccountDetails[] | null;
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

export interface AccountDetails {
  accessRequestId: string;
  email: string;
  firstname: string;
  lastname: string;
  accountNumber: string;
  approvalStatus: string;
  username: string;
  region: string;
  app: string;
  appId: string;
  companyName: string;
  companyCountry: string;
  companyAddress: string;
  processedBy: string;
  companyAddressLine1: string;
  companyAddressLine2: string;
  district: string;
  requestorDate: string;
  ssoId: string;
  postalCode: string;
  accountLinking?: AccountLinkingEntity[] | null;
  approvalRuleList?: ApprovalRuleListEntity[] | null;
  productLine: string;
  town: string;
  processDate: string;
  requesterState: string;
  multiDashboadAccess: string;
  comments: string;
  subProductLine?: string[];
  endCustomer?: boolean;
  governmentEntity?: boolean;
  detailNumberValue?: string;
  addressProof?: string;
  addressType?: string;
  ownershipStructure?: string;
  detailNumber?: string;
}
export interface AccountLinkingEntity {
  customerNumber: string;
  salesareaList?: string[] | null;
  fptroleid: string;
  fptproductLinesList?: string[] | null;
}
export interface ApprovalRuleListEntity {
  ruleCode: string;
  ruleMessage: string;
  ruleStatus: string;
}
