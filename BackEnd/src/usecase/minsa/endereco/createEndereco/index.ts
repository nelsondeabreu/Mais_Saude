import { EnderecoRepository } from "../../../../repositories/minsa/implements/EnderecoRepository";
import { CreateEnderecoController } from "./createEnderecoController";
import { CreateEnderecoUseCase } from "./createEnderecoUseCase";




const enderecoRepository = new EnderecoRepository();
const createEnderecoUseCase = new CreateEnderecoUseCase(enderecoRepository);
export const createEnderecoController = new CreateEnderecoController(createEnderecoUseCase)