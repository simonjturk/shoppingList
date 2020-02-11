import { IOComponentData, OaDialogComponent } from './oa-dialog/oa-dialog.component';
import { MatDialog } from '@angular/material';
export abstract class DialogServiceBase {
    constructor(private dialog: MatDialog) { }
    abstract openCreateDialog(compData?: IOComponentData[]);
    abstract openReadDialog(compData?: IOComponentData[]);
    abstract openUpdateDialog(compData?: IOComponentData[]);
    abstract openDeleteDialog(compData?: IOComponentData[]);
    protected open(component: any, componentData: IOComponentData[]) {
        let dialog = this.dialog.open(OaDialogComponent, {
            width: '80%',
            data: {
                component: component,
                componentData: componentData
            }
        });
        dialog.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
