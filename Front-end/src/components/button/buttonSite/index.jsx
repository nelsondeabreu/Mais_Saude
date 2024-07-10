import React from "react";
import style from "./index.module.css"
import { Link } from "react-router-dom";

export function ButtonSite({text,path,id}){
    return(
        <Link id={id} to={path} className={style.btnSite}>{text}</Link>
    )
}


export function ButtonLog({text,click,type}){
    return(
        <button type={type} className={style.btnLog} onClick={click} >{text}</button>
    )
}
