import React from "react";
import style from "./main.module.css"

export default function Main({children}){
    
    return(
        <main className={style.main}>
            {children}
        </main>
    )
}
