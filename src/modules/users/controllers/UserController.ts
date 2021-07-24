import {Request,Response} from 'express'
import { CreateUsersService } from '../services/CreateUserService'
import { ListAllUsers } from '../services/ListAllUsersService'
import { ListOneUserService } from '../services/ListOneUserService'
import { RemoveUserService } from '../services/RemoveUserService'
import UpdateUserService from '../services/UpdateUserService'
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
        const user = await listUser.execute(id)
        return response.status(200).json(user)
    }
    public async remove(request: Request, response: Response): Promise <Response>{
        const id = request.params.id
        const removeUser = new RemoveUserService()
        const user = await removeUser.execute(id)
        return response.status(200).json(id)
    }
    public async update(request: Request, response: Response): Promise<Response>{
        const id = request.params.id
        const {email, firstname, lastname, phonenumber} = request.body
        const updateUser = new UpdateUserService()
        const user = await updateUser.execute({id, email, firstname, lastname, phonenumber})
        return response.status(200).json(user)
    }
}
