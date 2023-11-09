import { Request, Response } from "express"; import bcrypt from "bcrypt"
import { prisma } from "../../prisma/client";
import { AppError } from "../error/AppErros";

class ActivationController {
    async store(req: Request, res: Response) {
        try {
            const { login, plano } = req.body

            const activationAlreadyExists = await prisma.activation.findFirst({
                where: {
                    login
                }
            })

            if (activationAlreadyExists) {
                throw new AppError("activation already exists!")
            }

            //create activation
            const newActivation = await prisma.activation.create({
                data: {
                    login,
                    plano
                }
            });

            return res.status(201).json(newActivation)
        }
        catch (e) {
            return res.status(401).json("Error!")
        }
    }
    async index(req: Request, res: Response) {
        try {

            const activations = await prisma.activation.findMany()
            
            return res.status(200).json(activations)

        }
        catch (e) {
            return res.status(401).json("Error!")
        }
    }
}

export default new ActivationController()