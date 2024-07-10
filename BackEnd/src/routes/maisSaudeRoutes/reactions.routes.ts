import { Router } from "express";
import { countControllerWeb } from "../../usecase/maisSaude/reactions/countWeb";
import { findByPostIdAndUserIDController } from "../../usecase/maisSaude/reactions/findByPostIdAndUserID";

const reactionsRoutes = Router()


reactionsRoutes.post("/count", (request,response)=>{
  return countControllerWeb.handle(request,response)
})

reactionsRoutes.post("/findPostIDAndUserID", (request,response)=>{
  return findByPostIdAndUserIDController.handle(request,response)
})

export {reactionsRoutes}