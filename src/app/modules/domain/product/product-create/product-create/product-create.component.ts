import { Component, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductCategoriesService } from 'src/app/shared/services/graphQL/product-categories/product-categories.service';
import { Observable, Subject } from 'rxjs';
import { Product_Categories, Products, Products_Insert_Input } from 'src/generated/graphql';
import { CRUD_MODE } from 'src/app/shared/enums';
import { ProductService } from 'src/app/shared/services/graphQL/products/product.service';
import { takeUntil, map, distinctUntilChanged, skip, finalize, delay } from 'rxjs/operators';


import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProductCategoryDialogComponent } from '../../../product-category/components/product-category-dialog/product-category-dialog.component';
//import { CategoryPopupComponent } from 'src/app/modules/views/popups/modals/category-popup/category-popup.component';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit, OnChanges, OnDestroy {
  onDestroy$ = new Subject<void>();

  @Input() product: Products = null;

  @Output() openProductCategory = new EventEmitter();

  productForm: FormGroup;

  disableSave: boolean = false;

  categories$: Observable<Product_Categories[]>


  // Private members
  CrudMode: CRUD_MODE;

  constructor(
    private crudStore: CrudStore,
    private fb: FormBuilder,
    private productCategoriesService: ProductCategoriesService,
    private productService: ProductService,
    public categoryDialog: MatDialog) {

    this.buildForm();

    //listen out for the completion of the save category action so we can set the new category
    this.crudStore.stateObservable
      .pipe(map(state => state.productCategory))
      .pipe(distinctUntilChanged())
      .pipe(takeUntil(this.onDestroy$), skip(1)) //skip last action
      .subscribe(p => {
        if (!p) return;

        if (p.lastAction === CRUD_MODE.Create) {

          //set our newly created category to the list (which should have been updated given that is an observable list too!)
          this.productForm.controls.productCategoryId.setValue(p.current.id);
        }
      })



  }


  /**
   * Lifecycle hooks
   */

  ngOnInit() {

    this.categories$ = this.productCategoriesService.getAllCategories();


  }

  ngOnChanges() {
    if (this.product) {
      if (this.product.id) {
        this.CrudMode = CRUD_MODE.Update
      } else {
        this.CrudMode = CRUD_MODE.Create
      }

      this.productForm.controls.name.setValue(this.product.name);


    }
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onSave() {

    //disable savce buton
    this.disableSave = true;

    const newProduct: Products_Insert_Input = {
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      category_id: this.productForm.value.productCategoryId
    }

    this.productService.createProduct(newProduct, null)
      .pipe(finalize(() => this.disableSave = false))
      .subscribe(response => {
        console.log('Data available.');
      },
        err => {
          console.error(err);
        });



  }

  onDelete() {

  }

  openProductCategories() {
    //let whatever component is using that they need to open/create the category
    //this.openProductCategory.emit();
    let config = new MatDialogConfig();
    //config.data = 

    this.categoryDialog.open(ProductCategoryDialogComponent);
  }


  /**
   * 
   * private methods
   */

  private buildForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      productCategoryId: ['', Validators.required]
    })
  }

}
