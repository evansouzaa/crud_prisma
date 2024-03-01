"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activationRoutes = void 0;
const express_1 = require("express");
const ActivationController_1 = __importDefault(require("../api/controllers/ActivationController"));
const AuthRequire_1 = __importDefault(require("../api/middleware/AuthRequire"));
const activationRoutes = (0, express_1.Router)();
exports.activationRoutes = activationRoutes;
activationRoutes.get("/", AuthRequire_1.default, ActivationController_1.default.index);
activationRoutes.post("/", AuthRequire_1.default, ActivationController_1.default.store);
