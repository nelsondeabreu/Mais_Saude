import { Endereco } from "../../generated/client1"



export interface IEnderecoRepository {
  create (adress: string): Promise<Endereco> 
  list ():  Promise<Endereco[]>
  edit(id:string,adress:string): Promise<Endereco>
}