import React from "react";
import style from "./vition.module.css"
import video from "../../assets/video/saude.mp4"
import { Link } from "react-router-dom";


export default function Vition () {
    return(

          <div className={style.vition}>
              <video src={video} autoPlay muted/>
              <div className={style.legenda}>
              <h4><Link to="/">Vition sobre covid</Link></h4>
              <span>Sit recusandae</span>
            </div>
          </div>

    )
}