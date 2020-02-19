import { Component, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductCategoriesService } from 'src/app/shared/services/graphQL/product-categories/product-categories.service';
import { Observable, Subject } from 'rxjs';
import { Product_Categories, Products, Products_Insert_Input } from 'src/generated/graphql';
import { CRUD_MODE } from 'src/app/shared/enums';
import { ProductService } from 'src/app/shared/services/graphQL/products/product.service';
import { takeUntil, map, distinctUntilChanged, skip, finalize, delay } from 'rxjs/operators';


import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { MatDialog } from '@angular/material/dialog';


import { IsLoadingService } from '@service-work/is-loading';
import { ProductCategoryDialogService } from "src/app/shared/components/ui/oa-dialog/ProductCategoryDialogService";
import { CrudBarService } from 'src/app/shared/components/ui/crud-bar/crud-bar.service';
import { CrudBaseComponent } from 'src/app/shared/classes/crud-base.component';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent extends CrudBaseComponent<Products> implements OnInit, OnChanges, OnDestroy {

  onDestroy$ = new Subject<void>();

  @Input() product: Products = null;

  @Output() openProductCategory = new EventEmitter();

  productForm: FormGroup;

  disableSave: boolean = false;

  categories$: Observable<Product_Categories[]>

  //PW: kd6.eeB1^(vLMU_WWrg2xYE8VRv*aN3,N



  constructor(
    private crudStore: CrudStore,
    private fb: FormBuilder,
    private productCategoriesService: ProductCategoriesService,

    public categoryDialog: MatDialog,
    private dialogs: ProductCategoryDialogService,

    productService: ProductService,
    isLoadingService: IsLoadingService,
    crudBarService: CrudBarService
  ) {
    super(CRUD_MODE.Create, isLoadingService, crudBarService, productService)

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

    //set categories observable for the form list
    this.categories$ = this.productCategoriesService.readAll();

    super.ngOnInit();

  }

  ngOnChanges() {
    if (this.product) {
      this.setFormValues(this.product.name);
    }

    //call super changes event
    super.ngOnChanges();
  }



  ngOnDestroy(): void {

    super.ngOnDestroy();
  }

  /**
   *overwrite the abstract method to set the object for product creation
   *
   * @returns
   * @memberof ProductCreateComponent
   */
  public buildDataObject() {
    const newProduct: Products_Insert_Input = {
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      category_id: this.productForm.value.productCategoryId
    }
    return newProduct;
  }
  get id() {
    return this.product.id;
  }







  /**
   * 
   * private methods
   */


  /**
   *  opens the categories dialog for creating new
   */
  openProductCategories() {
    this.dialogs.openCreateDialog();
  }


  /**
   * Builds our form
   */
  private buildForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      productCategoryId: ['', Validators.required]
    })
  }


  /**
   *sets up our form values, for a create it is only the product name as it was entered elsewhere.
   *
   * @private
   * @param {string} productName
   * @memberof ProductCreateComponent
   */
  private setFormValues(productName: string) {
    this.productForm.controls.name.setValue(productName);

  }

}
