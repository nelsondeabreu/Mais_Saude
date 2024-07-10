import React from "react";
import style from "./legendVition.module.css"
import image from "../../assets/img/users/user1.jpg"
import { FiMaximize } from "react-icons/fi";


export function LegendVition() {
    return(
        <div className={style.infoUser}>
                    <div className={style.divIcon}>
                        <nav className={style.navImageNameBig}>
                            <div className={style.divImage}>
                                <img src={image} className={style.imageUserBig} alt=""/>
                                <span>Jumper Man</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque est animi, laboriosam quae ipsum fugit commodi, esse corporis maiores reiciendis tenetur iure officia mollitia voluptatum quo vero nostrum quam. Quas.</p>
                        </nav>
                        <FiMaximize/>
                    </div>
        </div>
    )
}

export function LegendVitionSmall() {
   
    return(
   
        <div className={style.infoUser}>
                    <div>
                        <nav className={style.navImageNameSmall}>
                            <img src={image} className={style.imageUser} alt=""/>
                            <span>Jumper Man</span>
                        </nav>
                        <FiMaximize/>
                    </div>
        </div>
    )
}