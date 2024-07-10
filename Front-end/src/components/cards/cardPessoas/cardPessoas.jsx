import React from "react";
import style from "./cardPessoas.module.css"
import { Link } from "react-router-dom";
import { useSocket } from "../../../hooks/contextApi/useSocketContext";
import { useUser } from "../../../hooks/contextApi";
import userImage from "../../../assets/img/userImage.png"
import EspecialistImage from "../../../assets/img/medicos/icone.jpg"
import hospitalImage from "../../../assets/img/hospitais/null.jpg"
import api from "../../../apiService";
import { FaLocationDot } from "react-icons/fa6";
import { UseGetMyConnections } from "../../../hooks/useGetMyConnections";
import { UseGetAllUsers } from "../../../hooks/useGetAllUsers";
import { toast } from "sonner";
import { UseGetAllEspecialists } from "../../../hooks/useGetAllEspecialists";


export function CardPessoa({image,userName,especialidade,id,userID,crm}) {
    const {user} = useUser()
    const [connection,setConnection]=React.useState(false)
    const [btnVerif,setBtnVerif]=React.useState(false)
    const {socket} = useSocket()
    const {myConnections} = UseGetMyConnections()


    React.useEffect(()=>{
        async function getConnection(){
            try{
                const connection = await api.post("pedidoDeConexao/findPedido",{
                    userID,
                    destinatarioID:id
                })
                connection.data && setConnection(true)
            }catch{}
        }

        getConnection()
    },[])

    
   async function CancelConnection(){
        setConnection(false)
        const notification = await (await api.post("notifications/userAndFriend", {usuarioID:id,destinatarioID:user.id,tipo:"1"})).data
        console.log(notification);
        socket && socket.emit("pedidoRejected", {
            notificationID:notification ? notification.id : " ",
            userID:id,
            senderID:user.id
        })

        socket && socket.emit("getMyPedidos", {userID:user.id})
    }

    async function ConnectedUser (type){
        setConnection(true)
        if(!connection){
            socket && socket.emit("sendNotification",{
                senderName:user.name,
                receiverID:id,
                type,
                userID:user.id
            })
        }
    }

    const newStyle = {
        "background": connection ? "#b0b0b3" : "var(--first-color)"
    }

    return(
        
        <div className={style.cardContainer}>
            <img src={image ? `http://localhost:2004/uploads/${image}/findImage` : !crm ? userImage : EspecialistImage } className="card-img-top" alt="..."/>
            <div className="card-body">
                <Link to={`/perfil/${id}`} style={{color:"#000"}}><h5 className="card-title">{userName}</h5></Link >
                <p>{especialidade}</p>
                {
                    connection ? (
                        <button style={newStyle} onClick={CancelConnection}>Cancelar conexão</button>
                    ): <button style={newStyle} onClick={()=>ConnectedUser(1)}>Conectar-se</button>   
                }
            </div>
        </div>
    )
}

export function CardConnections({image,userName,especialidade,id,userID,crm,connectionID}) {
    
    const {socket} = useSocket()

    function CancelConnection(){
        socket && socket.emit("cancelConnection", {
            userID,
            id:connectionID
        })
    }

    return(
        
        <div className={style.cardContainer}>
            <img src={image ? `http://localhost:2004/uploads/${image}/findImage` : crm ===  null ? userImage : EspecialistImage } className="card-img-top" alt="..."/>
            <div className="card-body">
                <Link to={`/perfil/${id}`} style={{color:"#000"}}><h5 className="card-title">{userName}</h5></Link >
                <p>{especialidade}</p>
                <button style={{background: "#b0b0b3"}} onClick={CancelConnection}>Cancelar conexão</button>
            </div>
        </div>
    )
}

export function CardMyConnections ({image,userName,especialidade,crm,id}){
    const {user} = useUser()
    const {socket} = useSocket()

    function CancelConnection(){
        socket && socket.emit("cancelConnection", {
            userID:user.id,
            id
        })
    }

    return(
        
        <div className={style.cardConnections}>
            <img src={image ? `http://localhost:2004/uploads/${image}/findImage` : crm ===  null ? userImage : EspecialistImage} alt="..."/>
            <div className="card-body">
                <Link to={`/perfil/${id}`} style={{color:"#000"}}><h5 className="card-title">{userName}</h5></Link >
                <p>{especialidade}</p>
                <button style={{background:"#b0b0b3"}} onClick={CancelConnection}>Cancelar conexão</button>
            </div>
        </div>
    )
}

export function CardMyFollowers ({image,userName,id,crm}){

    return(
        
        <div className={style.cardFollowers}>
            <img src={image ? `http://localhost:2004/uploads/${image}/findImage` : crm ===  null ? userImage : EspecialistImage} alt="..."/>
            <div className="card-body">
                <Link to={`/perfil/${id}`} style={{color:"#000"}}><h5 className="card-title">{userName}</h5></Link >
            </div>
        </div>
    )
}

export function CardPedidoConnection({image,userName,id,crm}){
    
    const {socket} = useSocket()
    const {user} = useUser()

    async function PedidoAccepted(){
        const notification = await (await api.post("notifications/userAndFriend", {usuarioID:id,destinatarioID:user.id,tipo:"1"})).data
        socket && socket.emit("myConnections", {userID:user.id})

        socket && socket.emit("pedidoAccepted",{
        userID:id,
        senderID:user.id
    
    })
        
        
    }

    async function PedidoRejected(){
        const notification = await (await api.post("notifications/userAndFriend", {usuarioID:user.id,destinatarioID:id,tipo:"1"})).data
        socket && socket.emit("pedidoRejected",{
            userID:id,
            senderID:user.id
        })  
    }

    return(
        <div className={style.cardContainer}>
            <img src={image ? `http://localhost:2004/uploads/${image}/findImage` : crm ? EspecialistImage : userImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <Link to={`/perfil/${id}`} style={{color:"#000"}}><h5 className="card-title">{userName}</h5></Link >
                    <div className={style.divButtons}>
                        <button onClick={PedidoAccepted} className={style.btnConfirm}>Aceitar</button>
                        <button onClick={PedidoRejected} className={style.btnReject}>Rejeitar</button>
                    </div>
            </div>
        </div>
    )
}

export function CardSearch ({image,id,crm,userName,especialidade,sobre,hospital}){

    return(
        <div className={style.cardSearch}>
        <img src={image ? `http://localhost:2004/uploads/${image}/findImage` : crm ? EspecialistImage : userImage} className="card-img-top" alt="..."/>
        <div className={style.divGeral}>
            <div className={`${style.divContent}`}>
                <Link to={`/perfil/${id}`} style={{color:"#000"}}><h5 className="card-title">{userName}</h5></Link >
                <div className={style.div}>
                    <span>{sobre ? sobre : especialidade}</span>
                    <small>{hospital && hospital}</small>
                </div>
            </div>
            <div className={style.divBtns}>
                {
                    crm ? <Link to={`/perfil/${id}`} className={style.btnConfirm}>Marcar Consulta</Link>:
                    <Link to={`/chat/${id}`} className={style.btnConfirm}>Mensagem</Link> 
                }
            </div>
        </div>
        </div>
    )
}

export function CardAdmin ({image,id,crm,userName,especialidade,sobre,hospital,adm,cnpj}){
    const  {socket} = useSocket()

    function handleAddAdmin(){
        socket && socket.emit("addAdmin", {
            userID:id,
            cnpj:cnpj
        })
    }
    return(
        <div className={style.cardSearch}>
        <img src={image ? `http://localhost:2004/uploads/${image}/findImage` : crm ? EspecialistImage : userImage} className="card-img-top" alt="..."/>
        <div className={style.divGeral}>
            <div className={`${style.divContent}`}>
                <Link to={`/perfil/${id}`} style={{color:"#000"}}><h5 className="card-title">{userName}</h5></Link >
                <div className={style.info}>
                    <span>{sobre ? sobre : especialidade}</span>
                    <small>{hospital && hospital}</small>
                </div>
            </div>
            {
                !adm && 
                <div className={style.divBtns}>
                    <button className={style.btnConfirm} onClick={handleAddAdmin}>Adicionar</button>
                </div> 
            }
        </div>
        </div>
    )
}

export function CardHospitalHome ({hospitalName,image,id,cnpj,endereco}){
        
    const {allUsers} = UseGetAllUsers()
    const index = allUsers.findIndex((user)=>user.cnpj === cnpj)
    const {user} = useUser()
    const [follow,setFollow] = React.useState(false)
    const {socket} = useSocket()

    async function Follow(){
        console.log(id);
        const found = (await api.post("followers/findByEntidadeSeguidorID", {entidadeID:id,seguidorID:user.id})).data
            if(found){
                socket && socket.emit("follow", {
                    seguidorID:user.id,
                    entidadeID:id,
                })
                setFollow(false)
            }else{
                socket && socket.emit("follow", {
                    seguidorID:user.id,
                    entidadeID:id,
                })
                setFollow(true)
            }   
            
            
        
    }

    React.useEffect(()=>{
        async function getFollow(){
            const found = (await api.post("followers/findByEntidadeSeguidorID", {entidadeID:id,seguidorID:user.id})).data
            found && setFollow(true)

        }
        getFollow()
    },[])


    const newStyle = {
        "background": follow ? "#b0b0b3" : "var(--first-color)"
    }

    return(
        
        <div className={style.cardHospital}>
            <img src={image ? `http://localhost:2004/uploads/${image}/findImage` :hospitalImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className={style.divInfo}>
                    <Link to={`/perfilEntidade/${id}`} style={{color:"#000"}}><h5 className="card-title">{hospitalName}</h5></Link >
                    <span><FaLocationDot/> {endereco}</span>
                </div>
                <div className={style.divBtns}>
                    <button className={style.btnFollow} style={newStyle} onClick={Follow}>{!follow ? "+ Seguir" : "Seguindo"}</button>
                </div>
            </div>
        </div>
    )
}

export function CardEspecialista({image,id,name,connection,especialidade}){
    const [Existconnection,setExistconnection]=React.useState(false)
    const [btnVerif,setBtnVerif]=React.useState(false)
    const {socket} = useSocket()
    const {myConnections} = UseGetMyConnections()
    const {user} = useUser()

    React.useEffect(()=>{
        async function getConnection(){
            const connection = await api.post("pedidoDeConexao/findPedido",{
                userID:user.id,
                destinatarioID:id
            })
            connection.data && setExistconnection(true)
        }

        getConnection()
    },[])

    
    function CancelConnection(){
        setExistconnection(false)

        socket && socket.emit("pedidoRejected", {
            userID:user.id,
            senderID:id
        })

        socket && socket.emit("getMyPedidos", {userID:user.id})
    }

    function ConnectedUser (type){
        setExistconnection(true)
        if(!connection){
            socket && socket.emit("sendNotification",{
                senderName:user.name,
                receiverID:id,
                type,
                userID:user.id
            })
        }
    }
    const newStyle = {
        "background": Existconnection ? "#b0b0b3" : "var(--first-color)"
    }

    return(
        <div className={style.cardEspecialista}>
            <img src={image ? `http://localhost:2004/uploads/${image}/findImage` :EspecialistImage } className="card-img-top" alt="..."/>
            <div className="card-body">
                    <Link to={`/perfil/${id}`} style={{color:"#000"}}><h5 className="" style={{overflow:"hidden"}}>{name}</h5></Link >
                    <p style={{textAlign:"center"}}>{especialidade}</p>
                    {
                        Existconnection ? (
                            <button style={newStyle} onClick={CancelConnection}>Cancelar conexão</button>
                        ): <button style={newStyle} onClick={()=>ConnectedUser(1)}>Conectar-se</button>  
                    }
            </div>
        </div>
    )
}