import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEnderecoComponent } from './dialog-endereco.component';

describe('DialogEnderecoComponent', () => {
  let component: DialogEnderecoComponent;
  let fixture: ComponentFixture<DialogEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
