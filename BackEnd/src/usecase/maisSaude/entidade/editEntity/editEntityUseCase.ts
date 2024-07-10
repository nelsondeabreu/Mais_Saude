import { IEditEntitySitemDTO, IEntidadeSistemRepository } from "../../../../repositories/maisSaude/IEntidadeRepository";



export class EditEntityUseCase {

  constructor (private entitySistemRepository: IEntidadeSistemRepository) {}

  async execute (id:string, data:IEditEntitySitemDTO) {
    try{
      const edit = await this.entitySistemRepository.editEntity(id,data)
      return edit
    }
    catch (error) {
      return console.error(error);
      
    }
  }
}