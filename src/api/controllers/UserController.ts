import { Request, Response } from "express"; import bcrypt from "bcrypt"
import { prisma } from "../../prisma/client";
import { AuthenticatedRequest } from "../../types/AuthTypes";

class UserController {
    async store(req: Request, res: Response) {

        try {

            const { name, email, password } = req.body

            //check user exist
            const userAlreadyExists = await prisma.user.findUnique({
                where: {
                    email
                }
            });

            if (userAlreadyExists) {
                return res.status(409).json({ error: "User already exist!" })
            }

            //encrypt pass
            const salt = await bcrypt.genSalt(8)

            const passwordHash = await bcrypt.hash(password, salt)

            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: passwordHash
                },
                select: {
                    name: true,
                    email: true,
                }
            });

            return res.status(201).json(newUser)
        }

        catch (e) {

            return res.status(401).json({ error: "Erro create user" })

        }
    }
    async index(req: Request, res: Response) {

        const allUser = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
            }
        });

        if (!allUser) {
            return res.status(401).json({ error: "Users not exist!" })
        }

        return res.status(201).json(allUser)
    }

    async update(req: AuthenticatedRequest, res: Response) {

        try {
            const { name, email, password } = req.body

            console.log(req.userId)

            const updateUser = await prisma.user.update({
                where: {
                    id: req.userId,
                },
                data: {
                    name,
                    email,
                    password
                },
            })

            console.log(updateUser)

            return res.status(200).json({ sucess: "User updated" })
        }
        catch (e) {

            return res.status(401).json({ error: "Error update user" })
            
        }
    }
}

export default new UserController()