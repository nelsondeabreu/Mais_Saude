import React from "react";
import {CardConsultaMarcadaEspecialista, CardConsultaMarcadaPaciente} from "../../../../../components/cards/cardConsultaMarcada/cardConsultaMarcada";
import { UseGetAllEspecialistQuery } from "../../../../../hooks/useGetAllEspecialistQuery";
import { useUser } from "../../../../../hooks/contextApi";
import { UseGetDataEspecialist } from "../../../../../hooks/useGetDataEspecialist";
import { format } from "date-fns";
import { useSocket } from "../../../../../hooks/contextApi/useSocketContext";
import api from "../../../../../apiService";
import UseFindConsultaByID from "../../../../../hooks/useFindConsultaByID";
import { toast } from "sonner";
import { UseGetAllPacienteStatusQuery } from "../../../../../hooks/useGetAllPacienteStatusConsulta";
import Cookie from "js-cookie"
import CryptoJS from "crypto-js";

export default function ConsultasMarcadas() {

    const {especialistaConsulta} = UseGetAllEspecialistQuery("Marcada")
    const {pacienteConsulta} = UseGetAllPacienteStatusQuery("Marcada")
    const [agendada,setAgendada]=React.useState(null)
    const {user} = useUser()
    const {dataEspecialist} = UseGetDataEspecialist()
    const  verif = dataEspecialist.crm === user.crm
    const {socket} = useSocket()

    React.useEffect(()=>{
        socket && socket.on("consultasMarcadas",(data)=>{
            setAgendada(data)
        })
    },[socket])

    async function ConsultaRealizada(consultaID){
        const found = (await api.post("consultas/findByConsultaID",{id:consultaID})).data
        const data = format(new Date(),"dd/MM/yyyy")
        const hora = new Date().getHours().toString() + ":" + new Date().getMinutes().toString();
        console.log(format(found.data,"dd/MM/yyyy") > data);
        console.log(format(found.data,"dd/MM/yyyy") , data);
        if(format(found.data,"dd/MM/yyyy") <= data){
                socket && socket.emit("consultaRealizada", {
                    id:consultaID,
                    status:"Realizada",
                    especialistaID:dataEspecialist.id,
                    userID:user.id
                })
                window.location.reload()
        }else{
            toast.error("O status da consulta só pode ser alterado na data da mesma.")
        }
        
    }

    async function ConsultaNRealizada(consultaID){
        const found = (await api.post("consultas/findByConsultaID",{id:consultaID})).data
        const data = format(new Date(),"dd/MM/yyyy")
        const hora = new Date().getHours().toString() + ":" + new Date().getMinutes().toString();
        
        if(format(found.data,"dd/MM/yyyy") <= data){
            await api.post("consultas/updateStatus", {id:consultaID,status:"NRealizada"})
                window.location.reload()
        }else{
            toast.error("O status da consulta só pode ser alterado na data da mesma.")
        }
    }

    React.useEffect(()=>{
        socket && socket.on("notificationConsulta", (data)=>{
            toast.info(data)
        })
    },[socket])

    return(
        <div>
            
        {
           agendada === null ? especialistaConsulta.length > 0 && especialistaConsulta.map(data=>(
            <CardConsultaMarcadaEspecialista 
                data={format(data.data,"dd/MM/yyyy")} 
                hora={data.hora} 
                paciente={data.usuario.name}
                tipoConsulta={data.tipo_Da_Consulta}
                consultaID={data.id}
                hide={true}
                Onclick={()=>ConsultaRealizada(data.id)}
                handleNRealizadas={()=>ConsultaNRealizada(data.id)}
            />
        )):(
            agendada.map(data=>(
            <CardConsultaMarcadaEspecialista 
                data={format(data.data,"dd/MM/yyyy")} 
                hora={data.hora} 
                paciente={data.usuario.name}
                tipoConsulta={data.tipo_Da_Consulta}
                consultaID={data.id}
                hide={true}
                Onclick={()=>ConsultaRealizada(data.id)}
                handleNRealizadas={()=>ConsultaNRealizada(data.id)}
            />
            ))
        )
        }
        {
           verif && especialistaConsulta.length === 0 && (
                <h4 style={{color:"red",textAlign:"center"}}>Sem consultas marcadas</h4>
            )
        }
            
        </div>
    )
}