import React, { useState } from "react";
import api from "../../apiService";
import UseGetDataUser from "../useGetDataUser";
import { useUser } from ".";
import { toast } from "react-toastify";


const dataEspecialistContext = React.createContext()

export function DataEspecialistProvider({children}){
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
          alert(req)
          setDataEspecialist(req)
        }else{
          setDataEspecialist(especialist)
        }

      }catch(error){
        console.log(error);
      }

      try{
        const especialist = (await api.post("especialistaSistema/findByCrm",{crm:dataUser.crm})).data
        if(!especialist){
          const req = (await api.post("especialistasMinsa/findByCrm",{crm:dataUser.crm})).data
          alert(req)
        }else{
          setdataEspecialistProfile(especialist)
        }
      }catch{
        toast.info("Verifique a conexão da internet!")
      }

    }
    
    getDataEspecialist()
  },[])

  return (
    <dataEspecialistContext.Provider value={{dataEspecialist,dataEspecialistProfile}}>
        {children}
    </dataEspecialistContext.Provider>
  )
}

export const useGetDataEspecialist = () => React.useContext(dataEspecialistContext)