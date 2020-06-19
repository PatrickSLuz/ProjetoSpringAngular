import { CotacaoModel } from '../model/cotacao-model';
import { FornecedorModel } from 'src/app/fornecedor/model/fornecedor-model';
import { RequisicaoModel } from 'src/app/requisicao/model/requisicao-model';
import { RequisicaoItemModel } from 'src/app/requisicao/model/requisicao-item-model';

export class CotacaoBuilder {
    cotacao: CotacaoModel

    static fornecedor: FornecedorModel;

    constructor() {
        this.cotacao = new CotacaoModel();
    }

    builder(): CotacaoModel {
        return this.cotacao;
    }

    getFornecedor(): FornecedorModel {
        return this.cotacao.fornecedor ?? new FornecedorModel();
    }

    setFornecedor(fornecedor: FornecedorModel): CotacaoBuilder {
        this.cotacao.fornecedor = fornecedor;
        return this;
    }

    getRequisicao(): RequisicaoModel {
        return this.cotacao.requisicao ?? new RequisicaoModel();
    }

    setRequisicao(requisicao: RequisicaoModel): CotacaoBuilder {
        this.cotacao.requisicao = requisicao;
        return this;
    }

    getItens(): RequisicaoItemModel[] {
        return this.cotacao.requisicao.itens ?? [];
    }

    getItem(index: number): RequisicaoItemModel {
        return this.cotacao.requisicao.itens[index] ?? new RequisicaoItemModel();
    }

    setItens(itens: RequisicaoItemModel[]): CotacaoBuilder {
        this.cotacao.requisicao.itens = itens;
        return this;
    }

    getValorTotal(): number {
        return this.cotacao.vlrTotal ?? 0;
    }

    setValorTotal(valorTotal: number): CotacaoBuilder {
        this.cotacao.vlrTotal = valorTotal;
        return this;
    }
}