import React from "react";
import style from "./perfil.module.css" 
import image from "../../../../assets/img/userImage.png"
import doctor from "../../../../assets/img/medicos/icone.jpg"
import { Link, Outlet } from "react-router-dom";
import { useUser } from "../../../../hooks/contextApi/index";
import * as Dialog from "@radix-ui/react-dialog"
import { MiniFormProfile } from "../../../../components/miniForm/miniForm";
import UseGetDataUser from "../../../../hooks/useGetDataUser";
import { CalendarConsultaPresentation } from "../../../../components/calendarConsulta/calendarConsulta";
import { useSocket } from "../../../../hooks/contextApi/useSocketContext";
import { toast } from "sonner";


export default function Perfil(){

    const {user} = useUser();
    const {dataUser,} = UseGetDataUser()
    const {socket} = useSocket()

    function Connections(){
        socket && socket.emit("myConnections", {userID:user.id})
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
                            <Link to={`http://localhost:2004/uploads/${dataUser.foto}/findImage`}>
                            <img src={dataUser.foto ? `http://localhost:2004/uploads/${dataUser.foto}/findImage` : dataUser.crm ? doctor : image } alt="Profile" className={style.userImage}/>
                        </Link>
                                <h2>{dataUser.name && dataUser.name}</h2>
                                <h3 style={{color:"#6c757d"}}>{dataUser.crm ? "Especialista" : "Paciente"}</h3>
                                
                                {
                                    user.id === dataUser.id && dataUser.crm === null && (
                                        <Dialog.Root>
                                            <Dialog.Trigger>Mudar para especialista</Dialog.Trigger>
                                            <MiniFormProfile />
                                        </Dialog.Root>
                                    )
                                }
        
                            </div>
                        </div>

                        {
                        
                            dataUser.crm && <CalendarConsultaPresentation year={2024}/>

                        }
                    </div>
                    <div className="col-xl-8 " style={{cheight:"90vh"}}>

                    <div className={style.card}>
                        <div className={`${style.card_body} pt-2`}>
                            <ul className={`${style.nav_tabs_bordered} nav nav-tabs`}>

                                <li className={style.nav_item}>
                                    <Link to='' className={`${style.nav_link} ${style.active} `} >Sobre</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='posts' className={`${style.nav_link } ${style.active}`}>Publicações</Link>
                                </li>

                                {
                                    user.id === dataUser.id && (
                                        <>

                                            {
                                                user.crm === null && (
                                                    <li className="nav-item">
                                                        <Link to='consultasmarcadas' className={`${style.nav_link } ${style.active}`} >Consultas Marcadas</Link>
                                                    </li>
                                                )
                                            }

                                            <li className="nav-item">
                                                <Link to='minhasConexoes' className={`${style.nav_link } ${style.active}`} onClick={Connections}>Minhas Conexões</Link>
                                            </li>
                                            
                                            {/**<li className="nav-item">
                                                <Link to='alterarsenha' className={`${style.nav_link } ${style.active}`} >Alterar Senha</Link>
                                            </li> */}
                                            <li className="nav-item">
                                                <Link to='editarperfil' className={`${style.nav_link } ${style.active}`} >Editar Perfil</Link>
                                            </li>
                                            

                                        </>
                                    )
                                }

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