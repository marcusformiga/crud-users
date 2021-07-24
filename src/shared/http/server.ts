import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'
import {Request, Response} from 'express'

const app = express()
const port = 3002

app.use(express.json())

app.get('/test', (request: Request, response: Response) =>{
    return response.send('Rota de teste')
})

app.listen(port, () =>{
    console.log(`Servidor escutando a porta ${port}`)
})
