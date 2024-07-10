import { Router} from "express";
import { createPostController } from "../../usecase/maisSaude/post/createPost";
import { listAllPostsController } from "../../usecase/maisSaude/post/listAllPosts";
import { deletePostController } from "../../usecase/maisSaude/post/deletePost";
import { listPostsUserController } from "../../usecase/maisSaude/post/listPostsUser";
import { findByUserIDController } from "../../usecase/maisSaude/post/findByUserID";
import { findByConteudoController } from "../../usecase/maisSaude/post/findByConteudo";
import { editPostController } from "../../usecase/maisSaude/post/edit";
import multer from "multer";
import { findPostImageController } from "../../usecase/maisSaude/post/findPostImage";
import { findPostVideoController } from "../../usecase/maisSaude/post/findPostVideo";
import { findByIDController } from "../../usecase/maisSaude/post/findByID";

const postRoutes = Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploud = multer({storage:storage});

postRoutes.post("/", uploud.single("foto") , (request, response)=>{
  return createPostController.handle(request,response)
})

postRoutes.get("/", (request, response)=>{
  return listAllPostsController.handle(request,response)
})

postRoutes.post("/postUser", (request,response)=>{
  return listPostsUserController.handle(request,response)
})

postRoutes.post("/findByUserID", (request,response)=>{
  return findByUserIDController.handle(request,response)
})

postRoutes.post("/findByID", (request,response)=>{
  return findByIDController.handle(request,response)
})

postRoutes.post("/findByConteudo", (request,response)=>{
  return findByConteudoController.handle(request,response)
})

postRoutes.get("/:foto/findPostImage", (request,response)=>{
  return findPostImageController.handle(request,response)
})

postRoutes.get("/:video/findPostVideo", (request,response)=>{
  return findPostVideoController.handle(request,response)
})

postRoutes.post("/edit", (request, response)=>{
  return editPostController.handle(request,response)
})

postRoutes.post("/delete", (request, response)=>{
  return deletePostController.handle(request,response)
})

export {postRoutes}
