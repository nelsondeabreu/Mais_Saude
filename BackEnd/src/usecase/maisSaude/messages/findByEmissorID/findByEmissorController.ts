import { FindMessageByEmissorIDUseCase } from "./findByEmissorIDUseCase";


export class FindMessageByEmissorIDController {

  constructor(private findByEmissorIDUseCase: FindMessageByEmissorIDUseCase){}

  async handle(emissorID:string){
    try{
      return this.findByEmissorIDUseCase.execute(emissorID)
    }catch(error){
      return console.error({message:"Erro ao procurar suas mensagens"});
      
    }
  }
}