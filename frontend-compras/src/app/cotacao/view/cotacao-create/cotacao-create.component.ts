import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/fornecedor/service/fornecedor.service';
import { FornecedorModel } from 'src/app/fornecedor/model/fornecedor-model';
import { RequisicaoModel } from 'src/app/requisicao/model/requisicao-model';
import { RequisicaoService } from 'src/app/requisicao/service/requisicao.service';
import { RequisicaoItemModel } from 'src/app/requisicao/model/requisicao-item-model';

@Component({
  selector: 'app-cotacao-create',
  templateUrl: './cotacao-create.component.html',
  styleUrls: ['./cotacao-create.component.css']
})
export class CotacaoCreateComponent implements OnInit {

  fornecedores: FornecedorModel[];
  selectedFornecedor = new FornecedorModel();
  columnsFornecedor = ['radio', 'idFornecedor', 'cpfCnpj', 'nomeRazao', 'email'];

  requisicoes: RequisicaoModel[];
  selectedRequisicao = new RequisicaoModel();
  columnsRequisicao = ['radio', 'idRequisicao', 'nomeSolicitante', 'observacao'];

  itens: RequisicaoItemModel[];
  valorTotal: number;
  columnsItens: string[] = ['descricaoProduto', 'quantidade', 'precoUni', 'subTotal'];

  constructor(private fornecedorService: FornecedorService,
    private requisicaoService: RequisicaoService) { }

  ngOnInit(): void {
    this.fornecedorService.getAllFornecedores().subscribe(
      (fornecedores) => {
        this.fornecedores = fornecedores;
      },
      (error) => {
        console.log("Erro get all Fornecedores:\n" + error);
      }
    );
    this.requisicaoService.getAllRequisicoes().subscribe(
      (requisicoes) => {
        this.requisicoes = requisicoes;
      },
      (error) => {
        console.log("Erro get all Requisicoes:\n" + error);
      }
    );
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

}
