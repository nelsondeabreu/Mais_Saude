import { DeleteDayUseCase } from "./deleteDayUseCase";



export class DeleteDayController {

  constructor(private deleteDayUseCase:DeleteDayUseCase){}

  handle(especialistaID:string){
    return this.deleteDayUseCase.execute(especialistaID)
  }
}