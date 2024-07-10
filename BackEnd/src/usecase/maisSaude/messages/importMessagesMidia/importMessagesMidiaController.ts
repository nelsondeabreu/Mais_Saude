import { request } from "http";
import { Request,Response } from "express";
import path from "path";

export class ImportMessagesMidia{

  handle(request:Request,response:Response){
    try{
      const {fileName} = request.params
      console.log(fileName,"adaraobdjbf");
      
      return response.sendFile(path.resolve(`uploads/${fileName}`))
    }catch(Error){
      return response.status(400).json({message:"Erro ao achar foto",Error})
    }
  }
}