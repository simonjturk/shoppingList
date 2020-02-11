import { IOComponentData } from './oa-dialog/oa-dialog.component';
import { Injectable } from '@angular/core';
import { ProductCategoryCreateComponent } from 'src/app/modules/domain/product-category/product-category-create/product-category-create/product-category-create.component';
import { DialogServiceBase } from "./DialogServiceBase";
import { MatDialog } from '@angular/material';


@Injectable()
export class ProductCategoryDialogService extends DialogServiceBase {
    constructor(dialog: MatDialog) {
        super(dialog)
    }

    openCreateDialog(compData?: IOComponentData[]) {
        this.open(ProductCategoryCreateComponent, compData);
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
