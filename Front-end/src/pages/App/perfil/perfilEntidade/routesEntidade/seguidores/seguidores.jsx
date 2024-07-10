import React from "react"
import style from "./seguidores.module.css"
import { Link } from "react-router-dom"
import { CardMyFollowers } from "../../../../../../components/cards/cardPessoas/cardPessoas"
import { useSocket } from "../../../../../../hooks/contextApi/useSocketContext"
import api from "../../../../../../apiService"
import { UseGetDataEntity } from "../../../../../../hooks/useGetDataEntity"


export default function Seguidores(){

  const {socket} = useSocket()
  const [myFollowers,setMyFollowers] = React.useState([])
  const {dataEntity} = UseGetDataEntity()

  React.useEffect(()=>{
    socket && socket.on("allFolowers", (data)=>{
      setMyFollowers(data)
    })
  },[socket])

  React.useEffect(()=>{
    async function Follow(){
      const req = await api.post("followers/findAllByEntidade",{entidadeID:dataEntity.id}).data
      setMyFollowers(req)
    }
  },[])

  return (
    <main>
      <h5 className={style.card_title}>Seguidores</h5>
      <div>
        {
          myFollowers.length > 0 && myFollowers.map((follower,key)=>(
            <CardMyFollowers
              crm={follower.seguidor.crm}
              id={follower.seguidor.id}
              image={follower.seguidor.foto}
              userName={follower.seguidor.name}
              key={key}
            />
          ))
        }
      </div>
    </main>
  )
}