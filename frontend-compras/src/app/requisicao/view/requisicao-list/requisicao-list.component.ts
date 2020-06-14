import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { RequisicaoListDataSource } from './requisicao-list-datasource';
import { RequisicaoModel, StatusReq } from '../../model/requisicao-model';
import { RequisicaoService } from '../../service/requisicao.service';
import { RequisicaoItemModel } from '../../model/requisicao-item-model';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from 'src/app/user/model/user-model';
import { DialogSolicitanteComponent } from '../dialog-solicitante/dialog-solicitante.component';
import { DialogItensComponent } from '../dialog-itens/dialog-itens.component';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-requisicao-list',
  templateUrl: './requisicao-list.component.html',
  styleUrls: ['./requisicao-list.component.css']
})
export class RequisicaoListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<RequisicaoModel>;
  dataSource: RequisicaoListDataSource;

  displayedColumns = ['idRequisicao', 'solicitante', 'itens', 'observacao', 'status', 'cancelar', 'finalizar'];

  constructor(private requisicaoService: RequisicaoService,
    private userService: UserService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.requisicaoService.getAllRequisicoes().subscribe(
      requisicoes => {
        this.dataSource = new RequisicaoListDataSource(requisicoes);
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      }, error => console.log(error)
    );
  }

  validarSePodeCancelar(requisicao: RequisicaoModel): boolean {
    if (this.userService.currentUser) {
      if (requisicao.solicitante.idUsuario == this.userService.currentUser.idUsuario) {
        if (requisicao.status == StatusReq.CRIADO) {
          return true;
        }
      }
    }
    return false;
  }

  validarSePodeFinalizar(requisicao: RequisicaoModel): boolean {
    if (this.userService.currentUser) {
      if (requisicao.solicitante.idUsuario == this.userService.currentUser.idUsuario) {
        if (requisicao.status == StatusReq.EM_COTACAO) {
          return true;
        }
      }
    }
    return false;
  }

  cancelRequisicao(requisicao: RequisicaoModel): void {
    requisicao.status = StatusReq.CANCELADO;
    this.requisicaoService.updateByStatus(requisicao).subscribe(
      () => this.ngOnInit(),
      (error) => {
        console.log("Error to update Requisicao:\n" + error)
      }
    );
  }

  finalizarRequisicao(requisicao: RequisicaoModel): void {
    requisicao.status = StatusReq.FINALIZADO;
    this.requisicaoService.updateByStatus(requisicao).subscribe(
      () => this.ngOnInit(),
      (error) => {
        console.log("Error to update Requisicao:\n" + error)
      }
    );
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
