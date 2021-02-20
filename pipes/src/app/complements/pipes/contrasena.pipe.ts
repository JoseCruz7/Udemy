import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena',
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, key: false): string {
    return (key) ? '*'.repeat(value.length): value ;
  }
}
