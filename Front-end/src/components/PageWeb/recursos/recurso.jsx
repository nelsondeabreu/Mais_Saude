import React from "react";
import style from "./recurso.module.css"


export default function Recurso({icone,conteudo}){

    return(
        <div className="col-md-6">
            <div className={`${style.iconlist} d-flex`}>
                {icone}
                <span>{conteudo}</span>
            </div>
        </div>
    )
}