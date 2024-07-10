import { Router, response} from "express";
import { createUserController } from "../../usecase/maisSaude/user/createUser";
import { logUserController } from "../../usecase/maisSaude/user/logUser";
import { verifyTokenController } from "../../usecase/maisSaude/user/verifyToken";
import { listUsersController } from "../../usecase/maisSaude/user/listUsers";
import { authentication } from "../../middlewares";
import { addCnpjController } from "../../usecase/maisSaude/user/addCnpj";
import { addCrmController } from "../../usecase/maisSaude/user/addCrm";
import { editProfileController } from "../../usecase/maisSaude/user/editProfile";
import { importPhotoController } from "../../usecase/maisSaude/user/importPhoto";
import multer from "multer"
import { findByIDController } from "../../usecase/maisSaude/user/findById";
import { alterPasswordController } from "../../usecase/maisSaude/user/alterPassword";
import { findByNameController } from "../../usecase/maisSaude/user/findByName";
import { findAllByCnpjWebController } from "../../usecase/maisSaude/user/findAllByCnpjWeb";

const userRoutes = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploud = multer({storage:storage});

userRoutes.post("/cadastro", (request,response)=>{
  return createUserController.handle(request,response)
})

userRoutes.post("/login", (request,response)=>{
    return logUserController.handle(request,response)
})

userRoutes.get("/listaUsuarios", (request, response) => {
  return listUsersController.handle(request,response)
})

userRoutes.post("/verifyToken", (request,response) => {
  return verifyTokenController.handle(request,response)
})

userRoutes.put("/addCnpj", (request,response) => {
  return addCnpjController.handle(request,response)
})

userRoutes.put("/addCrm", (request,response) => {
  return addCrmController.handle(request,response)
})

userRoutes.put("/editUser", (request,response) => {
  return editProfileController.handle(request,response)
})

userRoutes.put("/alterPassWord", (request,response) => {
  return alterPasswordController.handle(request,response)
})

userRoutes.put("/:id/addPhoto", uploud.single("foto") ,(request,response) => {
  return importPhotoController.handle(request,response)
})

userRoutes.post("/findByID",(request,response) => {
  return findByIDController.handle(request,response)
})

userRoutes.post("/findByName",(request,response) => {
  return findByNameController.handle(request,response)
})

userRoutes.post("/findAdmins",(request,response) => {
  return findAllByCnpjWebController.handle(request,response)
})

userRoutes.post("/profile",authentication.authMiddleware, (request, response)=>{

})

export {userRoutes}