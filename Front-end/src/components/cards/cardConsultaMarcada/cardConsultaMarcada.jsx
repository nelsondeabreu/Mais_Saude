import React from "react";
import style from "./cardConsultaMarcada.module.css"
import {FaUserDoctor} from "react-icons/fa6"
import { Clock,FileText,Calendar, User,MoreVertical,XSquare,Bell,CheckSquare,Stethoscope} from "lucide-react";
import * as Popover from "@radix-ui/react-popover"
import * as Dialog from "@radix-ui/react-dialog";
import api from "../../../apiService";
import { toast } from "sonner";
import { useSocket } from "../../../hooks/contextApi/useSocketContext";
import { useUser } from "../../../hooks/contextApi";



export function CardConsultaMarcadaEspecialista({
    paciente,
    data,
    hora,
    tipoConsulta,
    Onclick,
    hide,
    consultaID,
    handleNRealizadas,
    status }){
    
    const [verification,setVerification]=React.useState(false)
    const [notificacoes, setNotificacoes] = React.useState([{ value: "Notificação" }]);
    const [time,setTime] = React.useState([])
    const [timeNotification,setTimeNotification] = React.useState({})
    const {socket} = useSocket()
    const {user} = useUser()

    console.log(data,data);

    function handleChange({key,index,target}){
        const exist = timeNotification[key] || []
        if(!exist.includes(target)){
            console.log(timeNotification);
            const updateObject = [...exist , target]
            const newObject = {
            ...timeNotification,
            [key]:updateObject
        }
        setTimeNotification(newObject)

        }else{
            
            toast.error(`${target} já foi selecionada`)
        }
        setVerification(true)
    }

    function handleClick(){

        setVerification(false)
    }

    async function handlSave(){
        const keys = Object.keys(timeNotification)
        const newHora = hora.split(":")
        const oldData = data.split("/")
        const newData = new Date(oldData[2],oldData[1] - 1,oldData[0])
        newData.setHours(parseInt(newHora[0]))
        newData.setMinutes(parseInt(newHora[1]))

        console.log(newData,newHora[0]);
        keys.forEach(key=>{
            timeNotification[key].forEach(e=>{
                const time = e.split(" ")
                if(time.includes("min")){
                    const minutes = new Date(newData)
                    minutes.setMinutes(newData.getMinutes() - parseInt(time[0]))
                    console.log("data com novo minuto",minutes);
                    socket && socket.emit("consultaNotification", {
                        data:minutes,
                        userID:user.id
                    })
                }else if(time.includes("hora")){
                    const hour = new Date(newData)
                    hour.setHours(newData.getHours() - parseInt(time[0]))
                    console.log("data com nova hora",hour);
                    socket && socket.emit("consultaNotification", {
                        data:hour,
                        userID:user.id
                    })
                }else if(time.includes("dia")){
                    const diaAnterior = new Date(newData)
                    diaAnterior.setDate(newData.getDate() - 1)
                    console.log("dia anterior",diaAnterior);
                    socket && socket.emit("consultaNotification", {
                        data:diaAnterior,
                        userID:user.id
                    })
                }
            })
        })
    }

    const handleAddNotificacao = () => {
        setNotificacoes([...notificacoes, { value: "Notificação" }]);
    };
    
    const handleRemoveNotificacao = (index) => {
    const newNotificacoes = [...notificacoes];
    newNotificacoes.splice(index, 1);
    setNotificacoes(newNotificacoes);
    const novosTempos = [...time];
    novosTempos.splice(index, 1);
    setTime(novosTempos);

    };

    return(
        <nav className={style.container}>
            {
                status === "realizada" ? (
                    <CheckSquare color="green"/>
                ): status === "naoRealizada" && (
                    <XSquare color="red"/>
                )
            }
            <div className={style.infoConsulta}>
                <div>
                    <span><User/> {paciente}</span>
                    <span><Stethoscope/> {tipoConsulta}</span>
                </div>
                <div>
                    <span><Calendar/> {data} </span>
                    <span ><Clock/> {hora}</span>
                </div>
            </div>
            {
                hide && (
                    <Popover.Root>
                        <Popover.Trigger className={style.btnOptions} onClick={handleClick}>
                            <MoreVertical/>
                        </Popover.Trigger>

                        <Popover.Content>
                            <ul className={style.actions}>
                                <li className={style.action} onClick={Onclick}><CheckSquare color="green"/>Realizada</li>
                                <li>
                                    <hr className={style.dropdownDivider}/>
                                </li>
                                <li className={style.action} onClick={handleNRealizadas}><XSquare color="red"/>Ñ/Realizada</li>
                                <li>
                                    <hr className={style.dropdownDivider}/>
                                </li>
                                <li className={` ${style.notifications}`}>
                                {notificacoes.map((notificacao, index) => (
                                        <div className={style.action} key={index}>
                                            <Bell fill="#65676b" color="#65676b" />
                                        <select
                                            className={style.select}
                                            onChange={(e)=>handleChange({key:consultaID,target:e.target.value})}
                                        >
                                            <option >Notificação</option>
                                            <option value="1 min">1 min antes</option>
                                            <option value="2 min">2 min antes</option>
                                            <option value="5 min">3 min antes</option>
                                            <option value="3 min">5 min antes</option>
                                            <option value="10 min">10 min antes</option>
                                            <option value="15 min">15 min antes</option>
                                            <option value="20 min">20 min antes</option>
                                            <option value="30 min">30 min antes</option>
                                            <option value="1 hora">1 hora antes</option>
                                            <option value="1 dia">1 dia antes</option>
                                            
                                        </select>
                                            <XSquare
                                            color="red"
                                                className={style.removeIcon}
                                                onClick={() => handleRemoveNotificacao(index)}
                                            />
                                        </div>

                                ))}
                                    <button onClick={handleAddNotificacao} className={style.btnAdd}>Adicionar Notificação</button>
                                    {
                                        verification && (
                                         <button onClick={handlSave} className={style.btnSave}>Salvar</button>
                                        )
                                    }
                                </li>
                            </ul>
                        </Popover.Content>
                    </Popover.Root>
                )
            }
            
        </nav>
    )
}

export function CardConsultaMarcadaPaciente({especialista,data,hora,tipoConsulta}){
    return(
        <nav className={style.container}>
            <div className={style.infoConsulta}>
                <div>
                    <span><FaUserDoctor/>{especialista}</span>
                    <span><FileText/>{tipoConsulta}</span>
                </div>
                <div>
                    <span><Calendar/>{data} </span>
                    <span ><Clock/>{hora}</span>
                </div>
            </div>
            <MoreVertical/>
        </nav>
    )
}