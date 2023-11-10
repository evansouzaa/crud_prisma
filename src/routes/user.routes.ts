import { Router } from "express";
import UserController from "../api/controllers/UserController";
import AuthRequire from "../api/middleware/AuthRequire";

const userRoutes = Router()

userRoutes.post("/", UserController.store)

userRoutes.get("/", AuthRequire, UserController.index)
userRoutes.put("/", AuthRequire, UserController.update)

export { userRoutes }