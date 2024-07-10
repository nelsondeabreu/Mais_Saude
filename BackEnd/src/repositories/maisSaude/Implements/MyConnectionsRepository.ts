import { prismaDB1 } from "../../../database";
import { MinhasConexoes } from "../../../generated/client1";
import { IMyConnectionsDTO, IMyConnectionsRepository } from "../IMyConnectionsRepository";


export class MyConnectionsRepository implements IMyConnectionsRepository{
  
  findUserAndFriend(data: IMyConnectionsDTO): Promise<MinhasConexoes | null> {
    return prismaDB1.minhasConexoes.findFirst({
      where:{
        OR:[
          {userID:data.userID, friendID:data.friendID},
          {userID:data.friendID, friendID:data.userID}
        ]
      }
    })
  }
  
  async create(data: IMyConnectionsDTO): Promise<MinhasConexoes> {
    return prismaDB1.minhasConexoes.create({
      data
    })
  }

  async list(userID:string): Promise<MinhasConexoes[]> {
    return prismaDB1.minhasConexoes.findMany({
      where:{
        OR:[
          { userID },
          { friendID: userID},
        ]
      },
      include:{friend:true,user:true}
    })
  }

  async delete(id: string): Promise<MinhasConexoes> {
    return prismaDB1.minhasConexoes.delete({
      where:{id}
    })
  }

}