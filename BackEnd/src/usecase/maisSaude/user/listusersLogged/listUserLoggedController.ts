import { ListUserLoggedUseCase } from "./listUserLoggedUseCase";
import { Request, Response } from "express";


export class ListUserLoggedController {

  constructor(private listUserLoggedUseCase: ListUserLoggedUseCase){}

  async handle (request: Request, response: Response) {
    return response.status(200).json(await this.listUserLoggedUseCase.execute())
  }
}