import { Router } from "express";
import { entidadeController } from "../../usecase/maisSaude/entidade/createEntities";
import { listController } from "../../usecase/maisSaude/entidade/list";
import { findByCnpjController } from "../../usecase/maisSaude/entidade/findByCnpj";
import { findByIDController } from "../../usecase/maisSaude/entidade/findByID";
import { deleteAllController } from "../../usecase/maisSaude/entidade/deleteAll";
import { editEntityController } from "../../usecase/maisSaude/entidade/editEntity";
import { addImageController } from "../../usecase/maisSaude/entidade/addImage";
import multer from "multer";
import { findFotoImageController } from "../../usecase/maisSaude/entidade/findFotoImage";

const entityRoutes = Router()

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null, "uploads/");
  },
  filename: (req,file,cb)=>{
    cb(null,file.originalname);
  }
})

const upload = multer({storage:storage})

entityRoutes.post("/create", (request, response)=>{
  return entidadeController.handle(request,response);
})

entityRoutes.get("/listAll", (request, response)=>{
  return listController.handle(request, response);
})

entityRoutes.post("/findbycnpj", (request, response)=>{
  return findByCnpjController.handle(request, response)
})

entityRoutes.post("/findbyID", (request, response)=>{
  return findByIDController.handle(request, response)
})

entityRoutes.delete("/delete", (request, response)=>{
  return deleteAllController.handle(request, response)
})

entityRoutes.put("/editEntity", (request, response)=>{
  return editEntityController.handle(request, response)
})

entityRoutes.put("/:id/addImage", upload.single("foto"), (request, response)=>{
  return addImageController.handle(request, response)
})

entityRoutes.get("/:foto/findFoto", (request, response)=>{
  return findFotoImageController.handle(request, response)
})

export {entityRoutes}
