import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { CotacaoModel } from '../../model/cotacao-model';

export class CotacaoListDataSource extends DataSource<CotacaoModel> {
  data: CotacaoModel[];
  paginator: MatPaginator;

  constructor(cotacoes: CotacaoModel[]) {
    super();
    this.data = cotacoes;
  }
  
  connect(): Observable<CotacaoModel[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData([...this.data]);
    }));
  }

  disconnect() { }

  private getPagedData(data: CotacaoModel[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }
}
