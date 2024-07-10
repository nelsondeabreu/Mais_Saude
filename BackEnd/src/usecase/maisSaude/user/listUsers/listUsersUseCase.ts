import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";






export class ListUsersUseCase {

  constructor(private userRepository: UserRepository){}

  async execute () {
    const allUsers = await this.userRepository.listUsers();
    return allUsers;
  }
}