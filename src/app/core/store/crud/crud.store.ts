import { Injectable } from '@angular/core';
import { StoreBase } from '../store-base';
import { CrudState } from './crud-state';
import { Products, Product_Categories, Shopping_List_Items } from 'src/generated/graphql';
import { CRUD_MODE } from 'src/app/shared/enums';

@Injectable()
export class CrudStore extends StoreBase<CrudState> {

  constructor() {
    super(new CrudState())
  }


  setShoppingListItem(shoppingListItem: Shopping_List_Items, action: CRUD_MODE) {
    this.setState(
      { ...this.state, shoppingListItem: { current: shoppingListItem, lastAction: action } }
    )
  }

  setProduct(product: Products, action: CRUD_MODE) {
    this.setState(
      { ...this.state, product: { current: product, lastAction: action } }
    )
  }

  setProductCategory(productCategory: Product_Categories, action: CRUD_MODE) {
    this.setState(
      { ...this.state, productCategory: { current: productCategory, lastAction: action } }
    )
  }

}
