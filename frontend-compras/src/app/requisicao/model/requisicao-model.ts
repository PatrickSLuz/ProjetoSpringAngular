import { UserModel } from 'src/app/user/model/user-model';
import { RequisicaoItemModel } from './requisicao-item-model';

export class RequisicaoModel {
    idRequisicao: number
    solicitante: UserModel
    itens: RequisicaoItemModel[]
    data: Date
    status: StatusReq
    observacao: string
}

export enum StatusReq {
    CRIADO,
    RECUSADO,
    EM_ANDAMENTO,
    EM_COTACAO,
    FINALIZADO
}
