import React from "react";
import style from "./titlePage.module.css"
import { Link } from "react-router-dom";

export default function TitlePage (
    {
        pageAtual,
        pageAtualTwo,
        pageAtualThree,
        pageAtualFour,
        pageAtualFive,
        pageAtualSix,
        toOne,
        toTwo,
        toThree,
        toFour,
        toFive,
        toSix
    }) {

    return(
        <div className={style.pageTitle}>
            <h1>{pageAtual}</h1>
            <nav>
                <ol className={style.breadcrumb}>
                    <li className="breadcrumb-item"><Link to="/homeApp">Home </Link></li>
                    <li><Link to={toOne}>{pageAtualTwo}</Link></li>
                    <li><Link to={toTwo}>{pageAtualThree}</Link></li>
                    <li ><Link to={toThree}>{pageAtualFour}</Link></li>
                    <li ><Link to={toFour}>{pageAtualFive}</Link></li>
                    <li ><Link to={toFive}>{pageAtualSix}</Link></li>
                </ol>
            </nav>
        </div>
    )
}