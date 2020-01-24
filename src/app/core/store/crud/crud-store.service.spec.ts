import { TestBed } from '@angular/core/testing';

import { CrudStoreService } from './crud-store.service';

describe('CrudStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudStoreService = TestBed.get(CrudStoreService);
    expect(service).toBeTruthy();
  });
});
