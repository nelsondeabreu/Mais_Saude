import React from "react";
import style from "./consultorio.module.css" 
import image from "../../../assets/img/medicos/icone.jpg"
import { Link, Outlet } from "react-router-dom";
import { useUser } from "../../../hooks/contextApi/index";
import * as Dialog from "@radix-ui/react-dialog"
import { MiniFormProfile } from "../../../components/miniForm/miniForm";
import UseGetDataUser from "../../../hooks/useGetDataUser";
import { CalendarConsultaPresentation } from "../../../components/calendarConsulta/calendarConsulta";
import { useSocket } from "../../../hooks/contextApi/useSocketContext";
import { UseGetDataEspecialist } from "../../../hooks/useGetDataEspecialist";
import { toast } from "sonner";


export default function Consultorio(){

    const {user} = useUser();
    const {dataUser} = UseGetDataUser()
    const {socket} = useSocket()
    const {dataEspecialist} = UseGetDataEspecialist()

    function ConsultasRealizadas(){
        socket && socket.emit("getConsultasRealizadas", {
            userID:user.id,
            especialistaID:dataEspecialist.id,
            status:"Realizada"
        })
    }

    function ConsultasNaoRealizadas(){
        socket && socket.emit("getConsultaNRealizadas", {
            userID:user.id,
            especialistaID:dataEspecialist.id,
            status:"NRealizada"
        })
    }
    
        React.useEffect(()=>{
            socket && socket.on("notificationConsulta", (data)=>{
                toast.info(data)
            })
        },[socket])

    return(
        
        <main className={style.container}>

            <section className={`${style.section} ${style.profile} `}>
                <div className="row">
                    <div className="col-xl-4">
                        <div className={style.card}>
                            <div className={`${style.profile_card} card-body  pt-4 d-flex flex-column align-items-center`} >
                                <img src={user.foto ? `http://localhost:2004/uploads/${user.foto}/findImage`: image } alt="Profile" className="rounded-circle"/>
                                <h2>{dataUser.name && dataUser.name}</h2>
                                <h3 style={{color:"#6c757d"}}>{dataEspecialist.especialidade}</h3>
                            </div>
                        </div>
                            <CalendarConsultaPresentation year={2024}/>
                    </div>
                    <div className="col-xl-8 " style={{inset:"0"}}>

                    <div className={style.card}>
                        <div className={`${style.card_body} pt-2`}>
                            <ul className={`${style.nav_tabs_bordered} nav nav-tabs`}>

                                <li className={style.nav_item}>
                                    <Link to='' className={`${style.nav_link} ${style.active} `} data-bs-toggle="tab" data-bs-target="#profile-overview" >Estatisticas</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='consultas_Marcadas' className={`${style.nav_link } ${style.active}`} >Consultas Marcadas</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='consultas_Realizadas' className={`${style.nav_link } ${style.active}`} onClick={ConsultasRealizadas}>Consultas Realizadas</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='consultas_Nao_Realizadas' className={`${style.nav_link } ${style.active}`} onClick={ConsultasNaoRealizadas} >Consultas N/Realizadas</Link>
                                </li>

                                <li className="nav-item">
                                    <Link 
                                        to='editar_Consultorio' 
                                        className={`${style.nav_link } ${style.active}`} 
                                    >Editar Consultorio</Link>
                                </li>

                            </ul>
                            <div className={`${style.padding} tab-content`} >

                                <Outlet/>

                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </section>
        </main>
    )
}