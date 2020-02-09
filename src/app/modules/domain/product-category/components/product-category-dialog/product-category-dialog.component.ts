import { Component, OnInit, Inject } from '@angular/core';
import { Product_Categories } from 'src/generated/graphql';
import { map, distinctUntilChanged, takeUntil, skip } from 'rxjs/operators';
import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CRUD_MODE } from 'src/app/shared/enums';
import { UnsubscribeBase } from 'src/app/shared/classes/unsubscribe-base';

@Component({
  selector: 'app-product-category-dialog',
  template: `
    <h1 mat-dialog-title>Create Category</h1>
    <div mat-dialog-content>
    <app-product-category-create fxFill ></app-product-category-create>
  </div>
  `,
  styles: []
})
export class ProductCategoryDialogComponent extends UnsubscribeBase implements OnInit {


  constructor(private crudStore: CrudStore, public dialogRef: MatDialogRef<ProductCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product_Categories) {

    super();
    //listen out for the completion of the save action so we can close the popup
    this.crudStore.stateObservable
      .pipe(map(state => state.productCategory))
      .pipe(distinctUntilChanged())
      .pipe(takeUntil(this.onDestroy$), skip(1)) //skip last action
      .subscribe(p => {
        if (!p) return;

        if (p.lastAction === CRUD_MODE.Create) {
          this.closePopup();
        }
      })



  }

  //lifecycle hooks
  ngOnInit() {


  }



  //public methods
  closePopup() {

    this.dialogRef.close();

  }

  openCategoryPopup() {
    //this.dialogRef.open(CategoryPopupComponent)
  }

}
