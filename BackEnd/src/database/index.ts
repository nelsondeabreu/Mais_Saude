import { PrismaClient as PrismaClientDB1 } from "../generated/client1";
import { PrismaClient as PrismaClientDB2 } from "../generated/client2";

const prismaDB1 = new PrismaClientDB1();
const prismaDB2 = new PrismaClientDB2();

export {prismaDB1, prismaDB2}
