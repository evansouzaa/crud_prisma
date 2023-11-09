import { Router } from "express";
import AuthController from "../api/controllers/AuthController";

const authRoutes = Router()

authRoutes.post("/", AuthController.auth)

export { authRoutes }