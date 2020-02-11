import { IOComponentData } from './oa-dialog/oa-dialog.component';
import { Injectable } from '@angular/core';
import { ProductCreateComponent } from 'src/app/modules/domain/product/product-create/product-create/product-create.component';
import { DialogServiceBase } from "./DialogServiceBase";
import { MatDialog } from '@angular/material';
@Injectable()
export class ProductDialogService extends DialogServiceBase {
    constructor(dialog: MatDialog) {
        super(dialog)
    }

    openCreateDialog(compData?: IOComponentData[]) {
        this.open(ProductCreateComponent, compData);
    }
    openReadDialog(compData?: IOComponentData[]) {
        throw new Error("Method not implemented.");
    }
    openUpdateDialog(compData?: IOComponentData[]) {
        throw new Error("Method not implemented.");
    }
    openDeleteDialog(compData?: IOComponentData[]) {
        throw new Error("Method not implemented.");
    }
}
