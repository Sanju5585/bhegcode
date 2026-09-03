import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OrderTrackingService } from '../../../feature/order-tracking/order-tracking.service';
import { RmaTrackingService } from '../../../feature/rma/rma-tracking/rma-tracking.service';
import { SiteEquipmentsService } from '../../../feature/site-equipments/site-equipments.service';
import { EquipmentStatus } from '../../models/status/my-equipment-status.model';
import { OrderStatus } from '../../models/status/order-status.model';
import { RmaStatus } from '../../models/status/rma-status.model';
import { QuoteStatus, StatusType } from '../../models/status/status.model';
import { TranslationService } from '@spartacus/core';

/**
 * @author Aneesh Nair
 * Indicates singleton status tile
 */
export class StatusTile {
  /**
   * Indicates Status type - Quote or Order
   * starts from 0
   */
  statusType: string;

  /**
   * Indicates Order Status
   * OrderStatus will be null for Quote Status
   */
  orderStatus?: OrderStatus;

  /**
   * Indicates Quote Status
   * QuoteStatus will be null for Quote Status
   */
  quoteStatus?: QuoteStatus;

  /**

  * Indicates Quote Status
   * QuoteStatus will be null for Quote Status
   */
  rmaStatus?: RmaStatus;

  /**

  * Indicates equipment Status
   * QuoteStatus will be null for Quote Status
   */
  equipmentStatus?: EquipmentStatus;

  /**
   * Indicates if this status is the current status
   */
  isCurrentStatus?: boolean;

  /**
   * Bubble bg color in Hex format
   */
  statusCount? = 0;

  /**
   * Bubble bg color in Hex format
   */
  colorTheme?: string = '';

  /**
   * staus Tooltip
   */
  tooltip?: string = '';
}

/**
 * @author Aneesh Nair
 * Component to display status tiles for Order & Quote Tracking pages
 */
@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'vs-status-tiles',
  templateUrl: './status-tiles.component.html',
  styleUrls: ['./status-tiles.component.scss'],
})
export class StatusTilesComponent implements OnInit {
  @Input()
  tiles: StatusTile[];

  @Input()
  currentStatusType: StatusType;

  @Output()
  filteredTile: EventEmitter<any> = new EventEmitter();

  @Input()
  defaultTile: boolean;

  selectedTile;

  quoteSelectedTile;
  selectedOrderTile: any;
  constructor(
    private orderTrackingService: OrderTrackingService,
    private rmaTrackingService: RmaTrackingService,
    private equipmentDetailsService: SiteEquipmentsService,
    private translate: TranslationService
  ) {
    // this.quoteTrackingService.tileStatusEmitted$.subscribe(res=>{
    //   this.quoteSelectedTile = res;
    // })
  }

  ngOnInit(): void {
    this.orderTrackingService.emitTileStatusOrder.subscribe((res) => {
      if (res == 'Received') {
        this.selectedOrderTile = this.getTranslatedText('track-order.orderReceivedHeader');
      } else if (res == 'Processing') {
        this.selectedOrderTile = this.getTranslatedText('track-order.orderStatusShipped');
      } else {
        this.selectedOrderTile = res;
      }
    });

    this.rmaTrackingService.emitTileStatus.subscribe((res) => {
      this.selectedTile = res;
    });
    this.equipmentDetailsService.equipmentTileStatus.subscribe((res) => {
      this.selectedTile = res;
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  public get statusTypes(): typeof StatusType {
    return StatusType;
  }

  emitTileClick(tile: StatusTile) {
    this.filteredTile.emit(tile);
  }
}
