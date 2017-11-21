import { TestBed, inject } from '@angular/core/testing';

import { DiexerciseService } from './diexercise.service';

describe('DiexerciseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiexerciseService]
    });
  });

  it('should be created', inject([DiexerciseService], (service: DiexerciseService) => {
    expect(service).toBeTruthy();
  }));
});
