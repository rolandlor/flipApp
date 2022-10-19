import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twostep',
})
export class PointPipe implements PipeTransform {
  transform(value: any) {
    return Math.floor(value / 2);
  }
}
