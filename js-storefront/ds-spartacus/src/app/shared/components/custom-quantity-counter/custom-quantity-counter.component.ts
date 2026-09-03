import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'app-custom-quantity-counter',
  templateUrl: './custom-quantity-counter.component.html',
  styleUrls: ['./custom-quantity-counter.component.scss'],
})
export class CustomQuantityCounterComponent implements OnInit, OnDestroy {
  @Output()
  quantityIncrement: EventEmitter<any> = new EventEmitter();

  @Output()
  quantityDecrement: EventEmitter<any> = new EventEmitter();

  @Output()
  quantityAdded: EventEmitter<any> = new EventEmitter();
  /**
   * Holds the value of the counter, the state of the `FormControl`
   * can be managed outside of the item counter.
   */
  @Input() control: FormControl;

  /**
   * This can be used in case an item has a minmum order quantity.
   * @default 1
   */
  @Input() min = 1;

  /**
   * This can be used in case an item has a maximum order quantity.
   */
  @Input() max: 9999;

  /**
   * The step is used to increment the count. It is supposed to be a
   * positive integer or float.
   * @default 1
   */
  @Input() step = 1;

  /**
   * Indicates that the input can be manually set to zero,
   * despite the fact that the input controls will be limited to
   * the minimum. The zero value can be used to remove an item.
   */
  @Input() allowZero = false;

  @Input() disabled = false;

  /**
   * In readonly mode the item counter will only be shown as a label,
   * the form controls are not rendered.
   * Please not that readonly is different from the `disabled` form state.
   * @default false
   */
  @HostBinding('class.readonly') @Input() readonly = false;

  @ViewChild('quantity') private input: ElementRef<HTMLInputElement>;

  /**
   * Subscription responsible for auto-correcting control's value when it's invalid.
   */
  private sub: Subscription;

  @HostListener('click') handleClick() {
    this.input.nativeElement.focus();
  }

  ngOnInit() {
    this.sub = this.control.valueChanges
      .pipe(startWith(this.control.value))
      .subscribe((value) =>
        this.control.setValue(this.getValidCount(value), { emitEvent: false })
      );
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  increment() {
    // it's too early to use the `stepUp` and `stepDown` API...
    // let's wait for FF: https://caniuse.com/#search=stepUp
    this.control.setValue(parseInt(this.control.value) + this.step);
    this.control.markAsDirty();
    this.quantityIncrement.emit(this.control.value);
  }

  decrement() {
    this.control.setValue(parseInt(this.control.value) - this.step);
    this.control.markAsDirty();
    this.quantityDecrement.emit(this.control.value);
  }

  /**
   * Validate that the given value is in between
   * the `min` and `max` value. If the value is out
   * of  the min/max range, it will be altered.
   * If `allowZero` is set to true, the 0 value is ignored.
   *
   */
  private getValidCount(value: number) {
    if (!value) {
      value = Math.floor(value);
      if (value === 0) {
        return 1;
      } else {
        return value;
      }
    }
    if (!Number.isInteger(value)) {
      value = Math.floor(value);
    }
    if (value < this.min && !(value === 0 && this.allowZero)) {
      value = this.min;
    }
    if (this.max && value > this.max) {
      value = this.max;
    }
    return value;
  }

  onInputBlur() {
    let value = this.control.value;
    if (isNaN(value) || value === null || value === undefined) {
      value = this.min;
    } else {
      value = this.getValidCount(value);
    }
    this.control.setValue(value);
  }

  inputAdded() {
    let value = Number(this.control.value);
    if (isNaN(value)) {
      value = this.min;
    } else {
      value = this.getValidCount(value);
    }
    this.control.setValue(value);
    this.onInputBlur();
    this.quantityAdded.emit(this.control.value);
  }
}
