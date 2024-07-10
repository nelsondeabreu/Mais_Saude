import { Request,Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { UserRepository } from "../repositories/maisSaude/Implements/UserRepository";

type JwtPayLoad = {
    id: string
}

export class Authentication {
    
    constructor(private userRepository: UserRepository){}

    async authMiddleware (request:Request,response:Response, next: NextFunction) {
            
            const {authorization} = request.headers;
    
            if(!authorization){
                return response.status(404).json("Não autorizado")            
            }
    
            const token = authorization.split(" ")[1]
            
            const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayLoad
            
            const userLog = await this.userRepository.findById(id.toString());
            
            if (!userLog) {
                return response.status(404).json("NÃO AUTORIZADO")  
            }

            const loggerdUser = {
                
                "id":userLog.id,
                "name":userLog.name,
                "email":userLog.email,
                "sexo":userLog.name,
                "nascimento":userLog.nascimento
            }

            request.user = loggerdUser

            next()
    }
}