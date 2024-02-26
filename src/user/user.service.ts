import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { User } from './entity/user.entity';
import { CreateUserDTO } from './dto/user.dto';
import { UpdateUserDTO } from './dto/update-user.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor( @InjectRepository(User) private userRepository: UserRepository ){}

    async create(user: CreateUserDTO): Promise<User>{
        const { name, email, password, role } = user
        const hash = await bcrypt.hash(password, 10)
        const newUser = this.userRepository.create({
            name,
            email,
            password: hash,
            role
        })
        this.userRepository.save(newUser)
        return newUser
    }

    async getUsers(): Promise<User[]>{
        const users = this.userRepository.find()
        return users
    }

    async getUserById(id: string): Promise<User>{
        const user = await this.userRepository.findOneBy({id})
        return user
    }

    async updateUser(id: string, data: UpdateUserDTO): Promise<void>{
        await this.userRepository.update(id, data)
    }
}
