import React from "react";
import doctorImage from "../../../../assets/img/medicos/icone.jpg"
import { RowGap } from "../../../../components/columRow/columRow";
import {CardConnections, CardPedidoConnection, CardPessoa} from "../../../../components/cards/cardPessoas/cardPessoas";
import { UseGetAllUsers } from "../../../../hooks/useGetAllUsers";
import { UseGetAllEspecialists } from "../../../../hooks/useGetAllEspecialists";
import { useUser } from "../../../../hooks/contextApi";
import api from "../../../../apiService";
import style from "./allPessoas.module.css"
import { UseGetMyConnections } from "../../../../hooks/useGetMyConnections";
import { UseGetMyPedido } from "../../../../hooks/useGetMyPedidos";
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react";
import { useSocket } from "../../../../hooks/contextApi/useSocketContext";
import { useAllEspecialist } from "../../../../hooks/contextApi/useGetAllEspecialists";
import { UseGetEspecialistNofriend } from "../../../../hooks/useGetEspecialistNoFriends";

export function AllPessoas() {

    const {socket} = useSocket()
    const {user}=useUser()
    const {allUsers} = UseGetAllUsers()
    const [verify,setVerify]=React.useState(false)
    const [connectionID,setConnectionID]=React.useState()
    const [connection,setConnection]=React.useState([])
    const {allEspecialist} = useAllEspecialist()
    const all = []
    const {myConnections} = UseGetMyConnections()
    const {myPedidos} = UseGetMyPedido()
    const [pedidos,setPedidos] = React.useState([])
    const {especialists,withoutMe} = UseGetEspecialistNofriend()

    React.useEffect(() => {
        if(myPedidos.length > 0) {
            setPedidos(myPedidos);
        }
    }, [myPedidos]);

    
    React.useEffect(()=>{
        socket && socket.on("getNotificationUser", async(data)=>{
            console.log(data);
        })

        socket && socket.on("getPedidoUser", async(data)=>{
            console.log(data);
            setPedidos(data)
        })
        
    },[socket])

    return(
        <main className={style.mainPacientes}>  
            <br></br>
                <RowGap>
                <h1>Pedidos de conexões</h1>

                     <div>
                        <Dialog.Root>
                            <RowGap>
                                {
                                    pedidos.length > 0 && pedidos.slice(0,14).map((pedido)=>{
                                        if(pedido.destinatarioID === user.id){
                                                if(pedido.user.crm){
                                                    return(
                                                    <CardPedidoConnection
                                                        key={pedido.id}
                                                        id={pedido.userID}
                                                        image={pedido.user.foto}
                                                        userName={pedido.user.name}
                                                        crm={pedido.user.crm}
                                                    />
                                                    )
                                                }else{
                                                    return(
                                                        <CardPedidoConnection
                                                        key={pedido.id}
                                                        id={pedido.userID}
                                                        image={pedido.user.foto}
                                                        userName={pedido.user.name}
                                                    /> 
                                                    )
                                                }
                                        }
                                    }
                                    )
                                }
                            </RowGap>
                            {
                                pedidos.length >= 14 && <div className={style.divBtn}><Dialog.Trigger>Ver Tudo</Dialog.Trigger></div>
                            }
                        <Dialog.Overlay style={{inset:"0",background:"#000",opacity:"60%", position:"fixed", zIndex:"1002"}}/>
                            <Dialog.Portal>
                                <Dialog.Content>
                                    <div className={style.divHeader}>
                                        <h1>Pedidos de conexões</h1>
                                        <Dialog.Close>
                                            <X/>
                                        </Dialog.Close>
                                    </div>
                                    <div className={style.body}>
                                        <RowGap>
                                            {
                                                pedidos.length > 0 && pedidos.map(pedido=>{
                                                    if(pedido.user.id !== user.id){
                                                        if(pedido.user.crm){
                                                            return(
                                                            <CardPedidoConnection
                                                            key={pedido.id}
                                                            id={pedido.userID}
                                                            image={pedido.user.foto}
                                                            userName={pedido.user.name}
                                                            crm={pedido.user.crm}
                                                            />
                                                            )
                                                        }else{
                                                            return(
                                                                <CardPedidoConnection
                                                                key={pedido.id}
                                                                id={pedido.userID}
                                                                image={pedido.user.foto}
                                                                userName={pedido.user.name}
                                                            /> 
                                                            )
                                                        }
                                                    }else{
                                                        console.log(pedido.destinatario);
                                                        if(pedido.destinatario && pedido.destinatario.crm){
                                                            return(
                                                            <CardPedidoConnection
                                                                key={pedido.id}
                                                                id={pedido.destinatario && pedido.destinatarioID}
                                                                image={pedido.destinatario && pedido.destinatario.foto}
                                                                userName={pedido.destinatario && pedido.destinatario.name}
                                                                crm={pedido.destinatario && pedido.destinatario.crm}
                                                            />
                                                            )
                                                        }else{
                                                            return(
                                                                <CardPedidoConnection
                                                                key={pedido.id}
                                                                id={pedido.destinatarioID}
                                                                image={pedido.destinatario && pedido.destinatario.foto}
                                                                userName={pedido.destinatario && pedido.destinatario.name}
                                                            /> 
                                                            )
                                                        }
                                                    }
                                                }
                                                )
                                            }
                                        </RowGap>
                                    </div>
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                    </div>
                   
                    <div className={style.divPeople}>
                        <Dialog.Root>
                        <h1>Sugestões para si</h1>

                        <RowGap>
                            {
                               withoutMe.slice(0,14).map( (users) => {
                                    return(
                                        <CardPessoa 
                                            image={users.foto} 
                                            userName={users.name} 
                                            id={users.id}
                                            verify={verify}
                                            userID={user.id}
                                            crm={users.crm}
                                        />
                                    )
                                })
                            }
                        </RowGap>
                        {
                            withoutMe.length > 14 && <div className={style.divBtn}><Dialog.Trigger>Ver Tudo</Dialog.Trigger></div>
                        }
                        <Dialog.Overlay style={{inset:"0",background:"#000",opacity:"60%", position:"fixed", zIndex:"1002"}}/>
                        <Dialog.Portal>
                            <Dialog.Content className={style.dialogContent}>
                                <div className={style.divHeader}>
                                    <h1>Sugestões para si</h1>
                                    <Dialog.Close>
                                        <X/>
                                    </Dialog.Close>
                                </div>
                                <div className={style.body}>
                                    <RowGap>
                                        {
                                        
                                        withoutMe.map( (users) => {
                                                return(
                                                    <CardPessoa 
                                                        image={users.foto} 
                                                        userName={users.name} 
                                                        id={users.id}
                                                        verify={verify}
                                                        userID={user.id}
                                                        crm={users.crm}
                                                    />
                                                )
                                            })
                                        }
                                    </RowGap>
                                </div>
                            </Dialog.Content>
                        </Dialog.Portal>
                        </Dialog.Root>
                    </div>
                    
                   

                    <div>
                        <Dialog.Root>
                            <h1>Especialistas</h1>

                            <RowGap>
                                {
                                    especialists.length > 0 ? especialists.slice(0,14).map(especialist => {
                                        const index = allUsers.findIndex(user=>user.crm === especialist.info.crm)
                                        return(
                                            <CardPessoa 
                                                image={allUsers[index].foto} 
                                                userName={especialist.info.nome} 
                                                especialidade={especialist.info.especialidade} 
                                                id={allUsers[index].id}
                                                crm={especialist.info.crm}
                                            />
                                        )
                                    }): <h2 style={{textAlign:"center",color:"red"}}>Sem nenhum Especialista.</h2>
                                }
                            </RowGap>
                            {
                                especialists.length > 14 && <div className={style.divBtn}><button>Ver Tudo</button></div>
                            }
                            <Dialog.Overlay style={{inset:"0",background:"#000",opacity:"60%", position:"fixed", zIndex:"1002"}}/>
                            <Dialog.Portal>
                                <Dialog.Content>
                                    <div className={style.divHeader}>
                                        <h1>Especialistas</h1>
                                        <Dialog.Close>
                                            <X/>
                                        </Dialog.Close>
                                    </div>
                                    <div className={style.body}>
                                        <RowGap>
                                            {
                                                especialists.length > 0 ? especialists.map(especialist => {
                                                    const index = allUsers.findIndex(user=>user.crm === especialist.info.crm)
                                                    return(
                                                        <CardPessoa 
                                                            image={allUsers[index].foto} 
                                                            userName={especialist.info.nome} 
                                                            especialidade={especialist.info.especialidade} 
                                                            crm={especialist.info.crm}
                                                            id={especialist.id}
                                                        />
                                                    )
                                                }): <h2 style={{textAlign:"center",color:"red"}}>Sem nenhum Especialista.</h2>
                                            }
                                        </RowGap>
                                    </div>
                                </Dialog.Content>
                            </Dialog.Portal>    
                        </Dialog.Root>
                    </div>

                </RowGap>
        </main>
    )
}


