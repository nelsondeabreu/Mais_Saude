import { Router } from "express";
import { createEnderecoController } from "../../usecase/minsa/endereco/createEndereco";

const adressMinsaRoutes = Router()

adressMinsaRoutes.post("/create", (request, response)=> {
  return createEnderecoController.handle(request, response)
})


export {adressMinsaRoutes};