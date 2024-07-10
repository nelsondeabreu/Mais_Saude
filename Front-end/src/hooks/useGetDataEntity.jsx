import React from "react";
import api from "../apiService";
import UseReload from "./useReload";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


export function UseGetDataEntity () {
  const params = useParams() 
  
  const [dataEntity, setDataEntity] = React.useState("")

  React.useEffect(()=>{

    async function getInfoEntity () {
        try{
          const id = params.id
        const entity = (await api.post("entidadeSistem/findByID", {id})).data
        setDataEntity(entity)
        }catch(error){
          toast.info("Verifique a conexão da internet!")
        }

    }
    
    getInfoEntity()        

  }, [])


  return {dataEntity}

}