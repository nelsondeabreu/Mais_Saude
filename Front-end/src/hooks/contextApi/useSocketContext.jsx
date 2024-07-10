import Cookies from "js-cookie";
import React from "react";
import io from "socket.io-client"
import CryptoJS from "crypto-js";

const useSocketContext = React.createContext()

export function SocketProvider({children}){

  const [user,setUser]=React.useState()
  const [socket,setSocket]=React.useState()
  
  React.useEffect(()=>{
    setSocket(io.connect('http://localhost:2004'))
    const userCripto = Cookies.get("user")
    const userDecripto = CryptoJS.AES.decrypt(userCripto, "boaSaude");
    const cookies = userDecripto.toString(CryptoJS.enc.Utf8)
    setUser(JSON.parse(cookies))
  },[])
  

  React.useEffect(()=>{
    try{
    socket && socket.emit("setName", user && user.id,user && user.name)
    }catch(err){
      console.log(err);
    }
  },[user])
  
  return(
    <useSocketContext.Provider value={{socket}}>
      {children}
    </useSocketContext.Provider>
  )
}

export const useSocket = () => React.useContext(useSocketContext)