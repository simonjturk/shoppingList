import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup , FormBuilder, FormControl} from '@angular/forms';
//import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { map, startWith, takeUntil, mergeAll } from 'rxjs/operators';
import { ShoppingListItemService } from 'src/app/shared/services/graphQL/shoppingListItem/shopping-list-item.service';
import { Observable, Subject } from 'rxjs';
import { Products } from 'src/generated/graphql';

@Component({
  selector: 'app-shopping-list-item-create',
  templateUrl: './shopping-list-item-create.component.html',
  styleUrls: ['./shopping-list-item-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShoppingListItemCreateComponent implements OnInit {
  @Input() shoppingListId:string;


  onDestroy$ = new Subject<void>();
  
  productControl: FormControl = new FormControl();
  filteredOptions: Observable<any[]>;

  constructor(private fb: FormBuilder,private shoppingListItemService: ShoppingListItemService) { }

  ngOnInit() {
    this.filteredOptions = this.productControl.valueChanges.pipe(
      takeUntil(this.onDestroy$),
      startWith(null),
      map((item: any | null) => {

       
        return item ? this._filter(item) : this._filter('')}),
        mergeAll()
        
    )
  }

  filter(val: string){
    return this.getProducts()
    .pipe(map(products=>{
      return products.filter(product =>product.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }))

  }

  displayFn(product?: Products): string | undefined {
    return product ? product.name : undefined;
  }

  selected(value: any){
    const product: Products = value.option.value
    

    this.createListItem(product.id);
  }

  private createListItem(productId:string){
    this.shoppingListItemService.createShoppingListItem(this.shoppingListId,productId,1)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
    
    
    ;//TODO get rid of magic number
  }


  private  _filter(value: Products |''){
    //return 
    return  (this.getProducts()  as Observable<any[]>)
      .pipe(takeUntil(this.onDestroy$))
      .pipe(map(products=>{
        if (!value) return products;
        const filterValue = value.name.toLowerCase();
        return products.filter(
          item => item.name.toLowerCase().indexOf(filterValue) === 0
        );
      }));
    
    
  
   
  }




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

  getProducts(){
    return this.shoppingListItemService.getProducts().pipe(
      map(res=>{
        return res.data.products;
      })
    )
  }

}
