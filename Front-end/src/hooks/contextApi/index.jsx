import React from "react";
import UseReload from "../useReload";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";


  const UserContext = React.createContext();
  export function UserProvider({children}) {

    const [user,setUser] = React.useState(null);
    const userCripto = Cookies.get("user")
    
    React.useEffect(()=>{
      async function userData(){
        if(userCripto){
          const userDescripto = CryptoJS.AES.decrypt(userCripto, "boaSaude")
          const userCookies = userDescripto.toString(CryptoJS.enc.Utf8);
          setUser(JSON.parse(userCookies))
        }
      }
      userData()
    }, [])


    return (
      <UserContext.Provider value={{user}}>
        {children}
      </UserContext.Provider>
    )

}


export const useUser = () => React.useContext(UserContext)
