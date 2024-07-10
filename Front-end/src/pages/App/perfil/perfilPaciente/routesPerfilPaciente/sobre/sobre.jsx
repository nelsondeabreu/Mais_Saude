import React from "react";
import style from './sobre.module.css'
import UseGetDataUser from "../../../../../../hooks/useGetDataUser";
import { useSocket } from "../../../../../../hooks/contextApi/useSocketContext";
import { toast } from "sonner";
import { UseGetDataEspecialist } from "../../../../../../hooks/useGetDataEspecialist";

export default function Sobre() {

    const {dataEspecialistProfile} = UseGetDataEspecialist()
    const {dataUser} = UseGetDataUser()
    const {socket} = useSocket()
    
    React.useEffect(()=>{
        socket && socket.on("notificationConsulta", (data)=>{
            toast.info(data)
        })
    },[socket])
    console.log(dataEspecialistProfile);
    return(
        <div>
            <div id="profile-overview">
                <h5 className={style.card_title}>Sobre</h5>
                <p className="fst-italic">{dataUser.sobre === null ? "Insira uma frase de boas vindas pro seu perfil.": dataUser.sobre}</p>

                <h5 className={style.card_title}>Detalhes de Perfil</h5>

                <div className="row">
                    <div className={`${style.label} col-lg-3 col-md-4`}>Nome Completo</div>
                    <div className="col-lg-9 col-md-8">{dataUser.name}</div>
                </div>

                <div className="row">
                    <div className={`${style.label} col-lg-3 col-md-4`}>Telefone</div>
                    <div className="col-lg-9 col-md-8">{dataUser.contactos && dataUser.contactos.map(contacto=>contacto.contacto)}</div>
                </div>

                <div className="row">
                    <div className={`${style.label} col-lg-3 col-md-4`}>Email</div>
                    <div className="col-lg-9 col-md-8">{dataUser.email}</div>
                </div>

                {
                    dataEspecialistProfile.crm && (
                        <>
                            <div className="row">
                                <div className={`${style.label} col-lg-3 col-md-4`}>Crm</div>
                                <div className="col-lg-9 col-md-8">{dataEspecialistProfile.crm}</div>
                            </div>

                            <div className="row">
                                <div className={`${style.label} col-lg-3 col-md-4`}>Especialidade</div>
                                <div className="col-lg-9 col-md-8">{dataEspecialistProfile.especialidade}</div>
                            </div>
                            {
                                dataEspecialistProfile.entidade && (
                                    <div className="row">
                                        <div className={`${style.label} col-lg-3 col-md-4`}>Hospital</div>
                                        <div className="col-lg-9 col-md-8">{dataEspecialistProfile.entidade.name}</div>
                                    </div>
                                )
                            }
                           
                        </>
                    )
                }

            </div>
        </div>
    )
}