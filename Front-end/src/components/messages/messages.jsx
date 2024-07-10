import React from "react";
import style from "./messages.module.css"
import { Mb4JustifyEnd, Mb4JustifyStart } from "../columRow/columRow";
import { format} from "date-fns";
import { MoreVertical } from "lucide-react";
import * as Popover from "@radix-ui/react-popover"
import { FiEdit } from "react-icons/fi";
import { BsTrash3 } from "react-icons/bs";
import { useSocket } from "../../hooks/contextApi/useSocketContext";
import { useUser } from "../../hooks/contextApi";
import { Link } from "react-router-dom";
import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

const schema = z.object({
    editMessage:z.string()
    .nonempty("Insira uma mensagem")
})

export function MessageRecep({message,data,id,friendID,image,video,arquivo}){
    console.log(image);
    const update = new Date(data)
    const hora = format(update,"HH:mm")
    const {socket} = useSocket()
    const {user} = useUser()
    const [content,setContent] = React.useState()
    const [messageError,setMessageError] = React.useState()
    const newStyle = {
        "display": (image || video || arquivo) && "flex",
        "flex-direction": (image || video || arquivo) && "column",
    }
    const noPadding={
        "padding": (image || video) && "0"
    }
   

    function deleteMessage(){
        
        socket && socket.emit("deleteMessage", {
            id,
            emissorID:friendID,
            receptor:user.id
        })

    }

    

    return(

        <Mb4JustifyEnd>
                    <div style={noPadding} className={style.msg_cotainer}>
                        <div style={newStyle}>
                            {
                                image && <div style={{backgroundImage:`url(http://localhost:2004/messages/${image}/findFile)`}} className={style.imageSms}></div>
                            }

                            {
                                video && <video src={`http://localhost:2004/messages/${video}/findFile`} controls className={style.video}/>
                            }

                            {
                                arquivo && 
                                <Link to={`http://localhost:2004/messages/${arquivo}/findFile`} download={arquivo} className={style.file}>
                                    {arquivo}
                                </Link>
                            }

                            {message}

                        </div>
                        <span class={style.msg_time}>{hora}</span>
                    </div>

                   
                {
                        friendID === user.id && (
                        <Popover.Root>
                            <Popover.Trigger>
                                <MoreVertical className={style.more}/>
                            </Popover.Trigger>

                            <Popover.Content className={style.content}>
                                <ul className={style.ul}>
                                    <li><FiEdit/> Edit</li>
                                    <li onClick={deleteMessage}><BsTrash3/>Eliminar</li>
                                </ul>
                            </Popover.Content>
                        </Popover.Root>
                    )
                }
            
        </Mb4JustifyEnd>
        
    )
}

export function MessageSend({message,data,id,friendID,image,video,arquivo}){
    const update = new Date(data)
    const hora = format(update,"HH:mm")
    const {socket} = useSocket()
    const {user} = useUser()
    const newStyle = {
        "display": (image || video || arquivo) && "flex",
        "flex-direction": (image || video || arquivo) && "column",
    }
    const [content,setContent] = React.useState()
    const [messageError,setMessageError] = React.useState()

    const noPadding={
        "padding": (image || video) && "0"
    }
    const {setValue,register,formState:{errors},handleSubmit} = useForm({
        resolver:zodResolver(schema)
    })
    function deleteMessage(){
        
        socket && socket.emit("deleteMessage", {
            id,
            emissorID:user.id,
            receptorID:friendID
        })

    }

    React.useEffect(()=>{
        setValue("editMessage", message)
    },[])

    function handleEdit(value){
        console.log(value.editMessage);
       socket && socket.emit("editMessage", {
            id,
            emissorID:user.id,
            receptorID:friendID,
            conteudo:value.editMessage
       })
    }
    return(

        <Mb4JustifyStart>
            <div style={noPadding} className={style.msg_cotainer_send}>
              <div style={newStyle}>
                {
                    image && <div style={{backgroundImage:`url(http://localhost:2004/messages/${image}/findFile)`}} className={style.imageSms}></div>
                }

                {
                    video && <video src={`http://localhost:2004/messages/${video}/findFile`} controls className={style.video}/>
                }
                
                {
                    arquivo && 
                    <Link to={`http://localhost:2004/messages/${arquivo}/findFile`} download={arquivo} className={style.file}>
                        {arquivo}
                    </Link>
                }
              {message}
              
              </div>
              <span class={style.msg_time_send}>{hora}</span>
            </div>
            <Popover.Root>
                <Popover.Trigger>
                    <MoreVertical className={style.more}/>
                </Popover.Trigger>

                <Popover.Content className={style.content}>
                    <ul className={style.ul}>
                        <Popover.Root>
                            <Popover.Trigger style={{padding:"0"}}>
                                {
                                    !image && <li><FiEdit/>Editar</li>
                                }
                            </Popover.Trigger>
                            <Popover.Content className={style.divContent}>
                            <form onSubmit={handleSubmit(handleEdit)}>
                                <div className={style.divImageText}>
                                    <div className={style.divText}>
                                        <textarea 
                                            placeholder="..."
                                            style={{ height: 50 }}
                                            {...register("editMessage")}
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
                        <li onClick={deleteMessage}><BsTrash3/>Eliminar</li>
                    </ul>
                </Popover.Content>
            </Popover.Root>
        </Mb4JustifyStart>
        
    )
}