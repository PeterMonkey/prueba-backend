import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { JwtModule} from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { JwtContants } from './constants/jwt-constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    ConfigModule,
    JwtModule.register({
      global: true,
      secret: JwtContants.secret,
      //secretOrPrivateKey: JwtContants.secret,
      signOptions: { expiresIn: '1d' },
    })
],
  providers: [AuthService, UserService],
  controllers: [AuthController]
})
export class AuthModule {}
