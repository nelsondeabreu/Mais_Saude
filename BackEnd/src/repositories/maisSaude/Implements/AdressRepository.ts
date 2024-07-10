import { prismaDB1 } from "../../../database";
import { Endereco } from "../../../generated/client1";
import { IEnderecoRepository } from "../IEnderecoRepository";



export class AdressRepository implements IEnderecoRepository{
  
  async edit(id: string, data: string): Promise<Endereco> {
    const edit =  await prismaDB1.endereco.update({
      where:{id},
      data
    })

    return edit
  }

  async create(adress: string): Promise<Endereco> {
    const endereco = await prismaDB1.endereco.create({
      data:{adress}
    })

    return endereco;
  }
  async list(): Promise<Endereco[]> {
    const allAdress = await prismaDB1.endereco.findMany();
    return allAdress;
  }

  
}