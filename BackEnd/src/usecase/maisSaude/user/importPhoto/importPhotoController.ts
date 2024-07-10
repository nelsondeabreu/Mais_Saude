import { ImportPhotoUseCase } from "./importPhotoUseCase";
import { Request, Response } from "express";

export class ImportPhotoController {
  
  constructor(private importPhotoUseCase: ImportPhotoUseCase){}

  async handle(req:Request, res:Response){

    const id = req.params.id;

    try{
      if(req.file){
        const {originalname} = req.file;
        const uploud = await this.importPhotoUseCase.execute(originalname.toString(),id)
        res.status(200).json({message:"Foto de perfil atualizada",uploud})
      }else{
        const uploud = await this.importPhotoUseCase.execute(req.body.foto,id)
        res.status(200).json({message:"Foto de perfil atualizada",uploud})
      }
    }catch(error){
      console.error("Erro ao atualizar", error);
      res.status(404).json({message:"Erro ao autalizar foto"})
    }
  }
}