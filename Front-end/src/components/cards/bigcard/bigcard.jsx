import React from "react";
import style from "./bigcard.module.css"
import imageHospital from "../../../assets/img/hospitais/null.jpg"
import imageEspecialisty from "../../../assets/img/medicos/icone.jpg"
import { Col12 } from "../../columRow/columRow";
import { CardAlgunsEspecialista, CardAlgunsHospitais } from "../cardEspecialista/cardAlgunsEspecialistas/cardAlgunsEspecialistas";
import { Link } from "react-router-dom";
import { UseGetAllEspecialists } from "../../../hooks/useGetAllEspecialists";
import { UseGetAllHospitals } from "../../../hooks/useGetAllHospitals";
import { UseGetAllUsers } from "../../../hooks/useGetAllUsers";
import UseReload from "../../../hooks/useReload";
import { UseGetAllEspecialistByEspeciality } from "../../../hooks/useGetAllEspecialistByEspeciality";
import { CardEspecialista, CardHospital, CardHospitalHome, CardPessoa } from "../cardPessoas/cardPessoas";
import { UseGetMyConnections } from "../../../hooks/useGetMyConnections";
import { UseGetMyPedido } from "../../../hooks/useGetMyPedidos";


export function BigCardEspecialistas () {

    const {allEspecialist} = UseGetAllEspecialists()
    const {allUsers} = UseGetAllUsers()
    const [especialists,setEspecialists] = React.useState([])
    const [visibleUsers, setVisibleUsers] = React.useState(6);
    const {myConnections} = UseGetMyConnections()
    const {myPedidos} = UseGetMyPedido()

    const all = []

    React.useEffect(()=>{
        const noMyEspecialist1 = allEspecialist.filter(especialist=> !myConnections.some(amigo => amigo.friend.crm === especialist.crm || amigo.user.crm === especialist.crm));
        const noMyEspecialist = noMyEspecialist1.filter(especialist=> !myPedidos.some(pedido => pedido.destinatario.crm === especialist.crm || pedido.user.crm === especialist.crm))
        const especialistNoMe = noMyEspecialist.filter(especialist => {
            allUsers.forEach(user=> {
                if(user.crm === especialist.crm){
                    all.push({info:especialist,id:user.id})
                }
            })
        }   
            
        )
        setEspecialists(all)

    },[allUsers])
    
    return (
        
        <Col12>
            <div className={`${style.cardContainer} card top-selling overflow-auto`}>

            <div className="card-body pb-0">
            <h5 className="card-title">Alguns Especialistas</h5>
            
            <div className={style.cards}>
                {
                    especialists.length > 0 ? especialists.slice(0,5).map((data,index)=>(
                        <CardEspecialista
                            key={index}
                            connection={false}
                            especialidade={data.info.especialidade}
                            hospitalName={data.info.entidade && data.info.entidade.name}
                            id={data.id}
                            name={data.info.nome}
                            image={data.foto}
                        />
                        
                    )) : <h4 style={{color:"red", textAlign:"center"}}>Sem especialistas</h4>
                }
                
            </div>

            </div>
                {
                    especialists.length > 5 && (
                        <div className={style.viewAll}>
                            <Link to="/hospitais" >Ver todos</Link>
                        </div>
                    )
                }
            </div>
            

        </Col12>
    )
}


export function BigCardSearchEspecialistas () {

    const {especialistByEspeciality} = UseGetAllEspecialistByEspeciality()

    return (
        
        <Col12>
            <div className={`${style.cardContainer} card top-selling overflow-auto`}>

            <div className="card-body pb-0">
            <h5 className="card-title">Especialistas</h5>
            
            {
                especialistByEspeciality.length > 0 ? especialistByEspeciality.map((data,index)=>(
                    <CardPessoa 
                        key={index}
                        userName={data.info.nome} 
                        especialidade={data.info.especialidade} 
                        hospital={data.info.entidade.name} 
                        id={data.id} 
                        image={imageEspecialisty}
                    />
                )) : <h4 style={{color:"red", textAlign:"center"}}>Sem especialistas</h4>
            }

            </div>
            <Link to="/pessoas/especialistas" className={style.all}>Ver todos</Link>
            
            </div>


        </Col12>
    )
}



export function BigCardHospitais () {
    
    const {allHospitals} = UseGetAllHospitals()
    
    return (
        <Col12>
                    
            {allHospitals && (
                <div className={`${style.hospitalMain} card top-selling `}>
                        <h5 className="card-title">Alguns Hospitais</h5>
                    <div className={`${style.hospitalContainer} card-body pb-0`}>
                        <div className={style.cards}>
                            {
                                allHospitals.length > 0 ? allHospitals.map(data => (
                                    <CardHospitalHome 
                                        hospitalName={data.name} 
                                        endereco={data.endereco.adress} 
                                        image={data.foto} 
                                        id={data.id}
                                        cnpj={data.cnpj}
                                    />
                                )): <h4 style={{color:"red", textAlign:"center"}}>Sem hospitais cadastrados</h4>
                            }

                        </div>
                        
                    </div>
                        <div className={style.viewAll}>
                            <Link to="/hospitais" >Ver todos</Link>
                        </div>

                </div>
                )}
                
        </Col12>
    )
}