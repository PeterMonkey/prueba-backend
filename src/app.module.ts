import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 8080,
    username: 'root',
    password: '12345',
    database: 'prueba',
    autoLoadEntities: true,
    synchronize: true
  }),
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
