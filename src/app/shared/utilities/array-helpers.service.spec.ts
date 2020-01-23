import { TestBed } from '@angular/core/testing';

import { ArrayHelpersService , IPredicate} from './array-helpers.service';


export class sample {
  id:number
  name:string
  fav: boolean
}


describe('ArrayHelpersService', () => {
  let dummyData: sample[];
   let service: ArrayHelpersService;
  beforeEach(() => TestBed.configureTestingModule({}));


  beforeEach(() => {
    dummyData = [
      {id:1,name:"fred",fav:true},
      {id:2,name:"John",fav:true},
      {id:3,name:"mary",fav:false},
    ];

    service = TestBed.get(ArrayHelpersService);
  })

   
  it('should be created', () => {
    
    expect(service).toBeTruthy();
  });

  it ('find single item in array based on object proerty', () =>{
    const predicate:any = {
      id:3
    }

    let res = service.filterByProperty(dummyData,predicate);

    expect(res.length).toBe(1);
    expect(res[0].id).toBe(3);
    expect(res[0].name).toBe('mary');

  });

  it ('find multiple item in array based on object proerty', () =>{
    const predicate:any = {
      fav:true
    }

    let res = service.filterByProperty(dummyData,predicate);

    expect(res.length).toBe(2);
    expect(res[0].id).toBe(1);
    expect(res[1].id).toBe(2);

  });



});
