import React from "react";
import api from "../apiService";
import { useUser } from "./contextApi";
import { useSocket } from "./contextApi/useSocketContext";
import { toast } from "react-toastify";


export function UseGetMyPedido(){
  
  const [myPedidos,setMyPedidos]=React.useState([])
  const {user} = useUser()
  const {socket} = useSocket()

  React.useEffect(()=>{
    async function GetPedidos(){
      try{
        const pedidos = (await api.post("pedidoDeConexao/list", {userID:user.id})).data
        setMyPedidos(pedidos)
        
      }catch{
        toast.info("Verifique a conexão da internet!")
      }
    }
    GetPedidos()
  },[user])

  return {myPedidos}
}