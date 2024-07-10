import { CardMyConnections } from "../../../../../../components/cards/cardPessoas/cardPessoas";
import img from "../../../../../../assets/img/userImage.png"
import { useParams } from "react-router-dom";
import React from "react";
import api from "../../../../../../apiService";
import { useSocket } from "../../../../../../hooks/contextApi/useSocketContext";
import { useUser } from "../../../../../../hooks/contextApi";
import { toast } from "sonner";

export default function MinhasConexoes(){
  const [myConnections,setMyConnections] = React.useState([])
  const params = useParams()
  const {socket} = useSocket()
  const {user} =useUser()
  const [verif,setVerif]=React.useState(false)
    
  React.useEffect(()=>{
        socket && socket.on("notificationConsulta", (data)=>{
            toast.info(data)
        })
    },[socket])

  if(params.id === " minhasConexoes ")
    setVerif(true)

  React.useEffect(()=>{
    
    async function Connections(){
      const connections = await (await api.post("myConnections/list", {userID:user.id})).data
      setMyConnections(connections)
    }
    Connections()
  },[])

  

  React.useEffect(()=>{
    async function getMyConnections(){
      socket && socket.on("getMyConnections",(data)=>{
      setMyConnections(data)
      console.log(data);
      })
    }
    getMyConnections()
  },[socket,verif])

  
  return(
    <main>
      {
        myConnections.length > 0 && myConnections.map(connection=>{
          if(connection.friendID !== user.id){
            return (
              <CardMyConnections 
                image={connection.friend.foto} 
                userName={connection.friend.name} 
                id={connection.id} 
                crm={connection.friend.crm}
              />
            )
          }else{
            return(
              <CardMyConnections 
                image={connection.user.foto} 
                userName={connection.user.name} 
                id={connection.id} 
                crm={connection.user.crm}
              />
            )
          }
        }
        
        )
      }
    </main>
  )
}