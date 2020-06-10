import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSolicitanteComponent } from './dialog-solicitante.component';

describe('DialogSolicitanteComponent', () => {
  let component: DialogSolicitanteComponent;
  let fixture: ComponentFixture<DialogSolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
