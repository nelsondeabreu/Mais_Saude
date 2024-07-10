import React from "react";
import style from './chooseEnter.module.css'
import { Link } from "react-router-dom";
import { LogoFooter } from "../../../components/logos/logos";

export function ChooseEnter() {
    return(
        <div className={style.main}>
            <LogoFooter/>
            <ul className={style.ul}>
                <li> 
                    <Link to='/login'>
                        <h3>Iniciar Sessão</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Porro id deserunt adipisci fuga quaerat commodi modi, maxime esse provident laudantium, 
                            neque minima similique doloribus excepturi eveniet nemo blanditiis reiciendis quis!
                        </p>
                    </Link> 
                    
                </li>
                <li> 
                    <Link to='/cadastroprofissional'>
                        <h3>Cadastro Profissional</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Porro id deserunt adipisci fuga quaerat commodi modi, maxime esse provident laudantium, 
                            neque minima similique doloribus excepturi eveniet nemo blanditiis reiciendis quis!
                        </p>
                    </Link>
                    
                </li>
            </ul>
        </div>
    )
}