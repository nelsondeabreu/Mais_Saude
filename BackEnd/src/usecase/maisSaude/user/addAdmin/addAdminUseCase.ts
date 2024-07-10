import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";


export class AddAdminUseCase {

  constructor(private userRepository: UserRepository){}

  async execute (id:string, cnpj: string) {
    
      try{
        
        const user = await this.userRepository.findById(id)
        if(!user?.cnpj){
          const add = await this.userRepository.addCnpj(cnpj,id);
          return add;
        }else{
          return false
        }
        }
      catch(error) {
        return console.error({message:"Deu merda", error})
      }
  }
}