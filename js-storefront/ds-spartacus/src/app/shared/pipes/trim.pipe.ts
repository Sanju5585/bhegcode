import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'trim',
})
export class TrimPipe implements PipeTransform {
  transform(str: any, args: string): any {
    return str.replace(/\s/g, '');
  }
}
