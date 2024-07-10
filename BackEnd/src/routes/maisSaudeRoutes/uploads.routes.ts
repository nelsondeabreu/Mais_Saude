import { Router, response } from "express";
import { findImageURLController } from "../../usecase/maisSaude/user/findImageURL";

const uploadRoutes = Router()

uploadRoutes.get("/:fileName/findImage",(request,response)=>{
  return findImageURLController.handle(request,response)
})

export {uploadRoutes}