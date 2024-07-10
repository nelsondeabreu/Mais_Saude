import { Prisma } from "@prisma/client"
import { prisma } from "../database"

 declare global {
    namespace Express {
        export interface Request {
            user: Partial
        }
    }
}