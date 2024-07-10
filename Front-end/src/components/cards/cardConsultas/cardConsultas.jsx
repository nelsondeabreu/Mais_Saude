import React from "react";
import style from "./cardConsultas.module.css"
import {CardConsultaMarcadaEspecialista, CardConsultaMarcadaPaciente} from "../../cards/cardConsultaMarcada/cardConsultaMarcada"
import { Link } from "react-router-dom";
import { UseGetAllPacienteQuery, UseGetAllPacienteStatusQuery } from "../../../hooks/useGetAllPacienteStatusConsulta";
import { format } from "date-fns";
import { UseGetAllEspecialistQuery } from "../../../hooks/useGetAllEspecialistQuery";
import { useUser } from "../../../hooks/contextApi";


export default function CardConsultas (){

    const {especialistaConsulta} = UseGetAllEspecialistQuery("Marcada")
    const {pacienteConsulta} = UseGetAllPacienteStatusQuery("Marcada")
    const {user} = useUser()

    console.log(especialistaConsulta);
    return(
           

            <div className={style.cardContainer}>
              <h5 className={style.cardTitle}>Consultas Marcadas </h5>
              <div className={style.cards}>
              {
                  user.crm ? especialistaConsulta.length > 0 ? especialistaConsulta.slice(0,5).map(data=>(
                    <CardConsultaMarcadaEspecialista 
                      data={format(data.data,"dd/MM/yyyy")} 
                      hora={data.hora} 
                      paciente={data.usuario.name}
                      tipoConsulta={data.tipo_Da_Consulta}
                    />
                    )):<h6 style={{textAlign:"center",color:"red"}}>Sem concultas marcadas.</h6>
                      : pacienteConsulta.length > 0 ? pacienteConsulta.slice(0,5).map(data=>(
                        <CardConsultaMarcadaPaciente 
                        data={format(data.data,"dd/MM/yyyy")} 
                        hora={data.hora} 
                        especialista={data.especialista.nome}
                        tipoConsulta={data.especialista.tipo_De_Consulta}
                    />
                    )): <h6 style={{textAlign:"center",color:"red"}}>Sem concultas marcadas.</h6>
                }
                
              </div> 
                {
                  especialistaConsulta.length > 4 && <Link className={style.all} to={user.crm ? `/consultorio/${user.id}/consultas_Marcadas`:`/perfil/${user.id}/consultasmarcadas`}>Ver todas</Link> 
                }
            </div>

    )
}