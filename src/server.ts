import "express-async-errors"
import express, { NextFunction, Request, Response } from "express"
import { routes } from "./routes"
import { AppError } from "./api/error/AppErros"

const app = express()

app.use(express.json())

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

app.listen(3000, function(){
    console.log("rodando porta 3000")
})