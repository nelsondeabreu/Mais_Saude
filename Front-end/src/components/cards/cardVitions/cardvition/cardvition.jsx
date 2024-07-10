import React from "react";
import Vition from "../../../vition/vition";
import style from "./cardvition.module.css"
import { Link } from "react-router-dom";


export default function CardVition() {
    
    return (
        
        <div className={style.cardBody}>
            
            <h5 className={style.cardTitle}>Vitions </h5>

            <div className={style.news}>
                <Vition/>
                <Vition/>
                <Vition/>
                <Vition/>
                <Vition/>   
                <Link style={{textAlign:"center", padding:"5px"}}>Ver todos</Link>  
            </div>

        </div>

    )
}