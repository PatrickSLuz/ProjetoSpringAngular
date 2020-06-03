import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { FornecedorListComponent } from './fornecedor-list.component';

describe('FornecedorListComponent', () => {
  let component: FornecedorListComponent;
  let fixture: ComponentFixture<FornecedorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorListComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
