import { Router, response } from "express";
import { getMessagesByEmissorIDAndReceptorController } from "../../usecase/maisSaude/messages/getMessagesByEmissorAndReceptor";
import { findMessageByEmissorIDWebController } from "../../usecase/maisSaude/messages/findByEmissorIDWeb";
import { countMessagesController } from "../../usecase/maisSaude/messages/countMessages";
import { countMessagesWebController } from "../../usecase/maisSaude/messages/countMessagesWeb";
import multer from "multer";
import { importMessagesMidia } from "../../usecase/maisSaude/messages/importMessagesMidia";
import { createMessagesController } from "../../usecase/maisSaude/messages/create";
import { createMessagesWebController } from "../../usecase/maisSaude/messages/createWeb";

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,"uploads/")
  },
  filename: (req,file,cb)=>{
    cb(null,file.originalname)
  }
});

const uploud = multer({storage:storage})

const messagesRoutes = Router()

messagesRoutes.post("/create", uploud.single("file"), (request,response)=>{
  return createMessagesWebController.handle(request,response)
})

messagesRoutes.post("/list", (request,response)=>{
  return getMessagesByEmissorIDAndReceptorController.handle(request,response)
})

messagesRoutes.post("/myMessages", (request,response)=>{
  return findMessageByEmissorIDWebController.handle(request,response)
})

messagesRoutes.post("/count", (request,response)=>{
  return countMessagesWebController.handle(request,response)
})

messagesRoutes.get("/:fileName/findFile", (request,response)=>{
  return importMessagesMidia.handle(request,response)
})


export {messagesRoutes} 