import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/entity/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ){}

    async login(email: string, password:string): Promise<string>{
        const user = await this.userService.getByEmail(email)
        if(!user) {
            throw new Error('Invalid email');
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if(!isPassword){
            throw new Error('Invalid password');
        }
        const payload = { id: user.id, email: user.email };
        const token = this.jwtService.signAsync(payload)

        return token
    }
    
}
