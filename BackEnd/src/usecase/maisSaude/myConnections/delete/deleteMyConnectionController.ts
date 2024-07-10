

import { DeleteMyConnectionUseCase } from "./deleteMyConnectionUseCase";



export class DeleteMyConnectionController {

  constructor(private deleteMyConnectionUseCase: DeleteMyConnectionUseCase){}

  async handle(id:string){

    try{
      const deleted = await this.deleteMyConnectionUseCase.execute(id);
      return ({deleted,message:"Deletado com sucesso"})
    }catch(error){
      return console.error({message:"Erro ao deletar", error})
    }
  }
}