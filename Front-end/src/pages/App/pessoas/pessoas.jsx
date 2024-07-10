import React from "react";
import style from "./pessoas.module.css"
import Main  from "../../../components/main/main";
import TitlePage from "../../../components/titlePage/titlePage";
import { Link, Outlet } from "react-router-dom";
import { useSocket } from "../../../hooks/contextApi/useSocketContext";
import { toast } from "sonner";

export default function Pessoas() {

    const linkRef = React.useRef();
    const {socket} = useSocket()
        React.useEffect(()=>{
            socket && socket.on("notificationConsulta", (data)=>{
                toast.info(data)
            })
        },[socket])

    return(
        
        <Main>
            <div className={style.titleLinks}>
                <TitlePage 
                    pageAtual="Pessoas " 
                    pageAtualTwo=" / Pessoas /" 
                    pageAtualThree="Minhas Conexões /" 
                    pageAtualFour=" Pedidos de Conexão/" 
                    pageAtualFive="Pacientes/"
                    pageAtualSix=" Especialistas"  
                    toOne=""
                    toTwo="minhas_Conexoes"
                    toThree="pedidos_de_conexao"
                    toFour="pacientes"
                    toFive="especialistas"  
                />
            </div>
            <Outlet/>
        </Main>
        

    )
}