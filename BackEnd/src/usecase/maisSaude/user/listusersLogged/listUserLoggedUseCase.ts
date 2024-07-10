import { UserLogged } from "../../../../generated/client1";
import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";



export class ListUserLoggedUseCase {

  constructor(private userRepository: UserRepository){}

  async execute (): Promise<UserLogged[] | null> {
    const allUsers = await this.userRepository.listUserLogged()
    console.log("aqui deu", allUsers);
    
    return allUsers;
  }
}