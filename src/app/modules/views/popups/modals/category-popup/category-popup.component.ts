import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Product_Categories } from 'src/generated/graphql';
import { map, distinctUntilChanged, takeUntil, skip } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CRUD_MODE } from 'src/app/shared/enums';

@Component({
  selector: 'app-category-popup',
  templateUrl: './category-popup.component.html',
  styleUrls: ['./category-popup.component.scss'],
  providers: []
})
export class CategoryPopupComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject<void>();


  constructor(private crudStore: CrudStore, public dialogRef: MatDialogRef<CategoryPopupComponent>) {

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
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }


  //public methods
  closePopup() {
    //this.bottomSheetRef.dismiss();
    this.dialogRef.close();
  }
}
