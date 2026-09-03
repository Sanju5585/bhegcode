import {
  Component,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit,
  Input,
  OnInit,
} from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { GlobalMessageService, GlobalMessageType, TranslationService } from '@spartacus/core';

/**
 * Date Range model that holds from and to dates
 * used to return Date Range.
 */
export class DateRange {
  from: DateFormats = new DateFormats();
  to: DateFormats = new DateFormats();
}

/**
 * Date Range Format model that holds different Date formats
 */
export class DateFormats {
  date: Date;
  formattedDate: string;

  constructor() {
    this.date = new Date();
    this.formattedDate = '';
  }
}

@Component({
  standalone: false,
  selector: 'vs-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
})
export class DateRangePickerComponent implements OnInit {
  @Output()
  selectedDateRange: EventEmitter<any> = new EventEmitter();

  @ViewChild('fromCalendar')
  fromCalendar: MatCalendar<Date>;

  @ViewChild('toCalendar')
  toCalendar: MatCalendar<Date>;

  @ViewChild('dateRangeInput')
  dateRangeInput;

  @ViewChild('dateRangePickerMenu')
  dateRangePickerMenu;

  @ViewChild('fromCalendar')
  fromYCalendar;

  @ViewChild('toCalendar')
  toYCalendar;

  @Input()
  fromMaxDate?: Date;

  @Input()
  fromMinDate?: Date;

  @Input()
  toMinDate?: Date;

  @Input()
  toMaxDate?: Date;

  @Input()
  changeDate: boolean;

  @Input()
  customLabel: string;

  public disableBtn: boolean;

  showCalendar = false;
  fromSelectedDate: Date = new Date();
  toSelectedDate: Date = new Date();
  dateRange: DateRange = new DateRange();
  labelTxt: boolean;

  labelText;
  /* fromMaxDate: Date = new Date();
  toMinDate: Date = new Date(); */

  constructor(
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService
  ) {
    document.addEventListener('click', this.bodyClick.bind(this));
    this.labelTxt = false;
  }
  ngOnInit() {
    if (this.fromMinDate != null || this.fromMinDate != undefined) {
      this.fromSelectedDate = new Date(this.fromMinDate);
    }
    if (
      this.fromMinDate != null ||
      (this.fromMinDate != undefined && this.fromMinDate != null) ||
      this.fromMinDate != undefined
    ) {
      this.labelTxt = !this.labelTxt;
    } else {
      this.labelText = 'Select date range';
    }
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  showCalendars() {
    this.showCalendar = !this.showCalendar;
    this.labelTxt = !this.labelTxt;
    if (this.customLabel != '') {
      this.labelText = this.customLabel;
    }
    if (this.customLabel == '' || this.customLabel == undefined) {
      this.labelText = 'Select date range';
    }
  }

  onFromDateSelect(event) {
    const d: any = new Date(event);
    this.fromSelectedDate = d;
    this.toMinDate = d;
  }

  onToDateSelect(event) {
    const d: Date = new Date(event);
    this.toSelectedDate = d;
    this.fromMaxDate = d;
    let errorMsg = this.getTranslatedText('waygate.cannotBeLessThanFromDate');
    if (this.toSelectedDate < this.fromSelectedDate) {
      this.globalMessageService.add(
        errorMsg,
        GlobalMessageType.MSG_TYPE_ERROR,
        10000
      );
      window.scroll(0, 0);
      this.disableBtn = true;
    } else {
      this.disableBtn = false;
    }
  }

  getFormattedDate(d: Date) {
    return (
      d.getDate() +
      ' ' +
      d.toLocaleString('default', { month: 'short' }) +
      ', ' +
      d.getFullYear()
    );
  }

  onDateRangeSelect() {
    this.dateRange.from.date = this.fromSelectedDate;
    this.dateRange.from.formattedDate = this.getFormattedDate(
      this.fromSelectedDate
    );
    this.dateRange.to.date = this.toSelectedDate;
    this.dateRange.to.formattedDate = this.getFormattedDate(
      this.toSelectedDate
    );
    this.labelText =
      this.dateRange.from.formattedDate +
      ' - ' +
      this.dateRange.to.formattedDate;
    this.showCalendar = false;
    this.emitDateRange();
  }

  bodyClick() {
    if (
      this.dateRangeInput &&
      !this.dateRangeInput?.nativeElement?.contains(event.target) &&
      this.dateRangePickerMenu &&
      !this.dateRangePickerMenu?.nativeElement?.contains(event.target) &&
      this.fromYCalendar &&
      !this.fromYCalendar?.nativeElement?.contains(event.target) &&
      this.toYCalendar &&
      !this.toYCalendar?.nativeElement?.contains(event.target)
    ) {
      // this.showCalendar = false;
    }
  }

  emitDateRange() {
    this.selectedDateRange.emit(this.dateRange);
  }
}
