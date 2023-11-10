import { Request, Response } from "express";
import { prisma } from "../../prisma/client";
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
                return res.status(401).json({ error: "Activation already exists!" })
            }

            //create activation
            const newActivation = await prisma.activation.create({
                data: {
                    login,
                    plano
                },
                select: {
                    login: true,
                    plano: true
                }
            });

            return res.status(201).json(newActivation)
        }

        catch (e) {

            return res.status(401).json({ error: "Activation error" })

        }
    }
    async index(req: Request, res: Response) {
        try {

            const activations = await prisma.activation.findMany()

            return res.status(200).json(activations)

        }
        catch (e) {

            return res.status(401).json({ error: "List activation error" })

        }
    }
}

export default new ActivationController()