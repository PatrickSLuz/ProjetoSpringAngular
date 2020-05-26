import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicaoListComponent } from './requisicao-list.component';

describe('RequisicaoListComponent', () => {
  let component: RequisicaoListComponent;
  let fixture: ComponentFixture<RequisicaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisicaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisicaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
