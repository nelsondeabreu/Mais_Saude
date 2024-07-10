import { prismaDB1 } from "../../../database";
import { Contactos } from "../../../generated/client1";
import { IContactoRepository, IContatoDTO } from "../IContactoRepository";



export class ContactoRepository implements IContactoRepository{
  
  async edit(id:string,data: IContatoDTO): Promise<Contactos> {
    const edit = await prismaDB1.contactos.update({
      where:{id},
      data
    })
    return edit
  }
  
  async create(data: IContatoDTO): Promise<Contactos> {
    const contacto = await prismaDB1.contactos.create({
      data
    })

    return contacto;
  }
  
  async list(): Promise<Contactos[]> {
    const allContactos = await prismaDB1.contactos.findMany({});
    return allContactos;
  }

}