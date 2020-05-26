import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicaoCreateComponent } from './requisicao-create.component';

describe('RequisicaoCreateComponent', () => {
  let component: RequisicaoCreateComponent;
  let fixture: ComponentFixture<RequisicaoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisicaoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisicaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
