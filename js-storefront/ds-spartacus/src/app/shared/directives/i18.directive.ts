import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { environment } from '../../../environments/environment';

@Directive({
  standalone: false,
  selector: '[translate], [placeholderTranslate]',
})
export class I18Directive implements OnInit {
  @Input() translate: any;
  @Input() placeholderTranslate: any;
  // @HostBinding('innerHTML') html: any;
  constructor(
    private ts: TranslateService,
    private el: ElementRef
  ) {}

  ngOnInit() {
    if (this.translate && this.ts.translate[this.translate]) {
      this.el.nativeElement.innerText =
        this.ts.translate[this.translate] + environment.language_symbol;
    }
    if (
      this.placeholderTranslate &&
      this.ts.translate[this.placeholderTranslate]
    ) {
      this.el.nativeElement.placeholder =
        this.ts.translate[this.placeholderTranslate] +
        environment.language_symbol;
    }
  }
}
