import { TestBed } from '@angular/core/testing';

import { RequisicaoServiceService } from './requisicao-service.service';

describe('RequisicaoServiceService', () => {
  let service: RequisicaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequisicaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
