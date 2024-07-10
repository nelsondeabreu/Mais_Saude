import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { IuserDTO } from "../../../../repositories/maisSaude/IUserRepository";




export class CreateUserUseCase {


  constructor(private userRepository: UserRepository){
  }

  async execute ({name,email,senha,sexo,nascimento}:IuserDTO, hasPass:Promise<string>) {
    
    try {
            
      const newUser: IuserDTO = {
          name,
          email,
          senha:(await hasPass).toString(),
          sexo,
          nascimento: new Date(nascimento),
      }

      const userAlredyExists = await this.userRepository.findByEmail(email)

      if (userAlredyExists) {
        return console.error("email ja existe");
      }
      
      const createUser = await this.userRepository.createUser(newUser)
      return createUser
  }

  catch (error){
    return console.error({error,message:"errou aqui"});
        
  }
}
  

}