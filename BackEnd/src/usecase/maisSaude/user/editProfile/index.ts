import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { EditProfileController } from "./editProfileController";
import { EditProfileUseCase } from "./editProfileUseCase";



const userRepository = new UserRepository();
const editProfileUseCase = new EditProfileUseCase(userRepository);
export const editProfileController = new EditProfileController(editProfileUseCase)