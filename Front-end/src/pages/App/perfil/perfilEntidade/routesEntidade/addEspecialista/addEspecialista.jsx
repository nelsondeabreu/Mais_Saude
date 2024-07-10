import React from "react";
import style from "./addEspecialista.module.css"
import { useSocket } from "../../../../../../hooks/contextApi/useSocketContext";
import { toast } from "sonner";

export default function AddEspecialista (){
    
    const {socket} = useSocket()

    React.useEffect(()=>{
        socket && socket.on("notificationConsulta", (data)=>{
            toast.info(data)
        })
    },[socket])

    return (
        <div>
           <div className="tab-pane fade show  pt-3" id="profile-edit">

                <form>
               
                <div className="row mb-3">
                    <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Nome do especialista</label>
                    <div className="col-md-8 col-lg-9">
                    <input name="fullName" type="text" className="form-control" id="fullName"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="about" className="col-md-4 col-lg-3 col-form-label">Especialidade</label>
                    <div className="col-md-8 col-lg-9">
                    <input name="especialidade" type="text" className="form-control" id="fullName" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="Phone" className="col-md-4 col-lg-3 col-form-label">CRM</label>
                    <div className="col-md-8 col-lg-9">
                    <input name="crm" type="number" className="form-control" id="crm" />
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className={`${style.btnAdd}`} >Adiconar</button>
                </div>
                </form>

                </div>
        </div>
    )
}