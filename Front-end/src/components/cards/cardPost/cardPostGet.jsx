import React from "react";
import style from "./cardPost.module.css"
import imageUser from "../../../assets/img/userImage.png"
import imageEspecialist from "../../../assets/img/medicos/icone.jpg"
import {
    FiMoreHorizontal,
    FiEdit,
    FiTrash2
} from "react-icons/fi"
import { Link } from "react-router-dom";
import { Col12 } from "../../columRow/columRow";
import api from "../../../apiService"
import * as Dialog from "@radix-ui/react-dialog"
import {formatDistanceToNow} from "date-fns"
import {ptBR} from "date-fns/locale"
import { useUser } from "../../../hooks/contextApi";
import { HandIcon, MessageSquareMore, Send, X } from "lucide-react";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";
import { useSocket } from "../../../hooks/contextApi/useSocketContext";
import * as Popover from "@radix-ui/react-popover"
import CardComment from "../cardComment/cardComment";
import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {VideoPlayer} from "../../videoPlayer/videoPlayer";
import {motion} from "framer-motion"
import interessante from "../../../assets/img/reactions/monoclo.png"
import brilhante from "../../../assets/img/reactions/lampada.png"
import parabens from "../../../assets/img/reactions/palmas.png"
import gosto from "../../../assets/img/reactions/like.png"
import CardPost from "./cardPost";
import { UseGetAllUsers } from "../../../hooks/useGetAllUsers";


const schemaTextArea = z.object({
    editPost:z.string()
        .nonempty("Preencha o campo")
})

export default function CardPostShare({legend,name,id,userPhoto,crm,data,autorID,video,image,postShare}){
    const {handleSubmit,register,formState:{errors}, setValue} = useForm({
        resolver:zodResolver(schemaTextArea)
    })
    const {socket} = useSocket()
    const {user} = useUser()
    const [totalReaction,setTotalReaction] = React.useState(null)
    const [content,setContent] = React.useState(null)
    const [messageError,setMessageError] = React.useState(null)
    const [btnChange,setBtnChange] = React.useState(false)
    const [myReaction,setMyReaction] = React.useState(false)
    const [reaction,setReaction] = React.useState(null)
    const [allComments,setAllComments] = React.useState([])
    const [totalComments,setTotalComments] = React.useState([])
    const [verif,setVerif] = React.useState([])
    const {allUsers} = UseGetAllUsers()
    const index = allUsers.findIndex(user=>user.id === postShare.usuarioID)
    const animationStyle = {
        visible:{
            opacity:1,
            transition: {
                when: "afterChildren",
                staggerChildren: 0.2,
            }
        },
        hidden:{
            opacity:0,
            transition: {
                when: "beforeChildren"
            },
            scale:0.6,
        },
    }

    const deletePost = async ()=>{
        const postID = id
        console.log(postID);
        await api.post("posts/delete", {postID})
        window.location.reload()
    }

    function handleReaction(reaction){
        
        if(reaction === "gosto"){
            socket && socket.emit("createReaction", {
                postId:id,
                userId:user.id,
                type:"Gosto",
                verif:false
            })

            if(autorID!==user.id){
                socket && socket.emit("sendNotification", {
                    receiverID:autorID,
                    type:3,
                    userID:user.id,
                    postID:id
                })
            }
            setReaction(gosto)
            setMyReaction(true)

        }else if(reaction === "interessante"){
            socket && socket.emit("createReaction", {
                postId:id,
                userId:user.id,
                type:"Interessante",
                verif:false
            })
            if(autorID!==user.id){
                socket && socket.emit("sendNotification", {
                    receiverID:autorID,
                    type:3,
                    userID:user.id,
                    postID:id
                })
            }
            setReaction(interessante)
            setMyReaction(true)


        }else if(reaction === "parabens"){
            socket && socket.emit("createReaction", {
                postId:id,
                userId:user.id,
                type:"Parabens",
                verif:false
            })
            if(autorID!==user.id){
                socket && socket.emit("sendNotification", {
                    receiverID:autorID,
                    type:3,
                    userID:user.id,
                    postID:id
                })
            }
            setReaction(parabens)
            setMyReaction(true)


        }else if(reaction === "brilhante"){
            socket && socket.emit("createReaction", {
                postId:id,
                userId:user.id,
                type:"Brilhante",
                verif:false
            })
            if(autorID !== user.id){
                socket && socket.emit("sendNotification", {
                    receiverID:autorID,
                    type:3,
                    userID:user.id,
                    postID:id
                })
            }
            setReaction(brilhante)
            setMyReaction(true)
        }
        

        setBtnChange(true)
    }

    React.useEffect(()=>{

        async function CountNotification(){
            const count = await (await api.post("reactions/count",{postID:id})).data
            setTotalReaction(count)

            const comments = (await api.post("comments/findByPostID", {postId:id})).data
            comments && setAllComments(comments)

            const total = (await api.post("comments/count", {postID:id})).data
            setTotalComments(total)

            const reactionUser = await api.post("reactions/findPostIDAndUserID", {
                postID:id,
                userID:user.id
            })
            
            if(reactionUser.data && reactionUser.data.type === "Gosto"){
                setReaction(gosto)
                setMyReaction(true)
            }else if(reactionUser.data && reactionUser.data.type === "Brilhante"){
                setReaction(brilhante)
                setMyReaction(true)
            }else if(reactionUser.data && reactionUser.data.type === "Parabens"){
                setReaction(parabens)
                setMyReaction(true)
            }else if(reactionUser.data && reactionUser.data.type === "Interessante"){
                setReaction(interessante)
                setMyReaction(true)
            }

        }

        setValue("editPost",legend)
        CountNotification()
    },[])

    async function Like(){
        const count = await (await api.post("reactions/count",{postID:id})).data
        setTotalReaction(count)
        setVerif(false)
    }

    React.useEffect(()=>{
        socket && socket.on("createReaction", (data)=>{
            if(data){
                setVerif(true)
            }
        })
    },[socket])

    React.useEffect(()=>{
        Like()
    },[verif])

    function handleComment(){
        if(content){
            socket && socket.emit("createComment", {
                postId:id,
                autorId:user.id,
                conteudo:content
            })

            socket && socket.on("createComment", (data)=> {
                console.log(data.total);
                setAllComments(data.found)
                setTotalComments(data.total)
            })

            if(autorID !== user.id){
                socket && socket.emit("sendNotification", {
                    receiverID:autorID,
                    type:4,
                    userID:user.id,
                    postID:id
                })
            }
        }else{
            setMessageError("Preencha o campo")
        }
    }

    function reactionDelete(){
        socket && socket.emit("createReaction", {
            postId:id,
            userId:user.id,
            verif:true
        })
        setVerif(true)
        setMyReaction(false)
    }

    async function editPost(data){
        await api.post("posts/edit", {postID:id,conteudo:data.editPost})
        window.location.reload()
    }

    async function sharePost(data){
        console.log(data);
        const req1 = (await api.post("posts/",{conteudo:data.share,usuarioID:user.id,})).data
        const req2 = (await api.post("share/create", {postShareID:id,userID:user.id,createPostShareID:req1.id})).data

        console.log(req1, req2);
    }

    return(
        <Col12>
            <nav className={style.container}>
                <div className={style.divGeral}>
                    <nav className={style.headerPost}>
                        <div className={style.userInfo}>
                            <Link to="/perfil">
                                <img className={style.imageUser} src={userPhoto ? `http://localhost:2004/uploads/${userPhoto}/findImage` : crm === null ? imageUser : imageEspecialist} alt=""/>
                            </Link>
                            <div className={style.infoLetters}>
                                <h6>{name}</h6>
                                <small>{formatDistanceToNow(data, {locale: ptBR, addSuffix:true})}</small>
                            </div>
                        </div>
                        {/*Popover para Editar e eliminar */}
                        <Popover.Root>
                            <Popover.Trigger style={{border:"none", background:"transparent"}}>
                                {
                                    autorID === user.id && <FiMoreHorizontal/>
                                }
                            </Popover.Trigger >
                                  
                            <Popover.Content className={style.dropDown}>
                                <ul className={style.ul}>
                                    <Dialog.Root>
                                    <Dialog.Overlay style={{inset:"0",background:"#000",opacity:"60%", position:"fixed", zIndex:"3000"}}/>
                                    <Dialog.Trigger className={style.btnEdit}><li><FiEdit/> Editar</li></Dialog.Trigger>
                                        <Dialog.Portal>
                                            <Dialog.Content className={style.editContainer}>
                                                <div className={style.header}>
                                                    <div>
                                                        <h5>Editar publicação</h5>
                                                        <Dialog.DialogClose className={style.btnClose}>
                                                            <X/>
                                                        </Dialog.DialogClose>
                                                    </div>
                                                </div>
                                                <div className={style.body}>
                                                    <div className={style.imgName}>
                                                        <img src={user.foto ? `http://localhost:2004/uploads/${user.foto}/findImage` : user.crm ? imageEspecialist : imageUser} alt=""/>
                                                        <span>{user.name}</span>
                                                    </div>
                                                    <form onSubmit={handleSubmit(editPost)}>
                                                        <textarea
                                                            {...register("editPost")}
                                                        />
                                                    {
                                                            errors.editPost &&  <small style={{color:"red"}}>{errors.editPost.message}</small>
                                                    }
                                                    <button>Guardar</button>
                                                    </form>
                                                </div>
                                            </Dialog.Content>
                                        </Dialog.Portal>
                                    </Dialog.Root>
                                    <li className={style.btnDelete} onClick={deletePost}><FiTrash2/>Eliminar</li>
                                </ul>
                            </Popover.Content>
                        </Popover.Root>
                        
                    </nav>
                    <div className={style.legendReactions}>
                        <p>{legend}</p>
                        <div className={style.share}>
                            {
                                index !== -1 && (
                                    <CardPost
                                        autorID={postShare.usuarioID}
                                        data={postShare.data}
                                        legend={postShare.conteudo} 
                                        name={allUsers[index].name} 
                                        id={postShare.id}
                                        userPhoto={allUsers[index].foto}
                                        crm={allUsers[index].crm}
                                        image={postShare.foto}
                                        video={postShare.video}
                                        share={true}
                                    />
                                )
                            }
                        </div>
                    </div>
                    
                        <div className={style.info}>
                            <small>{totalReaction > 0 && totalReaction + " Gostos "}</small> 
                            <small>{totalComments > 0 && totalComments + " Comentarios"}</small>
                        </div>
                    <div className={style.divActions}>
                        <motion.div style={{position:"relative"}} onMouseLeave={()=>setBtnChange(false)}>
                            <motion.div className={style.reactions} variants={animationStyle} animate={btnChange ? "visible" : "hidden"}>
                                <motion.img whileHover={{scale:1.2}} src={gosto} alt="" title="Gosto" onClick={()=>handleReaction("gosto")}/>
                                <motion.img whileHover={{scale:1.2}} src={interessante} alt="Interessante" title="Interessante" onClick={()=>handleReaction("interessante")}/>
                                <motion.img whileHover={{scale:1.2}} src={parabens} alt="Paranbens" title="Paranbéns" onClick={()=>handleReaction("parabens")}/>
                                <motion.img whileHover={{scale:1.2}} src={brilhante} alt="Brilhante" title="Brilhante" onClick={()=>handleReaction("brilhante")}/>
                            </motion.div>
                                <div onMouseOver={()=>setBtnChange(true)} className={`${style.icons} ${style.liked}`}>
                                    {myReaction && reaction === gosto && (
                                        <div onClick={reactionDelete}>
                                            <BsHandThumbsUpFill className={style.like} fill="#56b8e6"/>
                                            <span>Gosto</span>
                                        </div>
                                    )}

                                    {myReaction && reaction === interessante && (
                                        <div onClick={reactionDelete}>
                                            <img src={interessante} alt="" style={{width:"30px"}}/>
                                            <span>Interessante</span>
                                        </div>
                                    )}

                                    {myReaction && reaction === parabens && (
                                        <div onClick={reactionDelete}>
                                            <img src={parabens} alt="" style={{width:"30px"}}/>
                                            <span>Parabéns</span>
                                        </div>
                                    )}

                                    {myReaction && reaction === brilhante && (
                                        <div onClick={reactionDelete}>
                                            <img src={brilhante} alt="" style={{width:"30px"}}/>
                                            <span>Brilhante</span>
                                        </div>
                                    )}

                                    {
                                        !myReaction && (
                                            <div onClick={()=>handleReaction("gosto")}>
                                                <BsHandThumbsUp className={style.like}/>
                                                <span>Gosto</span>
                                            </div>
                                        )
                                    }
                                    
                                </div>
                        </motion.div>
                        <Popover.Root>
                            
                            {
                                allComments.length <= 2 ? (
                                    <>
                                        <Popover.Trigger className={style.icons}>
                                            <MessageSquareMore strokeWidth="1"/>
                                            <span>Comentario</span>
                                        </Popover.Trigger>
                                        <Popover.Content className={style.divContent}>
                                        <div className={style.divImageText}>
                                            <div className={style.avatar}>
                                                <img src={user.foto ? `http://localhost:2004/uploads/${user.foto}/findImage`: user.crm ? imageEspecialist:imageUser} alt=" "/>
                                            </div>
                                            <div className={style.divText}>
                                                <textarea 
                                                    placeholder="Escreva um comentario..."
                                                    style={{ height: 80 }}
                                                    required
                                                    onChange={(e)=>setContent(e.target.value)}
                                                />
                                                <small>{messageError}</small>
                                            </div>
                                        </div>
                                        <div className={style.btnComment}>
                                            <button onClick={handleComment}>
                                                Comentar
                                            </button>
                                        </div>
                                        </Popover.Content>
                                    </>
                                ): (
                                    <Dialog.Root>
                                        <Dialog.Trigger className={style.icons}>
                                            <MessageSquareMore strokeWidth="1"/>
                                            <span>Comentario</span>
                                        </Dialog.Trigger>
                                        <Dialog.Overlay style={{inset:"0",background:"#000",opacity:"60%", position:"fixed", zIndex:"1002"}}/>
                                        <Dialog.Portal >
                                            <Dialog.Content className={style.divContent2}>

                                                <Col12>
                                                    <nav className={`${style.container} ${style.scrollPost}`}>
                                                        <div className={style.header}>
                                                            <div>
                                                                <h5>Pulicação de {name}</h5>
                                                                <Dialog.Close className={style.btnClose}>
                                                                    <X/>    
                                                                </Dialog.Close>
                                                            </div>
                                                        </div>
                                                        <div className={style.divGeral}>
                                                            <nav className={style.headerPost}>
                                                                <div className={style.userInfo}>
                                                                    <Link to="/perfil">
                                                                        <img className={style.imageUser} src={userPhoto ? `http://localhost:2004/uploads/${userPhoto}/findImage` : crm === null ? imageUser : imageEspecialist} alt=""/>
                                                                    </Link>
                                                                    <div className={style.infoLetters}>
                                                                        <h6>{name}</h6>
                                                                        <small>{formatDistanceToNow(data, {locale: ptBR, addSuffix:true})}</small>
                                                                    </div>
                                                                </div>

                                                                <Dialog.Root>
                                                                    <Dialog.Trigger style={{border:"none", background:"transparent"}}>
                                                                        {
                                                                            autorID === user.id && <FiMoreHorizontal/>
                                                                        }
                                                                    </Dialog.Trigger >
                                                                                                
                                                                    <Dialog.Content className={style.dropDown}>
                                                                        <Dialog.Root >
                                                                        <Dialog.Overlay style={{inset:"0",background:"#000",opacity:"60%", position:"fixed", zIndex:"3000"}}/>

                                                                        <Dialog.Trigger className={style.btnEdit}><FiEdit/> Editar</Dialog.Trigger>
                                                                            <Dialog.Portal>
                                                                                <Dialog.Content className={style.editContainer}>
                                                                                    <div className={style.header}>
                                                                                        <div>
                                                                                            <h5>Editar publicação</h5>
                                                                                            <Dialog.DialogClose className={style.btnClose}>
                                                                                                <X/>
                                                                                            </Dialog.DialogClose>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className={style.body}>
                                                                                        <div className={style.imgName}>
                                                                                            <img src={user.foto ? `http://localhost:2004/uploads/${user.foto}/findImage` : user.crm ? imageEspecialist : imageUser} alt=""/>
                                                                                            <span>{user.name}</span>
                                                                                        </div>
                                                                                        <form onSubmit={handleSubmit(editPost)}>
                                                                                            <textarea
                                                                                                {...register("editPost")}
                                                                                            />
                                                                                        {
                                                                                                errors.editPost &&  <small style={{color:"red"}}>{errors.editPost.message}</small>
                                                                                        }
                                                                                        <button>Guardar</button>
                                                                                        </form>
                                                                                    </div>
                                                                                </Dialog.Content>
                                                                            </Dialog.Portal>
                                                                        </Dialog.Root>
                                                                        <button className={style.btnDelete} onClick={deletePost}><FiTrash2/>Eliminar</button>
                                                                    </Dialog.Content>
                                                                </Dialog.Root>
                                                                
                                                            </nav>
                                                            <div className={style.legendReactions}>
                                                                <p>{legend}</p>
                                                                <CardPost
                                                                    crm="345ds"
                                                                    data={new Date()}
                                                                    name="Neusa"
                                                                    legend="sdfsd"
                                                                    share={true}
                                                                />
                                                            </div>
                                                                
                                                                <div className={style.info}>
                                                                    <small>{totalReaction > 0 && totalReaction + " Gostos "}</small> 
                                                                    <small>{totalComments > 0 && totalComments + " Comentarios"}</small>
                                                                </div>
                                                            <div className={style.divActions}>
                                                                <div className={style.icons} onClick={handleReaction}>
                                                                    {btnChange ? <BsHandThumbsUpFill className={style.like} fill="#56b8e6"/> : <BsHandThumbsUp className={style.like}/>}
                                                                    <span>Gosto</span>
                                                                </div>
                                                                <Popover.Root>
                                                                    <Popover.Trigger className={style.icons}>
                                                                        <MessageSquareMore strokeWidth="1"/>
                                                                        <span>Comentario</span>
                                                                    </Popover.Trigger>
                                                                            <Popover.Content className={style.divContent}>
                                                                            <div className={style.divImageText}>
                                                                                <div className={style.avatar}>
                                                                                    <img src={user.foto ? `http://localhost:2004/uploads/${user.foto}/findImage`: user.crm ? imageEspecialist:imageUser} alt=" "/>
                                                                                </div>
                                                                                <div className={style.divText}>
                                                                                    <textarea 
                                                                                        placeholder="Escreva um comentario..."
                                                                                        style={{ height: 80 }}
                                                                                        required
                                                                                        onChange={(e)=>setContent(e.target.value)}
                                                                                    />
                                                                                    <small>{messageError}</small>
                                                                                </div>
                                                                            </div>
                                                                            <div className={style.btnComment}>
                                                                                <button onClick={handleComment}>
                                                                                    Comentar
                                                                                </button>
                                                                            </div>
                                                                            </Popover.Content>
                                                                    
                                                                </Popover.Root>
                                                                <Dialog.Root>
                            <Dialog.Trigger className={style.trigga}>
                                <div className={style.icons}>
                                    <Send strokeWidth="1"/>
                                    <span>Partilhar</span>
                                </div>
                            </Dialog.Trigger>
                            <Dialog.Overlay style={{inset:"0",background:"#000",opacity:"60%", position:"fixed", zIndex:"1000"}}/>
                            <Dialog.Portal>
                                <Dialog.Content className={style.shareContainer}>
                                     <div className={style.header}>
                                        <div>
                                            <h5>Partilhar {name === user.name && "sua" } publicação {name !== user.name && "de" + " " + name}</h5>
                                            <Dialog.DialogClose className={style.btnClose}>
                                                <X/>
                                            </Dialog.DialogClose>
                                        </div>
                                    </div>
                                    <div className={style.body}>
                                        <div className={style.imgName}>
                                            <img src={user.foto ? `http://localhost:2004/uploads/${user.foto}/findImage` : user.crm ? imageEspecialist : imageUser} alt=""/>
                                            <span>{user.name}</span>
                                        </div>
                                        <form onSubmit={handleSubmit(sharePost)}>
                                            <textarea
                                            {...register("share")}
                                                placeholder="Insira uma legenda"
                                            />
                                        {
                                                errors.editPost &&  <small style={{color:"red"}}>{errors.editPost.message}</small>
                                        }
                                        <button>Enviar</button>
                                        </form>
                                    </div>
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                                                            </div>
                                                            <div className={style.comments}>
                                                                {
                                                                    allComments.length > 0 && allComments.map((comment,index)=>(
                                                                        <CardComment
                                                                            key={index}
                                                                            content={comment.conteudo}
                                                                            userName={comment.autor.name}
                                                                            crm={comment.autor.crm}
                                                                            image={comment.autor.foto}
                                                                            time={comment.createdAt}
                                                                        />
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    </nav>
                                                </Col12>
                                                
                                            </Dialog.Content>
                                        </Dialog.Portal>
                                    </Dialog.Root>
                                    
                                )
                            }
                            
                            
                        </Popover.Root>
                        <Dialog.Root>
                            <Dialog.Trigger className={style.trigga}>
                                <div className={style.icons}>
                                    <Send strokeWidth="1"/>
                                    <span>Partilhar</span>
                                </div>
                            </Dialog.Trigger>
                            <Dialog.Overlay style={{inset:"0",background:"#000",opacity:"60%", position:"fixed", zIndex:"1000"}}/>
                            <Dialog.Portal>
                                <Dialog.Content className={style.shareContainer}>
                                     <div className={style.header}>
                                        <div>
                                            <h5>Partilhar {name === user.name && "sua" } publicação {name !== user.name && "de" + " " + name}</h5>
                                            <Dialog.DialogClose className={style.btnClose}>
                                                <X/>
                                            </Dialog.DialogClose>
                                        </div>
                                    </div>
                                    <div className={style.body}>
                                        <div className={style.imgName}>
                                            <img src={user.foto ? `http://localhost:2004/uploads/${user.foto}/findImage` : user.crm ? imageEspecialist : imageUser} alt=""/>
                                            <span>{user.name}</span>
                                        </div>
                                        <form onSubmit={handleSubmit(sharePost)}>
                                            <textarea
                                            {...register("share")}
                                                placeholder="Insira uma legenda"
                                            />
                                        {
                                                errors.editPost &&  <small style={{color:"red"}}>{errors.editPost.message}</small>
                                        }
                                        <button>Enviar</button>
                                        </form>
                                    </div>
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                    </div>
                    <div className={style.comments}>
                        {
                            allComments.length > 0 && allComments.slice(0,2).map((comment,index)=>(
                                <CardComment
                                    key={index}
                                    content={comment.conteudo}
                                    userName={comment.autor.name}
                                    crm={comment.autor.crm}
                                    image={comment.autor.foto}
                                    time={comment.createdAt}
                                />
                            ))
                        }
                    </div>
                </div>
            </nav>
        </Col12>
    )
}