import React from "react";
import api from "../apiService";
import UseReload from "./useReload";
import { toast } from "react-toastify";


export function UseGetAllEspecialistsMinsa () {
  
  const [allEspecialistMinsa, setAllEspecialistMinsa] = React.useState([])

  React.useEffect(()=>{

    async function getInfoEntity () {
        try{
          const allEspecialist = (await api.get("especialistasMinsa/list")).data
          setAllEspecialistMinsa(allEspecialist)
        }catch(err){
        toast.info("Verifique a conexão da internet!")

        }
    }
    
    getInfoEntity()        

  }, [])


  return {allEspecialistMinsa}

}