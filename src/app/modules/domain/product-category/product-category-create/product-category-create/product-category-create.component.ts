import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product_Categories, Product_Categories_Insert_Input } from 'src/generated/graphql';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CRUD_MODE } from 'src/app/shared/enums';
import { ProductCategoriesService } from 'src/app/shared/services/graphQL/product-categories/product-categories.service';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeBase } from 'src/app/shared/classes/unsubscribe-base';
import { CRUD_BUTTONS } from 'src/app/shared/components/ui/crud-bar/crud-bar.component';
import { IsLoadingService } from '@service-work/is-loading';
import { CrudBarService } from 'src/app/shared/components/ui/crud-bar/crud-bar.service';
import { CrudBaseComponent } from 'src/app/shared/classes/crud-base.component';

@Component({
  selector: 'app-product-category-create',
  templateUrl: './product-category-create.component.html',
  styleUrls: ['./product-category-create.component.scss']
})
export class ProductCategoryCreateComponent extends CrudBaseComponent<Product_Categories> implements OnInit {


  @Input() category: Product_Categories = null;

  productCategoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    productCategoriesService: ProductCategoriesService,
    isLoadingService: IsLoadingService,
    crudBarService: CrudBarService
  ) {
    super(CRUD_MODE.Create, isLoadingService, crudBarService, productCategoriesService);
  }

  /**
   * lifecycle hooks
   */

  ngOnInit() {
    this.buildForm();
    super.ngOnInit()

  }
  ngOnChanges() {
    if (this.category) {
      this.productCategoryForm.controls.name.setValue(this.category.name);
    }
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

  public buildDataObject() {
    const newProductCategory: Product_Categories_Insert_Input = {
      name: this.productCategoryForm.value.name,
      colour: this.productCategoryForm.value.colour

    }

    return newProductCategory;
  }
  get id() {
    return this.category.id;
  }
}
