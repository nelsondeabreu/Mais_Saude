import React from "react";
import style from "./cardComment.module.css"
import imageUser from "../../../assets/img/userImage.png"
import medicoUser from "../../../assets/img/medicos/icone.jpg"
import { formatDistanceToNow } from "date-fns";
import {ptBR} from "date-fns/locale"
import { MoreVertical, User, X } from "lucide-react";
import * as Popover from "@radix-ui/react-popover"
import * as Dialog from "@radix-ui/react-dialog"
import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useUser } from "../../../hooks/contextApi";
import imageEspecialist from "../../../assets/img/medicos/icone.jpg"
import { useSocket } from "../../../hooks/contextApi/useSocketContext";

const schemaComment = z.object({
  editComment:z.string()
    .nonempty("Insira um novo comentario"),
})

export default function CardComment({userName,content,time,crm,image,id,postID,autorId}){

  const {user} = useUser()
  const {handleSubmit,register,formState:{errors}, setValue} = useForm({
    resolver:zodResolver(schemaComment)
})
const {socket} = useSocket()


  React.useEffect(()=>{
    setValue("editComment", content)
  },[])

  function editComment(data){
    socket && socket.emit("editComment", {id,conteudo:data.editComment,userID:user.id,postID})
  }

  function deleteComment(){
    socket && socket.emit("deleteComment", {
      id,
      postID,
      userID:user.id
    })
  }

  return(
    <nav className={style.nav}>
      <div className={style.container}>
        <img src={image ? `http://localhost:2004/uploads/${image}/findImage` : crm ? medicoUser:imageUser} alt=" "/>
        <div className={style.between}>
          <div className={style.geral}>
            <div className={style.content}>
              <span style={{fontWeight:"600"}}>{userName}</span>
              <span>{content}</span>
            </div>
           {
            autorId === user.id && (
              <Popover.Root>
              <Popover.Trigger style={{padding:0}}>
                <MoreVertical/>
              </Popover.Trigger>

              <Popover.Content className={style.dropDown}>
                <ul className={style.ul}>
                  <Popover.Root>
                        <Popover.Trigger style={{padding:"0"}}>
                            <li className={style.btnEdit}><FiEdit/>Editar</li>
                        </Popover.Trigger>
                        <Popover.Content className={style.divContent}>
                        <form onSubmit={handleSubmit(editComment)}>
                            <div className={style.divImageText}>
                                <div className={style.divText}>
                                    <textarea 
                                        placeholder="..."
                                        style={{ height: 50 }}
                                        {...register("editComment")}
                                    />
                                    <small>{errors.editMessage && errors.editMessage.message}</small>
                                </div>
                            </div>
                            <div className={style.btnComment}>
                                <button>
                                    Editar
                                </button>
                            </div>
                        </form>
                        </Popover.Content>
                  </Popover.Root>
                  <li className={style.btnDelete} onClick={deleteComment}><FiTrash2/>Eliminar</li>
                </ul>
              </Popover.Content>
            </Popover.Root>
            )
           }
          </div>

          <small>{formatDistanceToNow(time, {locale: ptBR, addSuffix:true})}</small>
        </div>
      </div>
    </nav>
  )

}