import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn('uuid')
    @IsString({
        message: 'o campo id precisa ser uma string'
    })
    @IsNotEmpty()
    id: string
    @Column()
    @IsEmail()
    @IsNotEmpty()
    email: string
    @Column()
    @IsString()
    @IsNotEmpty()
    firstname: string
    @Column()
    @IsString()
    @IsNotEmpty()
    lastname: string
    @Column()
    @IsNumber()
    @IsNotEmpty()
    phonenumber: number
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date

}
