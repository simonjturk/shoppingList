import { CRUD_MODE } from 'src/app/shared/enums';
import { Products, Product_Categories, Shopping_List_Items } from 'src/generated/graphql';

export interface IEntity<T> {

    current: T
    lastAction: CRUD_MODE


}


export class CrudState {

    shoppingListItem: IEntity<Shopping_List_Items>
    product: IEntity<Products>;
    productCategory: IEntity<Product_Categories>

    constructor() {

    }

}