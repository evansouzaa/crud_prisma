import { Request, Response } from "express";
import { prisma } from "../../prisma/client";

import bcrypt from "bcrypt";
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
                return res.status(401).json({ error: "User or password invalid" })
            }

            const passwordIsValid = await bcrypt.compare(password, user.password)

            if (!passwordIsValid) {
                return res.status(401).json({ error: "User or password invalid" })
            }

            const generateUserToken = (id: string) => jwt.sign(
                { id },
                process.env.JWT_PASS!,
                { expiresIn: process.env.JWT_EXPIRE }
            )

            const token = generateUserToken(user.id)

            return res.status(200).json({ token })

        }

        catch (e) {

            return res.status(401).json({ error: "User or password invalid" })

        }
    }
}

export default new AuthController()