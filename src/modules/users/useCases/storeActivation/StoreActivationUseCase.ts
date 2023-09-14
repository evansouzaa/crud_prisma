import { Activation } from "@prisma/client"
import { prisma } from "../../../../prisma/client";
import { StoreActivationTypes } from "../../types/StoreActivationTypes";
import { AppError } from "../../../../erros/AppErros";

export class StoreActivationUseCase {
    async execute({ login, plano }: StoreActivationTypes): Promise<Activation> {
        //check activation exist
        
            const activationAlreadyExists = await prisma.activation.findFirst({
                where: {
                    login
                }
            })

            if (activationAlreadyExists) {
                throw new AppError("activation already exists!")
            }

            //create activation
            const activation = await prisma.activation.create({
                data: {
                    login,
                    plano
                }
            });

            return activation
    }
}