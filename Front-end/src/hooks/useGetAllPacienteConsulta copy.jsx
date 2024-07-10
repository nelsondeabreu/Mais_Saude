import React from "react";
import UseReload from "./useReload";
import api from "../apiService";
import { useUser } from "./contextApi";
import { toast } from "react-toastify";


export function UseGetAllPacienteQuery(){
  const {user} = useUser()
  const [pacienteaConsulta,setPacienteaConsulta] = React.useState([])

  React.useEffect(()=>{

    async function GetAllPacienteQuery(){
      try{
        const allEspecialistQuery = (await api.post("consultas/findByPacienteID",{pacienteID:user.id})).data
        setPacienteaConsulta(allEspecialistQuery)
      }catch(Err){
        toast.info("Verifique a conexão da internet!")

      }

    }

    GetAllPacienteQuery()

  },[])

  return {pacienteaConsulta}
}