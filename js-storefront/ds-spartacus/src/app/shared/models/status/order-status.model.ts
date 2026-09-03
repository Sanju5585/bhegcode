export class OrderStatus {
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

export enum OrderStatusIndex {
  RECEIVED,
  BLOCKED,
  PROGRESS,
  SHIPPED,
  INVOICED,
  TOTAL,
}

export enum OrderStatusName {
  TOTAL = 'All Orders',
  SUBMITTED = 'Order Received',
  PROGRESS = 'Order In Progress',
  BLOCKED = 'Blocked',
  SHIPPED = 'Shipped',
  INVOICED = 'Shipped & Invoiced',
}

export class OrderStatusTypes {
  static readonly TOTAL = new OrderStatus(
    OrderStatusIndex.TOTAL,
    OrderStatusName.TOTAL
  );
  static readonly SUBMITTED = new OrderStatus(
    OrderStatusIndex.RECEIVED,
    OrderStatusName.SUBMITTED
  );
  static readonly PROGRESS = new OrderStatus(
    OrderStatusIndex.PROGRESS,
    OrderStatusName.PROGRESS
  );
  static readonly BLOCKED = new OrderStatus(
    OrderStatusIndex.BLOCKED,
    OrderStatusName.BLOCKED
  );
  static readonly SHIPPED = new OrderStatus(
    OrderStatusIndex.SHIPPED,
    OrderStatusName.SHIPPED
  );
  static readonly INVOICED = new OrderStatus(
    OrderStatusIndex.INVOICED,
    OrderStatusName.INVOICED
  );

  private constructor(
    private readonly key: string,
    public readonly value: any
  ) {}

  toString() {
    return this.key;
  }
}

export enum SAP_ORDER_STATUS {
  ALL = 'ALL',
  ORDER_SUBMITTED = 'RECEIVED',
  ORDER_IN_PROGRESS = 'PROCESSING',
  BLOCKED = 'BLOCKED',
  SHIPPED = 'SHIPPED',
  SHIPPED_INVOICED = 'SHIPPED & INVOICED',
}

export enum SALES_AREA {
  SALES_AREA_6210 = '6210'
}