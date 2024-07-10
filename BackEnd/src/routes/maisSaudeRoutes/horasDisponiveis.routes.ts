import { Router } from "express";
import { addHourController } from "../../usecase/maisSaude/horasDisponiveis/addHour";
import { listHoursController } from "../../usecase/maisSaude/horasDisponiveis/listHours";
import { getHorasDisponiveisController } from "../../usecase/maisSaude/horasDisponiveis/getHorasDisponiveis";
import { deleteHourController } from "../../usecase/maisSaude/horasDisponiveis/deleteHour";



const hourRoutes = Router()


hourRoutes.post("/addHour", (request,response)=>{
  return addHourController.handle(request,response)
})

hourRoutes.get("/listHours", (request,response)=>{
  return listHoursController.handle(request,response)
})

hourRoutes.post("/getHour", (request,response)=>{
  return getHorasDisponiveisController.handle(request,response)
})

hourRoutes.post("/deleteHour", (request,response)=>{
  return deleteHourController.handle(request,response)
})

export {hourRoutes}