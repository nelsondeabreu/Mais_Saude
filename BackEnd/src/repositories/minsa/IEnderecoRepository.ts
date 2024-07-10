import { endereco } from "../../generated/client2";



export interface IEnderecoRepository {
  create (adress: string): Promise<endereco> 
  list ():  Promise<endereco[]>
}