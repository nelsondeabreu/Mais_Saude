import React from "react";
import style from "./perfilEntidade.module.css"
import Main from "../../../../components/main/main";
import hospital from "../../../../assets/img/hospitais/null.jpg"
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { UseGetDataEntity } from "../../../../hooks/useGetDataEntity";
import { useUser } from "../../../../hooks/contextApi";
import { useSocket } from "../../../../hooks/contextApi/useSocketContext";
import { toast } from "sonner";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie"

export default function PerfilEntidade () {
    const {user} = useUser()
    const {dataEntity} = UseGetDataEntity()
    const {socket} = useSocket()

    React.useEffect(()=>{
        socket && socket.on("notificationConsulta", (data)=>{
            toast.info(data)
        })
        socket && socket.on("blocked",(data)=>{
            Cookies.set("user", CryptoJS.AES.encrypt(JSON.stringify(data),"boaSaude").toString())
        })
    },[socket])

    function GetFollowers(){
        socket && socket.emit("getAllFollowers",{
            entidadeID:dataEntity.id,
            userID:user.id
        })
    }

    return  (
       
       <Main>

            <section className={`${style.section} ${style.profile} `}>
                <div className="row">
                    <div className="col-xl-4">

                    <div className={style.card}>
                        <div className={`${style.profile_card} card-body  pt-5 d-flex flex-column align-items-center`} >
                            <Link to={dataEntity.foto && `http://localhost:2004/entidadeSistem/${dataEntity.foto}/findFoto`}>
                                <img src={dataEntity.foto === null ? hospital : `http://localhost:2004/entidadeSistem/${dataEntity.foto}/findFoto`} alt="Profile" className="rounded-circle"/>
                            </Link>
                            <h2>{dataEntity && dataEntity.name}</h2>
                            <h3>({dataEntity && dataEntity.tipo_entidade})</h3>
                        </div>
                    </div>

                    </div>

                    <div class="col-xl-8">

                    <div class={style.card}>
                        <div className={`${style.card_body} pt-2`}>
                        <ul className={`${style.nav_tabs_bordered} nav nav-tabs`}>

                            <li className={style.nav_item}>
                                <Link to='' className={`${style.nav_link} ${style.active} `} data-bs-toggle="tab" data-bs-target="#profile-overview" >Sobre</Link>
                            </li>
                            
                            
                            <li className="nav-item">
                                <Link to='especialistas' className={`${style.nav_link } ${style.active}`} data-bs-toggle="tab" data-bs-target="#profile-overview" >Especialistas</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='seguidores' className={`${style.nav_link } ${style.active}`} onClick={GetFollowers} data-bs-toggle="tab" data-bs-target="#profile-overview" >Seguidores</Link>
                            </li>

                            {
                                dataEntity.cnpj === user.cnpj ? (
                                    <>
                                        <li className="nav-item">
                                            <Link to='editarEntidade' className={`${style.nav_link } ${style.active}`} data-bs-toggle="tab" data-bs-target="#profile-overview" >Editar Entidade</Link>
                                        </li>
                                        
                                    </>
                                ) : null
                            }
                            
                        </ul>
                        <div className={`${style.padding} tab-content`} >
                            <Outlet />
                        </div>

                        </div>
                    </div>

                    </div>
                </div>
            </section>
                        
        </Main>
    )

}
