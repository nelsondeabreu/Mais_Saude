import { prismaDB1 } from "../../../database";
import { Partilha } from "../../../generated/client1";
import { IShareDTO, IShareRepositry } from "../IShareRepository";



export class ShareRepository implements IShareRepositry{
  
  findByUserID(userID: string): Promise<Partilha[]> {
    return prismaDB1.partilha.findMany({
      where:{userID},
      include:{post:true}
    })
  }
  
  list(): Promise<Partilha[]> {
    return prismaDB1.partilha.findMany({
      include:{post:true,user:true}
    })
  }
  
  create(data: IShareDTO): Promise<Partilha> {
    return prismaDB1.partilha.create({
      data
    })
  }

  delete(id: string): Promise<Partilha> {
    return prismaDB1.partilha.delete({
      where:{id}
    })
  }

}