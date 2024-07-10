import React from "react";
import { useLocation } from "react-router-dom";
import api from "../apiService";
import { toast } from "react-toastify";


export function UseGetAllEspecialistByEspeciality(){

  const [especialistByEspeciality,setEspecialistByEspeciality] = React.useState([])
  const params = useLocation()
  const busca = params.search.split("=")[1]

  React.useEffect(()=>{
    async function getAllEspecialist(){
      try{
        const especialist = (await api.post("/especialistaSistema/findByEspeciality", {especialidade:busca})).data
        console.log(especialist);
        especialist && setEspecialistByEspeciality(especialist)
      if(!especialist){
        const nameEspecialist = (await api.post("/especialistaSistema/findByName", {name: busca})).data
        console.log(nameEspecialist);
        nameEspecialist && setEspecialistByEspeciality(nameEspecialist)
      }
      }catch(error){
        toast.info("Conexão terminada!")
      }
      
    }
    
    getAllEspecialist()
  },[])

  return {especialistByEspeciality}
}