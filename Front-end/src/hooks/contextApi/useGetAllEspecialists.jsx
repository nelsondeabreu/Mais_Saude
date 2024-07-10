import React from "react";
import api from "../../apiService";
import { toast } from "react-toastify";

const allEspecialistsContext = React.createContext()

export function AllEspecialistsProvider ({children}) {
  
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

  return (
    <allEspecialistsContext.Provider value={{allEspecialist}}>
      {children}
    </allEspecialistsContext.Provider>
  )

}

export const useAllEspecialist = ()=> React.useContext(allEspecialistsContext)