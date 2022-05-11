import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bracket'
})
export class BracketPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + ' ' + '$';
  }

}
