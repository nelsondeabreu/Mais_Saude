import React from "react";
import style from "./userchat.module.css"
import { DialogClose } from "@radix-ui/react-dialog";
import imageUser from "../../assets/img/userImage.png"
import imageEspecialist from "../../assets/img/medicos/icone.jpg"
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

export function UserChat ({image,nameUser,message,onclick,crm,data,total,receptorID}) {
    


    return(
            <li className={style.chat} >
            <div className={style.cardBody} onClick={onclick}>
                    <div className={style.avatar}>
                        <img src={image ? `http://localhost:2004/uploads/${image}/findImage` : crm ? imageEspecialist : imageUser} alt="#" />
                    </div>

                    <div className={style.data}>
                        <div className={`d-flex align-items-center  ${style.messageInfo}`}>
                            <h6 className="mb-0">{nameUser}</h6>
                            <span className={`${style.messageTime}`}>{formatDistanceToNow(data,{locale:ptBR,addSuffix:true})}</span>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className={style.message}>
                                {message}
                            </div>

                            <div className={`badge badge-circle bg-primary ${style.badge}`}>
                                {
                                    total > 0 && <span>{total}</span>
                                }
                            </div>
                        </div>
                    </div>
            </div>
        </li>
        
    )
}

export function CardMyConnectionsChat({image,nameUser,sobre,onclick,crm}){

    return(
        <DialogClose style={{border:"none", background:"transparent", width:"100%"}}>
            <div className={style.cardContainerConnection} onClick={onclick}>
                <div className={`${style.container2}`}>
                    <div className={style.avatar}>
                        <img src={image ? `http://localhost:2004/uploads/${image}/findImage` : crm ? imageEspecialist : imageUser} alt="#" />
                    </div>

                    <div className={style.divText}>
                        <div className={`d-flex align-items-center  ${style.messageInfo}`}>
                            <h6 className="mb-0">{nameUser}</h6>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className={style.about}>
                                {sobre}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DialogClose>
    )
  }