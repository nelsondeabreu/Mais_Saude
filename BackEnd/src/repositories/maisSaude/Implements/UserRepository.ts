import { IUserEditDTO, IUserRepository, IuserDTO} from "../IUserRepository";
import { prismaDB1 } from "../../../database";
import { $Enums, Usuarios } from "../../../generated/client1";


export class UserRepository implements IUserRepository {
  
  findAllByCnpj(cnpj: string): Promise<Usuarios[]> {
      return prismaDB1.usuarios.findMany({
        where:{cnpj}
      })
  }
  
   findByName(name: string): Promise<Usuarios[]> {
    return prismaDB1.usuarios.findMany({
      where:{
        name:{
          contains:name
        }
      }
    })
  }
  
   findByIdSocket(id: string): Promise<Usuarios | null> {
    return prismaDB1.usuarios.findUnique({
      where:{id}
    })

  }
  
   addSocketID(id:string,socketID: string): Promise<Usuarios> {
    return prismaDB1.usuarios.update({
      where:{id},
      data:{socketID}
    })

  }
  
   alterPassword(id: string, newPassword: string): Promise<Usuarios> {
    return  prismaDB1.usuarios.update({
      where:{id},
      data:{senha:newPassword},
      include:{contactos:true}
    })
  }
  
   addImage(foto: string, id: string): Promise<Usuarios> {
    return  prismaDB1.usuarios.update({
      where:{id},
      data:{foto}
    })
  }
  
   edit(data: IUserEditDTO): Promise<Usuarios> {
    
    return prismaDB1.usuarios.update({
      where:{id:data.id},
      data,
      include:{contactos:true}
    })

  }
   
  createUser(user: IuserDTO): Promise<Usuarios> {
      
      return  prismaDB1.usuarios.create({
        data:user
      });
    }
  
   findByEmail(email: string): Promise< Usuarios | null> {
    
      return prismaDB1.usuarios.findUnique({
        where: {
          email
        },
        include:{contactos:true}
      })

  }

  async listUsers(): Promise<Usuarios[]> {
    return prismaDB1.usuarios.findMany({
      include:{contactos:true}
    })
  }

  async findById(id: string): Promise<Usuarios | null> {
    return prismaDB1.usuarios.findUnique({
      where:{id},
      include:{contactos:true,}
    })

  }

  async findByCnpj(cnpj: string): Promise<Usuarios | null> {
    return prismaDB1.usuarios.findFirst({
      where:{cnpj}
    })

  }

  async findByCrm(crm: string): Promise<Usuarios | null> {
    
    return prismaDB1.usuarios.findUnique({
      where:{crm}
    })

  }
  
  async addCrm(crm: string, id: string): Promise<Usuarios | null> {

    return prismaDB1.usuarios.update({
      where:{id},
      data:{crm}
    })

  }

   addCnpj(cnpj: string,id:string): Promise<Usuarios | null> {
    return  prismaDB1.usuarios.update({
      where:{id},
      data:{cnpj}
    })

  }

}