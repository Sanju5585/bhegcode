import {
  Component,
  ViewChild,
  Output,
  EventEmitter,
  Input,
  ChangeDetectorRef,
  OnInit,
  Renderer2,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { TranslationService } from '@spartacus/core';

@Component({
  standalone: false,
  selector: 'vs-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit, OnChanges {
  @Output()
  selectedDate: EventEmitter<any> = new EventEmitter();

  @ViewChild('calendar')
  calendar: MatCalendar<Date>;

  @ViewChild('dateInput')
  dateInput;

  @ViewChild('datePickerMenu')
  datePickerMenu;

  @Input()
  min?: Date;

  @Input()
  activateSelectedDay: boolean;

  @Input()
  filterWeekend?: boolean;

  @Input()
  selectedDay: number;

  @Input()
  max?: Date;

  @Input()
  defaultDate?: string;

  @Input()
  showError?: boolean;

  @Input()
  disabled?: boolean;

  @Input()
  isScroll: boolean = true;

  @Input()
  isPDP: boolean;

  showCalendar = false;
  calendarDate: Date;
  removeCalender: boolean = false;

  defaultLabelText = '';
  labelText = '';

  constructor(
    private cRef: ChangeDetectorRef,
    private renderer: Renderer2,
    private translate: TranslationService
  ) {
    this.renderer.listen(document, 'click', this.bodyClick.bind(this));
  }

  ngOnInit(): void {
    this.removeCalender = this.isPDP;
    if (this.defaultDate) {
      this.calendarDate = new Date(this.defaultDate);
      const isValidDate = !isNaN(this.calendarDate.getTime());
      if (isValidDate) {
        this.labelText = this.getFormattedDate(this.calendarDate);
      } else {
        this.labelText = this.getTranslatedText('waygate.dateNotAvailable');
      }
    } else {
      this.translate.translate('dateRange.selectDate').subscribe((res) => {
        this.defaultLabelText = res;
        this.labelText = this.defaultLabelText;
      });
    }
  }

    getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  ngOnChanges(changes: SimpleChanges | any): void {
    if (changes?.defaultDate?.currentValue) {
      this.defaultDate = changes.defaultDate.currentValue;
      this.calendarDate = new Date(changes.defaultDate.currentValue);
      this.labelText = this.getFormattedDate(this.calendarDate);
    }
  }

  resetDate(defDate?) {
    if (!defDate) {
      this.defaultDate = 'changes.defaultDate.currentValue';
      this.calendarDate = new Date();
      this.labelText = this.defaultLabelText;
    }
  }

  getFormattedDate(d: Date) {
    return (
      d.getDate() +
      ' ' +
      d.toLocaleString('default', { month: 'short' }) +
      ' ' +
      d.getFullYear()
    );
  }

  onDateSelect(event) {
    this.calendarDate = new Date(event);
    this.showCalendar = false;
    this.labelText = this.getFormattedDate(this.calendarDate);
    this.emitDateRange();
  }

  bodyClick() {
    if (
      this.dateInput &&
      !this.dateInput.nativeElement.contains(event.target) &&
      this.datePickerMenu &&
      !this.datePickerMenu.nativeElement.contains(event.target) &&
      !(event.target as HTMLInputElement)?.closest('.mat-calendar-table')
    ) {
      this.showCalendar = false;
      this.cRef.detectChanges();
    }
  }

  onInputClick() {
    if (this.disabled) {
      return;
    }
    this.showCalendar = !this.showCalendar;
    setTimeout(() => {
      if (this.isScroll)
        this.dateInput.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }

  emitDateRange() {
    this.selectedDate.emit(this.calendarDate);
  }

  dateFilter = (date: Date) => {
    if (this.activateSelectedDay) {
      if (date.getDay() == this.selectedDay) return true;
      else return false;
    }
    if (this.filterWeekend) return date.getDay() != 0 && date.getDay() != 6;
    else return true;
  };
}
