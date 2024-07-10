import React from "react";
import style from "./hospitaisApp.module.css"
import CardHospital from "../../../components/cards/cardHospital/cardHospital";
import Main from "../../../components/main/main";
import TitlePage from "../../../components/titlePage/titlePage";
import { UseGetAllHospitals } from "../../../hooks/useGetAllHospitals";
import * as Dialog from "@radix-ui/react-dialog"
import { MiniFormHospital } from "../../../components/miniForm/miniForm";




export default function HospitaisApp() {

    const {allHospitals} = UseGetAllHospitals()
    

    return (
        
        <Main>
            <Dialog.Root>
                <div className={style.titlebtn}>
                    <TitlePage pageAtual="Hospitais" pageAtualTwo=" /Hospitais"/>
                    
                    <Dialog.Trigger to="/hospitais" className={style.btnCreate}>Criar Entidade</Dialog.Trigger>

                    <MiniFormHospital />
            
                </div>
            </Dialog.Root>

            <nav className={style.cards}>

                {   
                    allHospitals.length > 0 ? allHospitals.map(hospital => (
                        
                        <CardHospital 
                            id={hospital.id} 
                            endereco={hospital.endereco.adress} 
                            foto={hospital.foto} 
                            nome={hospital.name} 
                            numero={hospital.contactos.map(E=>E.contacto)} 
                            type={hospital.tipo_entidade} 
                        />
                    
                    ) ): <h4 style={{color:"red",textAlign:"center"}}>Sem Entidades cadastradas</h4>
                }

            </nav>

        </Main>
    )
}