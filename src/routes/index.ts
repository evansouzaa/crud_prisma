import { Router } from "express";
import { userRoutes } from "./user.routes";
import { activationRoutes } from "./activation.routes";
import { authRoutes } from "./auth.routes";

const routes = Router()

routes.use("/auth", authRoutes)

routes.use("/users", userRoutes)

routes.use("/activation", activationRoutes)

export { routes }