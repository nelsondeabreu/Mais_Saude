import React from 'react'
import style from "./homeApp.module.css"
import Main from '../../../components/main/main'
import {
    CardLilVitionSmall,
    CardVitionBig
} from "../../../components/cards/cardVitions/cardVitionSmallBig/cardVitionSmallBig"
import CardConsultas from "../../../components/cards/cardConsultas/cardConsultas"
import CardEspecialista from "../../../components/cards/cardEspecialista/cardEspecialistas/cardEspecialistas"
import { 
    Col12, 
    ColLg4, 
    ColLg8, 
    Row 
} from '../../../components/columRow/columRow'
import CardVition from '../../../components/cards/cardVitions/cardvition/cardvition'
import TitlePage from '../../../components/titlePage/titlePage'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { 
    BigCardEspecialistas, 
    BigCardHospitais 
} from '../../../components/cards/bigcard/bigcard'
import CardPost from '../../../components/cards/cardPost/cardPost'
import NewPost from '../../../components/newPost/newPost'
import api from "../../../apiService/"
import { useUser } from '../../../hooks/contextApi'
import { UseGetAllPosts } from '../../../hooks/useGetAllPosts'
import { UseResize } from '../../../hooks/useResize'
import StickyBox from 'react-sticky-box'
import { toast } from 'sonner'
import { useSocket } from '../../../hooks/contextApi/useSocketContext'
import { SkeletonConsulta, SkeletonPost } from '../../../components/skeleton'
import { ZodLazy } from 'zod'
import { useLocation } from 'react-router-dom'
import { UseGetAllShare } from '../../../hooks/useGetAllShare'
import CardPostShare from '../../../components/cards/cardPost/cardPostGet'

function HomeApp() {
    
    const {allPost} = UseGetAllPosts()
    const {size} = UseResize()
    const {user} = useUser()
    const contentPost = React.useRef()
    const {socket} = useSocket()
    const [totalReaction,setTotalReaction] = React.useState(null)
    const [isLoading,setisLoading] = React.useState(false)
    const {allShare} = UseGetAllShare()
    
    React.useEffect(()=>{
        setInterval(()=>{
            setisLoading(true)
        },2000)
    },[])

                                                                                                
    React.useEffect(()=>{
        socket && socket.on("notificationConsulta", (data)=>{
            toast.info(data)
        })
    },[socket])

    async function handleClick (file) {
        console.log(file === null,contentPost.current.value);
        if(contentPost.current.value.length !==0  || file !== null ){
            const formData = new FormData()
            const conteudo = contentPost.current.value
            
            formData.append("conteudo", conteudo);
            formData.append("usuarioID", user.id);
            formData.append("foto", file);
            const response = (await api.post("posts/", formData ,{headers: { 'Content-Type': 'multipart/form-data'}} ))
            console.log(response);
            window.location.reload()
        }else{
            toast.warning("Preencha o campo!")
            contentPost.current.value= null
        }   
        
    }

    return (

        <StickyBox>
            {
                !isLoading ? (
                    <main className={style.main}>
                        <div className={style.firstDiv}>
                            <SkeletonConsulta/>

                        </div>

                        <div className={style.secondDiv}>
                            <SkeletonPost/>
                            <SkeletonPost/>
                            <SkeletonPost/>
                        </div>

                        <div className={style.threeDiv}>
                            <SkeletonConsulta/>
                            <SkeletonConsulta/>

                        </div>
                    </main>
                ):(
                    <main className={style.main}>
            
            
                        <div className={style.firstDiv}>
                            <CardConsultas/>
                        </div>
                        <div className={style.secondDiv}> 

                            <NewPost 
                                reference={contentPost} 
                                click={handleClick}
                            /> 
                            {
                                allPost && allPost.map((post) => {
                                    const index = allShare.findIndex(share=>share.createPostShareID === post.id)
                                    console.log(allShare);
                                    if(index !== -1){
                                        return(
                                            <CardPostShare
                                                autorID={post.usuarioID}
                                                data={post.data}
                                                legend={post.conteudo} 
                                                name={post.usuarioPub.name} 
                                                id={post.id}
                                                userPhoto={post.usuarioPub.foto}
                                                crm={post.usuarioPub.crm}
                                                image={post.foto}
                                                video={post.video}
                                                postShare={allShare[index].post}
                                                
                                            />
                                        )
                                        
                                    }else{
                                        return (
                                            <CardPost 
                                            autorID={post.usuarioID}
                                            data={post.data}
                                            legend={post.conteudo} 
                                            name={post.usuarioPub.name} 
                                            id={post.id}
                                            userPhoto={post.usuarioPub.foto}
                                            crm={post.usuarioPub.crm}
                                            image={post.foto}
                                            video={post.video}
                                            postID={post.id}
                                        />
                                        )
                                    }
                                    
                                })
                            } 
                            
                            <BigCardEspecialistas/>
                            <BigCardHospitais/>  
                            
                        </div>

                        <div className={style.threeDiv}>
                            <CardEspecialista/>
                            </div>             
                
                        
                    </main>
                ) 
            }
        </StickyBox>
    )
}

export default HomeApp