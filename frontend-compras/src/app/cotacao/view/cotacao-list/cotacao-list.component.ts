import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { CotacaoListDataSource } from './cotacao-list-datasource';
import { CotacaoService } from '../../service/cotacao.service';
import { CotacaoModel } from '../../model/cotacao-model';
import { MatDialog } from '@angular/material/dialog';
import { DialogRequisicaoComponent } from '../dialog-requisicao/dialog-requisicao.component';
import { RequisicaoModel } from 'src/app/requisicao/model/requisicao-model';
import { RequisicaoItemModel } from 'src/app/requisicao/model/requisicao-item-model';
import { DialogItensCotadosComponent } from '../dialog-itens-cotados/dialog-itens-cotados.component';

@Component({
  selector: 'app-cotacao-list',
  templateUrl: './cotacao-list.component.html',
  styleUrls: ['./cotacao-list.component.css']
})
export class CotacaoListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<CotacaoModel>;
  dataSource: CotacaoListDataSource;

  displayedColumns = ['idCotacao', 'fornecedor', 'requisicao', 'itens', 'vlrTotal'];

  constructor(private cotacaoService: CotacaoService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.cotacaoService.getAllCotacoes().subscribe(
      cotacoes => {
        this.dataSource = new CotacaoListDataSource(cotacoes);
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      }, error => console.log(error)
    );
  }

  openDialogRequisicao(requisicao: RequisicaoModel) {
    this.dialog.open(DialogRequisicaoComponent, {
      data: { requisicao: requisicao },
    }).afterClosed().subscribe();
  }

  openDialogItens(itens: RequisicaoItemModel[]) {
    this.dialog.open(DialogItensCotadosComponent, {
      data: { itens: itens },
    }).afterClosed().subscribe();
  }
}
