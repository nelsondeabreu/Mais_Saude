import React from "react"
import { useSocket } from "../../../../../hooks/contextApi/useSocketContext"
import { CardConsultaMarcadaEspecialista } from "../../../../../components/cards/cardConsultaMarcada/cardConsultaMarcada"
import { format } from "date-fns"
import { UseGetAllEspecialistQuery } from "../../../../../hooks/useGetAllEspecialistQuery"



export default function ConsultasRealizadas(){

  const {socket} = useSocket()
  const [consultas,setConsultas]=React.useState([])
  const {especialistaConsulta} = UseGetAllEspecialistQuery("Realizada")
  
  React.useEffect(()=>{
    socket && socket.on("consultaRealizada", async (data)=>{
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
            status="realizada"
          />
        )): especialistaConsulta.length > 0 && especialistaConsulta.map(consulta=>(
          <CardConsultaMarcadaEspecialista
            data={format(consulta.data,"dd/MM/yyyy")}
            hora={consulta.hora}
            paciente={consulta.usuario.name}
            tipoConsulta={consulta.tipo_Da_Consulta}
            status="realizada"
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