import { Router, response } from "express";
import { request } from "http";
import { createEntitiController } from "../../usecase/minsa/entidade/createEntidade";
import { findByCnpjController } from "../../usecase/minsa/findeByCnpj";


const entityMinsaRoutes = Router();

entityMinsaRoutes.post("/create", (request, response)=>{
  return createEntitiController.handle(request,response)
})

entityMinsaRoutes.post("/findbycnpj", (request, response)=>{
  return findByCnpjController.handle(request, response)
})


export {entityMinsaRoutes}
