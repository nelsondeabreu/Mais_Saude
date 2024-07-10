import React from "react";
import Main from "../../../components/main/main";
import CardPost from "../../../components/cards/cardPost/cardPost";
import { Row } from "../../../components/columRow/columRow";
import { UseGetPostByID } from "../../../hooks/useGetPostByID";
import CardPostPage from "../../../components/cards/cardPostPage/cardPostPage";


export function Post(){

  const {post} = UseGetPostByID()

  return(
    <Main>
      <Row>
        {
          post && (
            <CardPostPage
              autorID={post.usuarioID}
              data={post.data}
              crm={post.usuarioPub.crm}
              id={post.id}
              image={post.foto}
              legend={post.conteudo}
              name={post.usuarioPub.name}
              userPhoto={post.usuarioPub.foto}
              video={post.video}
            />
          )
        }
      </Row>
      
    </Main>
  ) 
}