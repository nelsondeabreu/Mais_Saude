import React from "react";
import { RowGap } from "../../../../components/columRow/columRow";
import { UseGetMyPedido } from "../../../../hooks/useGetMyPedidos";
import { UseGetMyConnections } from "../../../../hooks/useGetMyConnections";
import userIcone from "../../../../assets/img/userImage.png"
import style from "./minhasConexoes.module.css"
import { useUser } from "../../../../hooks/contextApi";
import { CardConnections, CardPessoa } from "../../../../components/cards/cardPessoas/cardPessoas";
import { useSocket } from "../../../../hooks/contextApi/useSocketContext";


export default function MyConnections(){

  const {myConnections} = UseGetMyConnections()
    const {user} = useUser()
    const [connection,setConnection]=React.useState([])
    const {socket} =useSocket()

    React.useEffect(()=>{
      if(myConnections.length > 0){
          setConnection(myConnections)
      }
  },[myConnections])

  React.useEffect(()=>{
    socket && socket.on("getMyConnections", async(data)=>{
        setConnection(data)
    })

},[socket])
  return (
    <RowGap>

      <h1 className={style.titulo}>Minhas Conexões</h1>

      {
        connection.length > 0 && connection.map( (users) => {
            if(user.id !== users.friendID){
                if(users.friend.crm === null){
                    return(
                        <CardConnections 
                            image={users.friend.foto} 
                            userName={users.friend.name} 
                            id={users.friend.id}
                            connectionID={users.id}
                            userID={user.id}
                            state={true}
                            crm={users.friend.crm}
                        />
                    )
                }else{
                  return(
                      <CardConnections 
                          image={users.friend.foto} 
                          userName={users.friend.name} 
                          id={users.friend.id}
                          connectionID={users.id}
                          userID={user.id}
                          state={true}
                          crm={users.friend.crm}
                      />
                    )
                }
                    
            }else{
                if(users.user.crm === null){
                  return(
                    <CardConnections 
                        image={users.user.foto} 
                        userName={users.user.name} 
                        id={users.user.id}
                        connectionID={users.id}
                        userID={user.id}
                        state={true}
                        crm={users.user.crm}
                    />
                    )
                }else{
                  return(
                    <CardConnections 
                        image={users.user.foto} 
                        userName={users.user.name} 
                        id={users.user.id}
                        connectionID={users.id}
                        userID={user.id}
                        state={true}
                        crm={users.user.crm}
                    />
                  )
                }
            }
        })
      }
    </RowGap>
  )
}

