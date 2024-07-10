import React from "react";
import style from "./cardProf.module.css"
import {BsHospital,BsPersonHeart } from "react-icons/bs"

export default function CardProf({nomeDoctor,nomeHospital,img}){
    return(
             <div className="col-lg-3 col-md-10">
                <div className={style.prof}>
                    <img src={img} className="img-fluid" alt=""></img>
                <div className={style.profInfo}>
                    <div className={style.hospitalInfo}>
                        <BsPersonHeart/>
                        <span>{nomeDoctor}</span>
                    </div>
                    <div className={style.hospitalInfo}>
                        <BsHospital/>
                        <span>{nomeHospital}</span>
                    </div>
                   
                </div>
                </div>
            </div>
    )
}