import React from "react";
import { Link } from "react-router-dom";
import style from "./imagetitle.module.css"


export default function ImageTitle({title,image,titleLink,link}){

    let newImage = {
        "background-image":`url(${image})`,
        "background-size":"cover"
    }

    return(
        <div style={newImage} className={`${style.breadcrumbs}  d-flex align-items-center`} >
            <div className="container-xl position-relative d-flex flex-column align-items-center">
                <h2>{title}</h2>
                 <ol>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to={link} className={style.titleLink}>{titleLink}</Link></li>
                </ol>
            </div>
        </div>
    
    )
}