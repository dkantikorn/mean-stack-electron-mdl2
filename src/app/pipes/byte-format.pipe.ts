import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byteFormat'
})
export class ByteFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 0) { return '0 Bytes'; }
    const k = 1000;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(value) / Math.log(k));
    return (value / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i];
  }

}
