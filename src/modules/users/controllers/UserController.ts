import {Request,Response} from 'express'
import { CreateUsersService } from '../services/CreateUserService'
import { ListAllUsers } from '../services/ListAllUsersService'

export class UserController {
    public async create(request: Request, response: Response): Promise<Response>{
        const {email, firstname, lastname, phonenumber} = request.body
        const createUser = new CreateUsersService()
        const user = await createUser.execute({email, firstname, lastname, phonenumber})
        return response.status(201).json(user) 
    }
    public async list(request: Request, response: Response): Promise <Response>{
        const listUsers = new ListAllUsers()
        const users = await listUsers.execute()
        return response.status(200).json([users])
    }
}
