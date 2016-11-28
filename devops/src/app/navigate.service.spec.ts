/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavigateService } from './navigate.service';

describe('NavigateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigateService]
    });
  });

  it('should ...', inject([NavigateService], (service: NavigateService) => {
    expect(service).toBeTruthy();
  }));
});
