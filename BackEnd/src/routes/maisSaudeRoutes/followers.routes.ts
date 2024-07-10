import { Router } from "express";
import { findByEntidadeSeguidorIDWebController } from "../../usecase/maisSaude/followers/findByEntidadeSeguidorIDWeb";
import { findAllByEntidadeIDWebController } from "../../usecase/maisSaude/followers/findAllByEntidadeIDWeb";
import { countFollowersWebController } from "../../usecase/maisSaude/followers/countWeb";


const followRoutes = Router()

followRoutes.post("/findByEntidadeSeguidorID", (request,response)=>{
    return findByEntidadeSeguidorIDWebController.handle(request,response)
})

followRoutes.post("/findAllByEntidade", (request,response)=>{
    return findAllByEntidadeIDWebController.handle(request,response)
})

followRoutes.post("/count", (request,response)=>{
  return countFollowersWebController.handle(request,response)
})

export {followRoutes}