import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
 //purepipe for reversing the product name
  transform(value: string):string {
    return value.split('').reverse().join('');
  }

}
