import { Controller, Body, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/user.dto';
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}
    
    @Post('/register')
    register(@Body() user: CreateUserDTO): Promise<User> {
        return this.userService.create(user)
    }
}
