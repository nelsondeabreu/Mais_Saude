import { prismaDB1 } from "../../../database";
import { TempoNotificacao } from "../../../generated/client1";
import { ITempoNotificacaoDTO, ITempoNotificacaoRepository } from "../ITempoNotificacaoRepository";




export class TempoNotificacaoRepository implements ITempoNotificacaoRepository{
  
  create(data: ITempoNotificacaoDTO): Promise<TempoNotificacao> {
    return prismaDB1.tempoNotificacao.create({
      data
    })
  }

}