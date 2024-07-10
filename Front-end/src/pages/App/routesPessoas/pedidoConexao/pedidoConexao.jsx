import React from "react";
import style from "./pedido.module.css"
import { UseGetMyPedido } from "../../../../hooks/useGetMyPedidos";
import { RowGap } from "../../../../components/columRow/columRow";
import { CardPedidoConnection } from "../../../../components/cards/cardPessoas/cardPessoas";
import userIcone from "../../../../assets/img/userImage.png"
import { useUser } from "../../../../hooks/contextApi";



export default function PedidoConexao(){

  const {myPedidos} = UseGetMyPedido()
  const {user} = useUser()

  return(
    <RowGap>
      <h1 className={style.titulo}>Pedidos de conexões</h1>
      {
        myPedidos.length > 0 && myPedidos.map(pedido=>{
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
                        crm={pedido.user.crm}
                    /> 
                    )
                }
            }else{
                if(pedido.destinatario.crm){
                    return(
                    <CardPedidoConnection
                        key={pedido.id}
                        id={pedido.destinatarioID}
                        image={pedido.destinatario.foto}
                        userName={pedido.destinatario.name}
                        crm={pedido.destinatario.crm}
                    />
                    )
                }else{
                    return(
                        <CardPedidoConnection
                        key={pedido.id}
                        id={pedido.destinatarioID}
                        image={pedido.destinatario.foto}
                        userName={pedido.destinatario.name}
                        crm={pedido.destinatario.crm}
                    /> 
                    )
                }
            }
        }
        )
      }
    </RowGap>
  )
}