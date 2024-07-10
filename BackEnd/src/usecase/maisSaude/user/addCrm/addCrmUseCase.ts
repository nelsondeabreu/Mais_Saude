import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";



export class AddCrmUseCase {
  
  constructor(private userRepository: UserRepository){}

  async execute(id:string, crm:string){

    const CrmAlredyExist = await this.userRepository.findByCrm(crm)
    
    console.log(CrmAlredyExist);
    
    if(CrmAlredyExist){
      return console.error("Crm já existe!");
    }
  
    const updateCrm = await this.userRepository.addCrm(id,crm);

    return updateCrm;
  }
}