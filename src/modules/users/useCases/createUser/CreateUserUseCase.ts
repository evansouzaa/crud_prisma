import { User } from "@prisma/client"
import { prisma } from "../../../../prisma/client";
import { CreateUserType } from "../../types/CreateUserTypes";
import { AppError } from "../../../../erros/AppErros";

export class CreateUserUseCase {
    async execute({ email, name }: CreateUserType): Promise<User> {
        //check user exist
            const userAlreadyExists = await prisma.user.findUnique({
                where: {
                    email
                }
            });

            if (userAlreadyExists) {
                throw new AppError("User already exists!")
            }

            //create user
            const user = await prisma.user.create({
                data: {
                    name,
                    email
                }
            });

            return user
    }
}