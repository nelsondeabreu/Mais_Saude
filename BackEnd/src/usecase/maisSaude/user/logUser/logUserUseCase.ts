import { Usuarios } from "../../../../generated/client1";
import { Iuser, IuserDTO } from "../../../../repositories/maisSaude/IUserRepository";
import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";



export class LogUserUseCase {

  constructor(private userRepository: UserRepository){}

  async execute ({email,senha}:Iuser) {
    
    const user = await this.userRepository.findByEmail(email)
    
    console.log("Usuario encontrado", user);
    console.log("passou aqui");
    
    const UserID = user?.id
    if (!user) {
      console.error("Email ou senha invalidos!!")
    }

    const verifyPass = await bcrypt.compare(senha, user?.senha || "")

    if (!verifyPass) {
      return "Erro"
    }else{
      const token = jwt.sign({id:UserID}, process.env.JWT_PASS ?? "", {expiresIn: "1d"})
      const {senha:_, ...userInfo} = user as Usuarios
      return {
        userInfo,
        token,
      };
    }

    

  }
}