import React from "react";
import style from './chat.module.css'
import Main from "../../../../components/main/main";
import {BsSearch} from 'react-icons/bs'
import { FaPaperclip , FaLocationArrow } from "react-icons/fa";
import {UserChat,CardMyConnectionsChat} from "../../../../components/userchat/userchat";
import { MessageRecep, MessageSend } from "../../../../components/messages/messages";
import { LucideMessageSquarePlus, ScrollText, VideoIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog"
import { UseGetMyConnections } from "../../../../hooks/useGetMyConnections";
import { useUser } from "../../../../hooks/contextApi";
import api from "../../../../apiService";
import { LogoFooter } from "../../../../components/logos/logos";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { useSocket } from "../../../../hooks/contextApi/useSocketContext";
import CryptoJS from "crypto-js";
import imageUser from "../../../../assets/img/userImage.png" 
import imageEspecialist from "../../../../assets/img/medicos/icone.jpg" 
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import Cookies from "js-cookie";
import * as Popover from "@radix-ui/react-popover"
import { FormPresentialCard, FormReceita } from "../../../../components/formReceita/formReceita";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'


const messageSchema = z.object({
    message:z.string()
        .nonempty({message:"Escreva a mensagem"})
})

export default function Chat() {
    const {register,handleSubmit,setValue}=useForm({
        resolver:zodResolver(messageSchema)
    })
    const [messages,setMessages]=React.useState([])
    const [myMessages,setMyMessages]=React.useState([])
    const [conversas,setConversas]=React.useState([])
    const [friend,setFriend]=React.useState()
    const [videoSelected,setVideoSelected]=React.useState([])
    const [total,setTotal]=React.useState()
    const [file,setFile]=React.useState([])
    const [verif,setVerif]=React.useState(false)
    const [verif2,setVerif2]=React.useState(false)
    const {socket}=useSocket() 
    const {user} = useUser()
    const [isOpen, setIsOpen] = React.useState(false);
    const [receptor,setReceptor] = React.useState(false)
    const [imagesSelected,setImagesSelected] = React.useState([])
    const [pdfFile, setPdfFile] = React.useState([]);
    const params = useParams()
    const history = useNavigate()
    const location = useLocation()

    React.useEffect(()=>{
        setReceptor(params.id)
        async function getMessages(){
            try{
            if(params.id !== user.id){
                const friend = (await api.post("usuarios/findByID", {id:params.id})).data
                console.log(friend);
                setFriend(friend)
            const test = (await api.post("messages/list", {emissorID:user.id,receptorID:params.id})).data
                setMessages(test)
            }
            }catch(error){
                console.log(error);
            }
        }
        getMessages()
    },[location])

    async function handleJoin(){
        try{
            const channelName = user.id
            console.log(channelName);
            const response = await api.post("videoCall/token", {channelName})
            socket && socket.emit("callUser", {channelName,token:response.data.token,receptorID:friend.id,caller:user.name})
            history(`/videoCall?${channelName}?${response.data.token}`)
           
        }catch(Error){

        }
    }

    async function Onclick(receptorID){
        try{
            history(`/chat/${receptorID}`)
            socket && socket.emit("updateMessageVisto",{emissorID:friend.id,receptorID:receptorID})
            socket && socket.on("updateMessageVisto", (data)=>setTotal(data))
            const test = (await api.post("messages/list", {emissorID:user.id,receptorID:receptorID})).data
            setMessages(test)
        }catch(Error){
            console.log(Error);
        }
    }  

    const Modal = () => {

        const {myConnections} = UseGetMyConnections()

        return (
            <Dialog.Content>
                <AnimatePresence>
                    <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 150, damping: 20 }}
                        style={{
                        position: "fixed",
                        background: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width:"26.5%",
                        height:"41rem",
                        zIndex:"1000"
                        }}
                        className={style.chat1}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 150, damping: 20 }}
                            style={{
                                background: "white",
                                borderRadius: 10,
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
                                width:"100%",
                                height:"100%"
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={style.headerMyEspecialists}> 
                                <h4>Minhas Conexões</h4>
                                <div className="input-group">
                                    <input type="text" placeholder="Pesquisar..." name="" className={`${ style.search} form-control`}/>
                                        <div className="input-group-prepend">
                                            <span className={`${style.search_btn} input-group-text h-100`}><BsSearch/></span>
                                        </div>
                                    </div>
                            </div>
                            <div className={style.especialists}>
                                {
                                    myConnections.length > 0 && myConnections.map(connection=>{
                                        console.log(connection);
                                        if(connection.friendID !== user.id){
                                            return (
                                              <CardMyConnectionsChat 
                                                key={connection.id}
                                                image={connection.friend.foto} 
                                                nameUser={connection.friend.name}
                                                sobre={connection.friend.sobre !== null && connection.friend.sobre}
                                                onclick={()=>Onclick(connection.friendID,connection.friend.name,connection.friend.foto,connection.friend.crm)}
                                                crm={connection.friend.crm}
                                              />
                                            )
                                          }else{
                                            return(
                                              <CardMyConnectionsChat
                                                key={connection.id}
                                                image={connection.user.foto} 
                                                nameUser={connection.user.name}
                                                sobre={connection.user.sobre !== null && connection.user.sobre}
                                                onclick={()=>Onclick(connection.userID,connection.user.name,connection.user.foto)}
                                                crm={connection.user.crm}
                                              />
                                            )
                                          }
                                    })
                                }
                            </div>
    
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </Dialog.Content>
        );
    
    };
    

    React.useEffect(()=>{
        async function getMyMessages(){
            const req = await (await api.post("messages/myMessages",{emissorID:user.id})).data
            setMyMessages(req)
        }
        getMyMessages()
    },[])

     async function SendMessage(data){
            if(file.length > 0){
                const formData = new FormData()
                formData.append("emissorID", user.id)
                formData.append("receptorID", friend.id)
                file.forEach(async (file)=>{
                formData.append("file", file)
                    
                    const message = (await api.post("messages/create", formData, {headers: { 'Content-Type': 'multipart/form-data'}})).data
                    console.log(message);
                    socket && socket.emit("myMessagesWithFriend", {
                        emissorID:user.id,
                        receptorID:friend.id
                    })
                    
                })
                if(data.message){
                    socket.emit('sendMessage', {
                        emissorID: user.id,  
                        receptorID: friend.id,     
                        conteudo: data.message
                    });
                }

                socket && socket.emit("sendNotification", {
                    receiverID:friend.id,
                    type:8,
                    userID:user.id,
                })
                setPdfFile([])
                setImagesSelected([])
                setVideoSelected([])
                setValue("message","")
            }else{
                socket.emit('sendMessage', {
                    emissorID: user.id,  
                    receptorID: friend.id,     
                    conteudo: data.message
                  });
                setValue("message","")

            }
    }

    React.useEffect(()=>{
        socket && socket.on("deleteMessage", (data)=>{
            setMessages(data)
        })
        socket && socket.on("newMessage", (data)=>{
            console.log(data);
            setMessages(data)
        })
        socket && socket.on("totalMessages", (data)=>{
            console.log(data,"totalee");
            setTotal(data)
        })

        socket && socket.on("getMyMessages", (data)=>{
            setMyMessages(data);
            const last = data.length
            data.length > 0 && updateLastMessages([...messages, data[last-1]]);
        })

        socket && socket.on("notificationConsulta", (data)=>{
            toast.info(data)
        })
        
        socket && socket.on("sendMessage", (data) => {
            // Atualiza o estado messages com a nova mensagem
            setMessages(data);
            // Atualiza o estado conversas com as últimas mensagens
            updateLastMessages(data);
        });

        socket && socket.on("callUser", (data)=>{
            console.log(data);
            history(`/videoCall?${data.channelName}?${data.token}`)
            
            const objectCall = {
                caller:data.caller,
                receptorID:data.receptorID,
            }

            const infoCall = JSON.stringify(objectCall)
            Cookies.set("caller", CryptoJS.AES.encrypt(infoCall, "boaSaude").toString())
            
        })

    },[socket])

    // Função para atualizar o estado conversas com as últimas mensagens
    function ultimasMensagens(mensagens) {
        const ultimas = {};
        // Itera sobre cada mensagem
        mensagens.forEach(msg => {
            // Verifica se já existe uma entrada para esse usuário
            if(msg.emissorID !== user.id){
                if (!ultimas[msg.emissor] || ultimas[msg.emissor.email].data < msg.data) {
                    ultimas[msg.emissor.email] = { mensagem: msg.conteudo, data: msg.data, foto:msg.emissor.foto, name:msg.emissor.name,id:msg.emissor.id,crm:msg.emissor.crm};
                }
            }else{
                if (!ultimas[msg.receptor.email] || ultimas[msg.receptor.email].data < msg.data) {
                    ultimas[msg.receptor.email] = { mensagem: msg.conteudo, data: msg.data, foto:msg.receptor.foto,name:msg.receptor.name,id:msg.receptor.id,crm:msg.receptor.crm};
                }
            }
        });
        
        // Converte o objeto em um array
        const resultado = [];
        for (const usuario in ultimas) {
            resultado.push({
                name: ultimas[usuario].name , 
                mensagem: ultimas[usuario].mensagem, 
                foto:ultimas[usuario].foto, 
                data:ultimas[usuario].data,
                id:ultimas[usuario].id,
                crm:ultimas[usuario].crm
            });
        }
        
        return resultado
    }

    React.useEffect(()=>{
        const cookie = Cookies.get("chat")
        if(cookie){
            const chat = CryptoJS.AES.decrypt(cookie,"boaSaude").toString(CryptoJS.enc.Utf8)
            const conversas = JSON.parse(chat)
            if(conversas.length === 0 ){
                const resultado = ultimasMensagens(myMessages)
                Cookies.set("chat", CryptoJS.AES.encrypt(JSON.stringify(resultado),"boaSaude").toString())
                setConversas(resultado)
            }else{
                setConversas(conversas)

            }
        }else{
            const resultado = ultimasMensagens(myMessages)
            Cookies.set("chat", CryptoJS.AES.encrypt(JSON.stringify(resultado),"boaSaude").toString())
            setConversas(resultado)
        }

        console.log(myMessages);
        
    },[myMessages])

    function updateLastMessages(allMessages) {
        const latestMessages = {};
        allMessages.length > 0 && allMessages.forEach(message => {
            if (!latestMessages["friend"] || message.data > latestMessages["friend"].data) {
               if(message.receptorID !== user.id){
                latestMessages["friend"] = {
                    mensagem: message.conteudo,
                    data: message.data,
                    name: message.receptor.name,
                    foto: message.receptor.foto,
                    id:message.receptor.id,
                    crm:message.receptor.crm,
                    total: total // Certifique-se de que total está definido corretamente
                };
               }else{
                latestMessages["friend"] = {
                    mensagem: message.conteudo,
                    data: message.data,
                    name: message.emissor.name,
                    foto: message.emissor.foto,
                    id:message.emissor.id,
                    crm:message.emissor.crm,
                    total: total // Certifique-se de que total está definido corretamente
                };
               }
            }
        }); 
        const cookie = Cookies.get("chat")
        const chat = CryptoJS.AES.decrypt(cookie,"boaSaude").toString(CryptoJS.enc.Utf8)
        const conversas = JSON.parse(chat)
        const newChat = conversas.filter((conversa)=>conversa.id !== latestMessages["friend"].id)
            const conversasCopy = [{
                name: latestMessages["friend"].name , 
                mensagem: latestMessages["friend"].mensagem, 
                foto:latestMessages["friend"].foto, 
                data:latestMessages["friend"].data,
                id:latestMessages["friend"].id,
                crm:latestMessages["friend"].crm,
                total:total
            },...newChat]
            setConversas(conversasCopy)
            Cookies.set("chat", CryptoJS.AES.encrypt(JSON.stringify(conversasCopy),"boaSaude").toString())


    }

    function handleChange(e){
        const selectFiles = Array.from(e.target.files)
        console.log(selectFiles);
        const pdfFile = selectFiles.filter(file => file.type === 'application/pdf')
        const imagem = selectFiles.filter(file => file.type.startsWith('image/'))
        const video = selectFiles.filter(file => file.type.startsWith('video/'))
        
        const newPdfFileUrls = pdfFile.map(file => URL.createObjectURL(file));
        setPdfFile(prevUrls => [...prevUrls, ...newPdfFileUrls]);

        setFile(selectFiles)

        selectFiles.length > 0 && setVerif(true)
        pdfFile.length > 0 && setVerif(true)
        video.length > 0 && setVerif(true)

        const newImages = imagem.map(file=>{
            const reader = new FileReader()

            return new Promise(resolve=>{
                reader.onloadend = ()=>resolve(reader.result)
                reader.readAsDataURL(file)
            })
        })
        Promise.all(newImages).then(urls=>{
            setImagesSelected(prev=> [...prev,...urls])
        })

        const newVideoUrls = video.map(file => URL.createObjectURL(file));
        setVideoSelected(prevUrls => [...prevUrls, ...newVideoUrls]);
    }

    const handleRemoveFile = (index, fileType) => {
        if (fileType === 'pdf') {
          const updatedUrls = [...pdfFile];
          updatedUrls.splice(index, 1);
          setPdfFile(updatedUrls);
        } else if (fileType === 'image') {
          const updatedUrls = [...imagesSelected];
          updatedUrls.splice(index, 1);
          setImagesSelected(updatedUrls);
        } else if (fileType === 'video') {
          const updatedUrls = [...videoSelected];
          updatedUrls.splice(index, 1);
          setVideoSelected(updatedUrls);
        }
      };
    return(
        
        <Main>
            <div className={style.containerChat}>
                <div className={`${style.chatGeral} row`}>
                    <Dialog.Root>
                            <Modal
                                isOpen={isOpen}
                            />
                        <div className={`${style.chat1}`}>
                            
                            <div className={`${style.cardContacts} ${style.contacts_card} mb-sm-3 mb-md-0`}>
                                <div className={`${style.card_header} position-relative`}>
                                    <div className="d-flex justify-content-between">
                                        <h4>Conversas</h4>
                                        <Dialog.Trigger style={{border:"none",background:"none"}}>
                                            <LucideMessageSquarePlus 
                                                strokeWidth="1PX" 
                                                cursor="pointer" 
                                            />
                                        </Dialog.Trigger>                                        
                                    </div>
                                    <div className="input-group">
                                        <input type="text" placeholder="Pesquisar..." name="" className={`${ style.search} form-control`}/>
                                        <div className="input-group-prepend">
                                            <span className={`${style.search_btn} input-group-text h-100`}><BsSearch/></span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={`${style.contacts_body} `}>
                                
                                    <ul>   
                                        {
                                            conversas.length > 0 && conversas.map(message=>(
                                                    <UserChat   
                                                        image={message.foto}
                                                        nameUser={message.name}
                                                        message={message.mensagem}
                                                        onclick={()=>Onclick(message.id,message.name,message.foto,message.crm)}
                                                        crm={message.crm}
                                                        data={message.data}
                                                        total={message.total}
                                                        receptorID={message.id}
                                                    />
                                                )
                                            )
                                        } 
                                    </ul>
                                </div>
                                <div className={style.card_footer}></div>
                            </div>
                        </div>
                    </Dialog.Root>
                    <div className={`${style.chat} ${style.messagesContainer} col-md-8 col-xl-6`}>
                        {
                            friend ? (
                                <div className={style.cardMessages}>
                                <div className={`${style.card_header} ${style.msg_head}`}>
                                    <div className="d-flex" style={{gap:".5rem",alignItems:"center",justifyContent:"space-between",zIndex:"2"}}>
                                        <div className={style.img_cont}>
                                            <img src={friend.foto ? `http://localhost:2004/uploads/${friend.foto}/findImage`: friend.crm ? imageEspecialist : imageUser } alt="" className={`${style.user_img} rounded-circle`} />
                                            <span className={style.online_icon}></span>
                                            <Link to={`/perfil/${friend.id}`} style={{color:"#000"}}><span>{friend.name}</span></Link>
                                        </div>
                                        <div className={style.video_cam}>
                                            {
                                                user.crm && (
                                                    <Dialog.Root>
                                                        <Popover.Root>
                                                            <Popover.Trigger>
                                                                <ScrollText strokeWidth="1.5" />
                                                            </Popover.Trigger>
                                                            <Popover.Content className={style.menu}>
                                                                <ul style={{position:"relative",display:"flex",flexDirection:"column"}}>

                                                                    <Dialog.Trigger onClick={()=>setVerif2(true)} style={{padding:"0",width:"100%",textAlign:"start"}}>
                                                                        <li>Preescrever Receita</li>
                                                                    </Dialog.Trigger>
                                                                    
                                                                    <Dialog.Trigger onClick={()=>setVerif2(false)} style={{padding:"0",textAlign:"start"}}>
                                                                        <li>Carta/Consulta Presencial</li>
                                                                    </Dialog.Trigger>                                                                
                                                                </ul>
                                                                    

                                                            </Popover.Content>
                                                            
                                                        </Popover.Root>
                                                        <Dialog.Overlay style={{inset:"0",background:"#000",opacity:"60%", position:"fixed", zIndex:"1002",display:"flex",alignItems:"center"}}/>
                                                        
                                                        <Dialog.Portal>
                                                            {
                                                                verif2 ? (
                                                                    <Dialog.Content className={style.formReceita}>
                                                                <FormReceita
                                                                    pacienteNome={friend.name}
                                                                />
                                                            </Dialog.Content>
                                                                ): (
                                                                    <Dialog.Content className={style.formReceita}>
                                                                <FormPresentialCard
                                                                    pacienteNome={friend.name}
                                                                />
                                                            </Dialog.Content>
                                                                )
                                                            }
                                                            
                                                            
                                                        </Dialog.Portal>
                                                    
                                                    </Dialog.Root>
                                                )
                                            }
                                            <span onClick={handleJoin}><VideoIcon strokeWidth="1.5" cursor="pointer"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.card_body} ${style.msg_card_body}`} >
                                    {messages.length > 0 && messages.map(message=>{
                                        if(message.emissorID === user.id){
                                            return(
                                                <MessageSend 
                                                    image={message.foto}
                                                    video={message.video}
                                                    message={message.conteudo}
                                                    data={message.data}
                                                    id={message.id}
                                                    friendID={message.receptorID}  
                                                    arquivo={message.arquivo}
                                                />
                                                )
                                        }else{
                                            return(
                                                <MessageRecep 
                                                    image={message.foto}
                                                    video={message.video}
                                                    message={message.conteudo}
                                                    data={message.data}
                                                    friendID={message.emissorID}  
                                                    id={message.id}
                                                    arquivo={message.arquivo}
                                                />
                                                )
                                        }
                                    })} 
                                </div>
                                <div classNameName={`${style.card_footer}`}>
                                    {
                                        verif && 
                                        <div className={style.images}>
                                            {   
                                                imagesSelected.map((url,index)=>(
                                                    <div>
                                                        <img src={url} alt="" className={style.img}/>
                                                         <button className={style.btnRemove} onClick={() => handleRemoveFile(index, 'image')}><X/></button>
                                                    </div>
                                                ))
                                            }
                                            {
                                                videoSelected.map((url,index)=>(
                                                    <div>
                                                        <video src={url} alt="" controls style={{ width: '120px', height: '200px' }}/>
                                                        <button className={style.btnRemove} onClick={() => handleRemoveFile(index, 'video')}><X/></button>
                                                    </div>
                                                    
                                                ))
                                            }
                                            {
                                                pdfFile.map((url,index)=>(
                                                    <div key={index} >
                                                        <embed src={url} width="70%" height="70%" title={`PDF Preview ${index + 1}`}></embed>
                                                        <button className={style.btnRemove} onClick={() => handleRemoveFile(index, 'pdf')}><X/></button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                    <div className="input-group">
                                        <form className="input-group" onSubmit={handleSubmit(SendMessage)}>
                                         
                                            <div className="input-group-append">
                                                
                                                <label htmlFor="input-file" className={`${style.attach_btn} input-group-text h-100`}>
                                                    <input 
                                                        type="file" 
                                                        id="input-file"
                                                        style={{display:"none"}}    
                                                        onChange={handleChange}
                                                    />
                                                    <span><FaPaperclip/></span>
                                                </label>
                                            </div>
                                            <input className={`${style.type_msg} form-control`} {...register("message")} placeholder="Escreva uma mensagem..."></input>
                                            
                                            <div className="input-group-append">
                                                <button className={`${style.send_btn} input-group-text h-100`}><FaLocationArrow/></button>
                                            </div>
                                        </form>
                                    </div>
                                </div> 
                                </div>
                            ): (
                                <div className={`${style.cardMessages} ${style.apresentation}`}>
                                    <div className={style.apresentationBody}>
                                        <LogoFooter/>
                                        <p>Converse com nossos especialistas, faça video-chamada <br></br>para uma melhor experiência.</p>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
		    </div>
        </Main>
    )
}