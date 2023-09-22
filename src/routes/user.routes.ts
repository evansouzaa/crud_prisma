import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUserController } from "../modules/users/useCases/getAllUsers/GetAllUserController";

const createUserController = new CreateUserController
const getAllUserUseCase = new GetAllUserController

const userRoutes = Router()

userRoutes.get("/", getAllUserUseCase.handle)
userRoutes.post("/", createUserController.handle)

export { userRoutes }