import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Product_Categories, Product_Categories_Insert_Input } from 'src/generated/graphql';
import { CRUD_MODE } from 'src/app/shared/enums';
import { ProductCategoriesService } from 'src/app/shared/services/graphQL/product-categories/product-categories.service';
import { until } from 'protractor';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-category-view',
  templateUrl: './product-category-view.component.html',
  styleUrls: ['./product-category-view.component.scss']
})
export class ProductCategoryViewComponent implements OnInit, OnChanges, OnDestroy {


  @Input() category: Product_Categories = null;

  productCategoryForm: FormGroup;


  /**
   * 
   * Private members
   */
  private onDestroy$: Subject<void> = new Subject<void>();
  private CrudMode: CRUD_MODE;


  constructor(private fb: FormBuilder, private productCategoriesService: ProductCategoriesService) { }

  /**
   * lifecycle hooks
   */

  ngOnInit() {
    this.buildForm();

  }
  ngOnChanges() {
    if (this.category) {
      if (this.category.id) {
        this.CrudMode = CRUD_MODE.Update
      } else {
        this.CrudMode = CRUD_MODE.Create
      }

      this.productCategoryForm.controls.name.setValue(this.category.name);


    }
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  //public methods
  onSave() {

    const newProductCategory: Product_Categories_Insert_Input = {
      name: this.productCategoryForm.value.name,
      colour: this.productCategoryForm.value.colour

    }
    this.productCategoriesService.createProductCategories(newProductCategory)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }

  onDelete() {

  }




  /** 
   * Private methods
  */
  private buildForm(): any {
    this.productCategoryForm = this.fb.group({
      name: ['', Validators.required],
      colour: ['']
    });
  }
}
