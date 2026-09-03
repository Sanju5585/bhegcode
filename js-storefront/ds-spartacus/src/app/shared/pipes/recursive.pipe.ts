import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'recursive',
})
export class RecursivePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }
}
