import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { User } from './entity/user.entity';
import { CreateUserDTO } from './dto/user.dto';
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
}
