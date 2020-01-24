import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatDialog } from '@angular/material';
import { Products } from 'src/generated/graphql';

import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { map, distinctUntilChanged, switchMap, takeUntil, skip } from 'rxjs/operators';
import { CRUD_MODE } from 'src/app/shared/enums';
import { timingSafeEqual } from 'crypto';
import { IEntity } from 'src/app/core/store/crud/crud-state';
import { Observable, Subject } from 'rxjs';
import { CategoryPopupComponent } from '../category-popup/category-popup.component';

@Component({
  selector: 'app-create-product-popup',
  templateUrl: './create-product-popup.component.html',
  styleUrls: ['./create-product-popup.component.scss']
})
export class CreateProductPopupComponent implements OnInit {
  onDestroy$ = new Subject<void>();


  constructor(private crudStore: CrudStore, private dialog: MatDialog, private bottomSheetRef: MatBottomSheetRef<CreateProductPopupComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: Products) {


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
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }


  //public methods
  closePopup() {
    this.bottomSheetRef.dismiss();

  }

  openCategoryPopup() {
    this.dialog.open(CategoryPopupComponent)
  }

}
