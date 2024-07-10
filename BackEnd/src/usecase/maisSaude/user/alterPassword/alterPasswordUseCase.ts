import { IUserRepository } from "../../../../repositories/maisSaude/IUserRepository";



export class AlterPassWordUseCase {

  constructor(private userRepository:IUserRepository){}

  async execute(id:string, newPassword:string,hasPass:Promise<string>) {
    newPassword = (await hasPass).toString()
    const alterPassword = await this.userRepository.alterPassword(id,newPassword)
    return alterPassword
  }
}