import { Router } from "express";
import { createContactoController } from "../../usecase/maisSaude/contacto/createContacto";
import { listContactsController } from "../../usecase/maisSaude/contacto/listContacts";
import { editContactoController } from "../../usecase/maisSaude/contacto/editContacto";


const contactSistemRoutes = Router()

contactSistemRoutes.post("/create", (request, response)=>{
  return createContactoController.handle(request, response);
})

contactSistemRoutes.get("/list", (request, response)=>{
  return listContactsController.handle(request, response);
})

contactSistemRoutes.put("/edit", (request, response)=>{
  return editContactoController.handle(request, response);
})

export {contactSistemRoutes}

