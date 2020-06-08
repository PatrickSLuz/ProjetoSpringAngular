import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { RequisicaoListDataSource } from './requisicao-list-datasource';
import { RequisicaoModel } from '../../model/requisicao-model';
import { RequisicaoService } from '../../service/requisicao.service';
import { RequisicaoItemModel } from '../../model/requisicao-item-model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-requisicao-list',
  templateUrl: './requisicao-list.component.html',
  styleUrls: ['./requisicao-list.component.css']
})
export class RequisicaoListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<RequisicaoModel>;
  dataSource: RequisicaoListDataSource;

  displayedColumns = ['idRequisicao', 'itens', 'observacao', 'status'];

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
    console.log("Dialog Itens");
  }
}
