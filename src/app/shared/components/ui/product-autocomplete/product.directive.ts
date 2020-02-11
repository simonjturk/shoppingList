import { Directive, Input } from '@angular/core';
import { OaAutocompleteComponent } from '../oa-form-controls/oa-autocomplete/oa-autocomplete.component';
import { Observable, of } from 'rxjs';
import { IIdentifiable } from '../oa-form-controls/oa-autocomplete/IIdentifiable';
import { startWith, switchMap, map, flatMap } from 'rxjs/operators';
import { delay } from 'q';
import { ProductService } from 'src/app/shared/services/graphQL/products/product.service';



@Directive({
    selector: '[product-data]',
})
export class AutoCompleteProductDataDirective {
    //@Input() options: IIdentifiable[];


    constructor(private host: OaAutocompleteComponent, private productService: ProductService) {
        //this.host.options = options;

        this.host.value$.pipe(
            startWith(null),
            switchMap(name => {
                if (typeof name === 'string') {

                    return this.productService.getProducts()
                        .pipe(map(products => {
                            const filterValue = name.toLowerCase();
                            const filtered = products.filter(
                                item => item.name.toLowerCase().includes(filterValue)
                            );
                            return filtered.map(p => {

                                return {
                                    id: p.id,
                                    label: p.name
                                } as IIdentifiable
                            })
                        }))
                }
                return [];
            })
        ).subscribe(filtered => {
            this.host.options = filtered
            this.host.optionsChanged();
        })


    }
}



