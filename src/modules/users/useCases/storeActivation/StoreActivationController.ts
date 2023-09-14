import { Request, Response } from "express";
import { StoreActivationUseCase } from "./StoreActivationUseCase";

export class StoreActivationController {
    async handle(req: Request, res: Response) {

        const { login, plano } = req.body

        const storeActivationUseCase = new StoreActivationUseCase();

        const result = await storeActivationUseCase.execute({ login, plano })

        return res.status(201).json(result)
    }
}