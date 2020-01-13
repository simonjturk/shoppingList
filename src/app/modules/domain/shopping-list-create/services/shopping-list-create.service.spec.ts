import { TestBed } from '@angular/core/testing';

import { ShoppingListCreateService } from './shopping-list-create.service';

describe('ShoppingListCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingListCreateService = TestBed.get(ShoppingListCreateService);
    expect(service).toBeTruthy();
  });
});
