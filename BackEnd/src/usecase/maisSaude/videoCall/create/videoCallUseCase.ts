import { IVideoCallDTO, IVideoCallRepository } from "../../../../repositories/maisSaude/IVideoCallRepositoyr";



export class CreateVideoCallUseCase {

  constructor(private videoCallRepository:IVideoCallRepository){}

  async execute(data:IVideoCallDTO){
    return this.videoCallRepository.create(data)
  }
}