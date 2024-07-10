import { Router } from "express";
import { createVideoCallController } from "../../usecase/maisSaude/videoCall/create";
import { getCallByIDController } from "../../usecase/maisSaude/videoCall/getCallByID";
import { tokenController } from "../../usecase/maisSaude/videoCall/token";


const videoCallRoutes = Router()


videoCallRoutes.post('/token', (req,res)=>{
  return tokenController.handle(req,res)
});


export {videoCallRoutes}