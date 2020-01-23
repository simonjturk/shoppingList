import { Pipe, PipeTransform } from '@angular/core';
import {ArrayHelpersService  } from "../utilities/array-helpers.service";


@Pipe({
  name: 'filter'
})
export class ArrayFilterPipe implements PipeTransform {

  constructor(private arrayHelpersService:ArrayHelpersService){

  }

  transform<T>(arr: Array<T>, filters:any): T[] {
    return this.arrayHelpersService.filterByProperty(arr, filters);
  }

}
