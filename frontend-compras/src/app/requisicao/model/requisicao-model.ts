import { UserModel } from 'src/app/user/model/user-model';
import { RequisicaoItemModel } from './requisicao-item-model';
import { StatusReq } from './status-requisicao';

export class RequisicaoModel {
    idRequisicao: number
    solicitante: UserModel
    itens: RequisicaoItemModel[]
    data: Date
    status: StatusReq
    observacao: string
    cotacaoRealizada: boolean
}
