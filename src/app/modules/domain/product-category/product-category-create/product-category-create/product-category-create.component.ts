import { Component, OnInit, Input } from '@angular/core';
import { Product_Categories, Product_Categories_Insert_Input } from 'src/generated/graphql';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CRUD_MODE } from 'src/app/shared/enums';
import { ProductCategoriesService } from 'src/app/shared/services/graphQL/product-categories/product-categories.service';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeBase } from 'src/app/shared/classes/unsubscribe-base';
import { CRUD_BUTTONS } from 'src/app/shared/components/ui/crud-bar/crud-bar.component';
import { IsLoadingService } from '@service-work/is-loading';

@Component({
  selector: 'app-product-category-create',
  templateUrl: './product-category-create.component.html',
  styleUrls: ['./product-category-create.component.scss']
})
export class ProductCategoryCreateComponent extends UnsubscribeBase implements OnInit {

  @Input() category: Product_Categories = null;

  productCategoryForm: FormGroup;


  /**
   * 
   * Private members
   */

  private CrudMode: CRUD_MODE;


  constructor(private fb: FormBuilder, private productCategoriesService: ProductCategoriesService,
    private isLoadingService: IsLoadingService) {
    super();
  }

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
  action(type: CRUD_BUTTONS) {
    if (type === CRUD_BUTTONS.save) this.onSave();
  }

  //public methods
  onSave() {

    const newProductCategory: Product_Categories_Insert_Input = {
      name: this.productCategoryForm.value.name,
      colour: this.productCategoryForm.value.colour

    }
    this.isLoadingService.add(this.productCategoriesService.createProductCategories(newProductCategory), { key: 'button' })
    // .pipe(takeUntil(this.onDestroy$))
    // .subscribe();
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
