import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repositories/UserRepository";
import { AppError } from "../../../shared/errors/AppError";

export class ListAllUsers {
    public async execute(): Promise<User[]>{
        const usersRepository = getCustomRepository(UserRepository)
        const users = await usersRepository.find()
        return users
    }
}