import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'arrayCsv' })
export class ArrayCsvPipe implements PipeTransform {
    transform(array: any[], property: string, separator: string = ', ') {
        return array.map(x => x[property]).join(separator).trim();
    }
}
