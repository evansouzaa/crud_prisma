"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = require("../../prisma/client");
class UserController {
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const { name, email, password } = req.body;
                //check user exist
                const userAlreadyExists = yield client_1.prisma.user.findUnique({
                    where: {
                        email
                    }
                });
                if (userAlreadyExists) {
                    return res.status(409).json({ error: "User already exist!" });
                }
                //encrypt pass
                const salt = yield bcrypt_1.default.genSalt(8);
                const passwordHash = yield bcrypt_1.default.hash(password, salt);
                const newUser = yield client_1.prisma.user.create({
                    data: {
                        name,
                        email,
                        password: passwordHash
                    },
                    select: {
                        name: true,
                        email: true,
                    }
                });
                return res.status(201).json(newUser);
            }
            catch (e) {
                return res.status(401).json({ error: "Erro create user" });
            }
        });
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const allUser = yield client_1.prisma.user.findMany({
                select: {
                    id: true,
                    email: true,
                    name: true,
                }
            });
            if (!allUser) {
                return res.status(401).json({ error: "Users not exist!" });
            }
            return res.status(201).json(allUser);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                console.log(req.userId);
                const updateUser = yield client_1.prisma.user.update({
                    where: {
                        id: req.userId,
                    },
                    data: {
                        name,
                        email,
                        password
                    },
                });
                console.log(updateUser);
                return res.status(200).json({ sucess: "User updated" });
            }
            catch (e) {
                return res.status(401).json({ error: "Error update user" });
            }
        });
    }
}
exports.default = new UserController();
