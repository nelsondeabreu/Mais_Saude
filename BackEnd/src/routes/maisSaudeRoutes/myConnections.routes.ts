import { Router } from "express";
import { createMyConnectionsController } from "../../usecase/maisSaude/myConnections/create";
import { listMyConnectionsController } from "../../usecase/maisSaude/myConnections/list";
import { deleteMyConnectionController } from "../../usecase/maisSaude/myConnections/delete";
import { findUserAndFriendController } from "../../usecase/maisSaude/myConnections/findUserAndFriend";


const connectionRoutes = Router()

connectionRoutes.post("/create", (request,response)=>{
  return createMyConnectionsController.handle(request,response)
})

connectionRoutes.post("/list", (request,response)=>{
  return listMyConnectionsController.handle(request,response)
})

connectionRoutes.post("/findUserAndFriend", (request,response)=>{
  return findUserAndFriendController.handle(request,response)
})

export {connectionRoutes}