"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json("Unauthorized");
    }
    const [, token] = authorization.split(" ");
    try {
        const data = jsonwebtoken_1.default.verify(token, process.env.JWT_PASS);
        const { id } = data;
        req.userId = id;
        return next();
    }
    catch (e) {
        return res.status(401).json("Invalid token");
    }
};
