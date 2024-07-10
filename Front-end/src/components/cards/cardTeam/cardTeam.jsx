import React from "react";
import style from "./cardTeam.module.css"
import { Link } from "react-router-dom";
import {BsFacebook,BsTwitter,BsInstagram,BsLink} from "react-icons/bs"


export default function CardTeam({img,nome,cargo}){

    return(
      
        <div className="col-lg-3 col-md-6" >
            <div className={style.teamMember}>
              <div className={style.memberImg}>
                <img src={img} className="img-fluid" alt=""></img>
                <div className={style.social}>
                  <Link to="/"><BsFacebook/></Link>
                  <Link to="/"><BsTwitter/></Link>
                  <Link to="/"><BsInstagram/></Link>
                  <Link to="/"><BsLink/></Link>
                </div>
              </div>
              <div className={style.memberInfo}>
                <h4>{nome}</h4>
                <span>{cargo}</span>
              </div>
            </div>
          </div>
    )
}