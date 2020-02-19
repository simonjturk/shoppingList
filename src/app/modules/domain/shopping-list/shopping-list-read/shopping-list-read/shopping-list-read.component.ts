import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Shopping_List } from 'src/generated/graphql';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ShoppingListRoutesService } from 'src/app/core/state/shopping-list-route/shopping-list-routes.service';
import { ShoppingListDialogService } from 'src/app/shared/components/ui/oa-dialog/ShoppingListDialogService';
import { IOComponentData } from 'src/app/shared/components/ui/oa-dialog/oa-dialog/oa-dialog.component';
import { CrudBaseComponent } from 'src/app/shared/classes/crud-base.component';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';
import { CrudBarService } from 'src/app/shared/components/ui/crud-bar/crud-bar.service';
import { IsLoadingService } from '@service-work/is-loading';
import { CRUD_MODE } from 'src/app/shared/enums';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list-read',
  templateUrl: './shopping-list-read.component.html',
  styleUrls: ['./shopping-list-read.component.scss']
})
export class ShoppingListReadComponent extends CrudBaseComponent<Shopping_List> implements OnInit {

  @Input() shoppingList$: Observable<Shopping_List>;

  private shoppingList: Shopping_List;

  constructor(
    public shoppingListRoutesService: ShoppingListRoutesService,
    private dialog: ShoppingListDialogService,
    service: ShoppingListService,
    crudBarService: CrudBarService,
    isLoadingService: IsLoadingService
  ) {

    super(CRUD_MODE.Read, isLoadingService, crudBarService, service)
  }

  hideCompleted: boolean = true;
  ngOnInit() {

    //get a local version of our list for use elsewhere
    this.shoppingList$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(list => this.shoppingList = list);
  }


  hideCompletedChange(event: MatSlideToggleChange) {
    this.hideCompleted = event.checked;

  }

  openDialog(): void {

    const compData: IOComponentData[] = [
      {
        property: "shoppingList",
        value: this.shoppingList
      }
    ]
    this.dialog.openUpdateDialog(compData);





  }
  public buildDataObject() {
    throw new Error("Method not implemented.");
  }
  public id: any;
}
