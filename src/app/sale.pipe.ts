import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sale',
})
export class SalePipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
    console.log('Sale pipe', value);
    if (value < 125000) {
      return 'Đang hạ giá';
    }
    return 'Giá tốt nhất';
  }
}
