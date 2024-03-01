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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../../prisma/client");
class ActivationController {
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, plano } = req.body;
                const activationAlreadyExists = yield client_1.prisma.activation.findFirst({
                    where: {
                        login
                    }
                });
                if (activationAlreadyExists) {
                    return res.status(401).json({ error: "Activation already exists!" });
                }
                //create activation
                const newActivation = yield client_1.prisma.activation.create({
                    data: {
                        login,
                        plano
                    },
                    select: {
                        login: true,
                        plano: true
                    }
                });
                return res.status(201).json(newActivation);
            }
            catch (e) {
                return res.status(401).json({ error: "Activation error" });
            }
        });
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const activations = yield client_1.prisma.activation.findMany();
                return res.status(200).json(activations);
            }
            catch (e) {
                return res.status(401).json({ error: "List activation error" });
            }
        });
    }
}
exports.default = new ActivationController();
