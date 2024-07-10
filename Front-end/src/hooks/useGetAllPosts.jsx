import React from "react";
import api from "../apiService";
import UseReload from "./useReload";
import { toast } from "react-toastify";


 export function UseGetAllPosts () {

  const [allPost, setAllPost] = React.useState([])

  const dataPosts = (dados)=>{
    setAllPost(dados)

  }
  
  React.useEffect(()=>{
    
    async function getAllPost () {
        try{
          const AllPosts = (await api.get("posts/")).data
        if(AllPosts.length !== 0) {
          dataPosts(AllPosts)
        }
        }catch(Err){
        toast.info("Verifique a conexão da internet!")

        }
      }

    getAllPost()
    
  }, [])

return {allPost}

}



