import { Request, Response } from "express"; import bcrypt from "bcrypt"
import { prisma } from "../../prisma/client";
import { AppError } from "../error/AppErros";

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
                throw new AppError("User already exists!")
            }

            //encrypt pass
            const salt = await bcrypt.genSalt(8)
            const passwordHash = await bcrypt.hash(password, salt)

            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: passwordHash
                }
            });

            return res.status(201).json(newUser)
        }
        catch (e) {
            return res.status(401).json("Error!")
        }
    }
    async index(req: Request, res: Response) {

        const allUser = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                //password: true,
            }
        });

        if (!allUser) {
            throw new AppError("Users not found")
        }

        return res.status(201).json(allUser)
    }
}

export default new UserController()