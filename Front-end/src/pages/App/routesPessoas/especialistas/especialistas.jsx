import React from "react";
import style from "./especialistas.module.css"
import { UseGetAllEspecialists } from "../../../../hooks/useGetAllEspecialists";
import { UseGetAllUsers } from "../../../../hooks/useGetAllUsers";
import { useUser } from "../../../../hooks/contextApi";
import { RowGap } from "../../../../components/columRow/columRow";
import { CardPessoa } from "../../../../components/cards/cardPessoas/cardPessoas";
import doctorImage from "../../../../assets/img/medicos/icone.jpg"
import { UseGetMyConnections } from "../../../../hooks/useGetMyConnections";
import { UseGetMyPedido } from "../../../../hooks/useGetMyPedidos";
import { useAllEspecialist } from "../../../../hooks/contextApi/useGetAllEspecialists";
import { UseGetEspecialistNofriend } from "../../../../hooks/useGetEspecialistNoFriends";

export default function Especialistas(){
    const {allEspecialist} = useAllEspecialist()
    const {allUsers} = UseGetAllUsers()
    const {myConnections} = UseGetMyConnections()
    const {myPedidos} = UseGetMyPedido()
    const all = []
    const {especialists} = UseGetEspecialistNofriend()

    return(
        <>
            <RowGap>
                <h1 className={style.titulo}>Especialistas</h1>
                {
                    especialists.length > 0 ? especialists.map(especialist => {
                        const index = allUsers.findIndex(user=>user.crm === especialist.info.crm)
                        return(
                            <CardPessoa 
                                image={allUsers[index].foto} 
                                userName={especialist.info.nome} 
                                especialidade={especialist.info.especialidade} 
                                id={especialist.id}
                                crm={especialist.info.crm}
                            />
                        )
                    }): <h2 style={{textAlign:"center",color:"red"}}>Sem nenhum Especialista.</h2>
                }
                
            </RowGap>
        </>
    )
}