import { Controller, Body, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/user.dto';
import { User } from './entity/user.entity';

@Controller('users')
export class UserController {
    constructor(
        private userService: UserService
    ){}
    
    @Post('/')
    register(@Body() user: CreateUserDTO): Promise<User> {
        return this.userService.create(user)
    }

    @Get('/')
    getUsers(): Promise<User[]>{
        return this.userService.getUsers()
    }

    @Get('/:id')
    getUserById(@Param('id') id: string): Promise<User>{
        return this.userService.getUserById(id)
    }

    @Put('/:id')
    updateUser(@Param('id') id: string, @Body() data: CreateUserDTO): Promise<void>{
        return this.userService.updateUser(id, data)
    }
}
