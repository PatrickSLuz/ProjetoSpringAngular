import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { UserModel } from '../../model/user-model';

export class UserListDataSource extends DataSource<UserModel> {
  data: UserModel[];
  paginator: MatPaginator;

  constructor(users: UserModel[]) {
    super();
    this.data = users;
  }

  connect(): Observable<UserModel[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData([...this.data]);
    }));
  }

  disconnect() { }

  private getPagedData(data: UserModel[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

}
