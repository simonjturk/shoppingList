import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  timestamptz: any,
  uuid: any,
  numeric: any,
};



/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>,
  _gt?: Maybe<Scalars['Boolean']>,
  _gte?: Maybe<Scalars['Boolean']>,
  _in?: Maybe<Array<Scalars['Boolean']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Boolean']>,
  _lte?: Maybe<Scalars['Boolean']>,
  _neq?: Maybe<Scalars['Boolean']>,
  _nin?: Maybe<Array<Scalars['Boolean']>>,
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root',
  /** delete data from the table: "product_categories" */
  delete_product_categories?: Maybe<Product_Categories_Mutation_Response>,
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>,
  /** delete data from the table: "shopping_list" */
  delete_shopping_list?: Maybe<Shopping_List_Mutation_Response>,
  /** delete data from the table: "shopping_list_items" */
  delete_shopping_list_items?: Maybe<Shopping_List_Items_Mutation_Response>,
  /** delete data from the table: "stores" */
  delete_stores?: Maybe<Stores_Mutation_Response>,
  /** delete data from the table: "types" */
  delete_types?: Maybe<Types_Mutation_Response>,
  /** insert data into the table: "product_categories" */
  insert_product_categories?: Maybe<Product_Categories_Mutation_Response>,
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>,
  /** insert data into the table: "shopping_list" */
  insert_shopping_list?: Maybe<Shopping_List_Mutation_Response>,
  /** insert data into the table: "shopping_list_items" */
  insert_shopping_list_items?: Maybe<Shopping_List_Items_Mutation_Response>,
  /** insert data into the table: "stores" */
  insert_stores?: Maybe<Stores_Mutation_Response>,
  /** insert data into the table: "types" */
  insert_types?: Maybe<Types_Mutation_Response>,
  /** update data of the table: "product_categories" */
  update_product_categories?: Maybe<Product_Categories_Mutation_Response>,
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>,
  /** update data of the table: "shopping_list" */
  update_shopping_list?: Maybe<Shopping_List_Mutation_Response>,
  /** update data of the table: "shopping_list_items" */
  update_shopping_list_items?: Maybe<Shopping_List_Items_Mutation_Response>,
  /** update data of the table: "stores" */
  update_stores?: Maybe<Stores_Mutation_Response>,
  /** update data of the table: "types" */
  update_types?: Maybe<Types_Mutation_Response>,
};


/** mutation root */
export type Mutation_RootDelete_Product_CategoriesArgs = {
  where: Product_Categories_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_Shopping_ListArgs = {
  where: Shopping_List_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_Shopping_List_ItemsArgs = {
  where: Shopping_List_Items_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_StoresArgs = {
  where: Stores_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_TypesArgs = {
  where: Types_Bool_Exp
};


/** mutation root */
export type Mutation_RootInsert_Product_CategoriesArgs = {
  objects: Array<Product_Categories_Insert_Input>,
  on_conflict?: Maybe<Product_Categories_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>,
  on_conflict?: Maybe<Products_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_Shopping_ListArgs = {
  objects: Array<Shopping_List_Insert_Input>,
  on_conflict?: Maybe<Shopping_List_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_Shopping_List_ItemsArgs = {
  objects: Array<Shopping_List_Items_Insert_Input>,
  on_conflict?: Maybe<Shopping_List_Items_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_StoresArgs = {
  objects: Array<Stores_Insert_Input>,
  on_conflict?: Maybe<Stores_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_TypesArgs = {
  objects: Array<Types_Insert_Input>,
  on_conflict?: Maybe<Types_On_Conflict>
};


/** mutation root */
export type Mutation_RootUpdate_Product_CategoriesArgs = {
  _set?: Maybe<Product_Categories_Set_Input>,
  where: Product_Categories_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _set?: Maybe<Products_Set_Input>,
  where: Products_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_Shopping_ListArgs = {
  _set?: Maybe<Shopping_List_Set_Input>,
  where: Shopping_List_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_Shopping_List_ItemsArgs = {
  _set?: Maybe<Shopping_List_Items_Set_Input>,
  where: Shopping_List_Items_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_StoresArgs = {
  _set?: Maybe<Stores_Set_Input>,
  where: Stores_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_TypesArgs = {
  _set?: Maybe<Types_Set_Input>,
  where: Types_Bool_Exp
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>,
  _gt?: Maybe<Scalars['numeric']>,
  _gte?: Maybe<Scalars['numeric']>,
  _in?: Maybe<Array<Scalars['numeric']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['numeric']>,
  _lte?: Maybe<Scalars['numeric']>,
  _neq?: Maybe<Scalars['numeric']>,
  _nin?: Maybe<Array<Scalars['numeric']>>,
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "product_categories" */
export type Product_Categories = {
   __typename?: 'product_categories',
  colour?: Maybe<Scalars['String']>,
  created_at: Scalars['timestamptz'],
  favourite: Scalars['Boolean'],
  id: Scalars['uuid'],
  name: Scalars['String'],
  updated_at: Scalars['timestamptz'],
};

/** aggregated selection of "product_categories" */
export type Product_Categories_Aggregate = {
   __typename?: 'product_categories_aggregate',
  aggregate?: Maybe<Product_Categories_Aggregate_Fields>,
  nodes: Array<Product_Categories>,
};

/** aggregate fields of "product_categories" */
export type Product_Categories_Aggregate_Fields = {
   __typename?: 'product_categories_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Product_Categories_Max_Fields>,
  min?: Maybe<Product_Categories_Min_Fields>,
};


/** aggregate fields of "product_categories" */
export type Product_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Categories_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "product_categories" */
export type Product_Categories_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Product_Categories_Max_Order_By>,
  min?: Maybe<Product_Categories_Min_Order_By>,
};

/** input type for inserting array relation for remote table "product_categories" */
export type Product_Categories_Arr_Rel_Insert_Input = {
  data: Array<Product_Categories_Insert_Input>,
  on_conflict?: Maybe<Product_Categories_On_Conflict>,
};

/** Boolean expression to filter rows from the table "product_categories". All fields are combined with a logical 'AND'. */
export type Product_Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Categories_Bool_Exp>>>,
  _not?: Maybe<Product_Categories_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Product_Categories_Bool_Exp>>>,
  colour?: Maybe<String_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  favourite?: Maybe<Boolean_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

/** unique or primary key constraints on table "product_categories" */
export enum Product_Categories_Constraint {
  /** unique or primary key constraint */
  ProductCategoriesPkey = 'product_categories_pkey'
}

/** input type for inserting data into table "product_categories" */
export type Product_Categories_Insert_Input = {
  colour?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  favourite?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type Product_Categories_Max_Fields = {
   __typename?: 'product_categories_max_fields',
  colour?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "product_categories" */
export type Product_Categories_Max_Order_By = {
  colour?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Product_Categories_Min_Fields = {
   __typename?: 'product_categories_min_fields',
  colour?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "product_categories" */
export type Product_Categories_Min_Order_By = {
  colour?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** response of any mutation on the table "product_categories" */
export type Product_Categories_Mutation_Response = {
   __typename?: 'product_categories_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Product_Categories>,
};

/** input type for inserting object relation for remote table "product_categories" */
export type Product_Categories_Obj_Rel_Insert_Input = {
  data: Product_Categories_Insert_Input,
  on_conflict?: Maybe<Product_Categories_On_Conflict>,
};

/** on conflict condition type for table "product_categories" */
export type Product_Categories_On_Conflict = {
  constraint: Product_Categories_Constraint,
  update_columns: Array<Product_Categories_Update_Column>,
  where?: Maybe<Product_Categories_Bool_Exp>,
};

/** ordering options when selecting data from "product_categories" */
export type Product_Categories_Order_By = {
  colour?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  favourite?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** select columns of table "product_categories" */
export enum Product_Categories_Select_Column {
  /** column name */
  Colour = 'colour',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Favourite = 'favourite',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "product_categories" */
export type Product_Categories_Set_Input = {
  colour?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  favourite?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** update columns of table "product_categories" */
export enum Product_Categories_Update_Column {
  /** column name */
  Colour = 'colour',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Favourite = 'favourite',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "products" */
export type Products = {
   __typename?: 'products',
  /** An object relationship */
  category?: Maybe<Product_Categories>,
  category_id?: Maybe<Scalars['uuid']>,
  created_at: Scalars['timestamptz'],
  description?: Maybe<Scalars['String']>,
  favourite: Scalars['Boolean'],
  id: Scalars['uuid'],
  name: Scalars['String'],
  updated_at: Scalars['timestamptz'],
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
   __typename?: 'products_aggregate',
  aggregate?: Maybe<Products_Aggregate_Fields>,
  nodes: Array<Products>,
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
   __typename?: 'products_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Products_Max_Fields>,
  min?: Maybe<Products_Min_Fields>,
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Products_Max_Order_By>,
  min?: Maybe<Products_Min_Order_By>,
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>,
  on_conflict?: Maybe<Products_On_Conflict>,
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Products_Bool_Exp>>>,
  _not?: Maybe<Products_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Products_Bool_Exp>>>,
  category?: Maybe<Product_Categories_Bool_Exp>,
  category_id?: Maybe<Uuid_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  description?: Maybe<String_Comparison_Exp>,
  favourite?: Maybe<Boolean_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductsPkey = 'products_pkey'
}

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  category?: Maybe<Product_Categories_Obj_Rel_Insert_Input>,
  category_id?: Maybe<Scalars['uuid']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  favourite?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type Products_Max_Fields = {
   __typename?: 'products_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Products_Min_Fields = {
   __typename?: 'products_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
   __typename?: 'products_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Products>,
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input,
  on_conflict?: Maybe<Products_On_Conflict>,
};

/** on conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint,
  update_columns: Array<Products_Update_Column>,
  where?: Maybe<Products_Bool_Exp>,
};

/** ordering options when selecting data from "products" */
export type Products_Order_By = {
  category?: Maybe<Product_Categories_Order_By>,
  category_id?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  favourite?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Favourite = 'favourite',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  category_id?: Maybe<Scalars['uuid']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  favourite?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Favourite = 'favourite',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** query root */
export type Query_Root = {
   __typename?: 'query_root',
  /** fetch data from the table: "product_categories" */
  product_categories: Array<Product_Categories>,
  /** fetch aggregated fields from the table: "product_categories" */
  product_categories_aggregate: Product_Categories_Aggregate,
  /** fetch data from the table: "product_categories" using primary key columns */
  product_categories_by_pk?: Maybe<Product_Categories>,
  /** fetch data from the table: "products" */
  products: Array<Products>,
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate,
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>,
  /** fetch data from the table: "shopping_list" */
  shopping_list: Array<Shopping_List>,
  /** fetch aggregated fields from the table: "shopping_list" */
  shopping_list_aggregate: Shopping_List_Aggregate,
  /** fetch data from the table: "shopping_list" using primary key columns */
  shopping_list_by_pk?: Maybe<Shopping_List>,
  /** fetch data from the table: "shopping_list_items" */
  shopping_list_items: Array<Shopping_List_Items>,
  /** fetch aggregated fields from the table: "shopping_list_items" */
  shopping_list_items_aggregate: Shopping_List_Items_Aggregate,
  /** fetch data from the table: "shopping_list_items" using primary key columns */
  shopping_list_items_by_pk?: Maybe<Shopping_List_Items>,
  /** fetch data from the table: "stores" */
  stores: Array<Stores>,
  /** fetch aggregated fields from the table: "stores" */
  stores_aggregate: Stores_Aggregate,
  /** fetch data from the table: "stores" using primary key columns */
  stores_by_pk?: Maybe<Stores>,
  /** fetch data from the table: "types" */
  types: Array<Types>,
  /** fetch aggregated fields from the table: "types" */
  types_aggregate: Types_Aggregate,
  /** fetch data from the table: "types" using primary key columns */
  types_by_pk?: Maybe<Types>,
};


/** query root */
export type Query_RootProduct_CategoriesArgs = {
  distinct_on?: Maybe<Array<Product_Categories_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Product_Categories_Order_By>>,
  where?: Maybe<Product_Categories_Bool_Exp>
};


/** query root */
export type Query_RootProduct_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Categories_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Product_Categories_Order_By>>,
  where?: Maybe<Product_Categories_Bool_Exp>
};


/** query root */
export type Query_RootProduct_Categories_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Products_Order_By>>,
  where?: Maybe<Products_Bool_Exp>
};


/** query root */
export type Query_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Products_Order_By>>,
  where?: Maybe<Products_Bool_Exp>
};


/** query root */
export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootShopping_ListArgs = {
  distinct_on?: Maybe<Array<Shopping_List_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Shopping_List_Order_By>>,
  where?: Maybe<Shopping_List_Bool_Exp>
};


/** query root */
export type Query_RootShopping_List_AggregateArgs = {
  distinct_on?: Maybe<Array<Shopping_List_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Shopping_List_Order_By>>,
  where?: Maybe<Shopping_List_Bool_Exp>
};


/** query root */
export type Query_RootShopping_List_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootShopping_List_ItemsArgs = {
  distinct_on?: Maybe<Array<Shopping_List_Items_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Shopping_List_Items_Order_By>>,
  where?: Maybe<Shopping_List_Items_Bool_Exp>
};


/** query root */
export type Query_RootShopping_List_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Shopping_List_Items_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Shopping_List_Items_Order_By>>,
  where?: Maybe<Shopping_List_Items_Bool_Exp>
};


/** query root */
export type Query_RootShopping_List_Items_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootStoresArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Stores_Order_By>>,
  where?: Maybe<Stores_Bool_Exp>
};


/** query root */
export type Query_RootStores_AggregateArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Stores_Order_By>>,
  where?: Maybe<Stores_Bool_Exp>
};


/** query root */
export type Query_RootStores_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootTypesArgs = {
  distinct_on?: Maybe<Array<Types_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Types_Order_By>>,
  where?: Maybe<Types_Bool_Exp>
};


/** query root */
export type Query_RootTypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Types_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Types_Order_By>>,
  where?: Maybe<Types_Bool_Exp>
};


/** query root */
export type Query_RootTypes_By_PkArgs = {
  id: Scalars['uuid']
};

/** columns and relationships of "shopping_list" */
export type Shopping_List = {
   __typename?: 'shopping_list',
  created_at: Scalars['timestamptz'],
  favourite: Scalars['Boolean'],
  id: Scalars['uuid'],
  /** An array relationship */
  items: Array<Shopping_List_Items>,
  /** An aggregated array relationship */
  items_aggregate: Shopping_List_Items_Aggregate,
  name: Scalars['String'],
  /** An object relationship */
  store?: Maybe<Stores>,
  store_id?: Maybe<Scalars['uuid']>,
  /** An object relationship */
  type?: Maybe<Types>,
  type_id?: Maybe<Scalars['uuid']>,
  updated_at: Scalars['timestamptz'],
};


/** columns and relationships of "shopping_list" */
export type Shopping_ListItemsArgs = {
  distinct_on?: Maybe<Array<Shopping_List_Items_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Shopping_List_Items_Order_By>>,
  where?: Maybe<Shopping_List_Items_Bool_Exp>
};


/** columns and relationships of "shopping_list" */
export type Shopping_ListItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Shopping_List_Items_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Shopping_List_Items_Order_By>>,
  where?: Maybe<Shopping_List_Items_Bool_Exp>
};

/** aggregated selection of "shopping_list" */
export type Shopping_List_Aggregate = {
   __typename?: 'shopping_list_aggregate',
  aggregate?: Maybe<Shopping_List_Aggregate_Fields>,
  nodes: Array<Shopping_List>,
};

/** aggregate fields of "shopping_list" */
export type Shopping_List_Aggregate_Fields = {
   __typename?: 'shopping_list_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Shopping_List_Max_Fields>,
  min?: Maybe<Shopping_List_Min_Fields>,
};


/** aggregate fields of "shopping_list" */
export type Shopping_List_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Shopping_List_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "shopping_list" */
export type Shopping_List_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Shopping_List_Max_Order_By>,
  min?: Maybe<Shopping_List_Min_Order_By>,
};

/** input type for inserting array relation for remote table "shopping_list" */
export type Shopping_List_Arr_Rel_Insert_Input = {
  data: Array<Shopping_List_Insert_Input>,
  on_conflict?: Maybe<Shopping_List_On_Conflict>,
};

/** Boolean expression to filter rows from the table "shopping_list". All fields are combined with a logical 'AND'. */
export type Shopping_List_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Shopping_List_Bool_Exp>>>,
  _not?: Maybe<Shopping_List_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Shopping_List_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  favourite?: Maybe<Boolean_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  items?: Maybe<Shopping_List_Items_Bool_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  store?: Maybe<Stores_Bool_Exp>,
  store_id?: Maybe<Uuid_Comparison_Exp>,
  type?: Maybe<Types_Bool_Exp>,
  type_id?: Maybe<Uuid_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

/** unique or primary key constraints on table "shopping_list" */
export enum Shopping_List_Constraint {
  /** unique or primary key constraint */
  ShoppingListPkey = 'shopping_list_pkey'
}

/** input type for inserting data into table "shopping_list" */
export type Shopping_List_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  favourite?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['uuid']>,
  items?: Maybe<Shopping_List_Items_Arr_Rel_Insert_Input>,
  name?: Maybe<Scalars['String']>,
  store?: Maybe<Stores_Obj_Rel_Insert_Input>,
  store_id?: Maybe<Scalars['uuid']>,
  type?: Maybe<Types_Obj_Rel_Insert_Input>,
  type_id?: Maybe<Scalars['uuid']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** columns and relationships of "shopping_list_items" */
export type Shopping_List_Items = {
   __typename?: 'shopping_list_items',
  complete: Scalars['Boolean'],
  created_at: Scalars['timestamptz'],
  id: Scalars['uuid'],
  product_id: Scalars['uuid'],
  quantity: Scalars['numeric'],
  shopping_list_id: Scalars['uuid'],
  updated_at: Scalars['timestamptz'],
};

/** aggregated selection of "shopping_list_items" */
export type Shopping_List_Items_Aggregate = {
   __typename?: 'shopping_list_items_aggregate',
  aggregate?: Maybe<Shopping_List_Items_Aggregate_Fields>,
  nodes: Array<Shopping_List_Items>,
};

/** aggregate fields of "shopping_list_items" */
export type Shopping_List_Items_Aggregate_Fields = {
   __typename?: 'shopping_list_items_aggregate_fields',
  avg?: Maybe<Shopping_List_Items_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Shopping_List_Items_Max_Fields>,
  min?: Maybe<Shopping_List_Items_Min_Fields>,
  stddev?: Maybe<Shopping_List_Items_Stddev_Fields>,
  stddev_pop?: Maybe<Shopping_List_Items_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Shopping_List_Items_Stddev_Samp_Fields>,
  sum?: Maybe<Shopping_List_Items_Sum_Fields>,
  var_pop?: Maybe<Shopping_List_Items_Var_Pop_Fields>,
  var_samp?: Maybe<Shopping_List_Items_Var_Samp_Fields>,
  variance?: Maybe<Shopping_List_Items_Variance_Fields>,
};


/** aggregate fields of "shopping_list_items" */
export type Shopping_List_Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Shopping_List_Items_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "shopping_list_items" */
export type Shopping_List_Items_Aggregate_Order_By = {
  avg?: Maybe<Shopping_List_Items_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Shopping_List_Items_Max_Order_By>,
  min?: Maybe<Shopping_List_Items_Min_Order_By>,
  stddev?: Maybe<Shopping_List_Items_Stddev_Order_By>,
  stddev_pop?: Maybe<Shopping_List_Items_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Shopping_List_Items_Stddev_Samp_Order_By>,
  sum?: Maybe<Shopping_List_Items_Sum_Order_By>,
  var_pop?: Maybe<Shopping_List_Items_Var_Pop_Order_By>,
  var_samp?: Maybe<Shopping_List_Items_Var_Samp_Order_By>,
  variance?: Maybe<Shopping_List_Items_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "shopping_list_items" */
export type Shopping_List_Items_Arr_Rel_Insert_Input = {
  data: Array<Shopping_List_Items_Insert_Input>,
  on_conflict?: Maybe<Shopping_List_Items_On_Conflict>,
};

/** aggregate avg on columns */
export type Shopping_List_Items_Avg_Fields = {
   __typename?: 'shopping_list_items_avg_fields',
  quantity?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "shopping_list_items" */
export type Shopping_List_Items_Avg_Order_By = {
  quantity?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "shopping_list_items". All fields are combined with a logical 'AND'. */
export type Shopping_List_Items_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Shopping_List_Items_Bool_Exp>>>,
  _not?: Maybe<Shopping_List_Items_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Shopping_List_Items_Bool_Exp>>>,
  complete?: Maybe<Boolean_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  product_id?: Maybe<Uuid_Comparison_Exp>,
  quantity?: Maybe<Numeric_Comparison_Exp>,
  shopping_list_id?: Maybe<Uuid_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

/** unique or primary key constraints on table "shopping_list_items" */
export enum Shopping_List_Items_Constraint {
  /** unique or primary key constraint */
  ShoppingListItemsPkey = 'shopping_list_items_pkey'
}

/** input type for inserting data into table "shopping_list_items" */
export type Shopping_List_Items_Insert_Input = {
  complete?: Maybe<Scalars['Boolean']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['uuid']>,
  product_id?: Maybe<Scalars['uuid']>,
  quantity?: Maybe<Scalars['numeric']>,
  shopping_list_id?: Maybe<Scalars['uuid']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type Shopping_List_Items_Max_Fields = {
   __typename?: 'shopping_list_items_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  quantity?: Maybe<Scalars['numeric']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "shopping_list_items" */
export type Shopping_List_Items_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  quantity?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Shopping_List_Items_Min_Fields = {
   __typename?: 'shopping_list_items_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  quantity?: Maybe<Scalars['numeric']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "shopping_list_items" */
export type Shopping_List_Items_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  quantity?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** response of any mutation on the table "shopping_list_items" */
export type Shopping_List_Items_Mutation_Response = {
   __typename?: 'shopping_list_items_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Shopping_List_Items>,
};

/** input type for inserting object relation for remote table "shopping_list_items" */
export type Shopping_List_Items_Obj_Rel_Insert_Input = {
  data: Shopping_List_Items_Insert_Input,
  on_conflict?: Maybe<Shopping_List_Items_On_Conflict>,
};

/** on conflict condition type for table "shopping_list_items" */
export type Shopping_List_Items_On_Conflict = {
  constraint: Shopping_List_Items_Constraint,
  update_columns: Array<Shopping_List_Items_Update_Column>,
  where?: Maybe<Shopping_List_Items_Bool_Exp>,
};

/** ordering options when selecting data from "shopping_list_items" */
export type Shopping_List_Items_Order_By = {
  complete?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  product_id?: Maybe<Order_By>,
  quantity?: Maybe<Order_By>,
  shopping_list_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** select columns of table "shopping_list_items" */
export enum Shopping_List_Items_Select_Column {
  /** column name */
  Complete = 'complete',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  ShoppingListId = 'shopping_list_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "shopping_list_items" */
export type Shopping_List_Items_Set_Input = {
  complete?: Maybe<Scalars['Boolean']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['uuid']>,
  product_id?: Maybe<Scalars['uuid']>,
  quantity?: Maybe<Scalars['numeric']>,
  shopping_list_id?: Maybe<Scalars['uuid']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type Shopping_List_Items_Stddev_Fields = {
   __typename?: 'shopping_list_items_stddev_fields',
  quantity?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "shopping_list_items" */
export type Shopping_List_Items_Stddev_Order_By = {
  quantity?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Shopping_List_Items_Stddev_Pop_Fields = {
   __typename?: 'shopping_list_items_stddev_pop_fields',
  quantity?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "shopping_list_items" */
export type Shopping_List_Items_Stddev_Pop_Order_By = {
  quantity?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Shopping_List_Items_Stddev_Samp_Fields = {
   __typename?: 'shopping_list_items_stddev_samp_fields',
  quantity?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "shopping_list_items" */
export type Shopping_List_Items_Stddev_Samp_Order_By = {
  quantity?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Shopping_List_Items_Sum_Fields = {
   __typename?: 'shopping_list_items_sum_fields',
  quantity?: Maybe<Scalars['numeric']>,
};

/** order by sum() on columns of table "shopping_list_items" */
export type Shopping_List_Items_Sum_Order_By = {
  quantity?: Maybe<Order_By>,
};

/** update columns of table "shopping_list_items" */
export enum Shopping_List_Items_Update_Column {
  /** column name */
  Complete = 'complete',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  ShoppingListId = 'shopping_list_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Shopping_List_Items_Var_Pop_Fields = {
   __typename?: 'shopping_list_items_var_pop_fields',
  quantity?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "shopping_list_items" */
export type Shopping_List_Items_Var_Pop_Order_By = {
  quantity?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Shopping_List_Items_Var_Samp_Fields = {
   __typename?: 'shopping_list_items_var_samp_fields',
  quantity?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "shopping_list_items" */
export type Shopping_List_Items_Var_Samp_Order_By = {
  quantity?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Shopping_List_Items_Variance_Fields = {
   __typename?: 'shopping_list_items_variance_fields',
  quantity?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "shopping_list_items" */
export type Shopping_List_Items_Variance_Order_By = {
  quantity?: Maybe<Order_By>,
};

/** aggregate max on columns */
export type Shopping_List_Max_Fields = {
   __typename?: 'shopping_list_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "shopping_list" */
export type Shopping_List_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Shopping_List_Min_Fields = {
   __typename?: 'shopping_list_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "shopping_list" */
export type Shopping_List_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** response of any mutation on the table "shopping_list" */
export type Shopping_List_Mutation_Response = {
   __typename?: 'shopping_list_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Shopping_List>,
};

/** input type for inserting object relation for remote table "shopping_list" */
export type Shopping_List_Obj_Rel_Insert_Input = {
  data: Shopping_List_Insert_Input,
  on_conflict?: Maybe<Shopping_List_On_Conflict>,
};

/** on conflict condition type for table "shopping_list" */
export type Shopping_List_On_Conflict = {
  constraint: Shopping_List_Constraint,
  update_columns: Array<Shopping_List_Update_Column>,
  where?: Maybe<Shopping_List_Bool_Exp>,
};

/** ordering options when selecting data from "shopping_list" */
export type Shopping_List_Order_By = {
  created_at?: Maybe<Order_By>,
  favourite?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  items_aggregate?: Maybe<Shopping_List_Items_Aggregate_Order_By>,
  name?: Maybe<Order_By>,
  store?: Maybe<Stores_Order_By>,
  store_id?: Maybe<Order_By>,
  type?: Maybe<Types_Order_By>,
  type_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** select columns of table "shopping_list" */
export enum Shopping_List_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Favourite = 'favourite',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "shopping_list" */
export type Shopping_List_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  favourite?: Maybe<Scalars['Boolean']>,
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  store_id?: Maybe<Scalars['uuid']>,
  type_id?: Maybe<Scalars['uuid']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** update columns of table "shopping_list" */
export enum Shopping_List_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Favourite = 'favourite',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "stores" */
export type Stores = {
   __typename?: 'stores',
  created_at: Scalars['timestamptz'],
  id: Scalars['uuid'],
  name: Scalars['String'],
  /** An object relationship */
  type?: Maybe<Types>,
  type_id: Scalars['uuid'],
  updated_at: Scalars['timestamptz'],
};

/** aggregated selection of "stores" */
export type Stores_Aggregate = {
   __typename?: 'stores_aggregate',
  aggregate?: Maybe<Stores_Aggregate_Fields>,
  nodes: Array<Stores>,
};

/** aggregate fields of "stores" */
export type Stores_Aggregate_Fields = {
   __typename?: 'stores_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Stores_Max_Fields>,
  min?: Maybe<Stores_Min_Fields>,
};


/** aggregate fields of "stores" */
export type Stores_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stores_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "stores" */
export type Stores_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Stores_Max_Order_By>,
  min?: Maybe<Stores_Min_Order_By>,
};

/** input type for inserting array relation for remote table "stores" */
export type Stores_Arr_Rel_Insert_Input = {
  data: Array<Stores_Insert_Input>,
  on_conflict?: Maybe<Stores_On_Conflict>,
};

/** Boolean expression to filter rows from the table "stores". All fields are combined with a logical 'AND'. */
export type Stores_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stores_Bool_Exp>>>,
  _not?: Maybe<Stores_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Stores_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  type?: Maybe<Types_Bool_Exp>,
  type_id?: Maybe<Uuid_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

/** unique or primary key constraints on table "stores" */
export enum Stores_Constraint {
  /** unique or primary key constraint */
  StoresPkey = 'stores_pkey'
}

/** input type for inserting data into table "stores" */
export type Stores_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  type?: Maybe<Types_Obj_Rel_Insert_Input>,
  type_id?: Maybe<Scalars['uuid']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type Stores_Max_Fields = {
   __typename?: 'stores_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "stores" */
export type Stores_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Stores_Min_Fields = {
   __typename?: 'stores_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "stores" */
export type Stores_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** response of any mutation on the table "stores" */
export type Stores_Mutation_Response = {
   __typename?: 'stores_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Stores>,
};

/** input type for inserting object relation for remote table "stores" */
export type Stores_Obj_Rel_Insert_Input = {
  data: Stores_Insert_Input,
  on_conflict?: Maybe<Stores_On_Conflict>,
};

/** on conflict condition type for table "stores" */
export type Stores_On_Conflict = {
  constraint: Stores_Constraint,
  update_columns: Array<Stores_Update_Column>,
  where?: Maybe<Stores_Bool_Exp>,
};

/** ordering options when selecting data from "stores" */
export type Stores_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  type?: Maybe<Types_Order_By>,
  type_id?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** select columns of table "stores" */
export enum Stores_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "stores" */
export type Stores_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  type_id?: Maybe<Scalars['uuid']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** update columns of table "stores" */
export enum Stores_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "product_categories" */
  product_categories: Array<Product_Categories>,
  /** fetch aggregated fields from the table: "product_categories" */
  product_categories_aggregate: Product_Categories_Aggregate,
  /** fetch data from the table: "product_categories" using primary key columns */
  product_categories_by_pk?: Maybe<Product_Categories>,
  /** fetch data from the table: "products" */
  products: Array<Products>,
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate,
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>,
  /** fetch data from the table: "shopping_list" */
  shopping_list: Array<Shopping_List>,
  /** fetch aggregated fields from the table: "shopping_list" */
  shopping_list_aggregate: Shopping_List_Aggregate,
  /** fetch data from the table: "shopping_list" using primary key columns */
  shopping_list_by_pk?: Maybe<Shopping_List>,
  /** fetch data from the table: "shopping_list_items" */
  shopping_list_items: Array<Shopping_List_Items>,
  /** fetch aggregated fields from the table: "shopping_list_items" */
  shopping_list_items_aggregate: Shopping_List_Items_Aggregate,
  /** fetch data from the table: "shopping_list_items" using primary key columns */
  shopping_list_items_by_pk?: Maybe<Shopping_List_Items>,
  /** fetch data from the table: "stores" */
  stores: Array<Stores>,
  /** fetch aggregated fields from the table: "stores" */
  stores_aggregate: Stores_Aggregate,
  /** fetch data from the table: "stores" using primary key columns */
  stores_by_pk?: Maybe<Stores>,
  /** fetch data from the table: "types" */
  types: Array<Types>,
  /** fetch aggregated fields from the table: "types" */
  types_aggregate: Types_Aggregate,
  /** fetch data from the table: "types" using primary key columns */
  types_by_pk?: Maybe<Types>,
};


/** subscription root */
export type Subscription_RootProduct_CategoriesArgs = {
  distinct_on?: Maybe<Array<Product_Categories_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Product_Categories_Order_By>>,
  where?: Maybe<Product_Categories_Bool_Exp>
};


/** subscription root */
export type Subscription_RootProduct_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Categories_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Product_Categories_Order_By>>,
  where?: Maybe<Product_Categories_Bool_Exp>
};


/** subscription root */
export type Subscription_RootProduct_Categories_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Products_Order_By>>,
  where?: Maybe<Products_Bool_Exp>
};


/** subscription root */
export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Products_Order_By>>,
  where?: Maybe<Products_Bool_Exp>
};


/** subscription root */
export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootShopping_ListArgs = {
  distinct_on?: Maybe<Array<Shopping_List_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Shopping_List_Order_By>>,
  where?: Maybe<Shopping_List_Bool_Exp>
};


/** subscription root */
export type Subscription_RootShopping_List_AggregateArgs = {
  distinct_on?: Maybe<Array<Shopping_List_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Shopping_List_Order_By>>,
  where?: Maybe<Shopping_List_Bool_Exp>
};


/** subscription root */
export type Subscription_RootShopping_List_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootShopping_List_ItemsArgs = {
  distinct_on?: Maybe<Array<Shopping_List_Items_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Shopping_List_Items_Order_By>>,
  where?: Maybe<Shopping_List_Items_Bool_Exp>
};


/** subscription root */
export type Subscription_RootShopping_List_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Shopping_List_Items_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Shopping_List_Items_Order_By>>,
  where?: Maybe<Shopping_List_Items_Bool_Exp>
};


/** subscription root */
export type Subscription_RootShopping_List_Items_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootStoresArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Stores_Order_By>>,
  where?: Maybe<Stores_Bool_Exp>
};


/** subscription root */
export type Subscription_RootStores_AggregateArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Stores_Order_By>>,
  where?: Maybe<Stores_Bool_Exp>
};


/** subscription root */
export type Subscription_RootStores_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootTypesArgs = {
  distinct_on?: Maybe<Array<Types_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Types_Order_By>>,
  where?: Maybe<Types_Bool_Exp>
};


/** subscription root */
export type Subscription_RootTypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Types_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Types_Order_By>>,
  where?: Maybe<Types_Bool_Exp>
};


/** subscription root */
export type Subscription_RootTypes_By_PkArgs = {
  id: Scalars['uuid']
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};

/** columns and relationships of "types" */
export type Types = {
   __typename?: 'types',
  created_at: Scalars['timestamptz'],
  id: Scalars['uuid'],
  name: Scalars['String'],
  updated_at: Scalars['timestamptz'],
};

/** aggregated selection of "types" */
export type Types_Aggregate = {
   __typename?: 'types_aggregate',
  aggregate?: Maybe<Types_Aggregate_Fields>,
  nodes: Array<Types>,
};

/** aggregate fields of "types" */
export type Types_Aggregate_Fields = {
   __typename?: 'types_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Types_Max_Fields>,
  min?: Maybe<Types_Min_Fields>,
};


/** aggregate fields of "types" */
export type Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Types_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "types" */
export type Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Types_Max_Order_By>,
  min?: Maybe<Types_Min_Order_By>,
};

/** input type for inserting array relation for remote table "types" */
export type Types_Arr_Rel_Insert_Input = {
  data: Array<Types_Insert_Input>,
  on_conflict?: Maybe<Types_On_Conflict>,
};

/** Boolean expression to filter rows from the table "types". All fields are combined with a logical 'AND'. */
export type Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Types_Bool_Exp>>>,
  _not?: Maybe<Types_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Types_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

/** unique or primary key constraints on table "types" */
export enum Types_Constraint {
  /** unique or primary key constraint */
  TypesPkey = 'types_pkey'
}

/** input type for inserting data into table "types" */
export type Types_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type Types_Max_Fields = {
   __typename?: 'types_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "types" */
export type Types_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Types_Min_Fields = {
   __typename?: 'types_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "types" */
export type Types_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** response of any mutation on the table "types" */
export type Types_Mutation_Response = {
   __typename?: 'types_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Types>,
};

/** input type for inserting object relation for remote table "types" */
export type Types_Obj_Rel_Insert_Input = {
  data: Types_Insert_Input,
  on_conflict?: Maybe<Types_On_Conflict>,
};

/** on conflict condition type for table "types" */
export type Types_On_Conflict = {
  constraint: Types_Constraint,
  update_columns: Array<Types_Update_Column>,
  where?: Maybe<Types_Bool_Exp>,
};

/** ordering options when selecting data from "types" */
export type Types_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** select columns of table "types" */
export enum Types_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "types" */
export type Types_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** update columns of table "types" */
export enum Types_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>,
  _gt?: Maybe<Scalars['uuid']>,
  _gte?: Maybe<Scalars['uuid']>,
  _in?: Maybe<Array<Scalars['uuid']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['uuid']>,
  _lte?: Maybe<Scalars['uuid']>,
  _neq?: Maybe<Scalars['uuid']>,
  _nin?: Maybe<Array<Scalars['uuid']>>,
};

export type CreateShoppingListMutationVariables = {
  shoppingList: Array<Shopping_List_Insert_Input>
};


export type CreateShoppingListMutation = (
  { __typename: 'mutation_root' }
  & { insert_shopping_list: Maybe<(
    { __typename?: 'shopping_list_mutation_response' }
    & { returning: Array<(
      { __typename?: 'shopping_list' }
      & Pick<Shopping_List, 'id' | 'name'>
    )> }
  )> }
);


export const CreateShoppingListDocument = gql`
    mutation CreateShoppingList($shoppingList: [shopping_list_insert_input!]!) {
  __typename
  insert_shopping_list(objects: $shoppingList) {
    returning {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateShoppingListGQL extends Apollo.Mutation<CreateShoppingListMutation, CreateShoppingListMutationVariables> {
    document = CreateShoppingListDocument;
    
  }