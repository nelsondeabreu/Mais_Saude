import React from "react";
import style from './infoEntidade.module.css'
import { UseGetDataEntity } from "../../../../../../hooks/useGetDataEntity";
import { useSocket } from "../../../../../../hooks/contextApi/useSocketContext";
import { toast } from "sonner";

export default function InfoEntidade() {

    const {dataEntity} = UseGetDataEntity();
    const {socket}=useSocket()

    React.useEffect(()=>{
        socket && socket.on("notificationConsulta", (data)=>{
            toast.info(data)
        })
    },[socket])

    return(
        <div>
            <div className={`tab-pane fade show active`} id="profile-overview">
                        <h5 className={style.card_title}>Sobre</h5>
                        <p className="small fst-italic">{dataEntity && dataEntity.sobre}</p>

                        <h5 className={style.card_title}>Detalhes da entidade</h5>

                        <div className="row">
                            <div className={`${style.label} col-lg-3 col-md-4`}>Nome da entidade</div>
                            <div className="col-lg-9 col-md-8">{dataEntity && dataEntity.name}</div>
                        </div>

                        <div className="row">
                            <div className={`${style.label} col-lg-3 col-md-4`}>CNPJ</div>
                            <div className="col-lg-9 col-md-8">{dataEntity && dataEntity.cnpj}</div>
                        </div>

                        <div className="row">
                            <div className={`${style.label} col-lg-3 col-md-4`}>Endereço</div>
                            <div className="col-lg-9 col-md-8">{dataEntity && dataEntity.endereco.adress}</div>
                        </div>

                        <div className="row">
                            <div className={`${style.label} col-lg-3 col-md-4`}>Telefone</div>
                            <div className="col-lg-9 col-md-8">{dataEntity && dataEntity.contactos.map(contacto=>contacto.contacto)}</div>
                        </div>

                        <div className="row">
                            <div className={`${style.label} col-lg-3 col-md-4`}>Email</div>
                            <div className="col-lg-9 col-md-8">{dataEntity && dataEntity.email}</div>
                        </div>

                        </div>
        </div>
    )
}