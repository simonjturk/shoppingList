import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatDialog } from '@angular/material';
import { Shopping_List_Items } from 'src/generated/graphql';
import { CreateProductPopupComponent } from '../../modals/create-product-popup/create-product-popup.component';

@Component({
  selector: 'app-item-popup',
  templateUrl: './item-popup.component.html',
  styleUrls: ['./item-popup.component.scss']
})
export class ItemPopupComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ItemPopupComponent>, private dialog: MatDialog,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Shopping_List_Items) {

  }

  onSaved(event) {

    this.close();
  }

  onDeleted(event) {
    this.close();
  }
  /**
   * handles the editProduct event of "app-item-view" 
   * by opening the edit product dialog
   *
   * @memberof ItemPopupComponent
   */
  onEditProduct() {
    this.dialog.open(CreateProductPopupComponent);
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

  ngOnInit() {
  }

}
