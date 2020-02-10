import { Component, OnInit, Inject } from '@angular/core';
import { UnsubscribeBase } from 'src/app/shared/classes/unsubscribe-base';
import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Shopping_List_Items, Products } from 'src/generated/graphql';
import { map, distinctUntilChanged, takeUntil, skip } from 'rxjs/operators';
import { CRUD_MODE } from 'src/app/shared/enums';

@Component({
  selector: 'app-product-dialog',
  template: `
    <h1 mat-dialog-title>{{data.name}}</h1>
    <div mat-dialog-content>
    <app-product-create [product]="data" (openProductCategory)="openCategoryPopup()"></app-product-create>
  </div>
  `,
  styles: []
})
export class ProductDialogComponent extends UnsubscribeBase implements OnInit {



  constructor(private crudStore: CrudStore, public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Products) {

    super();
    //listen out for the completion of the save action so we can close the popup
    this.crudStore.stateObservable
      .pipe(map(state => state.product))
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
