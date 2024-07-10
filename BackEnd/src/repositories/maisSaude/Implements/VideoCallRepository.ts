import { prismaDB1 } from "../../../database";
import { Prisma, VideoCall } from "../../../generated/client1";
import { IVideoCallDTO, IVideoCallRepository } from "../IVideoCallRepositoyr";



export class VideoCallRepository implements IVideoCallRepository {
  
  async create(data: IVideoCallDTO): Promise<VideoCall> {
    return prismaDB1.videoCall.create({data})
  }

  async getCallByID(id: string): Promise<VideoCall | null> {
    return prismaDB1.videoCall.findUnique({
      where:{id}
    })
  }

}