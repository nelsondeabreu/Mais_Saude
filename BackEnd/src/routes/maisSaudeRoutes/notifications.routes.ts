import { Router } from "express";
import { findByUserIDController } from "../../usecase/maisSaude/notificacoes/fincByUserID";
import { findByUserAndReceiverIDWebController } from "../../usecase/maisSaude/notificacoes/findByUserReceiverIDWeb";
import { countNotificationWebController } from "../../usecase/maisSaude/notificacoes/countNotificationWeb";


const notificationsRoutes = Router()

notificationsRoutes.post("/list", (request,response)=>{
  return findByUserIDController.hanlde(request,response)
})

notificationsRoutes.post("/userAndFriend", (request,response)=>{
  return findByUserAndReceiverIDWebController.hanlde(request,response)
})

notificationsRoutes.post("/count", (request,response)=>{
  return countNotificationWebController.handle(request,response)
})

export {notificationsRoutes}