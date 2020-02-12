import { Injectable } from '@angular/core';

import { filter } from 'lodash'

export interface IPredicate<T> {
    (item: T): boolean
}


@Injectable({
    providedIn: 'root'
})
export class ArrayHelpersService {



    constructor() { }


    /**
     *
     *
     * @template T
     * @param {Array<T>} arr
     * @param {string} key
     * @param {boolean} [ascending=true]
     * @returns {Array<T>}
     * @memberof ItemsService
     */
    sort<T>(arr: Array<T>, key: string, ascending: boolean = true): Array<T> {
        if (arr) {
            return arr.sort(this.compare(key, ascending ? 'asc' : 'desc'));
        }
    }



    filter<T>(arr: Array<T>, predicate: IPredicate<T>) {
        return filter(arr, predicate)
    }

    filterByProperty<T>(arr: Array<T>, searchBy: any) {
        return filter(arr, searchBy)
    }








    /**
     * used as the compare function for array sort.
     *
     * @private
     * @param {*} key
     * @param {string} [order='asc']
     * @returns
     * @memberof Sort
     */
    private compare(key, order = 'asc') {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }

}