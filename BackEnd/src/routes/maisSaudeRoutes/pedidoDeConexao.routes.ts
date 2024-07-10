import { Router } from "express";
import { createPedidoDeConexaoController } from "../../usecase/maisSaude/pedidoDeConexao/create";
import { acceptPedidoDeConexaoController } from "../../usecase/maisSaude/pedidoDeConexao/accepted";
import { listPedidoDeConexaoController } from "../../usecase/maisSaude/pedidoDeConexao/list";
import { findPedidoWebController } from "../../usecase/maisSaude/pedidoDeConexao/findPedidoWeb";
import { listPedidoDeConexaoWebController } from "../../usecase/maisSaude/pedidoDeConexao/listWeb";


const pedidoRoutes = Router();

pedidoRoutes.post("/findPedido", (request,response)=>{
  return findPedidoWebController.handle(request,response)
})

pedidoRoutes.post("/list", (request,response)=>{
  return listPedidoDeConexaoWebController.handle(request,response)
})

export {pedidoRoutes}