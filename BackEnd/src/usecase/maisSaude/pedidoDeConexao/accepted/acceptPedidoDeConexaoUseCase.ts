import { IMyConnectionsDTO, IMyConnectionsRepository } from "../../../../repositories/maisSaude/IMyConnectionsRepository";
import { IPedidoDeConexaoRepository } from "../../../../repositories/maisSaude/IPedidoDeConexao";
import { PedidoDeConexaoRepository } from "../../../../repositories/maisSaude/Implements/PedidoDeConexaoRepository";


export interface IAcceptDTO{
  id ?:string;
  userID:string;
  friendID:string;
}

export class AcceptPedidoDeConexaoUseCase {

  constructor(
    private minhaConexaoRepository:IMyConnectionsRepository
  ){}

  async execute(data:IAcceptDTO){
    
    const createConnection = this.minhaConexaoRepository.create(data)

    return {createConnection}
  }

}