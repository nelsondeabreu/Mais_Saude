import { IUserEditDTO } from "../../../../repositories/maisSaude/IUserRepository";
import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";



export class EditProfileUseCase {

  constructor(private userRepository: UserRepository){}

  async execute(data:IUserEditDTO) {
    try{
      const userEdit = await this.userRepository.edit(data)
      return userEdit
      
    }catch(error){
      console.error(error);  
    }
  }
}