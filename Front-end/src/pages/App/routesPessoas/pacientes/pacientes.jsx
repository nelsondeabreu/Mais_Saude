import React from "react"
import style from "./pacientes.module.css"
import { CardPessoa } from "../../../../components/cards/cardPessoas/cardPessoas"
import { RowGap } from "../../../../components/columRow/columRow"
import { UseGetAllUsers } from "../../../../hooks/useGetAllUsers"
import userIcone from "../../../../assets/img/userImage.png"
import { useUser } from "../../../../hooks/contextApi"
import { UseGetEspecialistNofriend } from "../../../../hooks/useGetEspecialistNoFriends"




export default function Pacientes(){

  const {user} = useUser()
  const {withoutMe} = UseGetEspecialistNofriend()
  
  return (

    <RowGap>
      
      <h1 className={style.titulo}>Pacientes</h1>

        {
            withoutMe.length > 0 && withoutMe.map( (users) => {
                return(
                    <CardPessoa 
                        image={users.foto} 
                        userName={users.name} 
                        id={users.id}
                        userID={user.id}
                    />
                )
            })
        }
    </RowGap>
  )
}