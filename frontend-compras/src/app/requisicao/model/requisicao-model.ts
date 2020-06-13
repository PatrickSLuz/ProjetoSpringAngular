import { UserModel } from 'src/app/user/model/user-model';
import { RequisicaoItemModel } from './requisicao-item-model';

export class RequisicaoModel {
    idRequisicao: number
    solicitante: UserModel
    itens: RequisicaoItemModel[]
    data: Date
    status: StatusReq
    observacao: string
    cotacaoRealizada: boolean
}

export enum StatusReq {
    CRIADO = 'CRIADO',
    RECUSADO = 'RECUSADO',
    CANCELADO = 'CANCELADO',
    EM_COTACAO = 'EM_COTACAO',
    FINALIZADO = 'FINALIZADO'
}
