import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../erros/AppErros";

export class GetAllUserUseCase {

    async execute() {
        //get All Users with (id, email, name (withou password))
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

        return allUser

    }

}