import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import  appConfig  from './config/app.config';
import databaseConfig from './config/database.config';
import envValidation from './config/env.validation';
const ENV=process.env.NODE_ENV;
@Module({
  imports: [
    // Environment configuration
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
       !ENV ? '.env' : `.env.${ENV.trim()}`
      ],
      // jotna load karna hai custom config file
      load:[appConfig,databaseConfig],
      validationSchema:envValidation
    }),

    // Database configuration
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql' ,
        autoLoadEntities:configService.get('database.autoLadEntites'),
        synchronize:configService.get('database.syncronize'),
        host: configService.get('database.host'),
        port: +configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
       
        
      }),
    }),

    UsersModule,

    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
