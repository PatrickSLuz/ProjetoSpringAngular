import { Component, OnInit } from '@angular/core';
import { RequisicaoItemModel } from '../../model/requisicao-item-model';
import { RequisicaoModel, StatusReq } from '../../model/requisicao-model';
import { RequisicaoService } from '../../service/requisicao.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/user/model/user-model';

@Component({
  selector: 'app-requisicao-create',
  templateUrl: './requisicao-create.component.html',
  styleUrls: ['./requisicao-create.component.css']
})
export class RequisicaoCreateComponent implements OnInit {

  requisicao: RequisicaoModel;
  item: RequisicaoItemModel;
  itens: RequisicaoItemModel[] = [];
  dataSource = new MatTableDataSource<any>();

  displayedColumns = ['descricao', 'quantidade'];

  constructor(private requisicaoService: RequisicaoService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.requisicao = new RequisicaoModel();
    this.item = new RequisicaoItemModel();
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "", {
      duration: 4000,
      horizontalPosition: "end",
      verticalPosition: "top"
    })
  }

  createRequisicao(): void {
    let user: UserModel = {
      nome: 'Patrick',
      email: 'patrick@email.com',
      setor: 'Dev'
    };
    if (this.itens.length > 0) {
      this.requisicao.solicitante = user;
      this.requisicao.itens = this.itens;
      this.requisicao.data = new Date;
      this.requisicao.status = StatusReq.CRIADO;
      this.requisicaoService.create(this.requisicao).subscribe(
        () => {
          this.showMessage("Requisição Realizada com Sucesso!!");
          this.cancel();
        }, error => console.log(error));

    } else {
      this.showMessage("Por Favor, insira algum Item!!");
    }
  }

  addItem(): void {
    if (this.item.descricaoProduto != null && this.item.quantidade != null) {
      if (this.item.quantidade < 1) {
        this.showMessage("Por Favor, insira uma Quantidade Válida!!");
      } else {
        this.itens.push(this.item);
        this.item = new RequisicaoItemModel();
        this.dataSource.data = this.itens;
      }
    } else {
      this.showMessage("Por Favor, preencha os campos para inserir um Item!!");
    }
  }

  cancel(): void {
    this.router.navigate(['/requisicao/list']);
  }

}
