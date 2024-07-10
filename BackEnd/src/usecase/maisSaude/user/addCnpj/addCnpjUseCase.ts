import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";




export class AddCnpjUseCase {

  constructor(private userRepository: UserRepository){}

  async execute (id:string, cnpj: string) {
    
      try{
        
        const CnpjAlredyExist = await this.userRepository.findByCnpj(cnpj)
        
        if(CnpjAlredyExist)
          return console.error("Cnpj já existe!");
        
        const add = await this.userRepository.addCnpj(cnpj,id);
        
        return add;
      }
      catch(error) {
        return {message:"Deu merda", error}
      }
  }
}