import React from "react";
import { useLocation } from "react-router-dom";
import api from "../apiService";
import { toast } from "react-toastify";


export function UseGetUserSearch(){

  const [userSearch,setUserSearch] = React.useState([])
  const params = useLocation()
  const busca = params.search.split("=")[1]
  const nomeFormatado = busca.replace(/\+/g, " ")

  React.useEffect(()=>{
    async function getUserSearch(){
      try{
        if(!nomeFormatado){
          const user = (await api.post("/usuarios/findByName", {name:decodeURIComponent(busca)})).data
          setUserSearch(user)
        }else{
          const user = (await api.post("/usuarios/findByName", {name:nomeFormatado})).data
          setUserSearch(user)
        }
      }catch(error){
        toast.info("Verifique a conexão da internet!")
      }
    }
    
    getUserSearch()

  },[])

  return {userSearch}
}