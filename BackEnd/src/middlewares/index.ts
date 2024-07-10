import { UserRepository } from "../repositories/maisSaude/Implements/UserRepository";
import { Authentication } from "./authMiddleware";




const userRepository = new UserRepository()
export const authentication = new Authentication(userRepository)