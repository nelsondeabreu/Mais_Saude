import React from "react";
import api from "../apiService";
import { UseGetDataEspecialist } from "./useGetDataEspecialist";
import { toast } from "react-toastify";


export function UseGetAllEspecialistQueryOnly(){
  const {dataEspecialist} = UseGetDataEspecialist()
  const [consulta,setConsulta] = React.useState([])

  React.useEffect(()=>{

    async function GetAllEspecialistQuery(){

      try{
        const allEspecialistQuery = (await api.post("consultas/findByEspecialistaIDOnly",{especialistaID:dataEspecialist.id})).data
        setConsulta(allEspecialistQuery)
      }catch(err){
        toast.info("Verifique a conexão da internet!")

      }
      
    }

    GetAllEspecialistQuery()

  },[dataEspecialist])


  return {consulta}
}