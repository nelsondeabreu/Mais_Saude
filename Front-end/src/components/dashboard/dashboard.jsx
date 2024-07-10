import React from "react";
import style from "./dashboard.module.css"
import { Link } from "react-router-dom";
import {FaRegHospital,FaStethoscope} from "react-icons/fa6"
import {BsHouse,BsPlus} from "react-icons/bs"
import { useUser } from "../../hooks/contextApi";
import {Users,MessageCircleIcon,User} from "lucide-react"
import { useSocket } from "../../hooks/contextApi/useSocketContext";

export default function Dashboard(){
    const {user} = useUser()
    const {socket} = useSocket()

    function GetMessages(){
        socket && socket.emit("myMessages", {myID:user.id})
    }
    
    return(

        <aside className={`${style.sidebar} `}>
                <Link className={style.logoLink} to="/">
                <BsPlus className={style.logoDash}/>
                </Link>
            <ul className={style.sidebarNav}>

                <li className={style.navItem}>
                <Link className={`${style.navLink} ${style.home}`} to="/homeApp">
                    <BsHouse/>
                </Link>
                </li>

                <li className={style.navItem}>
                <Link className={style.navLink} data-bs-toggle="collapse" to="/pessoas">
                    <Users/>
                </Link>
                </li>

                <li className={style.navItem} onClick={GetMessages}>
                <Link className={style.navLink} data-bs-toggle="collapse" to={`/chat/${user.id}`}>
                    <MessageCircleIcon/>
                </Link>
                </li>

                <li className={style.navItem}>
                <Link className={`${style.navLink} ${style.hospital}`}  data-bs-toggle="collapse" to="/hospitais">
                    <FaRegHospital strokeWidth="1" />
                </Link>
                </li>

                {
                    user.crm && (
                        <li className={`${style.navItem} `}>
                            <Link className={`${style.navLink} ${style.different}`}  data-bs-toggle="collapse" to={`/consultorio/${user.id}`}>
                                <FaStethoscope/>
                            </Link>
                        </li>
                    )
                }

                <li className={`${style.navItem} ${style.hideIcon}`}>
                <Link className={style.navLink} to={`perfil/${user.id}`}>
                    <User/>
                </Link>
                </li>
                <hr/>
                

            </ul>

        </aside>
    )
    
}