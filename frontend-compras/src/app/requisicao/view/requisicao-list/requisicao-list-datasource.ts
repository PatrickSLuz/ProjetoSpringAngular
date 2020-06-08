import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { RequisicaoModel } from '../../model/requisicao-model';

export class RequisicaoListDataSource extends DataSource<RequisicaoModel> {
  data: RequisicaoModel[];
  paginator: MatPaginator;

  constructor(requisicoes: RequisicaoModel[]) {
    super();
    this.data = requisicoes;
  }

  connect(): Observable<RequisicaoModel[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData([...this.data]);
    }));
  }

  disconnect() { }

  private getPagedData(data: RequisicaoModel[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

}
