import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import style from "./addAdmin.module.css"
import api from "../../../../../../apiService";
import React from "react";
import { CardAdmin, CardSearch } from "../../../../../../components/cards/cardPessoas/cardPessoas";
import { UseGetDataEntity } from "../../../../../../hooks/useGetDataEntity";
import * as Dialog from "@radix-ui/react-dialog"
import { UseGetAllUsers } from "../../../../../../hooks/useGetAllUsers";
import { UseGetAllEspecialists } from "../../../../../../hooks/useGetAllEspecialists";
import { useSocket } from "../../../../../../hooks/contextApi/useSocketContext";
import { toast } from "react-toastify";

export function AddAdmin(){
  const [users, setUsers] = React.useState([])
  const [admins, setAdmins] = React.useState([])
  const {dataEntity} = UseGetDataEntity()
  const {allUsers} = UseGetAllUsers()
  const {allEspecialist} = UseGetAllEspecialists()
  const {socket} = useSocket()

  const newStyle = {
    "display": users.length > 0 && "block",
    "border": users.length > 0 && "1px solid #eae8e8",
    "border-bottom-left-radius": users.length > 0 && "10px",
    "border-bottom-right-radius": users.length > 0 && "10px",
    "background": users.length > 0 && "#fff",
    "box-shadow": users.length > 0 && "var(--box-shadow)",
  }

  const otherStyle={
    "display": users.length === 0 && "none"
  }

  const onlyAdm = allUsers.filter(user=>user.cnpj === dataEntity.cnpj)
  
  async function handleChange(e){
    if(e.target.value){
      const user = (await api.post("/usuarios/findByName", {name:e.target.value})).data
      setUsers(user)
      console.log(user);
    }else{
      setUsers([])
    }

  }

  React.useEffect(()=>{
    socket && socket.on("getAdmins", (data)=>{
      console.log(data.allAdmins);
      if(data.newAdmin === false){
        toast.error("O usuario selecionado já é admin de uma entidade!")
      }
      setAdmins(data.allAdmins)
    })
  },[socket])

  React.useEffect(()=>{
    async function Admins(){
      const desc = await (await api.post("usuarios/findAdmins", {cnpj:dataEntity.cnpj})).data
      setAdmins(desc)
    }
    Admins()
  },[dataEntity])

  return (
    <main>
            <Dialog.Root>
              <div className={style.header}>
              <Dialog.Content className={style.content}>
                  <div style={newStyle} className={style.searchBar}>
                  <form className={`${style.searchForm}  d-flex align-items-center`} action="#">
                    <input type="text" name="query" placeholder="Pesquisa" title="pesquisa" onChange={handleChange}/>
                    
                    <button type="button" title="pesquisar" onClick={()=>window.location.reload()}>
                        <BsSearch/>
                    </button>
                  </form>
                  <div style={otherStyle} className={style.divResults}>
                    {
                      users.map(user=>(
                        <CardAdmin
                            cnpj={dataEntity.cnpj}
                            id={user.id}
                            image={user.foto}
                            userName={user.name}
                            sobre={user.sobre}
                          />
                      ))
                    }
                  </div>
                  </div>
              </Dialog.Content>
                <Dialog.Trigger className={style.btnAdd} oncl>
                  Adicionar Admin
                </Dialog.Trigger>
              </div >
                
            </Dialog.Root>
            <div>
                {
                  admins.map((adm)=>{
                    const index = allEspecialist.findIndex(doctor=>doctor.crm === adm.crm)

                      return(
                        <CardAdmin
                          cnpj={dataEntity.cnpj}
                          id={adm.id}
                          image={adm.foto}
                          userName={adm.name}
                          sobre={adm.sobre}
                          crm={adm.crm}
                          adm={true}
                          especialidade={index !== -1 && allEspecialist[index].especialidade}
                        />
                      )
                  })
                }
            </div>
    </main>
  )
}