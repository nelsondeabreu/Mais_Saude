import React from "react";
import style from './cadastro.module.css'
import slide1 from '../../../assets/img/banner/slide1.jpg'
import {Input, Input1} from "../../../components/input/Input";
import { Link } from "react-router-dom";
import {Button} from "../../../components/button/buttonSite/index";
import { LogoLogin } from "../../../components/logos/logos";
import Title from "../../../components/title/title";

export function Cadastro(){
    
    return(
        
        <main className={style.main}>
                <img src={slide1}></img>
            <div className={style.container}>
                <form method="post">
                    <Title title="Cadastrar no" logo={<LogoLogin/>}/> 

                        <div className={style.boxInputs}>
                            <Input1 label='Nome'/>
                            <Input1 label='Sobre-nome'/>
                        </div>
                        
                        <Input label="Email" type="text"/>
                        <Input label="Senha" type="password" forget={<Link className={style.forget} to="/esqueceu">Esqueceu a senha?</Link>} />
                        <select className="form-select form-select-lg mb-3" aria-label="Default select example">
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                        <input type="date" className={style.input_date}/>
                        <Button nome='Cadastrar-se'/>
                        <p>Já tens uma conta?<Link to="/login" className={style.forget}>Iniciar Sessão</Link></p>
                </form>
            </div>
        </main>
    )
}

export function CadastroProfissional(){
    
    return(
        
        <main className={style.main}>
                <img src={slide1}></img>
            <div className={style.container}>
                <form method="post">
                    <Title title="Cadastro Profissional no" logo={<LogoLogin/>}/> 

                        <div className={style.boxInputs}>
                            <Input1 label='Nome'/>
                            <Input1 label='Sobre-nome'/>
                        </div>
                        
                        <Input label="Email" type="text"/>
                        <Input label="Senha" type="password" forget={<Link className={style.forget} to="/esqueceu">Esqueceu a senha?</Link>} />
                        <Input label="CRM" type="text"/>

                        <select className="form-select form-select-lg mb-3" aria-label="Default select example">
                            <option selected>Escolha a sua Entidade</option>
                            <option value="hp">Hospital do Prenda</option>
                            <option value="cln">Clinica Girassol</option>
                            <option value="cm">Centro Médico Jumper&Filhos</option>
                            <option value="cm">Hospital dos Cajueiros</option>
                        </select>
                        
                        <Button nome='Cadastrar-se'/>
                        <p>Já tens uma conta?<Link to="/login" className={style.forget}>Iniciar Sessão</Link></p>
                </form>
            </div>
        </main>
    )
}