import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { UserListDataSource } from './user-list-datasource';
import { UserModel } from '../../model/user-model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<UserModel>;
  dataSource: UserListDataSource;

  displayedColumns = ['id', 'nome', 'setor', 'editar'];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      this.dataSource = new UserListDataSource(users);
      this.configPaginator();
    }, error => console.log(error));
  }

  configPaginator() {
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  validarCurrentUser(user: UserModel): boolean {
    if (this.userService.currentUser) {
      if (user.idUsuario == this.userService.currentUser.idUsuario) {
        return true;
      }
    }
    return false;
  }
}
