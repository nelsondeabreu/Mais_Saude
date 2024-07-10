import React from "react"
import UseReload from "./useReload"
import api  from "../apiService"
import { toast } from "react-toastify"


export function UseGetAllUsers () {

  const [allUsers, setAllUsers] = React.useState([])


  React.useEffect(()=> {
    
    async function getAllUsers () {

      try{
        const users = (await api.get("usuarios/listaUsuarios")).data
        setAllUsers(users)
      }catch(error){
        toast.info("Verifique a conexão da internet!")
        
      }

    }

    getAllUsers()

  }, [allUsers])

  return {allUsers}
}

