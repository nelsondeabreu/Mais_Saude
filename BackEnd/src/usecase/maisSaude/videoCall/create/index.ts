import { VideoCallRepository } from "../../../../repositories/maisSaude/Implements/VideoCallRepository";
import { CreateVideoCallController } from "./videoCallController";
import { CreateVideoCallUseCase } from "./videoCallUseCase";



const videoCallRepository = new VideoCallRepository()
const createVideoCallUseCase = new CreateVideoCallUseCase(videoCallRepository)
export const createVideoCallController = new CreateVideoCallController(createVideoCallUseCase)