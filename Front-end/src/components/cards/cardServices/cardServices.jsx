import React from "react";
import style from "./cardServices.module.css"
import { Link } from "react-router-dom";

export default function CardServices({titulo,conteudo,image}){
  
  let newImage = {
    "background-image":`url(${image})`,
    "background-size":"cover",
    "background-position":"center"
  }

  return(

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <div className={style.cardItem}>
          <div className="row">
            <div className="col-xl-5">
              <div style={newImage} className={style.cardImage}></div>
            </div>
            <div className="col-xl-7 d-flex align-items-center">
              <div className={style.cardContent}>
                <h4 className={style.cardTitle}>{titulo}</h4>
                <p>{conteudo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}