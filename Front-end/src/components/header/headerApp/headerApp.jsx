import React from 'react'
import style from "./headerApp.module.css"
import {LogoDash} from "../../logos/logos"
import {BsSearch,BsPerson,BsBoxArrowRight} from "react-icons/bs"
import profile from "../../../assets/img/userImage.png"
import doctor from "../../../assets/img/medicos/icone.jpg"
import { Link } from 'react-router-dom'
import { useUser } from '../../../hooks/contextApi/'
import Cookies from 'js-cookie'
import * as Dialog from "@radix-ui/react-dialog"
import * as Popover from "@radix-ui/react-popover"
import { Bell, User } from 'lucide-react'
import { CardNotificationBlock, CardNotificationConnection, CardNotificationConsulta, CardNotificationDespedido, CardNotificationReaction, CardNotificationUnBlock } from '../../cards/cardNotification/cardNotification'
import { useSocket } from '../../../hooks/contextApi/useSocketContext'
import api from '../../../apiService'


function HeaderApp() {

    const {socket} = useSocket()
    const [notifications,setNotifications] = React.useState([])
    const [displayNotification,setDisplayNotification]=React.useState(false)
    const [search,setSearch]=React.useState(null)
    const [total,setTotal] = React.useState(null)
    const {user} = useUser()

    //Fazer log out
    function handleSingOut() {
        Cookies.remove("user")
        Cookies.remove("token")
        window.location.href="/"
    }

    //Trazer todas as notificações
    function handleNotification(){
        socket && socket.emit("findNotificationUser", {userID:user.id,crm:user.crm})
        setDisplayNotification(!displayNotification)
    }

    function handleChange(e){
        const busca = e.target.value
        const params = new URLSearchParams({busca}).toString();
        setSearch(params)
    }

    React.useEffect(()=>{
            socket && socket.on("getNotificationUser", (data)=>{
                console.log(data);
                setNotifications(data)
            })
            socket && socket.on("totalNotification", (data)=>{
                setTotal(data)
            })

            socket && socket.on("updateVisto", (data)=>{
                setTotal(data)
            })
    },[socket])

    const newStyle = {
        "overflow-y":notifications.length > 5 && "scroll",
        "height":notifications.length > 5 && "45rem"
    }

    React.useEffect(()=>{
        async function getMyNotifications(){
            try{
                const Minhasnotificacoes = await (await api.post("notifications/list", {userID:user.id})).data
                setNotifications(Minhasnotificacoes)

                const total = (await api.post("notifications/count", {destinatarioID:user.id})).data
                setTotal(total)
            }catch{}
        }
        getMyNotifications() 
    },[])

    return (
        <header id="header" className={`${style.header} fixed-top d-flex align-items-center`}>
            <Link to="/" className={`${style.logo}  d-flex align-items-center`}>
                <LogoDash/>   
            </Link>
            <div className={style.searchBar}>
                <form className={`${style.searchForm}  d-flex align-items-center`} method="POST" action="#">
                    <input type="text" name="query" placeholder="Pesquisa" title="pesquisa" onChange={handleChange}/>
                    
                    <button type="submit" title="pesquisar" onClick={()=>window.location.reload()}>
                    <Link className={`${style.navLink} ${style.navIcon} `} to={`/search/?${search}`}>
                        <BsSearch/>
                    </Link>
                    </button>
                    

                </form>
            </div>
            
            <nav className={`${style.headerNav} ms-auto`}>
                <ul className="d-flex align-items-center justify-content-center">
                    <li className={style.search}>
                        <Link className={`${style.navLink} ${style.navIcon} `} to="">
                            <BsSearch/>
                        </Link>
                    </li>

                    <Popover.Root>
                        <li className={`${style.navItem} ${style.dropdown}`}>

                            <Popover.Trigger style={{background:"none",border:"none"}} className={`${style.navLink} ${style.navIcon}`} data-bs-toggle="dropdown">
                                <Bell onClick={handleNotification}/>
                                {
                                
                                total > 0 && <span className={`badge bg-primary ${style.badgeNumber}`}>{total}</span>
                                
                                }
                            </Popover.Trigger>
                            <Popover.Content className={style.content}>
                            <ul style={newStyle} className={`${style.dropdownMenu} ${style.dropdownMenuEnd} ${style.dropdownMenuArrow} ${style.notifications}`}>
                                <li className={style.headerNotification}>
                                   <h5> Notificações</h5>
                                </li>
                                {
                                    notifications.length > 0 ? notifications.map((myNotification) => {
                                        if(myNotification.tipo === "1"){

                                            return (
                                            <>
                                                <li>
                                                    <hr className={style.dropdownDivider}/>
                                                </li>
                                                <CardNotificationConnection 
                                                    notificationID={myNotification.id} 
                                                    senderID={myNotification.usuarioNotificacao.id} 
                                                    userID={user.id} 
                                                    title={myNotification.usuarioNotificacao.name} 
                                                    content={"Fez um pedido de conexão"} 
                                                    image={myNotification.usuarioNotificacao.foto} 
                                                    crm={myNotification.usuarioNotificacao.crm}
                                                />
                                            </>
                                            )
                                        }else if(myNotification.tipo === "2"){
                                            return(
                                                <>
                                                    <li>
                                                        <hr className={style.dropdownDivider}/>
                                                    </li>
                                                    <CardNotificationConsulta 
                                                        nomePaciente={myNotification.usuarioNotificacao.name}
                                                        especialistID={myNotification.destinatarioID}
                                                        data={myNotification.data}
                                                        id={myNotification.id}
                                                    />
                                                </>
                                            )
                                        }else if(myNotification.tipo === "3"){
                                            return(
                                                <>
                                                    <li>
                                                        <hr className={style.dropdownDivider}/>
                                                    </li>
                                                    <CardNotificationReaction
                                                        friendName={myNotification.usuarioNotificacao.name}
                                                        foto={myNotification.usuarioNotificacao.foto}
                                                        data={myNotification.data}
                                                        conteudo="Reagiu a sua publicação"
                                                        id={myNotification.postID}
                                                        notificationID={myNotification.id}
                                                        crm={myNotification.usuarioNotificacao.crm}
                                                        post={false}
                                                    />
                                                </>
                                            )
                                        }else if(myNotification.tipo === "4"){
                                            return(
                                                <>
                                                    <li>
                                                        <hr className={style.dropdownDivider}/>
                                                    </li>
                                                    <CardNotificationReaction
                                                        friendName={myNotification.usuarioNotificacao.name}
                                                        foto={myNotification.usuarioNotificacao.foto}
                                                        data={myNotification.data}
                                                        conteudo="Comentou na sua publicação"
                                                        id={myNotification.postID}
                                                        notificationID={myNotification.id}
                                                        post={false}
                                                    />
                                                </>
                                            )
                                        }else if(myNotification.tipo === "5"){
                                            return(
                                                <>
                                                    <li>
                                                        <hr className={style.dropdownDivider}/>
                                                    </li>
                                                    <CardNotificationBlock
                                                        data={myNotification.data}
                                                    />
                                                </>
                                            )
                                        }else if(myNotification.tipo === "6"){
                                            return(
                                                <>
                                                    <li>
                                                        <hr className={style.dropdownDivider}/>
                                                    </li>
                                                    <CardNotificationUnBlock
                                                        data={myNotification.data}
                                                    />
                                                </>
                                            )
                                        }else if(myNotification.tipo === "7"){
                                            return(
                                                <>
                                                    <li>
                                                        <hr className={style.dropdownDivider}/>
                                                    </li>
                                                    <CardNotificationDespedido
                                                        data={myNotification.data}
                                                    />
                                                </>
                                            )
                                        }else if(myNotification.tipo === "8"){
                                            return(
                                                <>
                                                    <li>
                                                        <hr className={style.dropdownDivider}/>
                                                    </li>
                                                    <CardNotificationReaction
                                                        friendName={myNotification.usuarioNotificacao.name}
                                                        foto={myNotification.usuarioNotificacao.foto}
                                                        data={myNotification.data}
                                                        conteudo="Enviou uma mensagem pra você"
                                                        id={myNotification.postID}
                                                        notificationID={myNotification.id}
                                                        post={false}
                                                    />
                                                </>
                                            )
                                        }
                                    }):<p style={{textAlign:"center",color:"red"}}>Sem notificações</p>
                                }

                            </ul>
                            </Popover.Content>

                        </li>
                    </Popover.Root>

                    <Dialog.Root>
                        <li className={`${style.navItemProfile} pe-3`}>
                            <Dialog.Trigger style={{border:"none", background:"transparent"}} className={`${style.navLink} ${style.navProfile} d-flex align-items-center`}>  
                                    <img src={user.foto ? `http://localhost:2004/uploads/${user.foto}/findImage` : user.crm ? doctor:profile} alt="Profile" style={{width:"35px",height:"35px",borderRadius:"100%"}} id='menu-profile'></img>
                                    <span className="d-md-block dropdown-toggle ps-2" id='menu-profile'>{user.name}</span>
                            </Dialog.Trigger>

                            <Dialog.Content>
                                <ul className={`${style.dropdownMenu} ${style.dropdownMenuArrow} ${style.profile} `}>
                                    <li className={style.dropdownHeader}>
                                        <h6>{user.name}</h6>
                                        <span>{user.crm ? "Especialista" : "Paciente"}</span>
                                    </li>
                                    <li>
                                        <hr className={style.dropdownDivider}/>
                                    </li>
                                    <li>
                                    <Link className={`${style.dropdownItem}  d-flex align-items-center`} to={`perfil/${user.id}`}>
                                        <BsPerson/>
                                        <span>Meu Perfil</span>
                                    </Link>
                                    </li>
                                    <li>
                                    <hr className={style.dropdownDivider}/>
                                    </li>
                            
                                    {/*<li>
                                    <Link className={`${style.dropdownItem} d-flex align-items-center`} to="/">
                                        <BsGear/>
                                        <span>Configurações da conta</span>
                                    </Link>
                                    </li>*/}
                                    <li>
                                    <hr className={style.dropdownDivider}/>
                                    </li>

                                    <li>
                                    <hr className={style.dropdownDivider}/>
                                    </li>
                            
                                    <li>
                                    <Link className={`${style.dropdownItem} d-flex align-items-center`} onClick={handleSingOut}>
                                        <BsBoxArrowRight/>
                                        <span>Log Out</span>
                                    </Link>
                                    </li>
                            
                                </ul>
                            </Dialog.Content>
                        </li>
                    </Dialog.Root>

                </ul>
            </nav>
    
        </header>
    )
}

export default HeaderApp