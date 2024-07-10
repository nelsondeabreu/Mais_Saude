import React from "react"
import api from "../apiService"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"



export function UseGetPostByID(){

  const [post,setPost]= React.useState()
  const params = useParams()

  React.useEffect(()=>{
    async function getPost(){
      try{
        const app = (await api.post("posts/findByID", {id:params.id})).data
        setPost(app)
      }catch(error){
        toast.info("Verifique a conexão da internet!")
      }
    }
    getPost()
  },[])
  
  return { post }

}