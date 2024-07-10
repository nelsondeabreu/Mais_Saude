import React from "react";
import UseReload from "./useReload";
import api from "../apiService";
import { UseGetDataEspecialist } from "./useGetDataEspecialist";
import { toast } from "react-toastify";


export function UseGetAllEspecialistQuery(status){
  const {dataEspecialist} = UseGetDataEspecialist()
  const [especialistaConsulta,setEspecialistaConsulta] = React.useState([])
  console.log(dataEspecialist);
  React.useEffect(()=>{

    async function GetAllEspecialistQuery(){
      try{
        const allEspecialistQuery = (await api.post("consultas/findByEspecialistaID",{especialistaID:dataEspecialist.id,status})).data
      setEspecialistaConsulta(allEspecialistQuery)
      }catch(Err){
        toast.info("Verifique a conexão da internet!")

      }
    }

    GetAllEspecialistQuery()

  },[dataEspecialist])


  return {especialistaConsulta}
}