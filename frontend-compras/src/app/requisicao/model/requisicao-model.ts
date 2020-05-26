import { UserModel } from 'src/app/user/model/user-model';

export interface RequisicaoModel {
    id: number
    solicitante: UserModel
    status: string
    observacao: string
}
