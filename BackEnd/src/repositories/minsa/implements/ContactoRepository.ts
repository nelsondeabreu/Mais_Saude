import { prismaDB2 } from "../../../database";
import { contacto } from "../../../generated/client2";
import { IContactoRepository, IContatoDTO } from "../IContactoRepository";



export class ContactoRepository implements IContactoRepository{
  
  async create(data: IContatoDTO): Promise<contacto> {
    console.log(data);
    
    
    const newContact = await prismaDB2.contacto.create({
        data    
      })

    return newContact;

    

  }

  async list(): Promise<contacto[]> {
    
    const allContacto =  await prismaDB2.contacto.findMany()
    return allContacto
    
  }

}