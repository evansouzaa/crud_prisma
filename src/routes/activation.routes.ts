import { Router } from "express";
import { StoreActivationController } from "../modules/users/useCases/storeActivation/StoreActivationController";

const storeActivation = new StoreActivationController

const activationRoutes = Router()

activationRoutes.post("/", storeActivation.handle)

export { activationRoutes }