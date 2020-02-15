import { IOComponentData } from './oa-dialog/oa-dialog.component';
import { ShoppingListItemUpdateComponent } from 'src/app/modules/domain/shopping-list-item/shopping-list-item-update/shopping-list-item-update/shopping-list-item-update.component';
import { Injectable } from '@angular/core';
import { DialogServiceBase } from "./DialogServiceBase";
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ShoppingListItemDialogService extends DialogServiceBase {

    constructor(dialog: MatDialog) {
        super(dialog)
    }
    openCreateDialog(compData?: IOComponentData[]) {
        throw new Error("Method not implemented.");
    }
    openReadDialog(compData?: IOComponentData[]) {
        throw new Error("Method not implemented.");
    }
    openUpdateDialog(compData?: IOComponentData[]) {
        this.open(ShoppingListItemUpdateComponent, compData);
    }
    openDeleteDialog(compData?: IOComponentData[]) {
        throw new Error("Method not implemented.");
    }
    openDialog(compData?: IOComponentData[]) {
    }
}
