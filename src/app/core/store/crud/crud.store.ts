import { Injectable } from '@angular/core';
import { StoreBase } from '../store-base';
import { CrudState } from './crud-state';
import { Products, Product_Categories } from 'src/generated/graphql';
import { CRUD_MODE } from 'src/app/shared/enums';

@Injectable()
export class CrudStore extends StoreBase<CrudState> {

  constructor() {
    super(new CrudState())
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
