import { Component, OnInit, Input } from '@angular/core';

import { isNgTemplate } from '@angular/compiler';
import {
  RmaStatus,
  RmaStatusIndex,
  RmaStatusTypes,
} from '../../models/status/rma-status.model';
import {
  OrderStatus,
  OrderStatusIndex,
  OrderStatusTypes,
} from '../../models/status/order-status.model';
import {
  QuoteStatusIndex,
  QuoteStatusTypes,
} from '../../models/status/quote-status.model';
import { QuoteStatus, StatusType } from '../../models/status/status.model';
import { TranslationService } from '@spartacus/core';

/**
 * @author Aneesh Nair
 * Indicates singleton status bubble
 */
export class StatusBubble {
  /**
   * Indicates Status type - Quote or Order
   * starts from 0
   */
  statusType: string;

  /**
   * Indicates Order Status
   * OrderStatus will be null for Quote Status
   */
  orderStatus?: OrderStatus | any;

  /**
   * Indicates RMA Status
   * OrderStatus will be null for Quote Status
   */
  rmaStatus?: RmaStatus;

  /**
   * Indicates Quote Status
   * QuoteStatus will be null for Quote Status
   */
  quoteStatus?: QuoteStatus | any;

  /**
   * Indicates if this status is the current status
   */
  isCurrentStatus?: boolean;

  /**
   * Bubble bg color in Hex format
   */
  backgroundColor?: string;

  /**
   * Bubble font/icon color in Hex format
   * Default value is white
   */
  foregroundColor? = '#ffffff';

  /**
   * Icon to be displayed for a particular status
   * Value should be material design icon class
   */
  icon?: string;
  /**
   * Tooltip
   */
  tooltip?: string;
}

/**
 * @author Aneesh Nair
 * Component to display status bubbles for Order & Quote Tracking details pages
 */
@Component({
  standalone: false,
  // tslint:disable-next-line: component-selector
  selector: 'vs-status-bubble',
  templateUrl: './status-bubble.component.html',
  styleUrls: ['./status-bubble.component.scss'],
})
export class StatusBubbleComponent implements OnInit {
  bubbles: StatusBubble[];
  quoteBubbles: StatusBubble[];
  orderBubbles: StatusBubble[];
  rmaBubbles: StatusBubble[];
  blockedBubble: StatusBubble;
  returnBubble: StatusBubble;

  @Input()
  currentStatusIndex: QuoteStatusIndex | OrderStatusIndex | RmaStatusIndex;

  @Input()
  statusType: StatusType;

  @Input()
  isBlocked?: boolean;

  @Input()
  isReturned?: boolean;

  constructor(
    private translate: TranslationService
  ) {
    this.quoteBubbles = [
      {
        quoteStatus: QuoteStatusTypes.PROGRESS,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#044E54',
        icon: 'hourglass_empty',
        tooltip: this.getTranslatedText('my-quotes.progressMSG'),
      },
      {
        quoteStatus: QuoteStatusTypes.PENDING,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#CB6E17',
        icon: 'playlist_add_check',
        tooltip: this.getTranslatedText('my-quotes.PendingMsg'),
      },
      {
        quoteStatus: QuoteStatusTypes.CLOSED,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#02A783',
        icon: 'done',
        tooltip: this.getTranslatedText('my-quotes.closedMSg'),
      },
      {
        quoteStatus: QuoteStatusTypes.EXPIRED,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#757575',
        icon: 'av_timer',
        tooltip: this.getTranslatedText('my-quotes.expiredMsg'),
      },
    ];

    this.orderBubbles = [
      {
        orderStatus: OrderStatusTypes.SUBMITTED,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#506C65',
        icon: 'playlist_add_check',
        tooltip:
          this.getTranslatedText('order-tracking.progresscount'),
      },
      {
        orderStatus: OrderStatusTypes.PROGRESS,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#CB6E17',
        icon: 'hourglass_empty',
        tooltip:
        this.getTranslatedText('order-tracking.pendingcount'),
      },
      {
        orderStatus: OrderStatusTypes.SHIPPED,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#02A783',
        icon: 'local_shipping',
        tooltip:
        this.getTranslatedText('order-tracking.closedcount'),
      },
      {
        orderStatus: OrderStatusTypes.INVOICED,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#3EBD93',
        icon: 'done',
        tooltip:
        this.getTranslatedText('order-tracking.expiredcount'),
      },
    ];
    this.rmaBubbles = [
      {
        rmaStatus: RmaStatusTypes.SUBMITTED,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#506C65',
        icon: 'playlist_add_check',
        tooltip:
        this.getTranslatedText('rma-tracking.atleast1notprogressed'),
      },
      {
        rmaStatus: RmaStatusTypes.PROGRESS,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: 'rgb(225, 45, 57)',
        icon: 'settings_backup_restore',
        tooltip:
        this.getTranslatedText('rma-tracking.atleast1notShipped'),
      },
      {
        rmaStatus: RmaStatusTypes.EVALUATING,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#dd887c',
        icon: 'playlist_add_check',
        tooltip: this.getTranslatedText('rma-tracking.atleast1notprocessed'),
      },
      {
        rmaStatus: RmaStatusTypes.PROCESSING,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#299BA3',
        icon: 'hourglass_empty',
        tooltip:
        this.getTranslatedText('rma-tracking.atleast1notshipped'),
      },
      {
        rmaStatus: RmaStatusTypes.SHIPPED,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#ED9D22',
        icon: 'local_shipping',
        tooltip:
        this.getTranslatedText('rma-tracking.itemsBeenInvoiced'),
      },
      {
        rmaStatus: RmaStatusTypes.INVOICED,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#3EBD93',
        icon: 'done',
        tooltip:
        this.getTranslatedText('rma-tracking.itemsHaveShipped'),
      },
    ];
  }

  ngOnInit(): void {
    if (this.statusType === StatusType.ORDER) {
      this.bubbles = this.orderBubbles;
      this.blockedBubble = {
        orderStatus: OrderStatusTypes.BLOCKED,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#E12D39',
        icon: 'remove_circle_outline',
      };
    } else if (this.statusType === StatusType.QUOTE) {
      this.bubbles = this.quoteBubbles;
      this.blockedBubble = {
        quoteStatus: QuoteStatusTypes.BLOCKED,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#E12D39',
        icon: 'remove_circle_outline',
      };
      this.returnBubble = {
        quoteStatus: QuoteStatusTypes.RETURNED,
        statusType: this.statusType,
        foregroundColor: '#fff',
        backgroundColor: '#8D2B0B',
        icon: 'settings_backup_restore',
        tooltip: this.getTranslatedText('rma-tracking.revisionMsg'),
      };
    } else if (this.statusType === StatusType.RMA) {
      this.bubbles = this.rmaBubbles;
    }

    if (this.isBlocked) {
      // this.bubbles = this.bubbles.splice(this.currentStatusIndex);
      // this.bubbles.push(this.blockedBubble);
      let tempBubbles = [];
      tempBubbles = this.bubbles.filter((item, index) => {
        return index < this.currentStatusIndex;
      });
      this.bubbles = tempBubbles;
    }

    if (this.isReturned) {
      let tempBubbles = [];
      for (let i = 0; i < this.bubbles.length; i++) {
        if (i <= this.currentStatusIndex) {
          tempBubbles.push(this.bubbles[i]);
        }
      }
      this.bubbles = tempBubbles;
      this.bubbles.push(this.returnBubble);
      this.currentStatusIndex = this.currentStatusIndex + 1;
    }
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
}
