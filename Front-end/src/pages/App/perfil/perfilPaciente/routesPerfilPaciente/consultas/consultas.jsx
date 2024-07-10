import React, { useState } from "react";
import style from './consultas.module.css'
import ConsultasMarcadas from "../consultasMarcadas/consultasMarcadas";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useSocket } from "../../../../../../hooks/contextApi/useSocketContext";

export default function Consultas() {

        const {socket} = useSocket()
        React.useEffect(()=>{
            socket && socket.on("notificationConsulta", (data)=>{
                toast.info(data)
            })
        },[socket])

        return (
        <div className={`${style.div} `}>
            <h1>Não tem consultas marcadas!</h1>
            <span>Se está com algum sintoma estranho , marque já à sua consulta.</span>
            <Link to='hospitais' className="btn btn-primary">Marcar consulta</Link>
        </div>)
}