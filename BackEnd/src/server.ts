import Express, {Request,Response} from "express";
import cors from "cors"
import { router } from "./routes";
import bodyParser from "body-parser";
import http from "http"
import {Server,Socket} from "socket.io"
import { findByIDController } from "./usecase/maisSaude/user/findById";
import { findByIDSocketController } from "./usecase/maisSaude/user/findByIdSocket";
import { createPedidoDeConexaoController } from "./usecase/maisSaude/pedidoDeConexao/create";
import { listPedidoDeConexaoController } from "./usecase/maisSaude/pedidoDeConexao/list";
import { createNotificationController } from "./usecase/maisSaude/notificacoes/create";
import { findByUserIDController } from "./usecase/maisSaude/notificacoes/fincByUserID";
import { findPedidoController } from "./usecase/maisSaude/pedidoDeConexao/findPedido";
import { acceptPedidoDeConexaoController } from "./usecase/maisSaude/pedidoDeConexao/accepted";
import { deleteNotificationsController } from "./usecase/maisSaude/notificacoes/delete";
import { deletePedidoController } from "./usecase/maisSaude/pedidoDeConexao/delete";
import { deleteMyConnectionController } from "./usecase/maisSaude/myConnections/delete";
import { allMyConnectionsController } from "./usecase/maisSaude/myConnections/allConnectios";
import { getOurMessagesController } from "./usecase/maisSaude/messages/getOurMessages";
import { createMessagesController } from "./usecase/maisSaude/messages/create";
import { deleteMessagesController } from "./usecase/maisSaude/messages/detele";
import { updateStatusController } from "./usecase/maisSaude/consultas/updateStatus";
import { findByEspecialistaIDSocketController } from "./usecase/maisSaude/consultas/findByEspecialistaIDSocket";
import { findByUserIDSocketController } from "./usecase/maisSaude/notificacoes/fincByUserIDWeb";
import { addDaySocketController } from "./usecase/maisSaude/diasDisponiveis/addDaySocket";
import { addHourSocketController } from "./usecase/maisSaude/horasDisponiveis/addHourSocket";
import { findByDaySocketController } from "./usecase/maisSaude/diasDisponiveis/findByDaySocket";
import { createReactionsController } from "./usecase/maisSaude/reactions/create";
import { countController } from "./usecase/maisSaude/reactions/count";
import { createCommentsController } from "./usecase/maisSaude/comments/create";
import { findByPostIdSocketController } from "./usecase/maisSaude/comments/findByPostIdSocket";
import { countCommentsController } from "./usecase/maisSaude/comments/count";
import { findMessageByEmissorIDController } from "./usecase/maisSaude/messages/findByEmissorID";
import { findByUserAndReceiverIDController } from "./usecase/maisSaude/notificacoes/findByUserReceiverID";
import { findByDestinatarioIDController } from "./usecase/maisSaude/pedidoDeConexao/findByDestinatarioID";
import schedule from "node-schedule"
import { deleteReactionController } from "./usecase/maisSaude/reactions/delete";
import { findByPostIdAndUserIDController } from "./usecase/maisSaude/reactions/findByPostIdAndUserID";
import { findByPostIdAndUserIDSocketController } from "./usecase/maisSaude/reactions/findByPostIdAndUserIDSocket";
import { createFollowerController } from "./usecase/maisSaude/followers/create";
import { findAllByEntidadeIDController } from "./usecase/maisSaude/followers/findAllByEntidadeID";
import { countFollowersController } from "./usecase/maisSaude/followers/count";
import { addCrmWebController } from "./usecase/maisSaude/user/addCrmWeb";
import { deleteByCrmController } from "./usecase/maisSaude/especialista/deleteByCrm";
import { deleteDayController } from "./usecase/maisSaude/diasDisponiveis/delete";
import { findByCrmSocketController } from "./usecase/maisSaude/especialista/findByCrmSocket";
import { deleteHourByEspecialistaIDController } from "./usecase/maisSaude/horasDisponiveis/deleteHourByEspecialistIDSocket";
import { countNotificationController } from "./usecase/maisSaude/notificacoes/countNotification";
import { updateVistoController } from "./usecase/maisSaude/notificacoes/updateVisto";
import { updateMessageVistoController } from "./usecase/maisSaude/messages/updateMessageVisto";
import { countMessagesController } from "./usecase/maisSaude/messages/countMessages";
import { editMessageController } from "./usecase/maisSaude/messages/editMessage";
import { blockedController } from "./usecase/maisSaude/especialista/blocked";
import { findByCrmController } from "./usecase/maisSaude/user/testeCrm";
import { findEntityByIDSocketController } from "./usecase/maisSaude/entidade/findByIDSocket";
import path from "path";
import { v4 as uuidv4 } from 'uuid';
import fs from "fs"
import { addAdminController } from "./usecase/maisSaude/user/addAdmin";
import { findAllByCnpjController } from "./usecase/maisSaude/user/findAllByCnpj";
import { despedirController } from "./usecase/maisSaude/especialista/despedir";
import { editCommentController } from "./usecase/maisSaude/comments/edit";
import { deleteCommentController } from "./usecase/maisSaude/comments/delete";

const app = Express()

app.use(Express.json());
app.use(Express.static("public"))
app.use(cors());
app.use(bodyParser.json());
app.use(router)



const server = http.createServer(app)

const io = new Server(server,{
  cors:{
    origin:'http://localhost:3000'
  }
});

let arrayUsers:any = [] 

function agendarConsulta(horarioConsulta: Date, userId: string) {
  console.log("agendou",horarioConsulta);
  
  const dataConsulta = typeof horarioConsulta === 'string' ? new Date(horarioConsulta) : horarioConsulta;

  // Criação de uma regra de agendamento com base no horário da consulta
  const index = arrayUsers.filter((user:any)=>user.id === userId)
  const rule = new schedule.RecurrenceRule();
  rule.year = dataConsulta.getFullYear();
  rule.month = dataConsulta.getMonth();
  rule.date = dataConsulta.getDate();
  rule.hour = dataConsulta.getHours();
  rule.minute = dataConsulta.getMinutes();

  // Agendamento da notificação para o horário da consulta
  const job = schedule.scheduleJob(rule, () => {
      console.log('Enviando notificação ao usuário:', userId);
      // Aqui você pode adicionar a lógica para enviar a notificação ao usuário
      io.to(index.map((user:any)=>user.socketID)).emit('notificationConsulta', 'Você tem uma consulta marcada agora!');
  });

  console.log(`Consulta agendada para: ${horarioConsulta}`);
}

io.on("connection", (socket:Socket) => {
  
  socket.on("disconnect", (userID:string) => {
      const index = arrayUsers.findIndex((user:any)=>user.userID === userID)
      delete arrayUsers[userID]
      console.log("disconectado");
      
  })

  socket.on("callUser", ({channelName,receptorID,token,caller}) => {
    const index = arrayUsers.findIndex((user:any)=>user.userID === receptorID)
    console.log(caller);
    
    index !== -1 && io.to(arrayUsers[index].socketID).emit("callUser", {channelName,token,caller,receptorID} )
    index !== -1 && io.to(arrayUsers[index].socketID).emit("infoCall", {channelName,token,caller,receptorID} )

  });

  socket.on("answerCall", ({senderID,signal}) => {
    
    const senderIndex = arrayUsers.findIndex((user:any)=>user.userID === senderID)
      io.to(arrayUsers[senderIndex].socketID).emit("callAccepted", signal)
	})

  socket.on("setName", (id: string, name: string) => {
    console.log("o id que inseriu é", id);
    
    if (id !== null) {
        // Verifica se o usuário já existe no array
        const existingUserIndex = arrayUsers.findIndex((user:any) => user.userID === id);

        if (existingUserIndex !== -1) {
            // Se o usuário já existir, atualiza o socketID
            arrayUsers[existingUserIndex].socketID = socket.id;
            console.log(`SocketID atualizado para o usuário ${name}`);
        } else {
            // Se o usuário não existir, adiciona ao array
            arrayUsers.push({
                userID: id,
                userName: name,
                socketID: socket.id
            });
            console.log(`Novo usuário ${name} adicionado`);
        }

        console.log(arrayUsers);
    }
  });

  socket.on("sendNotification", async ({receiverID,type,userID,consultaID,especialistHowUserID,postID})=>{

    let indexReceiver:any = " "
      if(receiverID){
        indexReceiver = arrayUsers.filter((user:any)=>user.userID === receiverID)
        console.log(indexReceiver);
        
      }

      if(type === 1){
        const pedido = await createPedidoDeConexaoController.handle({userID,destinatarioID:receiverID})
        const not = await createNotificationController.handle({consultaID:" ",destinatarioID:receiverID,tipo:"1",usuarioID:userID,postID:" ",visto:"false"})
        const meusPedidos = await findByDestinatarioIDController.handle(receiverID)
        console.log(meusPedidos,"meus pedidos",not,"notificacoes1",pedido,"sasdf");
        
        indexReceiver.length > 0 && io.to(indexReceiver.map((user:any)=>user.socketID)).emit("getPedidoUser", meusPedidos)
        pedido === "Erro" && indexReceiver && io.to(indexReceiver.map((user:any)=>user.socketID)).emit("erro", pedido)
        
      }else if(type === 2){
        const not = await createNotificationController.handle({consultaID:consultaID,destinatarioID:especialistHowUserID,tipo:"2",usuarioID:userID,postID:"",visto:"false"})

      }else if(type === 3){
        await createNotificationController.handle({consultaID:"nada",destinatarioID:receiverID,tipo:"3",usuarioID:userID,postID,visto:"false"})
      }else if(type === 4){
        await createNotificationController.handle({consultaID:"nada",destinatarioID:receiverID,tipo:"4",usuarioID:userID,postID,visto:"false"})
      }else if(type === 5){
        await createNotificationController.handle({consultaID:"nada",destinatarioID:receiverID,tipo:"5",usuarioID:userID,postID:" ",visto:"false"})
      }else if(type === 6){
        await createNotificationController.handle({consultaID:"nada",destinatarioID:receiverID,tipo:"6",usuarioID:userID,postID:" ",visto:"false"})
      }else if(type === 7){
        await createNotificationController.handle({consultaID:"nada",destinatarioID:receiverID,tipo:"7",usuarioID:userID,postID:" ",visto:"false"})
      }else if(type === 8){
        await createNotificationController.handle({consultaID:"nada",destinatarioID:receiverID,tipo:"8",usuarioID:userID,postID:" ",visto:"false"})
      }

      const indexEspecialist = arrayUsers.findIndex((user:any)=>user.userID === especialistHowUserID)

      if(especialistHowUserID){
        const allNotifications = await findByUserIDSocketController.hanlde(especialistHowUserID)
        const totalNotification = await countNotificationController.handle(receiverID)
        indexReceiver.length > 0 && io.to(indexReceiver.map((user:any)=>user.socketID)).emit("getNotificationUser", allNotifications)
        indexReceiver.length > 0 && io.to(indexReceiver.map((user:any)=>user.socketID)).emit("totalNotification", totalNotification)
      }
      
      if(indexReceiver){
        const allNotifications = await findByUserIDSocketController.hanlde(receiverID)
        const totalNotification = await countNotificationController.handle(receiverID)
        indexReceiver.length > 0 && io.to(indexReceiver.map((user:any)=>user.socketID)).emit("getNotificationUser", allNotifications)
        indexReceiver.length > 0 && io.to(indexReceiver.map((user:any)=>user.socketID)).emit("totalNotification", totalNotification)
      }
      
  })

  socket.on("findNotificationUser", async ({userID,crm}) => {

      const receiverSocketID = arrayUsers.filter((user:any)=>user.userID === userID)
      const allNotifications = await findByUserIDSocketController.hanlde(userID)
      receiverSocketID && io.to(receiverSocketID.map((user:any)=>user.socketID).join()).emit("  ", allNotifications)
      
    
  })


  socket.on("pedidoAccepted", async ({notificationID,userID,senderID})=>{

        await acceptPedidoDeConexaoController.handle({userID,friendID:senderID})
        const userSocketID = arrayUsers.filter((user:any)=>user.userID === userID)
        const MySocketID = arrayUsers.filter((user:any)=>user.userID === senderID)
        const allNotifications = await findByUserIDSocketController.hanlde(userID)
        const pedidoID = await findPedidoController.handle({userID:senderID,destinatarioID:userID})
        await deletePedidoController.handle(pedidoID?.id || " ")
        const allPedidos = await listPedidoDeConexaoController.handle(userID)
    
        userSocketID && io.to(userSocketID.map((user:any)=>user.socketID).join()).emit("getNotificationUser",allNotifications)
        io.to(MySocketID.map((user:any)=>user.socketID).join()).emit("getPedidoUser",allPedidos)

  })

  socket.on("pedidoRejected", async({notificationID,userID,senderID}) =>{
    
    const userSocketID = arrayUsers.filter((user:any)=>user.userID === userID)
    const MySocketID = arrayUsers.filter((user:any)=>user.userID === senderID)
    const allNotifications = await findByUserIDSocketController.hanlde(userID)
    const pedidoID = await findPedidoController.handle({userID:senderID,destinatarioID:userID})
    
    await deletePedidoController.handle(pedidoID?.id || " ")
    const allPedidos = await listPedidoDeConexaoController.handle(userID)

    userSocketID && io.to(userSocketID.map((user:any)=>user.socketID).join()).emit("getNotificationUser",allNotifications)
    io.to(MySocketID.map((user:any)=>user.socketID).join()).emit("getPedidoUser",allPedidos)  

  })

  socket.on("getMyPedidos",async ({userID})=>{  
    const allPedidos = await listPedidoDeConexaoController.handle(userID)
    const index = arrayUsers.findIndex((user:any)=>user.userID === userID)
    index !== -1 && io.to(arrayUsers[index].socketID).emit("getPedidosUser", allPedidos)
  })
  
  socket.on("cancelConnection", async ({id,userID,friendID})=>{
    const userSocketID = arrayUsers.filter((user:any)=>user.userID === userID)
    const friendSocketID = arrayUsers.filter((user:any)=>user.userID === friendID)
    const pedidosDele = await findByDestinatarioIDController.handle(friendID)

    await deleteMyConnectionController.handle(id)
    const myConnections = await allMyConnectionsController.handle(userID)
    const yourConnections = await allMyConnectionsController.handle(userID)
    io.to(userSocketID.map((user:any)=>user.socketID).join()).emit("getMyConnections", myConnections)
    friendSocketID && io.to(friendSocketID.map((user:any)=>user.socketID).join()).emit("getFriendPedido", yourConnections)
  })


  socket.on("myConnections", async ({userID})=>{      
    
    const myConnections = await allMyConnectionsController.handle(userID)
      const userSocketID = arrayUsers.filter((user:any)=>user.userID === userID)
      io.to(userSocketID.map((user:any)=>user.socketID).join()).emit("getMyConnections", myConnections)
  })

  socket.on("sendMessage", async({emissorID,receptorID,conteudo})=>{
    
      try{
        await createMessagesController.handle({emissorID,receptorID,conteudo,visto:false});
        
        const emissor = arrayUsers.filter((user:any)=>user.userID === emissorID)
        const receptor = arrayUsers.filter((user:any)=>user.userID === receptorID)
        const messages = await getOurMessagesController.handle(emissorID,receptorID)
        const total = await countMessagesController.handle(emissorID,receptorID)
        
        
        receptor && io.to(receptor && receptor.map((user:any)=>user.socketID).join()).emit("sendMessage",messages)
        emissor && io.to(emissor && emissor.map((user:any)=>user.socketID).join()).emit("sendMessage",messages)
        receptor && io.to(receptor && receptor.map((user:any)=>user.socketID).join()).emit("totalMessages",total)
      }catch(error){

      }
      //await createMessagesController.handle({conteudo,emissorID,receptorID,visto:"false"})
      
  })

  socket.on("myMessagesWithFriend", async ({emissorID,receptorID})=>{
      
      const emissor = arrayUsers.filter((user:any)=>user.userID === emissorID)
      const receptor = arrayUsers.filter((user:any)=>user.userID === receptorID)
      const messages = await getOurMessagesController.handle(emissorID,receptorID)

      receptor && io.to(receptor.map((user:any)=>user.socketID).join()).emit("sendMessage",messages)
      emissor && io.to(emissor.map((user:any)=>user.socketID).join()).emit("sendMessage",messages)
  })

  socket.on("myMessages", async ({myID})=>{
    const index = arrayUsers.findIndex((me:any)=>me.userID === myID) 
    const myMessages = await findMessageByEmissorIDController.handle(myID)
    index !== -1 && io.to(arrayUsers[index].socketID).emit("getMyMessages", myMessages) 
  })

  socket.on("deleteMessage", async ({id,emissorID,receptorID})=>{
      console.log(receptorID,"receptor");
      
      const deleted = await deleteMessagesController.handle({id,emissorID,receptorID})
      console.log(deleted,"esse");
      const emissor = arrayUsers.filter((user:any)=>user.userID === emissorID)
      const receptor = arrayUsers.filter((user:any)=>user.userID === receptorID)
      const messages = await getOurMessagesController.handle(emissorID,receptorID)
      console.log(receptorID,emissorID,messages);
      
      io.to(emissor.map((user:any)=>user.socketID).join()).emit("deleteMessage",messages)
      receptor && io.to(receptor.map((user:any)=>user.socketID).join()).emit("deleteMessage", messages)

  })

  socket.on("editMessage", async({id,conteudo,emissorID,receptorID})=>{
    const update = await editMessageController.handle(id,conteudo)
    console.log("mensagem editada", update);
    
    const emissor = arrayUsers.filter((user:any)=>user.userID === emissorID)
    const receptor = arrayUsers.filter((user:any)=>user.userID === receptorID)
    const messages = await getOurMessagesController.handle(emissorID,receptorID)
    console.log(messages);
    
    receptor && io.to(receptor.map((user:any)=>user.socketID).join()).emit("newMessage",messages)
    emissor && io.to(emissor.map((user:any)=>user.socketID).join()).emit("newMessage",messages)
  })

  socket.on("updateMessageVisto", async({emissorID,receptorID})=>{
    const update = await updateMessageVistoController.handle(emissorID,receptorID)
    const total = await countMessagesController.handle(emissorID,receptorID)
    const index = arrayUsers.findIndex((user:any)=>user.userID === receptorID)

    index !== -1 && io.to(arrayUsers[index].socketID).emit("updateMessageVisto", total)
  })


  socket.on("consultaRealizada", async ({id,status,especialistaID,userID})=>{
    
    const index = arrayUsers.findIndex((user:any)=>user.userID === userID)
    await updateStatusController.handle(id,status)
    const consultasRealizadas = await findByEspecialistaIDSocketController.handle(especialistaID,status)

    io.to(arrayUsers[index].socketID).emit("consultaRealizada", consultasRealizadas)
    io.to(arrayUsers[index].socketID).emit("consultaRealizada", consultasRealizadas)
  })

  socket.on("getConsultasRealizadas", async ({status,especialistaID,userID})=>{
    
    const index = arrayUsers.findIndex((user:any)=>user.userID === userID)
    const consultasRealizadas = await findByEspecialistaIDSocketController.handle(especialistaID,status)

    index ! == -1 && io.to(arrayUsers[index].socketID).emit("consultaRealizada", consultasRealizadas)
  })

  socket.on("consultaMarcadas", async ({id,status,especialistaID,userID})=>{
    const index = arrayUsers.findIndex((user:any)=>user.userID === userID)
    await updateStatusController.handle(id,status)
    const consultasMarcadas = await findByEspecialistaIDSocketController.handle(especialistaID,status)

    io.to(arrayUsers[index].socketID).emit("consultasMarcadas", consultasMarcadas)
  })

  socket.on("consultaNrealizada", async ({id,status,especialistaID,userID})=>{
    const index = arrayUsers.findIndex((user:any)=>user.userID === userID)
    await updateStatusController.handle(id,status)
    const consultasMarcadas = await findByEspecialistaIDSocketController.handle(especialistaID,status)

    io.to(arrayUsers[index].socketID).emit("consultasNrealizada", consultasMarcadas)
  })

  socket.on("getConsultaNRealizadas", async ({status,especialistaID,userID})=>{
    
    const index = arrayUsers.findIndex((user:any)=>user.userID === userID)
    const consultasRealizadas = await findByEspecialistaIDSocketController.handle(especialistaID,status)

    io.to(arrayUsers[index].socketID).emit("consultasNrealizada", consultasRealizadas)
  })

  socket.on("getConsultaMarcadas", async ({status,especialistaID,userID})=>{

    const index = arrayUsers.findIndex((user:any)=>user.userID === userID)
    const consultasMarcadas = await findByEspecialistaIDSocketController.handle(especialistaID,status)
    
    io.to(arrayUsers[index].socketID).emit("consultasMarcadas", consultasMarcadas)
  })

  socket.on("consultaNotification", ({data,userID})=>{
    agendarConsulta(data,userID)
  })

  socket.on("createDay", async({especialistaID,hour,date,dayID,day,myID})=>{
    console.log(especialistaID,hour,date,dayID);
  
    if(date){
      const day = await addDaySocketController.handle({date,especialistaID}) 
    
      day && hour.forEach(async (hora:string) => {
      await addHourSocketController.handle({
        diasDisponiveisID:day.id,
        hora,
        especialistaID
      })
      console.log(hour,"if");
    });

    const found = await findByDaySocketController.handle({date,especialistaID})
    const index = arrayUsers.findIndex((user:any)=>user.userID === myID)
    index !== -1 && io.to(arrayUsers[index].socketID).emit("getMyDay", found)

    }else{
      console.log(hour,"else");
      hour.forEach(async (hora:string) => {
        const hour = await addHourSocketController.handle({
          diasDisponiveisID:dayID,
          hora,
          especialistaID
        })        
      });

    const found = await findByDaySocketController.handle({date:day,especialistaID})
    io.emit("getMyDay", found)

    }
    
  })

  socket.on("updateVisto",async ({id,userID})=>{
    const update = await updateVistoController.handle(id)
    const totalNotification = await countNotificationController.handle(userID)
    const index = arrayUsers.findIndex((user:any)=>user.userID === userID)
    io.to(arrayUsers[index].socketID).emit("updateVisto",totalNotification)
  })
  
  socket.on("findDays", async ({date,especialistaID})=>{
    console.log(date,especialistaID);
    
    const found = await findByDaySocketController.handle({date,especialistaID})
    io.emit("getMyDays", found)

  })

  socket.on("createReaction", async({postId,userId,type,verif})=>{

    if(!verif){
      const reaction = await createReactionsController.handle({postId,userId,type})
    }else{
      const found = await findByPostIdAndUserIDSocketController.handle(postId,userId)
      await deleteReactionController.handle(found?.id || "")
    }
    const reactionTotal = await countController.handle(postId)
    console.log(reactionTotal);
    
    io.emit("createReaction", reactionTotal)
    
  })

  socket.on("deleteReaction", async({postId,userId})=>{
    const index = arrayUsers.findIndex((user:any)=>user.userID === userId)
   
    const reactionTotal = await countController.handle(postId)
    console.log(reactionTotal);
    
    index !== -1 && io.to(arrayUsers[index].socketID).emit("deleteReaction", reactionTotal)

  })

  socket.on("createComment", async({autorId,conteudo,postId})=>{
    const comment = await createCommentsController.handle({autorId,conteudo,postId})
    const found = await findByPostIdSocketController.handle(postId)
    const total = await countCommentsController.handle(postId)
    io.emit("createComment", {found,total})
  })

  socket.on("follow", async({seguidorID,entidadeID,admPage})=>{
    await createFollowerController.handle({seguidorID,entidadeID})
    const totalFollowers = await countFollowersController.handle(entidadeID)
    
    const index = arrayUsers.findIndex((user:any)=>user.userID === admPage)

    index !== -1 && io.to(arrayUsers[index].socketID).emit("follow", totalFollowers)
  })

  socket.on("getAllFollowers", async({entidadeID,userID})=>{
    console.log(userID,entidadeID,"dados")
    
    const index = arrayUsers.findIndex((user:any)=>user.userID === userID)
    const allSeguidores = await findAllByEntidadeIDController.handle(entidadeID)
    console.log(allSeguidores,"seguidores",index);
    
    index !== -1 && io.to(arrayUsers[index].socketID).emit("allFolowers",allSeguidores)
  })

  socket.on("deleteEspecialist", async({crm,entidadeID,userID})=>{
    await despedirController.handle(crm," ")
    const found = await findByCrmController.handle(crm)
    const index = arrayUsers.findIndex((user:any)=>user.userID === found?.id)
    const Myindex = arrayUsers.findIndex((user:any)=>user.userID === userID)
    const entity = await findEntityByIDSocketController.handle(entidadeID)

    io.to(arrayUsers[Myindex].socketID).emit("myEspecialists", entity)  

  })

  socket.on("block", async({crm,userID,id})=>{
    const update = await blockedController.handle(crm)
    const found = await findByCrmController.handle(crm)
    const index = arrayUsers.findIndex((user:any)=>user.userID === found?.id)
    const Myindex = arrayUsers.findIndex((user:any)=>user.userID === userID)
    const entity = await findEntityByIDSocketController.handle(id)
    
    index !== -1 && io.to(arrayUsers[index].socketID).emit("blocked", found)
    io.to(arrayUsers[Myindex].socketID).emit("myEspecialists", entity)  
    
  })

  socket.on("addAdmin", async({cnpj,userID})=>{
    const newAdmin = await addAdminController.handle(userID,cnpj)
    const index = arrayUsers.findIndex((user:any)=>user.userID === userID)
    const allAdmins = await findAllByCnpjController.handle(cnpj)

    io.emit("getAdmins", {allAdmins,newAdmin})
  })

  socket.on("editComment", async({id,conteudo,userID,postID})=>{
    await editCommentController.handle(id,conteudo)
    const Myindex = arrayUsers.findIndex((user:any)=>user.userID === userID)
    const allComments = await findByPostIdSocketController.handle(postID)
    const total = await countCommentsController.handle(postID)

    io.emit("allComments", {allComments,postID,total})

  })

  socket.on("deleteComment", async({id,userID,postID})=>{
    await deleteCommentController.handle(id)
    const Myindex = arrayUsers.findIndex((user:any)=>user.userID === userID)
    const allComments = await findByPostIdSocketController.handle(postID)
    console.log(allComments, "comentarios");
    const total = await countCommentsController.handle(postID)

    io.emit("allComments", {allComments,postID,total})
  })
})

server.listen(2004, ()=> console.log("server is runnig")
)

