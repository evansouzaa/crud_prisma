import { Router } from "express";
import ActivationController from "../api/controllers/ActivationController";

const activationRoutes = Router()

activationRoutes.get("/", ActivationController.index)
activationRoutes.post("/", ActivationController.store)

export { activationRoutes }