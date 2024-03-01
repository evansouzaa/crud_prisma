"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const AppErros_1 = require("./api/error/AppErros");
const port = process.env.APP_PORT;
const app = (0, express_1.default)();
const corsOptions = {
    origin: "*"
};
app.use(express_1.default.json(), (0, cors_1.default)(corsOptions));
app.use(routes_1.routes);
//erros treatment
app.use((err, request, response, next) => {
    if (err instanceof AppErros_1.AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error = ${err.message}`
    });
});
app.listen(port, function () {
    console.log(`running on port ${port}`);
});
