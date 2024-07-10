import React from "react"
import style from "./headerSite.module.css"
import {Link} from "react-router-dom"
import { BsList, BsXLg, } from "react-icons/bs";
import UseHeader from "../../../hooks/useHeader";
import { LogoHeader } from "../../logos/logos";
import * as Dialog  from "@radix-ui/react-dialog";

export default function HeaderSite(){

  const { headState, headerDash,widthScreen} = UseHeader()

  let newStyleHeader = {
    "height": headState ? "4.8rem" : "auto",
    "background-color": headState ? "transparent" : "#1b2f458f",
    "backdrop-filter": headState ? "blur(5px)" : "blur(0px)",
    "transition": headState ? "all 0.5s" : "",
  }


  let newStyleNav = {
    "transform": headerDash && "translateX(0%)",
    "display": headerDash && "flex"
  }

  console.log(widthScreen);
  return(
    <Dialog.Root>
    
    <header id="header" style={newStyleHeader} className={`${style.header} d-flex align-items-center fixed-top`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between ">

        <LogoHeader />
        
        <Dialog.Trigger className={style.mobileNavShow}>
          <BsList className={style.btnList}/>
        </Dialog.Trigger>
        
        <nav id="navbar" className={style.navbar}>
          <Dialog.Close className={style.mobileNavHide}>
          <BsXLg id="btn-close" className={style.btnClose} />
          </Dialog.Close>
          <ul>
            <li><Link to={'/'} className="active">Início</Link></li>
            <li><Link to={'/sobre'}>Sobre</Link></li>
            <li><Link to={'/servicos'}>Serviços</Link></li>
            <li><Link to={'/medicos'}>Medicos</Link></li>
            <li><Link to={'/hospitais'}>Hospitais</Link></li>
            
            <li><Link to={'/contacto'}>Contacto</Link></li>
          </ul>
        </nav>

        <Dialog.Portal>
          <Dialog.Overlay style={{inset:"0", position:"fixed", background:"#000", opacity:"60%",zIndex:"1000"}}/>
          <Dialog.Content id="navbar" className={`${style.navbar} ${style.flex}`}>
            <Dialog.Close className={style.mobileNavHide}>
            <BsXLg id="btn-close" className={style.btnClose} />
            </Dialog.Close>
            <ul>
              <li><Link to={'/'} className="active">Início</Link></li>
              <li><Link to={'/sobre'}>Sobre</Link></li>
              <li><Link to={'/servicos'}>Serviços</Link></li>
              <li><Link to={'/medicos'}>Medicos</Link></li>
              <li><Link to={'/hospitais'}>Hospitais</Link></li>              
              <li><Link to={'/contacto'}>Contacto</Link></li>
            </ul>
            </Dialog.Content>
        </Dialog.Portal>
      </div>
    </header>
    </Dialog.Root>

  )
}