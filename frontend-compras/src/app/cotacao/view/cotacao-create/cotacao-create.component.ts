import { Component, OnInit, ViewChild } from '@angular/core';
import { FornecedorService } from 'src/app/fornecedor/service/fornecedor.service';
import { FornecedorModel } from 'src/app/fornecedor/model/fornecedor-model';
import { RequisicaoModel, StatusReq } from 'src/app/requisicao/model/requisicao-model';
import { RequisicaoService } from 'src/app/requisicao/service/requisicao.service';
import { RequisicaoItemModel } from 'src/app/requisicao/model/requisicao-item-model';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CotacaoModel } from '../../model/cotacao-model';
import { CotacaoService } from '../../service/cotacao.service';
import { MessageService } from 'src/app/service/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotacao-create',
  templateUrl: './cotacao-create.component.html',
  styleUrls: ['./cotacao-create.component.css']
})
export class CotacaoCreateComponent implements OnInit {
  @ViewChild('paginatorFornecedor') paginatorFornecedor: MatPaginator;
  @ViewChild('tableFornecedor') tableFornecedor: MatTable<FornecedorModel>;
  dataSourceFornecedor = new MatTableDataSource<FornecedorModel>();

  @ViewChild('paginatorRequisicao') paginatorRequisicao: MatPaginator;
  @ViewChild('tableRequisicao') tableRequisicao: MatTable<RequisicaoModel>;
  dataSourceRequisicao = new MatTableDataSource<RequisicaoModel>();

  selectedFornecedor = new FornecedorModel();
  columnsFornecedor = ['radio', 'idFornecedor', 'cpfCnpj', 'nomeRazao', 'email'];

  selectedRequisicao = new RequisicaoModel();
  columnsRequisicao = ['radio', 'idRequisicao', 'nomeSolicitante', 'observacao'];

  itens: RequisicaoItemModel[];
  valorTotal: number;
  columnsItens: string[] = ['descricaoProduto', 'quantidade', 'precoUni', 'subTotal'];

  constructor(private fornecedorService: FornecedorService,
    private requisicaoService: RequisicaoService,
    private cotacaoService: CotacaoService,
    private msgService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFornecedores();
    this.getRequisicoes();
  }

  getFornecedores() {
    this.fornecedorService.getAllFornecedores().subscribe(
      (fornecedores) => {
        this.dataSourceFornecedor.data = fornecedores;
        this.dataSourceFornecedor.paginator = this.paginatorFornecedor;
        this.tableFornecedor.dataSource = this.dataSourceFornecedor;
      },
      (error) => {
        console.log("Erro get all Fornecedores:\n" + error);
      }
    );
  }

  getRequisicoes() {
    this.requisicaoService.getAllRequisicoesByStatus(StatusReq.CRIADO).subscribe(
      (requisicoes) => {
        this.dataSourceRequisicao.data = requisicoes;
        this.dataSourceRequisicao.paginator = this.paginatorRequisicao;
        this.tableRequisicao.dataSource = this.dataSourceRequisicao;
      },
      (error) => {
        console.log("Erro get all Requisicoes:\n" + error);
      }
    );
  }

  createCotacao(): void {
    if (this.selectedFornecedor.idFornecedor == null) {
      this.msgService.showMessage("Selecione um Fornecedor para Continuar!!");
      return;
    }
    if (this.selectedRequisicao.idRequisicao == null) {
      this.msgService.showMessage("Selecione uma Requisição para Continuar!!");
      return;
    }
    if (!this.verificarRequisiçãoItens()) {
      this.msgService.showMessage("Preencha corretamente os Valores dos Itens!!");
      return;
    }

    let cotacao = new CotacaoModel();
    cotacao.fornecedor = this.selectedFornecedor;
    cotacao.requisicao = this.selectedRequisicao;
    cotacao.vlrTotal = this.valorTotal;
    this.cotacaoService.create(cotacao).subscribe(
      () => {
        this.msgService.showMessage("Cotação realizada com Sucesso!!");
        this.cancel();
      },
      (error) => {
        console.log("Error to save Cotacao:\n" + error);
      }
    );
  }

  verificarRequisiçãoItens(): boolean {
    let result = true;
    this.itens.forEach(
      (item) => {
        if (item.subTotal == undefined) {
          result = false;
        } else {
          if (item.subTotal <= 0) {
            result = false;
          }
        }
      }
    );
    if (this.valorTotal == undefined) {
      result = false;
    } else {
      if (this.valorTotal <= 0) {
        result = false;
      }
    }
    return result;
  }

  selecionouRequisicao() {
    if (this.selectedRequisicao.idRequisicao) {
      this.itens = this.selectedRequisicao.itens;
      return true;
    } else {
      return false;
    }
  }

  getValorTotal() {
    this.valorTotal = 0.0;
    this.itens.forEach((item) => {
      this.valorTotal += item.subTotal == null ? 0 : item.subTotal;
    });
    return this.valorTotal;
  }

  inputPrecoUniEvent(event: Event, index: number) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.itens[index].subTotal = Number(inputValue) * this.itens[index].quantidade;
    this.getValorTotal();
  }

  inputSubTotalEvent(event: Event, index: number) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.itens[index].subTotal = Number(inputValue);
    this.itens[index].precoUni = this.itens[index].subTotal / this.itens[index].quantidade;
    this.getValorTotal();
  }

  applyFilterFornecedor(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceFornecedor.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceFornecedor.paginator) {
      this.dataSourceFornecedor.paginator.firstPage();
    }
  }

  applyFilterRequisicao(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceRequisicao.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceRequisicao.paginator) {
      this.dataSourceRequisicao.paginator.firstPage();
    }
  }

  cancel(): void {
    this.router.navigate(['/cotacao/list']);
  }

}
