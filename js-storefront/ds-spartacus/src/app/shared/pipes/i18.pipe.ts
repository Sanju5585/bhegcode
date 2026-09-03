import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';
import { TranslateService } from '../services/translate.service';

@Pipe({
  standalone: false,
  name: 'translate',
})
export class I18Pipe implements PipeTransform {
  constructor(private ts: TranslateService) {}

  transform(value: any, args?: any): any {
    if (args && this.ts.translate[args]) {
      return this.ts.translate[args] + environment.language_symbol;
    }
    return value;
  }
}
