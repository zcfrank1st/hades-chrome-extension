/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestfulService } from './restful.service';

describe('RestfulService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestfulService]
    });
  });

  it('should ...', inject([RestfulService], (service: RestfulService) => {
    expect(service).toBeTruthy();
  }));
});
