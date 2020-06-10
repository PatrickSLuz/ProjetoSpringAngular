import { EnderecoModel } from './endereco-model'

export class FornecedorModel {
    idFornecedor: number
    cpfCnpj: string
    nomeRazao: string
    rgInscricao: string
    email: string
    telefone: string
    endereco: EnderecoModel
}
