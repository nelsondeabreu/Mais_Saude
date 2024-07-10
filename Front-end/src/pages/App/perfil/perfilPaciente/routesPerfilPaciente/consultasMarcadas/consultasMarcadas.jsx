import React from "react";
import {CardConsultaMarcadaEspecialista, CardConsultaMarcadaPaciente} from "../../../../../../components/cards/cardConsultaMarcada/cardConsultaMarcada";
import { UseGetAllEspecialistQuery } from "../../../../../../hooks/useGetAllEspecialistQuery";
import { useUser } from "../../../../../../hooks/contextApi";
import { UseGetDataEspecialist } from "../../../../../../hooks/useGetDataEspecialist";
import { format } from "date-fns";
import { UseGetAllPacienteStatusQuery } from "../../../../../../hooks/useGetAllPacienteStatusConsulta";
import { useSocket } from "../../../../../../hooks/contextApi/useSocketContext";
import { toast } from "sonner";

export default function ConsultasMarcadas() {

    const {pacienteConsulta} = UseGetAllPacienteStatusQuery("Marcada")
    const {user} = useUser()
    const {dataEspecialist} = UseGetDataEspecialist()
    const verif = dataEspecialist.crm === user.crm
    const {socket} = useSocket()
    
    React.useEffect(()=>{
        socket && socket.on("notificationConsulta", (data)=>{
            toast.info(data)
        })
    },[socket])

    console.log();
    return(
        <div>
            
        {
           pacienteConsulta.length > 0 && pacienteConsulta.map(data=>(
                <CardConsultaMarcadaPaciente 
                data={format(data.data,"dd/MM/yyyy")} 
                hora={data.hora} 
                especialista={data.especialista.nome}
                tipoConsulta={data.especialista.tipo_De_Consulta}
            />
            ))
        }
        {
            pacienteConsulta.length === 0 && (
                <h4 style={{color:"red",textAlign:"center"}}>Sem consultas marcadas</h4>
            )
        }
            
        </div>
    )
}