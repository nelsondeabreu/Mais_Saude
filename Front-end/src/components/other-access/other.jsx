import React from "react";
import style from "./other.module.css"
import { Link } from "react-router-dom";
import {ButtonSite} from "../button/buttonSite";

export default function OtherAcess(){
   
    return(
   
            <section className={style.enterSite}>
              <div className="container-xl" data-aos="fade-up">
                <div className="row justify-content-center">
                  <div className="col-lg-6 text-center">
                    <h3>"A doença é sentida, mas a saúde nem sempre o é."</h3>
                    <p>Acesse o +Saúde, fale com profissionais de saúde, e desfrute dos nossos serviços.</p>
                    <ButtonSite text="Cadastra-se" path="/login"/>
                  </div>
                </div>
              </div>
            </section>
    )
}