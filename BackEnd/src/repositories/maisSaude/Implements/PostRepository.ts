
import { IPostRepository,IPostDTO } from "../IPostRepository";
import { prismaDB1 } from "../../../database";
import { Publicacoes } from "../../../generated/client1";



export class PostRepository implements IPostRepository {
  
  findByID(id: string): Promise<Publicacoes | null> {
    return prismaDB1.publicacoes.findUnique({
      where:{id},
      include:{usuarioPub:true}
    })
  }
  
  edit(id: string, conteudo: string): Promise<Publicacoes> {
    return prismaDB1.publicacoes.update({
      where:{id},
      data:{conteudo}
    })
  }
  
  findByUserConteudo(conteudo: string): Promise<Publicacoes[]> {
    return prismaDB1.publicacoes.findMany({
      where:{
        conteudo:{
          contains:conteudo
        }
      },
      include:{usuarioPub:true}
    })
  }
  
  findByUserID(usuarioID: string): Promise<Publicacoes[]> {
    return prismaDB1.publicacoes.findMany({
      where:{usuarioID},
      include:{usuarioPub:true}
    })
  }
  
  
 async create(data: IPostDTO): Promise<Publicacoes> {
    const post = await prismaDB1.publicacoes.create({
            data,
        })
    return post
  }

  async listAllPosts(): Promise<Publicacoes[]> {
    const allPosts = await prismaDB1.publicacoes.findMany({
      include:{
        usuarioPub:true,
        postCriado:true,
        postPartilhado:true
      },
      orderBy:{data:"desc"}
    })
    return allPosts;
  }

  async listPostsUser(usuarioID: string): Promise<Publicacoes[]> {
    const posts = await prismaDB1.publicacoes.findMany({
      where: {usuarioID},
      orderBy:{data:"desc"}
    }) 

    return posts;
  }

  async deletePost(postID: string): Promise<void> {
    
    const post = await prismaDB1.publicacoes.delete({
      where: {id: postID}
    })
  }

}