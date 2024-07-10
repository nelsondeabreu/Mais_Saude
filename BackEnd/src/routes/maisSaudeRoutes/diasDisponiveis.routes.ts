import { Router } from "express";
import { addDayController } from "../../usecase/maisSaude/diasDisponiveis/addDay";
import { findByDayController } from "../../usecase/maisSaude/diasDisponiveis/findByDay";


const dayRoutes = Router()


dayRoutes.post("/addDay",(request,response)=>{
  return addDayController.handle(request,response)
})

dayRoutes.post("/findByDay",(request,response)=>{
  return findByDayController.handle(request,response)
})

export {dayRoutes}