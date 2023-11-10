import { Router } from "express";
import ActivationController from "../api/controllers/ActivationController";
import AuthRequire from "../api/middleware/AuthRequire";

const activationRoutes = Router()

activationRoutes.get("/", AuthRequire, ActivationController.index)
activationRoutes.post("/", AuthRequire, ActivationController.store)

export { activationRoutes }