import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { ImportPhotoController } from "./importPhotoController";
import { ImportPhotoUseCase } from "./importPhotoUseCase";


const userRepository = new UserRepository()
const importPhotoUseCase = new ImportPhotoUseCase(userRepository)
export const importPhotoController = new ImportPhotoController(importPhotoUseCase)