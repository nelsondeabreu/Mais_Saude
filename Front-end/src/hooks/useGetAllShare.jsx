import React from "react";
import api from "../apiService";


export function UseGetAllShare(){

  const [allShare,setAllShare]=React.useState([])

  React.useState(()=>{
    async function ShareList(){
      const all = (await api.get("share/list")).data
      setAllShare(all)
    } 
    ShareList()
  },[])

  return {allShare}
}