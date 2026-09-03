/* tslint:disable:member-ordering */
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';

@Directive({
  standalone: false,
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) {}

  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();

  @Input() clickSourceId: any;

  @HostListener('document:click', ['$event.target']) onMouseEnter(
    targetElement: any
  ) {
    const clickedInside =
      this._elementRef.nativeElement?.contains(targetElement);
    const sourceClick = this.clickSourceId?.contains(targetElement);
    if (!clickedInside && !sourceClick) {
      this.clickOutside.emit(null);
    }
  }
}

@NgModule({
  declarations: [ClickOutsideDirective],
  exports: [ClickOutsideDirective],
})
export class ClickOutsideDirectiveModule {}
