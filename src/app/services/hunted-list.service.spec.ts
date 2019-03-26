import { TestBed } from '@angular/core/testing';

import { HuntedListService } from './hunted-list.service';

describe('HuntedListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HuntedListService = TestBed.get(HuntedListService);
    expect(service).toBeTruthy();
  });
});
