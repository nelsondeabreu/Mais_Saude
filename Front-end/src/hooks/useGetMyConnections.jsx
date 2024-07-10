import React from "react";
import api from "../apiService";
import { useUser } from "./contextApi";
import { toast } from "react-toastify";



export function UseGetMyConnections(){

  const [myConnections,setMyConnections] = React.useState([])
  const {user} = useUser()

  React.useEffect(()=>{
    async function FindMyConnections(){
      try{
        const connections = (await api.post("myConnections/list",{userID:user.id})).data
      setMyConnections(connections)
      }catch{
      toast.info("Verifique a conexão da internet!")
      }
    }

    FindMyConnections()
  },[user])

  return {myConnections}
}