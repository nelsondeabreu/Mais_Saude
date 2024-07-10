import React from "react";
import style from "./feedback.module.css"
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function FeedBack({img,data,titulo,conteudo,nome}){
    return(

                <div className={`${style.divContainer} col-xl-3 col-md-6`} data-aos="fade-up" data-aos-delay="100">
                    <div className={style.postbox}>
                      <div className={style.postimg}><img src={img} className="img-fluid" alt=""></img></div>
                      
                      <div className={style.meta}>
                        <span className={style.postdate}>{data}</span>
                        <span className={style.postauthor}>{nome}</span>
                      </div>
                      
                      <h3 className={style.posttitle}>{titulo}</h3>
                      <p>{conteudo}</p>
                      <Link to="/" className={`${style.readmore} stretched-link`}><span>Read More</span><BsArrowRight/></Link>
                    </div>
                </div>
    )
}