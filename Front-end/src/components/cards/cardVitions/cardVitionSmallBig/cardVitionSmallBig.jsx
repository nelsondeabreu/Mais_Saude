import React from "react";
import style from "./cardVitionSmallBig.module.css"
import video from "../../../../assets/video/saude.mp4"
import { BsMic} from "react-icons/bs";
import { Link } from "react-router-dom";
import { Col12, ColXxl4ColMd6 } from "../../../columRow/columRow";
import { LegendVition, LegendVitionSmall } from "../../../legendVition/legendVition";


export function CardVitionBig() {
    return(
                
        <Col12>
            <div className={`${style.cardContainer} card info-card recent-sales`}>

                <div className="filter">
                    <Link className="icon" to="/" data-bs-toggle="dropdown">
                        <BsMic />
                    </Link>
                </div>

                <div className={`${style.bodyBig} card-body`} style={{height:"450px"}}>
                    <video src={video} autoPlay muted loop></video>
                    <LegendVition/>
                </div>

            </div>
        </Col12>
    )
} 


export function CardLilVitionSmall() {
    return(
        
        <ColXxl4ColMd6>
            <div className={`${style.cardContainer} card info-card sales-card`}>

                <div className="filter">
                    <Link className="icon" to="/" data-bs-toggle="dropdown">
                        <BsMic/>
                    </Link>
                </div>

                <div className={`${style.bodySmall} card-body`}>
                    <video src={video} autoPlay muted loop></video>
                    <LegendVitionSmall />

                </div>

            </div>
        </ColXxl4ColMd6>
            
    )
}