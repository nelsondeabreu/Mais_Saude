import React from "react";
import UseReload from "./useReload";
import api from "../apiService";
import { useUser } from "./contextApi";
import { toast } from "react-toastify";


export function UseGetAllPacienteStatusQuery(status){
  const {user} = useUser()
  const [pacienteConsulta,setPacienteConsulta] = React.useState([])

  React.useEffect(()=>{

    async function GetAllPacienteQuery(){
      try{
        const allEspecialistQuery = (await api.post("consultas/findByPacienteIDStatus",{pacienteID:user.id,status})).data
      setPacienteConsulta(allEspecialistQuery)
      }catch(Err){
        toast.info("Verifique a conexão da internet!")

      }
    }

    GetAllPacienteQuery()

  },[])

  return {pacienteConsulta}
}