import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repositories/UserRepository";
import { AppError } from "../../../shared/errors/AppError";

export class ListOneUserService {
    public async execute(id: string):Promise<User| undefined>{
        const userRepository = getCustomRepository(UserRepository)
        const user = userRepository.findById(id)
        if(!user){
            throw new AppError(`User com id ${id} não foi encontrado`, 404)
        }
        return user
    }
}