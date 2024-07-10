import React from "react";
import { useLocation } from "react-router-dom";
import api from "../apiService";
import { UseGetAllPosts } from "./useGetAllPosts";
import { UseGetAllUsers } from "./useGetAllUsers";
import { toast } from "react-toastify";


export function UseGetPostSearch(){

  const params = useLocation()
  const busca = params && params.search.split("=")[1]
  const {allPost} = UseGetAllPosts()
  const {allUsers} = UseGetAllUsers()
  const [postSearch,setPostSearch]=React.useState([])
  const [userID,setUserID]=React.useState([])

 
  React.useEffect(()=>{
    const userPost = allUsers.filter(user=>{
      const post = allPost.find(post=>post.usuarioID === user.id)
      return post
    })

    console.log(userPost);
    
    async function GetPosts(){
      try{
        const post = await (await api.post("posts/findByConteudo", {conteudo:busca})).data
        console.log(post);
        setPostSearch(post)
      }catch{
        toast.info("Verifique a conexão da internet!")
      }

    }

    GetPosts()
  },[])
  
  return {postSearch}
}