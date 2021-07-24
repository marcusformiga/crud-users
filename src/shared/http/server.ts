import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'
import '../database/connect'
import {Request, Response, NextFunction} from 'express'
import { AppError } from '../errors/AppError'

const app = express()
const port = 3002

app.use(express.json())

app.get('/test', (request: Request, response: Response) =>{
    return response.send('Rota de teste')
})
app.use((error: Error, request: Request, response: Response, next: NextFunction) =>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Erro interno do servidor"
    })
})

app.listen(port, () =>{
    console.log(`Servidor escutando a porta ${port}`)
})
