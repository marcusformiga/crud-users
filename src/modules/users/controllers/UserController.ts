import {Request,Response} from 'express'
import { CreateUsersService } from '../services/CreateUserService'
import { ListAllUsers } from '../services/ListAllUsersService'
import { ListOneUserService } from '../services/ListOneUserService'
export class UserController {
    public async create(request: Request, response: Response): Promise<Response>{
        const {email, firstname, lastname, phonenumber} = request.body
        const createUser = new CreateUsersService()
        const user = await createUser.execute({email, firstname, lastname, phonenumber})
        return response.status(201).json(user) 
    }
    public async listAll(request: Request, response: Response): Promise <Response>{
        const listUsers = new ListAllUsers()
        const users = await listUsers.execute()
        return response.status(200).json([users])
    }
    public async listOne(request: Request, response: Response): Promise <Response>{
        const id = request.params.id
        const listUser = new ListOneUserService()
        const user = listUser.execute(id)
        return response.status(200).json(user)
    }
}
