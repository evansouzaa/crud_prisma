import { Router } from "express";
import UserController from "../api/controllers/UserController";
import AuthRequire from "../api/middleware/AuthRequire";

const userRoutes = Router()

userRoutes.get("/", AuthRequire, UserController.index)
userRoutes.post("/", UserController.store)

export { userRoutes }