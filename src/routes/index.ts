import { Router } from "express";
import { userRoutes } from "./user.routes";
import { activationRoutes } from "./activation.routes";

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/activation", activationRoutes)

export { routes }