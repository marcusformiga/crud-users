import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repositories/UserRepository";
import { AppError } from "../../../shared/errors/AppError";

interface IRequest {
    id: string
    email: string
    firstname: string
    lastname: string
    phonenumber: number
    
  }
  export default class UpdateUserService{
    public async execute({id,email, firstname, lastname, phonenumber}: IRequest): Promise<User| undefined>{
      const userRepository = getCustomRepository(UserRepository)
      const user = await userRepository.findById(id)
      if(!user){
        throw new AppError(`Usuário com id ${id} não foi encontrado`, 404)
      }
  
     user.email = email
     user.firstname = firstname
     user.lastname = lastname
     user.phonenumber = phonenumber
    await userRepository.save(user)
    return user
  
    }
}
  