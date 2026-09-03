export class RmaStatus {
  /**
   * Indicates the status index in number
   * starts from 0
   */
  index: number;

  /**
   * Indicates status type.
   * Status type is defined in OrderStatusTypes
   */
  status?: string;

  /**
   * Indicates the label of the status to be shown on screen.
   */
  label?: string;

  /**
   * Indicates tool tip text for a particular status type
   * visible on hover of a particular status
   */
  tooltip?: string;

  constructor(
    public statusIndex: number,
    public statusName?: string,
    public statusLabelName?: string,
    public statusTooltip?: string
  ) {
    this.index = statusIndex;
    this.status = statusName;
    this.label = statusLabelName;
    this.tooltip = statusTooltip;
  }
}

export enum RmaStatusIndex {
  SUBMITTED,
  BLOCKED,
  PROGRESS,
  EVALUATING,
  PROCESSING,
  SHIPPED,
  INVOICED,
  TOTAL,
}

export enum RmaStatusName {
  TOTAL = 'All RMA',
  SUBMITTED = 'RMA Submitted',
  PROGRESS = 'Awaiting Goods',
  EVALUATING = 'Evaluating',
  BLOCKED = 'Blocked',
  PROCESSING = 'Processing',
  SHIPPED = 'In Shipping',
  INVOICED = 'Complete',
}

export class RmaStatusTypes {
  static readonly TOTAL = new RmaStatus(
    RmaStatusIndex.TOTAL,
    RmaStatusName.TOTAL
  );
  static readonly SUBMITTED = new RmaStatus(
    RmaStatusIndex.SUBMITTED,
    RmaStatusName.SUBMITTED
  );
  static readonly PROGRESS = new RmaStatus(
    RmaStatusIndex.PROGRESS,
    RmaStatusName.PROGRESS
  );
  static readonly EVALUATING = new RmaStatus(
    RmaStatusIndex.EVALUATING,
    RmaStatusName.EVALUATING
  );
  static readonly BLOCKED = new RmaStatus(
    RmaStatusIndex.BLOCKED,
    RmaStatusName.BLOCKED
  );
  static readonly PROCESSING = new RmaStatus(
    RmaStatusIndex.PROCESSING,
    RmaStatusName.PROCESSING
  );
  static readonly SHIPPED = new RmaStatus(
    RmaStatusIndex.SHIPPED,
    RmaStatusName.SHIPPED
  );
  static readonly INVOICED = new RmaStatus(
    RmaStatusIndex.INVOICED,
    RmaStatusName.INVOICED
  );

  private constructor(
    private readonly key: string,
    public readonly value: any
  ) {}

  toString() {
    return this.key;
  }
}

export enum SAP_RMA_STATUS {
  RMA_SUBMITTED = 'RMA SUBMITTED',
  AWAITING_ORDERS = 'AWAITING GOODS',
  EVALUATING = 'EVALUATING',
  PROCESSING = 'PROCESSING',
  BLOCKED = 'BLOCKED',
  SHIPPED = 'IN SHIPPING',
  SHIPPED_INVOICED = 'COMPLETE',
}

export enum SAP_RMA_AWAITING_PROCESSING_ORDER {
  AWAITINGPURCHASEORDER = 'Awaiting Purchase Order',
}
