export class QuoteStatus {
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

export enum QuoteStatusIndex {
  PROGRESS,
  PENDING,
  CLOSED,
  EXPIRED,
  RETURNED,
  BLOCKED,
  TOTAL,
}

export enum QuoteStatusName {
  TOTAL = 'All Quotes',
  PROGRESS = 'In Progress',
  PENDING = 'Pending Action',
  CLOSED = 'Closed',
  EXPIRED = 'Expired',
  RETURNED = 'Revision Requested',
  BLOCKED = 'Blocked',
}

export class QuoteStatusTypes {
  static readonly TOTAL = new QuoteStatus(
    QuoteStatusIndex.TOTAL,
    QuoteStatusName.TOTAL
  );
  static readonly PROGRESS = new QuoteStatus(
    QuoteStatusIndex.PROGRESS,
    QuoteStatusName.PROGRESS
  );
  static readonly PENDING = new QuoteStatus(
    QuoteStatusIndex.PENDING,
    QuoteStatusName.PENDING
  );
  static readonly CLOSED = new QuoteStatus(
    QuoteStatusIndex.CLOSED,
    QuoteStatusName.CLOSED
  );
  static readonly EXPIRED = new QuoteStatus(
    QuoteStatusIndex.EXPIRED,
    QuoteStatusName.EXPIRED
  );
  static readonly RETURNED = new QuoteStatus(
    QuoteStatusIndex.RETURNED,
    QuoteStatusName.RETURNED
  );
  static readonly BLOCKED = new QuoteStatus(
    QuoteStatusIndex.BLOCKED,
    QuoteStatusName.BLOCKED
  );

  private constructor(
    private readonly key: string,
    public readonly value: any
  ) {}

  toString() {
    return this.key;
  }
}
