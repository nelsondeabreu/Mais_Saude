import { ListUsersUseCase } from "./listUsersUseCase";
import { Response, Request } from "express";



export class ListUsersController {

  constructor(private listUserUseCase: ListUsersUseCase){}

  async handle (request: Request,  response: Response) {
    const allUsers = await this.listUserUseCase.execute()
    return response.status(200).json(allUsers)
  }
}