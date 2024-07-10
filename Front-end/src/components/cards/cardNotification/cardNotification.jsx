import React from "react";
import style from "./cardNotification.module.css"
import {formatDistanceToNow, } from "date-fns"
import { ptBR} from "date-fns/locale"
import imageDoctor from "../../../assets/img/medicos/icone.jpg"
import imageUser from "../../../assets/img/userImage.png"
import { useSocket } from "../../../hooks/contextApi/useSocketContext";
import {FaStethoscope} from "react-icons/fa6"
import { Link } from "react-router-dom";
import { UseGetDataEspecialist } from "../../../hooks/useGetDataEspecialist";
import Cookie from "js-cookie"
import CryptoJS from "crypto-js";
import { useUser } from "../../../hooks/contextApi";
import { DoorOpenIcon, Lock, Unlock } from "lucide-react";


export function CardNotificationConnection({image,title,content,notificationID,userID,senderID,crm}){

  const {socket} =useSocket()

  function PedidoAccepted(){
    socket && socket.emit("myConnections", {userID})

    socket && socket.emit("pedidoAccepted",{
      notificationID,
      userID,
      senderID
    })

  }

  function PedidoRejected(){
    socket && socket.emit("pedidoRejected",{
      notificationID,
      userID,
      senderID
    })
  }

  function handleClick(){
    socket && socket.emit("updateVisto", {
      id:notificationID,
      userID
    })
  }

  return (
    <Link to={"/pessoas/pedidos_de_conexao"}>
      <li className={style.notificationItem} onClick={handleClick}>
        <img src={ image ? `http://localhost:2004/uploads/${image}/findImage` : crm ? imageDoctor : imageUser} alt=''/>
        <div className={style.content}>
          <h5>{title}</h5>
          <p>{content}</p>
          <p>{formatDistanceToNow(new Date(), {locale:ptBR, addSuffix:true})}</p>
          
        </div>
      </li>
    </Link>
  )
}

export function CardNotificationConsulta({nomePaciente,especialistID,data,id}){

  const {socket} = useSocket()
  const {dataEspecialist} = UseGetDataEspecialist()
  const {user} = useUser()

  function ConsultasMarcadas(){
      socket && socket.emit("getConsultaMarcadas", {
          userID:especialistID,
          especialistaID:dataEspecialist.id,
          status:"Marcada"
      })

      socket && socket.emit("updateVisto", {
        id,
        userID:user.id
      })
}

  return (
    <Link to={`/consultorio/${user.id}/consultas_Marcadas`}>
      <li className={style.notificationItem} onClick={ConsultasMarcadas}>
        <div className={style.backIcon}>
        <FaStethoscope/>
        </div>
        <div className={style.content}>
          <h5>Consulta agendada</h5>
          <p>{nomePaciente} agendou uma consulta com você.</p>
          <p>{formatDistanceToNow(data, {locale:ptBR, addSuffix:true})}</p>
        </div>
      </li>
    </Link>
  )
}

export function CardNotificationBlock({data}){

  const {socket} = useSocket()
  const {dataEspecialist} = UseGetDataEspecialist()
  const {user} = useUser()

  return (
      <li className={style.notificationItem}>
        <div className={style.LockIcon}>
        <Lock/>
        </div>
        <div className={style.content}>
          <h5>Bloqueado!</h5>
          <p>Impossivél criar horario de consulta!</p>
          <p>{formatDistanceToNow(data, {locale:ptBR, addSuffix:true})}</p>
        </div>
      </li>
  )
}

export function CardNotificationUnBlock({data}){

  const {socket} = useSocket()
  const {dataEspecialist} = UseGetDataEspecialist()
  const {user} = useUser()

  return (
      <li className={style.notificationItem}>
        <div className={style.LockIcon}>
          <Unlock/>
        </div>
        <div className={style.content}>
          <h5>Desbloqueado!</h5>
          <p>Agora é possivél criar horario pra consulta!</p>
          <p>{formatDistanceToNow(data, {locale:ptBR, addSuffix:true})}</p>
        </div>
      </li>
  )
}

export function CardNotificationDespedido({data}){

  const {socket} = useSocket()
  const {dataEspecialist} = UseGetDataEspecialist()
  const {user} = useUser()

  return (
      <li className={style.notificationItem}>
        <div className={style.doorIcon}>
          <DoorOpenIcon/>
        </div>
        <div className={style.content}>
          <h5>Foste despedido.</h5>
          <p>Já não fazes parte do hospital!</p>
          <p>{formatDistanceToNow(data, {locale:ptBR, addSuffix:true})}</p>
        </div>
      </li>
  )
}

export function CardNotificationReaction({friendName,foto,data,conteudo,id,notificationID,crm,post}){
  const {socket} = useSocket()
  const {user} = useUser()

  function handleClick(){
    socket && socket.emit("updateVisto", {
      id:notificationID,
      userID:user.id
    })
  }

  return (
    <Link to={post && `/post/${id}`}>
      <li className={style.notificationItem} onClick={handleClick}>
        <img src={foto ? `http://localhost:2004/uploads/${foto}/findImage`: crm ? imageDoctor :imageUser } alt=" "/>
        <div className={style.content}>
          <p><span style={{fontWeight:"600",color:"#000"}}>{friendName}</span> {conteudo}</p>
          <p>{formatDistanceToNow(data, {locale:ptBR, addSuffix:true})}</p>
        </div>
      </li>
    </Link>
  )
}