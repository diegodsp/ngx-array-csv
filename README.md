# ngx-array-csv

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'arrayCsv' })
export class ArrayCsvPipe implements PipeTransform {
    transform(value: any[], property: string, separator: string = ', ') {
        return value.map(x => x[property]).join(separator).trim();
    }
}
```

## Usage
```html
...
<span>{{ musicGenres | arrayCsv:'name' }}</span>
...
```

## Output
```html
Pop, Rock, Blues
```
