import { IUserRepository } from "../../../../repositories/maisSaude/IUserRepository";

export class FindAllByCnpjUseCase{

  constructor(private userRepository:IUserRepository){}
  
  async execute(cnpj:string){
    const user = await this.userRepository.findByCnpj(cnpj);
    return user
  }
}