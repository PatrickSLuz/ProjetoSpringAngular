import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRequisicaoComponent } from './dialog-requisicao.component';

describe('DialogRequisicaoComponent', () => {
  let component: DialogRequisicaoComponent;
  let fixture: ComponentFixture<DialogRequisicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRequisicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRequisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
