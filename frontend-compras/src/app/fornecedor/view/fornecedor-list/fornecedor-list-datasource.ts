import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { FornecedorModel } from '../../model/fornecedor-model';

export class FornecedorListDataSource extends DataSource<FornecedorModel> {
  data: FornecedorModel[] = [];
  paginator: MatPaginator;

  constructor(fornecedores: FornecedorModel[]) {
    super();
    this.data = fornecedores;
  }

  connect(): Observable<FornecedorModel[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData([...this.data]);
    }));
  }

  disconnect() { }

  private getPagedData(data: FornecedorModel[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

}
