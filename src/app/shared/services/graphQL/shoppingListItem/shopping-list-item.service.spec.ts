import { TestBed } from '@angular/core/testing';

import { ShoppingListItemService } from './shopping-list-item.service';

describe('ShoppingListItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingListItemService = TestBed.get(ShoppingListItemService);
    expect(service).toBeTruthy();
  });
});
