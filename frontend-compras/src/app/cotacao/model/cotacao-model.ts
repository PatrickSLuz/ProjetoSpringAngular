import { FornecedorModel } from 'src/app/fornecedor/model/fornecedor-model';
import { RequisicaoModel } from 'src/app/requisicao/model/requisicao-model';

export class CotacaoModel {
    fornecedor: FornecedorModel
    requisicao: RequisicaoModel
    vlrTotal: number
}
