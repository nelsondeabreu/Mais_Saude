import { ITempoNotificacaoDTO, ITempoNotificacaoRepository } from "../../../../repositories/maisSaude/ITempoNotificacaoRepository";



export class CreateTimeNotificationUseCase{

  constructor(private tempoNotificacao:ITempoNotificacaoRepository){}

  execute(data:ITempoNotificacaoDTO){
    return this.tempoNotificacao.create(data)
  }

}