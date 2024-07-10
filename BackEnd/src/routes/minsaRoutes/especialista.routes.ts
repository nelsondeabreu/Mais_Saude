import { Router } from "express";
import { createEspecialistaController } from "../../usecase/minsa/especialista/createEspecialista";
import { listAllEspecialistasController } from "../../usecase/minsa/especialista/listAllEspecilistas";
import { findByCrmMinsaController } from "../../usecase/minsa/especialista/findByCrm";


const especialistaMinsaRoutes = Router();


especialistaMinsaRoutes.post("/create", (request, response)=>{
  return createEspecialistaController.handle(request, response)
})

especialistaMinsaRoutes.post("/findByCrm", (request, response)=>{
  return findByCrmMinsaController.handle(request, response)
})

especialistaMinsaRoutes.get("/list", (request, response)=>{
  return listAllEspecialistasController.handle(request, response)
})

export {especialistaMinsaRoutes}