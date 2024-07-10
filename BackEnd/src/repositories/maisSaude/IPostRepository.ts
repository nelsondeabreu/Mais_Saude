import { Publicacoes } from "../../generated/client1";

interface IPostDTO {
    conteudo:string;
    foto: string | null;
    video: string | null;
    data: Date;
    usuarioID: string;
}


interface IPostRepository {
  create (data: IPostDTO): Promise<Publicacoes>
  listAllPosts (): Promise<Publicacoes[]>
  listPostsUser (usuarioID: string): Promise<Publicacoes[]>
  deletePost (postID: string): Promise<void>
  findByUserID (userID:string): Promise<Publicacoes[]>
  findByID (id:string): Promise<Publicacoes | null>
  findByUserConteudo (userID:string): Promise<Publicacoes[]>
  edit (postID:string, conteudo:string): Promise<Publicacoes>
}

export {IPostRepository,IPostDTO}