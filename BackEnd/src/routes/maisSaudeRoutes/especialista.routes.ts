import { Router } from "express";
import { createEspecialistaController } from "../../usecase/maisSaude/especialista/createEspecialista";
import { listAllEspecialistasController } from "../../usecase/maisSaude/especialista/listAllEspecilistas";
import { findByCrmController } from "../../usecase/maisSaude/especialista/findByCrm";
import { addValueConsultController } from "../../usecase/maisSaude/especialista/addValueConsult";
import { findByEspecialityController } from "../../usecase/maisSaude/especialista/findByEspeciality";
import { findByNameController } from "../../usecase/maisSaude/especialista/findByName";
import { despedirWebController } from "../../usecase/maisSaude/especialista/despedirWeb";


const especialistaSistemaRoutes = Router();


especialistaSistemaRoutes.post("/create", (request, response)=>{
  return createEspecialistaController.handle(request,response)
})

especialistaSistemaRoutes.get("/list", (request, response)=>{
  return listAllEspecialistasController.handle(request,response)
})

especialistaSistemaRoutes.post("/findByCrm", (request, response)=>{
  return findByCrmController.handle(request,response)
})

especialistaSistemaRoutes.post("/findByEspeciality", (request, response)=>{
  return findByEspecialityController.handle(request,response)
})

especialistaSistemaRoutes.post("/findByName", (request, response)=>{
  return findByNameController.handle(request,response)
})

especialistaSistemaRoutes.put("/addValue", (request, response)=>{
  return addValueConsultController.handle(request,response)
})

especialistaSistemaRoutes.post("/despedir", (request, response)=>{
  return despedirWebController.handle(request,response)
})



export {especialistaSistemaRoutes}