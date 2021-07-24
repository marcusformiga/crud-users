import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repositories/UserRepository";
import { AppError } from "../../../shared/errors/AppError";

interface IRequest {
    email: string
    firstname: string
    lastname: string
    phonenumber: number
}

export class CreateUsersService {
    public async execute({email, firstname, lastname, phonenumber}: IRequest): Promise<User>{
        const userRepository = getCustomRepository(UserRepository)
        const userExists = await userRepository.findByEmail(email)
        if(userExists){
            throw new AppError(`Usuário com email ${email} já está cadastrado`, 400)
        }
        const user = userRepository.create({
            email,
            firstname,
            lastname,
            phonenumber
        })
        await userRepository.save(user)
        return user
    }
}