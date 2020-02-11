import { Directive, Input } from '@angular/core';

import { IIdentifiable } from './IIdentifiable';

import { OaAutocompleteComponent } from './oa-autocomplete.component';

import { startWith, map } from 'rxjs/operators';

@Directive({
    selector: '[dataOptions]',
})
export class AutoCompleteDataOptionsDirective {
    @Input() dataOptions: IIdentifiable[];


    constructor(private host: OaAutocompleteComponent) {
        //this.host.options = options;

        this.host.value$.pipe(
            startWith(null),
            map(name => {
                if (typeof name === 'string' && this.dataOptions) {

                    const filterValue = name.toLowerCase();
                    const filtered = this.dataOptions.filter(
                        item => item.label.toLowerCase().includes(filterValue)
                    );
                    return filtered
                }
                return [];
            })
        ).subscribe(filtered => this.host.options = filtered)
    }
}