import { TestBed } from '@angular/core/testing';

import { GraffitiService } from './graffiti.service';

describe('GraffitiService', () => {
  let service: GraffitiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraffitiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
