import { Component, OnInit, Inject, Input, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Products } from 'src/generated/graphql';
import { map, distinctUntilChanged, takeUntil, skip } from 'rxjs/operators';
import { CRUD_MODE } from 'src/app/shared/enums';

export interface IOComponentData {
  property: string,
  value
}

export interface IOADialogData {
  component,
  componentData: IOComponentData[]
}

@Component({
  selector: 'app-oa-dialog',
  templateUrl: './oa-dialog.component.html',
  styleUrls: ['./oa-dialog.component.scss']
})
export class OaDialogComponent implements OnInit {

  @ViewChild('target', { read: ViewContainerRef, static: true }) vcRef: ViewContainerRef;

  componentRef: ComponentRef<any>;

  constructor(
    public dialogRef: MatDialogRef<OaDialogComponent>,
    private resolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public data: IOADialogData) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.vcRef.createComponent(factory);

    if (this.data.componentData) {
      this.data.componentData.forEach(d => this.componentRef.instance[d.property] = d.value);
    }

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
