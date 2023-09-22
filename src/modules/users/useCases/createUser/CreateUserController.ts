import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import bcrypt from "bcrypt"

export class CreateUserController {
    async handle(req: Request, res: Response) {

        const { name, email, password } = req.body

        const createUserUseCase = new CreateUserUseCase();

        const salt = await bcrypt.genSalt(10)
        
        const passwordHash = await bcrypt.hash(password, salt)

        const result = await createUserUseCase.execute({ email, name, password: passwordHash })

        return res.status(201).json(result)
    }
}