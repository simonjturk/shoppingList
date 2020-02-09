import { Component, OnInit, Inject } from '@angular/core';
import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { map, distinctUntilChanged, takeUntil, skip } from 'rxjs/operators';
import { CRUD_MODE } from 'src/app/shared/enums';
import { UnsubscribeBase } from 'src/app/shared/classes/unsubscribe-base';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Shopping_List_Items } from 'src/generated/graphql';

@Component({
  selector: 'app-shopping-list-item-dialog',
  template: `
  <h1 mat-dialog-title>{{data.product.name}}</h1>
    <div mat-dialog-content>
    <app-shopping-list-item-update fxFill [item]="data"></app-shopping-list-item-update>
  </div>
  `,
  styles: []
})
export class ShoppingListItemDialogComponent extends UnsubscribeBase implements OnInit {

  constructor(private crudStore: CrudStore,
    public dialogRef: MatDialogRef<ShoppingListItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Shopping_List_Items) {

    super();

    //listen out for the completion of the save event and close the dialog
    this.crudStore.stateObservable
      .pipe(map(state => state.shoppingListItem))
      .pipe(distinctUntilChanged())
      .pipe(takeUntil(this.onDestroy$), skip(1)) //skip last action
      .subscribe(p => {
        if (!p) return;

        if (p.lastAction === CRUD_MODE.Create || CRUD_MODE.Update || CRUD_MODE.Read) {

          this.close();
        }
      })


  }

  ngOnInit() {
  }


  close() {
    this.dialogRef.close();
  }

}
