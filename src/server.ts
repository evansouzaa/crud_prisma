
import "express-async-errors"
import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import { routes } from "./routes"
import { AppError } from "./api/error/AppErros"

//ngrok proxy reverse
import ngrok from "@ngrok/ngrok";

(async function () {
    // Establish connectivity
    const listener = await ngrok.forward(
        {
            addr: "localhost:3000",
            authtoken: process.env.NGROK_TOKEN
        });

    // Output ngrok url to console
    console.log(`Ingress established at: ${listener.url()}`);
})();

const port = process.env.APP_PORT

const app = express()

const corsOptions = {
    origin: "*"
}

app.use(express.json(), cors(corsOptions))

app.use(routes)

//erros treatment
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error = ${err.message}`
    })
})

app.listen(port, () => {
    console.log(`running on port ${port}`)
})