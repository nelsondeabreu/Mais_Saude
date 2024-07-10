import React from "react";
import style from "./valores.module.css"
import { Link } from "react-router-dom";

export default function Valores({icone,titulo,conteudo}){
    return(

        <div className={`${style.container} col-lg-6 col-md-5 d-flex`} data-aos="fade-up" data-aos-delay="100">
                <div className={`${style.icon} flex-shrink-0`}>
                    {icone}
                </div>  
                <div>
                    <h4 className={style.title}><Link to="/" className="stretched-link">{titulo}</Link></h4>
                    <p className={style.description}>{conteudo}</p>
                </div>
        </div>
    )
}