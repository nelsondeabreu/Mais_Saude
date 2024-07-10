import { IUserRepository } from "../../../../repositories/maisSaude/IUserRepository";

export class FindBySocketIDUseCase{

  constructor(private userRepository:IUserRepository){}
  
  async execute(id:string){
    const user = await this.userRepository.findById(id);
    return user
  }
}