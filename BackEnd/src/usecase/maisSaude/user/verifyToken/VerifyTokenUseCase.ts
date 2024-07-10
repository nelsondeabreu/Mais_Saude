import { prismaDB1 } from "../../../../database";
import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";



export class VerifyTokenUseCase {

  constructor(private userRepository: UserRepository){}

  async execute (token : string) {

    try {
      const tokenExist = await prismaDB1.tokens.findUnique({
        where: {token}
      })
  
      if(tokenExist){
        return true
      }
    }
    catch (erro) {
      return false
    }
    
  }

}