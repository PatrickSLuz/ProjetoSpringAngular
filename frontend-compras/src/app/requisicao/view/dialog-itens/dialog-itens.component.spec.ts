import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogItensComponent } from './dialog-itens.component';

describe('DialogItensComponent', () => {
  let component: DialogItensComponent;
  let fixture: ComponentFixture<DialogItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
