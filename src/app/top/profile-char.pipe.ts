import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profileChar'
})
export class ProfileCharPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase()[0];
  }

}
