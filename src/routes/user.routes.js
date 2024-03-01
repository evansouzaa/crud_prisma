"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const UserController_1 = __importDefault(require("../api/controllers/UserController"));
const AuthRequire_1 = __importDefault(require("../api/middleware/AuthRequire"));
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post("/create", UserController_1.default.store);
userRoutes.get("/", AuthRequire_1.default, UserController_1.default.index);
userRoutes.put("/", AuthRequire_1.default, UserController_1.default.update);
