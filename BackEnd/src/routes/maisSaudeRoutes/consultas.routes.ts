import { Router } from "express";
import { createController } from "../../usecase/maisSaude/consultas/create";
import { findByEspecialistaController } from "../../usecase/maisSaude/consultas/findByEspecialistaID";
import { findByPacienteController } from "../../usecase/maisSaude/consultas/findByPacienteID";
import { findByEspecialistaOnlyController } from "../../usecase/maisSaude/consultas/findByEspecialistaIDOnly";
import { updateStatusController } from "../../usecase/maisSaude/consultas/updateStatus copy";
import { findByConsultaIDWebController } from "../../usecase/maisSaude/consultas/findByIDWeb";
import { findByPacienteStatusController } from "../../usecase/maisSaude/consultas/findByPacienteIDStatus";
import { findByDayAndHourController } from "../../usecase/maisSaude/consultas/findByDayAndHour";


const consultaRoutes = Router()


consultaRoutes.post("/create", (request,response)=>{
  return createController.handle(request,response)
})

consultaRoutes.post("/findByEspecialistaID", (request,response)=>{
  return findByEspecialistaController.handle(request,response)
})

consultaRoutes.post("/findByEspecialistaIDOnly", (request,response)=>{
  return findByEspecialistaOnlyController.handle(request,response)
})

consultaRoutes.post("/findByPacienteID", (request,response)=>{
  return findByPacienteController.handle(request,response)
})

consultaRoutes.post("/findByPacienteIDStatus", (request,response)=>{
  return findByPacienteStatusController.handle(request,response)
})

consultaRoutes.post("/findByConsultaID", (request,response)=>{
  return findByConsultaIDWebController.handle(request,response)
})

consultaRoutes.post("/updateStatus", (request,response)=>{
  return updateStatusController.handle(request,response)
})

consultaRoutes.post("/findByDayAndHour", (request,response)=>{
  return findByDayAndHourController.handle(request,response)
})

export {consultaRoutes}