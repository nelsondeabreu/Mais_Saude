import { IUserRepository } from "../../../../repositories/maisSaude/IUserRepository";

export class FindByNameUseCase{

  constructor(private userRepository:IUserRepository){}
  
  async execute(name:string){
    const user = await this.userRepository.findByName(name);
    return user
  }
}