import React from "react"
import { useUser } from "./contextApi"
import { UseGetAllUsers } from "./useGetAllUsers"
import { useAllEspecialist } from "./contextApi/useGetAllEspecialists"
import { UseGetMyConnections } from "./useGetMyConnections"
import { UseGetMyPedido } from "./useGetMyPedidos"


export function UseGetEspecialistNofriend(){

    const {user}=useUser()
    const {allUsers} = UseGetAllUsers()
    const [withoutMe,setWithoutMe]=React.useState([])
    const [verify,setVerify]=React.useState(false)
    const {allEspecialist} = useAllEspecialist()
    const [especialists,setEspecialists] = React.useState([])
    const all = []
    const {myConnections} = UseGetMyConnections()
    const {myPedidos} = UseGetMyPedido()
    const [pedidos,setPedidos] = React.useState([])
    
    React.useEffect(() => {
        if(myPedidos.length > 0) {
            setPedidos(myPedidos);
        }
    }, [myPedidos]);

    React.useEffect(()=>{
        const noFriends1 = allUsers.filter(usuario => !myConnections.some(amigo => amigo.friendID === usuario.id || amigo.userID === usuario.id));
        const noFriends = noFriends1.filter(usuario=> !myPedidos.some(pedido=> pedido.destinatarioID === usuario.id || pedido.usuarioID === usuario.id))
        const noFriendsCrm = noFriends.filter(usuario=> usuario.crm === null && usuario.id !== user.id)
        //Apresentacao de todos os usuarios menos eu
        setWithoutMe(noFriendsCrm)
    
        const noMyEspecialist1 = allEspecialist.filter(especialist=> !myConnections.some(amigo => amigo.friend.crm === especialist.crm || amigo.user.crm === especialist.crm));
        const noMyEspecialist = noMyEspecialist1.filter(especialist=> !myPedidos.some(pedido => pedido.destinatario.crm === especialist.crm || pedido.user.crm === especialist.crm))
        noMyEspecialist.filter(especialist => {
            allUsers.forEach(user=> {
                if(user.crm === especialist.crm){
                    all.push({info:especialist,id:user.id})
                }
            })  
        }   
            
        )
        setEspecialists(all)

    },[allUsers])

    return {especialists,withoutMe}
}