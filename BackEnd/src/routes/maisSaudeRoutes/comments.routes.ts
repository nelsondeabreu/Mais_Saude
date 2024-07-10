import { Router } from "express";
import { findByPostIdWebController } from "../../usecase/maisSaude/comments/findByPostIdWeb";
import { countWebCommentsController } from "../../usecase/maisSaude/comments/countWeb";

const commentsRoutes=Router()

commentsRoutes.post("/findByPostID", (request,response)=>{
  return findByPostIdWebController.handle(request,response)
})

commentsRoutes.post("/count", (request,response)=>{
  return countWebCommentsController.handle(request,response)
})

export {commentsRoutes}