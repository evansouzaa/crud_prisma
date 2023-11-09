import { Request, Response } from "express"; 
import bcrypt from "bcrypt";
import { prisma } from "../../prisma/client";
import { AppError } from "../error/AppErros";
import jwt from "jsonwebtoken"

class AuthController {
    async auth(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const user = await prisma.user.findUnique({
                where: {
                    email
                }
            });

            if (!user) {
                throw new AppError("User or password not found")
            }

            const passwordIsValid = await bcrypt.compare(password, user.password)

            if (!passwordIsValid) {
                throw new AppError("User or password not found")
            }

            const generateUserToken = (id: unknown) => jwt.sign(
                { id: id },
                "adfasdfas",
                { expiresIn: 86400 }
            )

            const token = generateUserToken(user.id)

            return res.status(200).json({ token })
        }
        catch (e) {
            return res.status(401).json("User or password not found")
        }
    }
}

export default new AuthController()