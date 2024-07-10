import React from "react"
import { useSocket } from "../../../../../hooks/contextApi/useSocketContext"
import { CardConsultaMarcadaEspecialista } from "../../../../../components/cards/cardConsultaMarcada/cardConsultaMarcada"
import { format } from "date-fns"
import { UseGetAllEspecialistQuery } from "../../../../../hooks/useGetAllEspecialistQuery"



export default function ConsultasNaoRealizadas(){

  const {socket} = useSocket()
  const [consultas,setConsultas]=React.useState([])
  const {especialistaConsulta} = UseGetAllEspecialistQuery("NRealizada")
  
  React.useEffect(()=>{
    socket && socket.on("consultaNrealizada", async (data)=>{
      setConsultas(data)
    })
  },[socket])
  
  return(
    <main>
      {
        consultas.length > 0 ? consultas.map(consulta=>(
          <CardConsultaMarcadaEspecialista
            data={format(consulta.data,"dd/MM/yyyy")}
            hora={consulta.hora}
            paciente={consulta.usuario.name}
            tipoConsulta={consulta.tipo_Da_Consulta}
            status="naoRealizada"
          />
        )):especialistaConsulta.length > 0 && especialistaConsulta.map(consulta=>(
          <CardConsultaMarcadaEspecialista
            data={format(consulta.data,"dd/MM/yyyy")}
            hora={consulta.hora}
            paciente={consulta.usuario.name}
            tipoConsulta={consulta.tipo_Da_Consulta}
            status="naoRealizada"
          />
        ))
      }
      {
        consultas.length === 0 && especialistaConsulta.length === 0 &&(
          <h4 style={{color:"red",textAlign:"center"}}>Sem consultas</h4>
        )
      }
      
    </main>
  )

}