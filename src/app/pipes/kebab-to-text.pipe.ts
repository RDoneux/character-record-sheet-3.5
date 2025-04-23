import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabToText',
})
export class KebabToTextPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value[0].toUpperCase() + value.slice(1).replace(/-/g, ' ');
  }
}
