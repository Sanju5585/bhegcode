import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  standalone: false,
  selector: 'ds-waygate-date-picker',
  templateUrl: './waygate-date-picker.component.html',
  styleUrls: ['./waygate-date-picker.component.scss'],
})
export class WaygateDatePickerComponent implements OnInit, OnChanges {
  @Input() shipDate: any;
  selectedDate: Date;

  constructor() {}

  ngOnInit(): void {
    this.updateSelectedDate();
  }

  ngOnChanges(changes: SimpleChanges | any): void {
    if (changes.shipDate && !changes.shipDate.firstChange) {
      this.updateSelectedDate();
    }
  }

  private updateSelectedDate(): void {
    if (!!this.shipDate) {
      const dateComponents = this.shipDate[0]?.shipDate.split('-');
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const monthIndex = months.indexOf(dateComponents[1]);
      this.selectedDate = new Date(
        parseInt(dateComponents[2]),
        monthIndex,
        parseInt(dateComponents[0])
      );
    }
  }
}
