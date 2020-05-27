import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoCreateComponent } from './cotacao-create.component';

describe('CotacaoCreateComponent', () => {
  let component: CotacaoCreateComponent;
  let fixture: ComponentFixture<CotacaoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotacaoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotacaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
