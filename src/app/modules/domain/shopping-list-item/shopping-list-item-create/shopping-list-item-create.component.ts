import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
//import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { map, startWith, takeUntil, mergeAll, distinctUntilChanged, switchMap, delay } from 'rxjs/operators';
import { ShoppingListItemService } from 'src/app/shared/services/graphQL/shoppingListItem/shopping-list-item.service';
import { Observable, Subject, of } from 'rxjs';
import { Products } from 'src/generated/graphql';
import { MatDialog } from '@angular/material/dialog';

import { CrudStore } from 'src/app/core/store/crud/crud.store';

import { IOComponentData } from 'src/app/shared/components/ui/oa-dialog/oa-dialog/oa-dialog.component';
import { ProductDialogService } from "src/app/shared/components/ui/oa-dialog/ProductDialogService";
import { ProductService } from 'src/app/shared/services/graphQL/products/product.service';


@Component({
  selector: 'app-shopping-list-item-create',
  templateUrl: './shopping-list-item-create.component.html',
  styleUrls: ['./shopping-list-item-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShoppingListItemCreateComponent implements OnInit, OnDestroy {
  @Input() shoppingListId: string;


  onDestroy$ = new Subject<void>();

  productControl: FormControl = new FormControl();
  filteredOptions: Observable<Products[]>;
  itemForm: FormGroup;


  products$;



  private products: Products[] = [];

  constructor(private crudStore: CrudStore,
    private dialogs: ProductDialogService,
    private fb: FormBuilder,
    private shoppingListItemService: ShoppingListItemService,
    private productService: ProductService,
    public dialog: MatDialog) {


    this.buildForm();

    //listen out for the completion of the save action of the product that is created so we can then add it to the shopping list (via create item)
    this.crudStore.stateObservable
      .pipe(map(state => state.product))
      .pipe(distinctUntilChanged())
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(p => {
        if (!p) return;
        this.createListItem(p.current.id);
      });
  }

  ngOnInit() {
    //this.buildForm();
    //load our products
    this.productService.readAll()
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

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }





  displayFn(product?: Products): string | undefined {
    return product ? product.name : undefined;
  }

  selected(value: any) {
    const product: Products = value.option.value
    this.createListItem(product.id);

  }


  addItem(data: string) {
    //console.log(data);
    let newProduct = data;//this.productControl.value;
    if (!this.products.some(entry => entry.name === newProduct)) {
      this.openNewProductSheet(newProduct);
    }
  }


  private createListItem(productId: string) {




    this.shoppingListItemService.create({ product_id: productId, shopping_list_id: this.shoppingListId })
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(x => {
        this.itemForm.controls.product_id.setValue('Milk');
      })


      ;//TODO get rid of magic number
  }


  private _filter(value: string | '') {


    if (!value) return this.products;

    const filterValue = value.toLowerCase();
    return this.products.filter(
      item => item.name.toLowerCase().includes(filterValue)
    );
  };


  private openNewProductSheet(prodName: string): void {

    /*
    let dialogConfig = new MatDialogConfig();

    dialogConfig.data = { name: prodName };
    dialogConfig.width = "80%";


    const dialogRef = this.dialog.open(ProductDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
*/
    const product = {
      name: prodName
    }

    const compData: IOComponentData[] = [
      {
        property: "product",
        value: product
      }
    ]
    this.dialogs.openCreateDialog(compData);




  }




  private buildForm() {
    this.itemForm = this.fb.group({
      product_id: ['']

    })
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



}
