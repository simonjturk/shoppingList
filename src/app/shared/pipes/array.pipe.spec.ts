import { ArrayFilterPipe } from './array.pipe';
import { sample } from '../utilities/array-helpers.service.spec';
import { TestBed } from '@angular/core/testing';
import { ArrayHelpersService } from '../utilities/array-helpers.service';

describe('ArrayPipe', () => {

  let dummyData: sample[];
  let pipe: ArrayFilterPipe;
  beforeEach(() => TestBed.configureTestingModule({
    providers:[ArrayFilterPipe,  ArrayHelpersService]
  }));


 beforeEach(() => {
   dummyData = [
     {id:1,name:"fred",fav:true},
     {id:2,name:"John",fav:true},
     {id:3,name:"mary",fav:false},
   ];

   pipe = TestBed.get(ArrayFilterPipe);
 })

  it('create an instance', () => {
   
    expect(pipe).toBeTruthy();
  });

  //most testing should be done in the service itself
  it('expect one element to be returned', () => {
   
    const res = pipe.transform<sample>(dummyData, {id:2});

    expect(res.length).toBe(1);

  });
  it('expect multiple element to be returned', () => {
   
    const res = pipe.transform<sample>(dummyData, {fav:true});

    expect(res.length).toBe(2);

  });
  it('expect empty array to be returned', () => {
   
    const res = pipe.transform<sample>(dummyData, {id:9999});

    expect(res.length).toBe(0);

  });

});
