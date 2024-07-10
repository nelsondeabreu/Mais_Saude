import React from "react";
import style from "./cardHospital.module.css"
import { ColLg6, ColMd4, ColMd8, Mb3,Rowgb0 } from "../../columRow/columRow";
import imageNull from "../../../assets/img/hospitais/null.jpg"
import {BsPhone} from "react-icons/bs"
import {FaLocationDot} from "react-icons/fa6"
import { Link } from "react-router-dom";

export default function CardHospital ({id, type, nome,endereco, numero,foto}) {
    
    console.log(nome, type);
    return(
        
        <ColLg6>
            <Mb3>
            <Rowgb0>
                    
                    <ColMd4>
                        <img src={ imageNull  } className={`${style.imageHospital} `} alt=""/>
                    </ColMd4>
                    <ColMd8>
                            <nav className={style.container}>
                                <div className={`${style.infoHospital} card-body`}>
                                    <h3>{type}</h3>
                                    <Link to="/hospitais"><h2>{nome}</h2></Link>
                                    <h4>{endereco}</h4>    
                                </div>

                                <div className={`${style.contactosHospital} card-body`}>
                                    <p><BsPhone/><span>{numero}</span></p>
                                    <p><FaLocationDot/> {endereco}</p>
                                    <Link to={`/perfilEntidade/${id}`} >Ver hospital</Link>
                                </div>
                            </nav>
                    </ColMd8>

                </Rowgb0>
                
            </Mb3>
        </ColLg6>
        
    )
}