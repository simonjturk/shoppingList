import { IOComponentData } from './oa-dialog/oa-dialog.component';
import { Injectable } from '@angular/core';
import { DialogServiceBase } from "./DialogServiceBase";
import { MatDialog } from '@angular/material/dialog';
import { ShoppingListUpdateComponent } from 'src/app/modules/domain/shopping-list/shopping-list-update/shopping-list-update/shopping-list-update.component';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListDialogService extends DialogServiceBase {

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
        this.open(ShoppingListUpdateComponent, compData);
    }
    openDeleteDialog(compData?: IOComponentData[]) {
        throw new Error("Method not implemented.");
    }
    openDialog(compData?: IOComponentData[]) {
    }
}
