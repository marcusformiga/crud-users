import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repositories/UserRepository";
import { AppError } from "../../../shared/errors/AppError";

export class RemoveUserService {
    public async execute(id: string): Promise<string>{
        const userRepository = getCustomRepository(UserRepository)
        const userExist = await userRepository.findById(id)
        if(!userExist){
            throw new AppError(`Usuário com id ${id} não encontrado, portanto não pode ser deletado`, 404)
        }
        await userRepository.remove(userExist)
        return id
    }
}