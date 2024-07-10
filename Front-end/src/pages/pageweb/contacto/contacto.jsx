import React from "react";
import style from "./contacto.module.css"
import ImageTitle from "../../../components/imagetitle/imagetitle";
import contactImage from "../../../assets/img/serviços/serviços.jpg"
import {BsEnvelope,BsPhone} from "react-icons/bs"
import Input from "../../../components/input/Input";

export default function Contacto(){
    return(
        <main className={style.main}>
            <ImageTitle image={contactImage} link="/contacto" title="Contacto" titleLink="Contacto"/>
           <section className={style.contact}>
                <div style={{width:"75%",height:"100%"}} className="container position-relative" data-aos="fade-up">

                    <div  className="row gy-4 d-flex justify-content-end">

                    <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">

                        <div className={`${style.infoItem} d-flex`}>
                            <BsEnvelope />
                        <div>
                            <h4>Email:</h4>
                            <p>maissaude@gmail.com</p>
                        </div>
                        </div>

                        <div className={`${style.infoItem} d-flex`}>
                            <BsPhone />
                        <div>
                            <h4>Call:</h4>
                            <p>+244 999 999 999</p>
                        </div>
                        </div>

                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">

                        <form className={style.emailForm}>
                            <div className="row">
                                <div className={`${style.formGroup} col-md-6 mt-3 mt-md-0`}>
                                    <input type="text" placeholder="Nome" required/>
                                </div>
                                <div className={`${style.formGroup} col-md-6 `}>
                                <input type="email" placeholder="Email" required/>
                                </div>
                            </div>
                            <div className={`${style.formGroup} mt-3`}>
                                <input type="text" placeholder="Assunto" required/>
                            </div>
                            <div className={`${style.formGroup} mt-3`}>
                                <textarea name="message" rows="5" placeholder="Mensagem" required></textarea>
                            </div>
                            <div className="text-center"><button type="submit">Enviar</button></div>
                        </form>

                    </div>

                    </div>

                </div>
           </section> 
        </main>
    )
}