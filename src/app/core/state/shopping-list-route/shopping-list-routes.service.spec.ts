import { TestBed } from '@angular/core/testing';

import { ShoppingListRoutesService } from './shopping-list-routes.service';

describe('ShoppingListRoutesService', () => {
  let service: ShoppingListRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingListRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
