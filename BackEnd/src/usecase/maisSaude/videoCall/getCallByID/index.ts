import { VideoCallRepository } from "../../../../repositories/maisSaude/Implements/VideoCallRepository";
import { GetCallByIDController } from "./getCallByIDController";
import { GetCallByIDUseCase } from "./getCallByIDUseCase";



const videoCallRepository = new VideoCallRepository()
const getCallByIDUseCase = new GetCallByIDUseCase(videoCallRepository)
export const getCallByIDController = new GetCallByIDController(getCallByIDUseCase)
