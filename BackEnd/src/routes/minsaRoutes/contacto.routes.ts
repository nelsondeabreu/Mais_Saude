import { Router } from "express";
import { createContactoController } from "../../usecase/minsa/contacto/createContacto";


const contactMinsaRoutes = Router()

contactMinsaRoutes.post("/create", (request, response)=>{
  return createContactoController.handle(request, response);
})

export {contactMinsaRoutes}

