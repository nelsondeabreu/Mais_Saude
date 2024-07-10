import { endereco } from "@prisma/client";
import { IEnderecoRepository } from "../IEnderecoRepository";
import { prismaDB2 } from "../../../database";




export class EnderecoRepository implements IEnderecoRepository{
  
  async create(adress: string): Promise<endereco> {
    
    try{

      const endereco = await prismaDB2.endereco.create({
        data:{adress}

      })
  
      return endereco

    }catch(erro){

      throw new Error("FALHA NO CADASTRO");

    }
  }
  
  async list(): Promise<endereco[]> {
   
    const allAdress = await prismaDB2.endereco.findMany();

    return allAdress;
  }

}