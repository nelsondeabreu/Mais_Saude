import React from "react";
import style from "./testemonial.module.css"
import {BsStarFill} from "react-icons/bs"

export default function Testimonial({img,conteudo,nome,cargo}){
    return(
            <section className={style.swiperSlide}>
              <div className={style.testimonialItem}>
                <div className={style.stars}>
                  <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/>
                </div>
                <p>
                  {conteudo}
                </p>
                <div className="mt-auto">
                  <img src={img} className={style.testimonialImg}></img>
                  <h3>{nome}</h3>
                  <h4>{cargo}</h4>
                </div>
              </div>
            </section> 
    )
}