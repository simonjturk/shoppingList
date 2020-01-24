import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { Shopping_List_Items } from 'src/generated/graphql';

@Component({
  selector: 'app-item-popup',
  templateUrl: './item-popup.component.html',
  styleUrls: ['./item-popup.component.scss']
})
export class ItemPopupComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ItemPopupComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Shopping_List_Items) {

  }

  onSaved(event) {

    this.close();
  }

  onDeleted(event) {
    this.close();
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

  ngOnInit() {
  }

}
