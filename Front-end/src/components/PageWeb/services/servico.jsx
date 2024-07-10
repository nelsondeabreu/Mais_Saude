import React from "react";
import style from "./servico.module.css"
import { Link } from "react-router-dom";

export default function Servico({icone,titulo,conteudo}){
    return(

        <div className={`${style.serviceitem} col-lg-4 col-md-6 d-flex`} data-aos="fade-up" data-aos-delay="100">
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