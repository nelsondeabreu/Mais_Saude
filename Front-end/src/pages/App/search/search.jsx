import React from "react";
import style from "./search.module.css"
import { ColLg4, ColLg8, Row } from "../../../components/columRow/columRow";
import Main from "../../../components/main/main";
import CardConsultas from "../../../components/cards/cardConsultas/cardConsultas";
import CardEspecialistas from "../../../components/cards/cardEspecialista/cardEspecialistas/cardEspecialistas";
import CardVition from "../../../components/cards/cardVitions/cardvition/cardvition";
import NewPost from "../../../components/newPost/newPost";
import TitlePage from "../../../components/titlePage/titlePage";
import { BigCardEspecialistas } from "../../../components/cards/bigcard/bigcard";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { UseGetAllPosts } from "../../../hooks/useGetAllPosts";
import {motion} from "framer-motion"
import { UseGetAllEspecialistByEspeciality } from "../../../hooks/useGetAllEspecialistByEspeciality";
import { CardPessoa, CardSearch } from "../../../components/cards/cardPessoas/cardPessoas";
import { UseGetAllUsers } from "../../../hooks/useGetAllUsers";
import { UseGetUserSearch } from "../../../hooks/useGetUserSearch";
import { UseGetPostSearch } from "../../../hooks/useGetPostSearch";
import CardPost from "../../../components/cards/cardPost/cardPost";
import { useSocket } from "../../../hooks/contextApi/useSocketContext";
import { toast } from "sonner";

export default function Search(){
  
  const [verif, setVerif] = React.useState(null)
  const {especialistByEspeciality} = UseGetAllEspecialistByEspeciality()
  const {userSearch} = UseGetUserSearch()
  const {allUsers} = UseGetAllUsers()
  const {postSearch} = UseGetPostSearch()
  const {socket} = useSocket()

  React.useEffect(()=>{
      socket && socket.on("notificationConsulta", (data)=>{
          toast.info(data)
      })
  },[socket])

  return(
    <Main>

    <main className={style.mainSearch}>
        <div className={style.container}>

          {
            especialistByEspeciality.length > 0 && (
              <div className={style.divContainer}>
                <nav className={style.navHead}>
                  <h4>Especialistas</h4>
                </nav>
                <div className={style.divBody}>
                  {
                    especialistByEspeciality && especialistByEspeciality.map((especialist)=>{
                      const index = allUsers && allUsers.filter((user)=>user.crm === especialist.crm)
                      const image = index.map(user=>user.foto).join()
                      const id = index.map(user=>user.id)
                        if(index !== -1){
                          return(
                            <CardSearch
                              crm={true}
                              especialidade={especialist.especialidade}
                              hospital={especialist.entidade && especialist.entidade.name }
                              id={id}
                              image={image}
                              userName={especialist.nome}
                            />
                          )
                        }
                      
                    })
                  }
                </div>
              </div>
            )
          }

          {
            !verif && userSearch.length > 0 && (
              <div className={style.divContainer}>
                <nav className={style.navHead}>
                  <h5>Pacientes</h5>
                </nav>
                <div className={style.divBody}>
                    {
                      userSearch && userSearch.map((user)=>{
                          if(user.crm === null){
                            return(
                              <CardSearch
                                crm={false}
                                id={user.id}
                                image={user.foto}
                                userName={user.name}
                                sobre={user.sobre}
                              />
                            )
                          }else{
                            setVerif(true)
                          }
                      })
                    }
                </div>
              </div>
            )
          }

          {
            verif && userSearch.length > 0 && (
              <div className={style.divContainer}>
                <nav className={style.navHead}>
                  <h5>Especialistas</h5>
                </nav>
                <div className={style.divBody}>
                    {
                      userSearch && userSearch.map((user)=>{
                          if(user.crm){
                            return(
                              <CardSearch
                                crm={true}
                                id={user.id}
                                image={user.foto}
                                userName={user.name}
                                sobre={user.sobre}
                              />
                            )
                          }else{
                            setVerif(false)
                          }
                      })
                    }
                </div>
              </div>
            )
          }
          
          <div style={{marginTop:".8rem"}}>
              {
                postSearch.length > 0 && postSearch.map(post=>(
                  <CardPost
                    name={post.usuarioPub.name}
                    crm={post.usuarioPub.crm}
                    id={post.id}
                    userPhoto={post.usuarioPub.foto}
                    legend={post.conteudo}
                    autorID={post.usuarioID}
                    data={post.data}
                    image={post.foto}
                    video={post.video}
                  />
                )
                  
                )
              }
          </div>

        </div> 
    </main>
    </Main>

  )
}