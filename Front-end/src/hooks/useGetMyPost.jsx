import React from "react"
import api from "../apiService"
import { toast } from "react-toastify"
import UseGetDataUser from "./useGetDataUser"


export function UseGetMyPost(){

  const [post,setPost]= React.useState([])
  const {dataUser} = UseGetDataUser()

  React.useEffect(()=>{
    async function getPost(){
      try{
        const app = (await api.post("posts/findByUserID", {userID:dataUser.id})).data
        setPost(app)
      }catch(error){
        toast.info("Verifique a conexão da internet!")
      }
    }
    getPost()
  },[dataUser])
  
  return { post }

}