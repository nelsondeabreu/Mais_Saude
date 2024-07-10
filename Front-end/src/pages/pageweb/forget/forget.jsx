import React from "react";
import style from "./forget.module.css"
import slide1 from "../../../assets/img/banner/slide1.jpg"
import { Link } from "react-router-dom";
import Title from "../../../components/title/title";
import {Input} from "../../../components/input/Input";

export default function Forget(){
    return(
        
            <main className={style.main}>
                <img src={slide1}></img>
                <section className={style.sectionContainer}>
                    <nav className={style.navInfo}>
                    <Title title="Esqueceu sua palavra passe?"/>
                    <p>Digite o endereço de e-mail que você usou quando se inscreveu e enviaremos instruções para redefinir sua senha.</p>
                        <nav className={style.navInputs}>
                            <Input label="Email" type="text"/>
                        </nav>
                        <Link to="/login" className={style.btn_Submit}>Enviar</Link>
                        <Link to="/login"><p className={style.back}>Voltar para fazer login</p></Link>
                    </nav>
                </section>
            </main>  
        
    )
}