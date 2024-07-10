import React from "react";
import style from "./Input.module.css"


export function Input({label,forget,type,name,error,regist,value}){
    
    return (
        <div className={style.div}>
            <label 
                className={style.label} 
                htmlFor="input"
                >{label}{forget}
            </label> 
            <input 
                id={name}
                value={value}
                type={type}
                className={style.input} 
                {...regist(name)}
            />
            {error && <small style={{color:"red"}}>{error.message}</small>}

        </div>
    )
}

export function Input1({label,name,error,regist}) {
    
    return (
        <div className={style.div1}>
            <label className={style.label} htmlFor="input">{label}</label> 
            <input 
                type="text" 
                className={style.input1}
                {...regist(name)} 
            />
            {error && <small style={{color:"red"}}>{error.message}</small>}

        </div>
    )
}

export function InputEdit ({name,value,type}) {
   return(
    <div className="row mb-3">
        <label 
            htmlFor={name} 
            className="col-md-4 col-lg-3 col-form-label"
        >{value}</label>
        <div className="col-md-8 col-lg-9">
            <input 
                name={name} 
                type={type} 
                className="form-control" 
                id={name} 
            />
            
        </div>
    </div>
   )
}
