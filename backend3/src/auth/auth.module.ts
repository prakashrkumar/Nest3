import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import authConfig from './config/auth.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  // auth config ablivale for auth module
  imports:[ConfigModule.forFeature(authConfig)]
})
export class AuthModule {}
