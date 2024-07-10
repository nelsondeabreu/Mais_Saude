import { TempoNotificacaoRepository } from "../../../../repositories/maisSaude/Implements/TempoNotificacaoRepository";
import { CreateTimeNotificationController } from "./createTempoNotificacaoController";
import { CreateTimeNotificationUseCase } from "./createTempoNotificacaoUseCase";





const tempoNotificacao = new TempoNotificacaoRepository()
const createTimeNotificationUseCase =  new CreateTimeNotificationUseCase(tempoNotificacao)
export const createTimeNotificationController =  new CreateTimeNotificationController(createTimeNotificationUseCase)