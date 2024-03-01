"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const AuthController_1 = __importDefault(require("../api/controllers/AuthController"));
const authRoutes = (0, express_1.Router)();
exports.authRoutes = authRoutes;
authRoutes.post("/", AuthController_1.default.auth);
