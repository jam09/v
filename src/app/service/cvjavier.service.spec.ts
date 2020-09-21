import { TestBed } from '@angular/core/testing';

import { CvjavierService } from './cvjavier.service';

describe('CvjavierService', () => {
  let service: CvjavierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvjavierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
