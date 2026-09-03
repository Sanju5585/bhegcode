export class EquipmentStatus {
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
    public filterBy?: string,
    public statusTooltip?: string
  ) {
    this.index = statusIndex;
    this.status = statusName;
    this.label = statusLabelName;
    this.tooltip = statusTooltip;
  }
}

export enum EquipmentStatusIndex {
  pinnedItems,
  itemsDueServiceinQuarter,
  pendingRMA,
  totalItems,
  archivedItems,
}

export enum EquipmentStatusName {
  pinnedItems = 'pinnedItems',
  itemsDueServiceinQuarter = 'itemsDueServiceinQuarter',
  pendingRMA = 'pendingRMA',
  totalItems = 'totalItems',
  archivedItems = 'archivedItems',
}
export enum EquipmentStatusNameDisplay {
  pinnedItems = 'Watch List',
  itemsDueServiceinQuarter = 'Service Due in 2 months',
  pendingRMA = 'Pending RMA',
  totalItems = 'All Items',
  archivedItems = 'Archived Items',
}

export class EquipmentStatusTypes {
  static readonly pinnedItems = new EquipmentStatus(
    EquipmentStatusIndex.pinnedItems,
    EquipmentStatusName.pinnedItems,
    EquipmentStatusNameDisplay.pinnedItems
  );
  static readonly itemsDueServiceinQuarter = new EquipmentStatus(
    EquipmentStatusIndex.itemsDueServiceinQuarter,
    EquipmentStatusName.itemsDueServiceinQuarter,
    EquipmentStatusNameDisplay.itemsDueServiceinQuarter
  );
  static readonly pendingRMA = new EquipmentStatus(
    EquipmentStatusIndex.pendingRMA,
    EquipmentStatusName.pendingRMA,
    EquipmentStatusNameDisplay.pendingRMA
  );
  static readonly totalItems = new EquipmentStatus(
    EquipmentStatusIndex.totalItems,
    EquipmentStatusName.totalItems,
    EquipmentStatusNameDisplay.totalItems
  );
  static readonly archivedItems = new EquipmentStatus(
    EquipmentStatusIndex.archivedItems,
    EquipmentStatusName.archivedItems,
    EquipmentStatusNameDisplay.archivedItems
  );

  private constructor(
    private readonly key: string,
    public readonly value: any
  ) {}

  toString() {
    return this.key;
  }
}
