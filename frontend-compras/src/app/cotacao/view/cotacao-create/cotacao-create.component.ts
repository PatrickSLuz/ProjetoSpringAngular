import { Component, OnInit, ViewChild } from '@angular/core';
import { FornecedorService } from 'src/app/fornecedor/service/fornecedor.service';
import { StatusReq } from 'src/app/requisicao/model/status-requisicao';
import { RequisicaoService } from 'src/app/requisicao/service/requisicao.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CotacaoService } from '../../service/cotacao.service';
import { MessageService } from 'src/app/service/message.service';
import { Router } from '@angular/router';
import { CotacaoBuilder } from '../../builder/cotacao-builder';

@Component({
  selector: 'app-cotacao-create',
  templateUrl: './cotacao-create.component.html',
  styleUrls: ['./cotacao-create.component.css']
})
export class CotacaoCreateComponent implements OnInit {
  @ViewChild('paginatorFornecedor') paginatorFornecedor: MatPaginator;
  @ViewChild('tableFornecedor') tableFornecedor: MatTable<any>;
  dataSourceFornecedor = new MatTableDataSource<any>();

  @ViewChild('paginatorRequisicao') paginatorRequisicao: MatPaginator;
  @ViewChild('tableRequisicao') tableRequisicao: MatTable<any>;
  dataSourceRequisicao = new MatTableDataSource<any>();

  cotacaoBuilder = new CotacaoBuilder();

  columnsFornecedor = ['radio', 'idFornecedor', 'cpfCnpj', 'nomeRazao', 'email'];

  columnsRequisicao = ['radio', 'idRequisicao', 'nomeSolicitante', 'observacao'];

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

  selectFornecedor(fornecedor: any) {
    this.cotacaoBuilder.setFornecedor(fornecedor);
  }

  selectRequisicao(requisicao: any) {
    this.cotacaoBuilder.setRequisicao(requisicao);
  }

  createCotacao(): void {
    if (this.cotacaoBuilder.getFornecedor().idFornecedor == null) {
      this.msgService.showMessage("Selecione um Fornecedor para Continuar!!");
      return;
    }
    if (this.cotacaoBuilder.getRequisicao().idRequisicao == null) {
      this.msgService.showMessage("Selecione uma Requisição para Continuar!!");
      return;
    }
    if (!this.verificarRequisiçãoItens()) {
      this.msgService.showMessage("Preencha corretamente os Valores dos Itens!!");
      return;
    }

    let cotacao = this.cotacaoBuilder
      .setValorTotal(this.valorTotal)
      .builder();
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
    this.cotacaoBuilder.getItens().forEach(
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
    if (this.cotacaoBuilder.getRequisicao().idRequisicao) {
      let selectedItens = this.cotacaoBuilder.getRequisicao().itens
      this.cotacaoBuilder.setItens(selectedItens);
      return true;
    } else {
      return false;
    }
  }

  getValorTotal() {
    this.valorTotal = 0.0;
    this.cotacaoBuilder.getItens().forEach((item) => {
      this.valorTotal += item.subTotal == null ? 0 : item.subTotal;
    });
    return this.valorTotal;
  }

  inputPrecoUniEvent(event: Event, index: number) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.cotacaoBuilder.getItens()[index].subTotal = Number(inputValue) * this.cotacaoBuilder.getItens()[index].quantidade;
    this.getValorTotal();
  }

  inputSubTotalEvent(event: Event, index: number) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.cotacaoBuilder.getItens()[index].subTotal = Number(inputValue);
    this.cotacaoBuilder.getItens()[index].precoUni =
      this.cotacaoBuilder.getItens()[index].subTotal / this.cotacaoBuilder.getItens()[index].quantidade;
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
