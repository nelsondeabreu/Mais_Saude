import { FindBySocketIDUseCase } from "./findByIDSocketUseCase";


export class FindByIDSocketController {

  constructor(private findByIDUseCase: FindBySocketIDUseCase){}

  async handle(id:string){
    try{
      return await this.findByIDUseCase.execute(id)
    }catch(error){
      return console.error("Erro ao encontrar o usuario pelo ID", error);
      
    }
  }
}