import { Controller, Body, Post, Get, Put, Delete, Param, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/user.dto';
import { User } from './entity/user.entity';
import { AuthGuard } from 'src/auth/middleware/auth.guard';
import { AdminGuard } from '../auth/middleware/admin.guard';

@Controller('users')
export class UserController {
    constructor(
        private userService: UserService
    ){}
    
    @UseGuards(AuthGuard)
    @UseGuards(AdminGuard)
    @Post('/')
    register(@Body() user: CreateUserDTO): Promise<User> {
        return this.userService.create(user)
    }

    @UseGuards(AuthGuard)
    @Get('/')
    getUsers(): Promise<User[]>{
        return this.userService.getUsers()
    }

    @UseGuards(AuthGuard)
    @Get('/:id')
    getUserById(@Param('id') id: string): Promise<User>{
        return this.userService.getUserById(id)
    }

    @UseGuards(AuthGuard)
    @UseGuards(AdminGuard)
    @Put('/:id')
    updateUser(@Param('id') id: string, @Body() data: CreateUserDTO): Promise<void>{
        return this.userService.updateUser(id, data)
    }

    @UseGuards(AuthGuard)
    @UseGuards(AdminGuard)
    @Delete('/:id')
    deleteUser(@Param('id') id: string): Promise<void>{
        return this.userService.deleteUser(id)
    }
}
