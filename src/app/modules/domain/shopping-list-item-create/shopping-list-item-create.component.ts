import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
//import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { map, startWith, takeUntil, mergeAll } from 'rxjs/operators';
import { ShoppingListItemService } from 'src/app/shared/services/graphQL/shoppingListItem/shopping-list-item.service';
import { Observable, Subject, of } from 'rxjs';
import { Products } from 'src/generated/graphql';

@Component({
  selector: 'app-shopping-list-item-create',
  templateUrl: './shopping-list-item-create.component.html',
  styleUrls: ['./shopping-list-item-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShoppingListItemCreateComponent implements OnInit {
  @Input() shoppingListId: string;


  onDestroy$ = new Subject<void>();

  productControl: FormControl = new FormControl();
  filteredOptions: Observable<Products[]>;


  private products: Products[] = [];

  constructor(private fb: FormBuilder, private shoppingListItemService: ShoppingListItemService) { }

  ngOnInit() {

    //load our products
    this.shoppingListItemService.getProducts()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(p => {
        this.products = p as Products[];
      })

    this.filteredOptions = this.productControl.valueChanges.pipe(
      startWith(''),
      map(val => {

        if (val.length < 1) {
          return [] as Products[];
        }
        return val ? this._filter(val) : this._filter('')
      })

    )
  }
  displayFn(product?: Products): string | undefined {
    return product ? product.name : undefined;
  }

  selected(value: any) {
    const product: Products = value.option.value
    this.createListItem(product.id)
      .subscribe(x => {
        this.productControl.setValue("");
      })
  }


  addItem() {
    let option = this.productControl.value;
    if (!this.products.some(entry => entry === option)) {
      const index = this.products.push(option) - 1;
      this.productControl.setValue(this.products[index]);
    }
  }


  private createListItem(productId: string) {
    return this.shoppingListItemService.createShoppingListItem(this.shoppingListId, productId, 1)
      .pipe(takeUntil(this.onDestroy$))



      ;//TODO get rid of magic number
  }


  private _filter(value: string | '') {


    if (!value) return this.products;

    const filterValue = value.toLowerCase();
    return this.products.filter(
      item => item.name.toLowerCase().includes(filterValue)
    );
  };









  /*
    .pipe(map(products=>{
      products.filter(option =>option.toLowerCase().indexOf(val.toLowerCase()) === 0);
    })  
}
*/




  /*
    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[] = [
      {
        key: 'product_id',
        type: 'select',
        templateOptions: {
          label: 'Items',
          placeholder: 'Add item',
          options: this.getProducts(),
          valueProp:'id',
          labelProp: 'name',
          required: true,
        },
        
      },
      {
        
        type: 'button',
        templateOptions: {
          label: 'Items',
          buttonType:"icon",
          color:"primary",
          icon:"add"
          
        },
        
      },
      {
        key: 'quantity',
        type: 'input',
        templateOptions: {
          label: 'Quantity',
          placeholder:'1',
          min:0,
          max:50,
          step:1,
          type:"number",
          required: true,
        },
      }
    ];
  
  */

  getProducts() {
    return this.shoppingListItemService.getProducts();
  }

}
