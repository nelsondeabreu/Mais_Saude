import React from "react";
import { BsFacebook,BsInstagram,BsLinkedin, BsTwitter,BsDash } from "react-icons/bs";
import { Link } from "react-router-dom";
import style from "./footerSite.module.css";
import { LogoFooter } from "../../logos/logos";

export default function FooterSite(){
  

  return(
        <footer id="footer" className={style.footer}>

        <div className={style.footerContent}>
          <div className="container-xl">
            
            <div className="row gy-4">
              <div className={`${style.footerInfo} col-lg-5 col-md-12 `}>
                  <LogoFooter/>
                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                <div className={`${style.socialLinks} d-flex  mt-3`}>
                  <Link to="/" className="twitter"><BsTwitter/></Link>
                  <Link to="/" className="facebook"><BsFacebook/></Link>
                  <Link to="/" className="instagram"><BsInstagram/></Link>
                  <Link to="/" className="linkedin"><BsLinkedin/></Link>
                </div>
              </div>
    
              <div className={`${style.footerLinks} col-lg-2 col-6`}>
                <h4>Acesso Rápido</h4>
                <ul>
                  <li><BsDash/> <Link to="/">Início</Link></li>
                  <li><BsDash/> <Link to="/sobre">Sobre nós</Link></li>
                  <li><BsDash/> <Link to="/servicos">Serviços</Link></li>
                  <li><BsDash/> <Link to="/contacto">Contacto</Link></li>
                </ul>
              </div>
    
              <div className={`${style.footerLinks} col-lg-2 col-6`}>
                <h4>Nossos Serviços</h4>
                <ul>
                  <li><BsDash/> <Link to="/medicos">Acesso aos medicos</Link></li>
                  <li><BsDash/> <Link to="/hospitais">Acesso aos hospitais</Link></li>
                  <li><BsDash/> <Link to="/recrutamento">Recrutamento</Link></li>
                </ul>
              </div>
    
              <div className={`${style.footerContact} col-lg-3 col-md-12 text-center text-md-start`}>
                <h4>Nota</h4>
                <p>
                Estamos empolgados por você estar aqui, buscando um cuidado de saúde mais eficiente e personalizado<br/>
                  <br/>
                  <strong>Email:</strong> maissaude@gmail.com<br/>
                </p>
    
              </div>
    
            </div>
          </div>
        </div>
    
        <div className={style.footerLegal}>
          <div className="container-xl">
            <div className={style.copyright}>
              &copy; Copyright 2024 <strong>+ Saúde</strong>. Todos os direitos reservados
            </div>
          </div>
        </div>
      </footer>
      
    )
}