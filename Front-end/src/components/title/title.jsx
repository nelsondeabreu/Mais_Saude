import React from "react";
import style from "./title.module.css"

export default function Title({title,logo}){
    return  <h2 className={style.title}>{title}{logo}</h2>
    
}