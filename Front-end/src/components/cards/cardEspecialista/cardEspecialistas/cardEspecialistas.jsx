import React from "react";
import style from "./cardEspecialistas.module.css"
import doctorImage from "../../../../assets/img/medicos/icone.jpg"
import userPhoto from "../../../../assets/img/userImage.png"
import {CardAlgunsEspecialista, CardAlgunsPacientes} from "../cardAlgunsEspecialistas/cardAlgunsEspecialistas";
import { Link } from "react-router-dom";
import { UseGetMyConnections } from "../../../../hooks/useGetMyConnections";
import { useUser } from "../../../../hooks/contextApi";
import { UseGetAllEspecialists } from "../../../../hooks/useGetAllEspecialists";


export default function CardEspecialistas() {
    
    const {myConnections} = UseGetMyConnections()
    const {user} = useUser()
    const {allEspecialist} = UseGetAllEspecialists()
    const isEspecialist = user.crm !== null

    console.log(myConnections);
    return (
        <div className={style.cardContainer}>
              <h5 className={style.cardTitle}>Minhas Conexões</h5>

            <div className={style.cards}>

                {
                        myConnections.length > 0 && myConnections.slice(0,4).map(connections=>{
                            if(user.id !== connections.friendID){
                                if(connections.friend.crm === null){
                                    return(
                                        <CardAlgunsPacientes
                                            key={connections.friend.id}
                                            name={connections.friend.name}
                                            image={connections.friend.foto}
                                            id={connections.friend.id}
                                            sobre={connections.friend.sobre}
                                        />
                                    )
                                }else{
                                    const index = allEspecialist.findIndex(especialist=>especialist.crm === connections.friend.crm)
                                    console.log(index);
                                    return(
                                        <CardAlgunsEspecialista
                                            key={connections.friend.id}
                                            doctorNome={connections.friend.name}
                                            image={connections.friend.foto}
                                            id={connections.friend.id}
                                            especiality={index !== -1 && allEspecialist[index].especialidade}
                                            hospital={index !== -1 && allEspecialist[index].entidade && allEspecialist[index].entidade.name}
                                            crm={index !== -1 && allEspecialist[index].crm}
                                        />
                                    )
                                }
                                
                            }else{
                                if(connections.user.crm === null){
                                    return(
                                        <CardAlgunsPacientes
                                            key={connections.user.id}
                                            name={connections.user.name}
                                            image={connections.user.foto}
                                            id={connections.user.id}
                                            sobre={connections.user.sobre}
                                        />
                                        )
                                }else{
                                    const index = allEspecialist.findIndex(especialist=>especialist.crm === connections.user.crm)
                                    console.log(index);
                                    return(
                                        <CardAlgunsEspecialista
                                            key={connections.user.id}
                                            doctorNome={connections.user.name}
                                            image={connections.user.foto}
                                            id={connections.user.id}
                                            especiality={index !== -1 && allEspecialist[index].especialidade}
                                            hospital={index !== -1 && allEspecialist[index].entidade.name}
                                        />
                                    )
                                }
                                
                            }
                        })
                   
                }

            </div>

            {
                myConnections.length > 4 && (
                    <Link style={{textAlign:"center", padding:"5px"}}>Ver todos</Link>
                )
            }       
               
        </div>
    )
}