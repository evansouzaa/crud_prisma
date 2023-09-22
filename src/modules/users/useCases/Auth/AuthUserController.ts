import { Request, Response } from "express";

export class AuthController {
    async handle(req: Request, res: Response) {

        return res.status(201).json("autorizado")
        
    }
}