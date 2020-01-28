import { Injectable } from '@angular/core';
import { DataProxy } from 'apollo-cache';


export interface IUpdateCache {
    type: CACHE_ACTION,
    queryDocument: any,
    variables: any,
}

export enum CACHE_ACTION {
    INSERT,
    UPDATE,
    DELETE,

}


@Injectable()
export class CacheHelperService {
    private cache: DataProxy;
    private data: any

    private currentQuery: IUpdateCache;

    private currentItem;
    private currentList;


    constructor(cache: DataProxy, data: any) {
        this.data = data;
        this.cache = cache;
    }

    /**
     * takes an array of IIUpdateCache and manipulates the apollo cache based this array
     *
     * @param {IUpdateCache[]} queries
     * @memberof CacheHelperService
     */
    public manageCache(queries: IUpdateCache[]) {

        queries.forEach(query => {

            this.setup(query);

            if (query.type === CACHE_ACTION.DELETE) {
                this.handleDeletes();

            }
            if (query.type === CACHE_ACTION.INSERT) {
                this.handleInserts();

            }


        });

    }

    /**
     *  sets standard stuff that all actions use
     *
     * @private
     * @param {IUpdateCache} query
     * @memberof CacheHelperService
     */
    private setup(query: IUpdateCache) {
        //
        this.currentQuery = query;

        // Read the data from our cache for this query.
        this.currentItem = this.getCurrent();

        //get our latest just inserted
        this.currentList = this.getExistingList()
    }

    /**
     * handles the cache for inserts
     */
    private handleInserts() {

        let newData = {};
        newData[this.currentItem.__typename] = [this.currentItem, ...this.currentList];

        this.writeToCache(newData);
    }


    /**
     * updates the cache to handle the delete
     *
     * @private
     * @memberof CacheHelperService
     */
    private handleDeletes() {

        //delete our item from the cache

        const newList = this.currentList.filter(el => el.id !== this.currentItem.id);

        let newData = {};
        newData[this.currentItem.__typename] = [...newList];

        this.writeToCache(newData);
    }

    /**
     * 
     *
     * @private
     * @returns the current data being inserted or deleted or updated.  Currently only deals with scenario of a single item being updated/deleted etc
     * @memberof CacheHelperService
     */
    private getCurrent() {
        const key = Object.keys(this.data)[1]; //hack cos I know the second is the one i want.

        return this.data[key].returning[0];
    }

    /**
     *
     *
     * @private
     * @returns the existing list from the store
     * @memberof CacheHelperService
     */
    private getExistingList() {
        //TODO handle if list does not exist

        // Read the data from our cache for this query. making sure to send the variables to the gql to correctly map to the store

        const cacheObject = this.cache.readQuery({ query: this.currentQuery.queryDocument, variables: this.currentQuery.variables ? this.currentQuery.variables : null });

        return cacheObject[this.currentItem.__typename];
    }


    /**
     *
     * writes the new data to the apollo cache
     * @private
     * @param {*} newData
     * @memberof CacheHelperService
     */
    private writeToCache(newData: any) {
        this.cache.writeQuery({
            query: this.currentQuery.queryDocument,
            data: newData,
            variables: this.currentQuery.variables ? this.currentQuery.variables : null
        })


    }

}