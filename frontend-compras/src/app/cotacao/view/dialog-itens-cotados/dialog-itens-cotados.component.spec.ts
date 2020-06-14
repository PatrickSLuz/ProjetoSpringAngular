import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogItensCotadosComponent } from './dialog-itens-cotados.component';

describe('DialogItensCotadosComponent', () => {
  let component: DialogItensCotadosComponent;
  let fixture: ComponentFixture<DialogItensCotadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogItensCotadosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogItensCotadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
