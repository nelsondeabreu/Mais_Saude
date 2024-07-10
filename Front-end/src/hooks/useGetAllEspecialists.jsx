import React from "react";
import api from "../apiService";
import UseReload from "./useReload";
import { toast } from "react-toastify";


export function UseGetAllEspecialists () {
  
  const [allEspecialist, setAllEspecialist] = React.useState([])

  React.useEffect(()=>{

    async function getInfoEntity () {
        try{
          const allEspecialist = (await api.get("especialistaSistema/list")).data
          setAllEspecialist(allEspecialist)
        }catch(err){
        toast.info("Verifique a conexão da internet!")

        }
    }
    
    getInfoEntity()        

  }, [])


  return {allEspecialist}

}