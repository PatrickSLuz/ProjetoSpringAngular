import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { RequisicaoListDataSource } from './requisicao-list-datasource';
import { RequisicaoModel } from '../../model/requisicao-model';
import { RequisicaoService } from '../../service/requisicao.service';
import { RequisicaoItemModel } from '../../model/requisicao-item-model';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from 'src/app/user/model/user-model';
import { DialogSolicitanteComponent } from '../dialog-solicitante/dialog-solicitante.component';
import { DialogItensComponent } from '../dialog-itens/dialog-itens.component';

@Component({
  selector: 'app-requisicao-list',
  templateUrl: './requisicao-list.component.html',
  styleUrls: ['./requisicao-list.component.css']
})
export class RequisicaoListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<RequisicaoModel>;
  dataSource: RequisicaoListDataSource;

  displayedColumns = ['idRequisicao', 'solicitante', 'itens', 'observacao', 'status'];

  constructor(private requisicaoService: RequisicaoService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.requisicaoService.getAllRequisicoes().subscribe(
      requisicoes => {
        this.dataSource = new RequisicaoListDataSource(requisicoes);
        this.configPaginator();
      }, error => console.log(error)
    );
  }

  configPaginator() {
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialogItens(itens: RequisicaoItemModel[]): void {
    this.dialog.open(DialogItensComponent, {
      data: { itens: itens },
    }).afterClosed().subscribe();
  }

  openDialogSolicitante(user: UserModel): void {
    this.dialog.open(DialogSolicitanteComponent, {
      data: { user: user },
    }).afterClosed().subscribe();
  }
}
