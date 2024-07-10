import CardPost from "../../../../../../components/cards/cardPost/cardPost"
import { UseGetMyPost} from "../../../../../../hooks/useGetMyPost"



export function Posts(){
  
  const {post} = UseGetMyPost()

  return(
    <div>
      {
        post.map(post=>(
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
        ))
      }
    </div>
  )
}