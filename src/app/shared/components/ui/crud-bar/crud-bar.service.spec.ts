import { TestBed } from '@angular/core/testing';

import { CrudBarService } from './crud-bar.service';

describe('CrudBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudBarService = TestBed.get(CrudBarService);
    expect(service).toBeTruthy();
  });
});
