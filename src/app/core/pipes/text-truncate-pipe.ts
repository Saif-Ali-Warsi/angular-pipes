import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTruncate',
})
export class TextTruncatePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value.slice(0, 4) + '...';
  }
}
