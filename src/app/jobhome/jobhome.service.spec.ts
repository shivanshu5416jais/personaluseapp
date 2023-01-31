import { TestBed } from '@angular/core/testing';

import { JobhomeService } from './jobhome.service';

describe('JobhomeService', () => {
  let service: JobhomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobhomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
