import { Component, OnInit, Inject, Input, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Products } from 'src/generated/graphql';
import { map, distinctUntilChanged, takeUntil, skip } from 'rxjs/operators';
import { CRUD_MODE } from 'src/app/shared/enums';
import { CrudBarService } from '../../crud-bar/crud-bar.service';
import { CrudBaseComponent } from 'src/app/shared/classes/crud-base.component';
import { CRUD_BUTTONS } from '../../crud-bar/crud-bar.component';

export interface IOComponentData {
  property: string,
  value
}

export interface IOADialogData {
  component,
  // componentGenericType,
  componentData: IOComponentData[],
  showCrudBar: boolean,

}

@Component({
  selector: 'app-oa-dialog',
  templateUrl: './oa-dialog.component.html',
  styleUrls: ['./oa-dialog.component.scss'],
  providers: [CrudBarService]
})
export class OaDialogComponent implements OnInit {

  @ViewChild('target', { read: ViewContainerRef, static: true }) vcRef: ViewContainerRef;

  componentRef: ComponentRef<CrudBaseComponent<any>>;

  constructor(
    public dialogRef: MatDialogRef<OaDialogComponent>,
    private resolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public data: IOADialogData,
    private crudBarService: CrudBarService) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory<CrudBaseComponent<any>>(this.data.component);
    this.componentRef = this.vcRef.createComponent(factory);

    //set input vars
    if (this.data.componentData) {
      this.data.componentData.forEach(d => this.componentRef.instance[d.property] = d.value);
    }

    //set Output vars
    this.componentRef.instance.crudEvent.subscribe(data => {
      this.handleComponentCrudEvent(data);
    });

    //we will trigger our component's change event here after we have set input params.
    this.componentRef.instance.ngOnChanges();
  }
  private handleComponentCrudEvent(btn: CRUD_BUTTONS) {
    if (btn === CRUD_BUTTONS.save) this.dialogRef.close()
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
