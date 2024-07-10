import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";



export class AddSocketIDUseCase {

  constructor(private userRepository: UserRepository){}
  
  async execute(id:string,socketID:string){
    
    const user =  await this.userRepository.findById(id)

    if(!user?.socketID){
      return await this.userRepository.addSocketID(id,socketID)
    }else{
      console.error("Já tem um socketID")
    }

  }
}