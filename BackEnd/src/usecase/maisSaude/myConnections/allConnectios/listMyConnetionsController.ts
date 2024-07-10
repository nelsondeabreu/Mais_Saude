import { ListMyConnectionUseCase } from "./listMyConnectionsUseCase";


export class ListMyConnectionController{

  constructor(private listMyConnectionsUseCase: ListMyConnectionUseCase){}

  async handle(userID:string){

    try{
      const getMyConnections = await this.listMyConnectionsUseCase.execute(userID)
      return getMyConnections
    }catch(error){
      return console.error({message:"Erro ao listar conexoes", error})
    }
  }
} 