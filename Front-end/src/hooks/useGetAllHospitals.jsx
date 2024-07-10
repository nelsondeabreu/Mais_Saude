import React from "react";
import UseReload from "./useReload";
import api from "../apiService";
import { toast } from "react-toastify";


export function UseGetAllHospitals () {

  const [allHospitals, setAllHospitals] = React.useState([])

  
  React.useEffect(()=>{
    
    async function getAllPost () {
        try{
          const AllPosts = (await api.get("entidadeSistem/listAll")).data
        setAllHospitals(AllPosts)
        }catch(Err){
          toast.info("Verifique a conexão da internet!")
        }
      }

    getAllPost()
    
  }, [])

  return {allHospitals}

}