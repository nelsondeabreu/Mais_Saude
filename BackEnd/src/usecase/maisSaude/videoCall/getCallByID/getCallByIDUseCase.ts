import { VideoCallRepository } from "../../../../repositories/maisSaude/Implements/VideoCallRepository";



export class GetCallByIDUseCase {

  constructor(
    private videoCallRepository:VideoCallRepository,
    ){}

  async execute(id:string){
    
    
    const get = await this.videoCallRepository.getCallByID(id)
    if(get)
      return get
    
  }
}