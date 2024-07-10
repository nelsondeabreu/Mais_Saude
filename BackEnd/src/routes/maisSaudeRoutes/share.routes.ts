import { Router } from "express";
import { createPartilhaController } from "../../usecase/maisSaude/partilha/create";
import { deleteShareController } from "../../usecase/maisSaude/partilha/delete";
import { listShareController } from "../../usecase/maisSaude/partilha/list";
import { findByUserIDController } from "../../usecase/maisSaude/post/findByUserID";



const shareRoutes = Router()

shareRoutes.post("/create", (request,response)=>{
  return createPartilhaController.handle(request,response)
})

shareRoutes.post("/delete", (request,response)=>{
  return deleteShareController.handle(request,response)
})

shareRoutes.get("/list", (request,response)=>{
  return listShareController.handle(request,response)
})

shareRoutes.post("/fndByUserID", (request,response)=>{
  return findByUserIDController.handle(request,response)
})

export {shareRoutes}

