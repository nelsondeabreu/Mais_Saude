import React, { useState } from "react";
import api from "../apiService";
import UseGetDataUser from "./useGetDataUser";
import { useUser } from "./contextApi";
import { toast } from "react-toastify";


export function UseGetDataEspecialist(){
  const {dataUser} = UseGetDataUser()
  const [dataEspecialist,setDataEspecialist] = useState([]) 
  const [dataEspecialistProfile,setdataEspecialistProfile] = useState([]) 
  const {user} = useUser()

  React.useEffect(()=>{
    
    async function getDataEspecialist(){
    
      try{
        const especialist = (await api.post("especialistaSistema/findByCrm",{crm:user.crm})).data
        console.log(especialist,"sdfghjkl");
        if(!especialist){
          const req = (await api.post("especialistasMinsa/findByCrm",{crm:user.crm})).data
          setDataEspecialist(req)
        }else{
          setDataEspecialist(especialist)
        }
      }catch{}

      try{
        const especialist = (await api.post("especialistaSistema/findByCrm",{crm:dataUser.crm})).data
        if(!especialist){
          const req = (await api.post("especialistasMinsa/findByCrm",{crm:dataUser.crm})).data
          setdataEspecialistProfile(req)

        }else{
          setdataEspecialistProfile(especialist)
        }
      }catch{
        toast.info("Verifique a conexão da internet!")
      }

    }
    
    getDataEspecialist()
  },[dataUser])
  
  return {dataEspecialist, dataEspecialistProfile}
}