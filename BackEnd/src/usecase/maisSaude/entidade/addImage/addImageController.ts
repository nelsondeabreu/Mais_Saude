import { AddImageUseCase } from "./addImageUseCase";
import { Request, Response } from "express";


export class AddImageController {
  
  constructor(private addImageUseCase: AddImageUseCase){}

  async handle(req:Request, res:Response){

    const id = req.params.id;
    console.log(id);
    
    try{      
      if(req.file){
      console.log(req.file,"EWEEEE");

        const {originalname} = req.file;
        const uploud = await this.addImageUseCase.execute(id,originalname.toString())
        res.status(200).json({message:"Foto de perfil atualizada",uploud})
      }else{
        const uploud = await this.addImageUseCase.execute(id,req.body.foto)
        res.status(200).json({message:"Foto de perfil atualizada",uploud})
      }
    }catch(error){
      console.error("Erro ao atualizar", error);
      res.status(404).json({message:"Erro ao autalizar foto"})
    }
  }
}