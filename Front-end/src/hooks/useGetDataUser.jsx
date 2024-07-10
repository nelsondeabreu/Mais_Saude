import React from "react";
import api from "../apiService";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


export default function UseGetDataUser(){

  const [dataUser,setDataUser] = React.useState([])
  const params = useParams()
  React.useEffect(()=>{
    console.log(params.id);
    async function GetDataUser(){
      try{
        const user = (await api.post("usuarios/findByID",{id:params.id})).data
        setDataUser(user)
      }catch(error){
        toast.info("Verifique a conexão da internet!")
      }
    }
    GetDataUser()
  }, [])

  return {dataUser}
  
}