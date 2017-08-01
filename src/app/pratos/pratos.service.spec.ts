import { TestBed, inject } from '@angular/core/testing';

import { PratosService } from './pratos.service';

describe('PratosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PratosService]
    });
  });

  it('should be created', inject([PratosService], (service: PratosService) => {
    expect(service).toBeTruthy();
  }));
});
