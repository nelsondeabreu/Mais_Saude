import React from "react";
import api from "../apiService";
import { toast } from "react-toastify";


export default function UseFindConsultaByID(id){

  const [consulta,setConsulta] = React.useState([])

  React.useEffect(()=>{
    async function FindConsulta(){
      try{
        const found = await api.post("consultas/findByConsultaID",{id})
      console.log(found);
      setConsulta(found)
      }catch(err){
        toast.info("Verifique a conexão da internet!")

      }
    }
    FindConsulta()
  },[])

  return {consulta}
}