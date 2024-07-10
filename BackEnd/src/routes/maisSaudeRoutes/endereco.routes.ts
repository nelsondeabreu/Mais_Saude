import { Router } from "express";
import { createAdressController } from "../../usecase/maisSaude/endereco/createAdress";
import { editAdressController } from "../../usecase/maisSaude/endereco/editAdress";
import { listAdressController } from "../../usecase/maisSaude/endereco/listAdress";

const adressSistemRoutes = Router()

adressSistemRoutes.post("/create", (request, response)=> {
  return createAdressController.handle(request, response)
})

adressSistemRoutes.put("/editAdress", (request, response)=> {
  return editAdressController.handle(request, response)
})

adressSistemRoutes.get("/list", (request, response)=> {
  return listAdressController.handle(request, response)
})


export {adressSistemRoutes};