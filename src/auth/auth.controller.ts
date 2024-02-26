import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/user/dto/user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
    async register(@Body() user: CreateUserDTO){
        return await this.authService.register(user)
    }

    @Post('login')
    async login(@Body('email') email: string, @Body('password') password: string){
        const token = await this.authService.login(email, password)
        return {
            access_token: token
        }
    }
}
