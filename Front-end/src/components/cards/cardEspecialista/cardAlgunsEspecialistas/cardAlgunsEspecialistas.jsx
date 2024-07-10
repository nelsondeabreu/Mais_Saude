import React from "react";
import style from "./cardAlgunsEspecialistas.module.css"
import { Link } from "react-router-dom";
import Especialistimage from "../../../../assets/img/medicos/icone.jpg"
import Userimage from "../../../../assets/img/userImage.png"
import { UseGetAllUsers } from "../../../../hooks/useGetAllUsers";
import { useUser } from "../../../../hooks/contextApi";
import { UseGetDataEntity } from "../../../../hooks/useGetDataEntity";
import { useSocket } from "../../../../hooks/contextApi/useSocketContext";
import { Blocks, Lock, Unlock } from "lucide-react";
import { BsLock } from "react-icons/bs";
import { toast } from "react-toastify";


export function CardAlgunsEspecialista({doctorNome,image,especiality,hospital,id,hide,crm}){
    
    return(
        
        <nav className={style.container}>
            <div className={style.infoEspecialista}>
                
                <img src={image ? `http://localhost:2004/uploads/${image}/findImage` : Especialistimage } alt=""/>

                <div className={style.divInfo}>
                    <h6>{doctorNome}</h6>
                    <span>{especiality}, {hospital}</span>
                </div>
                
            </div>
        </nav>
    )
}

export function CardAlgunsPacientes({name,image,sobre,id}){
    return(
        
        <nav className={style.container}>
            <div className={style.infoEspecialista}>
                
            <img src={image ? `http://localhost:2004/uploads/${image}/findImage` : Userimage } alt=""/>

                <div className={style.divInfo}>
                    <h6>{name}</h6>
                    <span>{sobre}</span>
                </div>
                
            </div>
        </nav>
    )
}


export function CardEntityEspecialista({doctorNome,image,especiality,hospital,crm,id,block}){
    const {allUsers} = UseGetAllUsers()
    const index = allUsers.findIndex(user => user.crm === crm)
    const {user} = useUser()
    const {dataEntity} = UseGetDataEntity()
    const {socket} = useSocket()

    function handleBlock(){
        socket && socket.emit("block", {
            crm,
            userID:user.id,
            id
        })

        if(block === "false"){
            socket && socket.emit("sendNotification", {
                receiverID:allUsers[index].id,
                type:5,
                userID:user.id
            })
        }else{
            socket && socket.emit("sendNotification", {
                receiverID:allUsers[index].id,
                type:6,
                userID:user.id
            })
        }
       
    }

    function despedir(){
        socket && socket.emit("deleteEspecialist", {
            crm:crm,
            entidadeID:id,
            userID:user.id
        })
        index !== -1 && (
            socket && socket.emit("sendNotification", {
                receiverID:allUsers[index].id,
                type:7,
                userID:user.id
            })
        )
        toast.loading("Despedindo funcionario...")

       
    }

    return(
        
        <nav className={style.container}>
            <div className={style.infoEspecialista}>
                
                <img src={image ? `http://localhost:2004/uploads/${image}/findImage` : Especialistimage } alt=""/>

                <div className={style.infoBtn}>
                    <div className={style.info}>
                    {
                        index !== -1 ? (
                            <Link to={`/perfil/${allUsers[index].id}`}><h6>{doctorNome}</h6></Link>
                        ): <h6>{doctorNome}</h6>

                    }
                        <span>{especiality}, {hospital}</span>
                    </div>
                    {
                        user.cnpj === dataEntity.cnpj && (
                            <div className={style.btnDelete}>
                                {
                                    block === "true" ? <button  onClick={handleBlock} className={style.btnBlock}><Unlock/>Desbloquear</button>:
                                    <button  onClick={handleBlock} className={style.btnBlock}><Lock/>Bloquear</button>
                                }
                                <button className={style.btnDespedir} onClick={despedir}>Despedir</button>
                            </div>
                        )
                    }
                </div>
                
            </div>
        </nav>
    )
}