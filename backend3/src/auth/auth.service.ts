import { Inject, Injectable } from '@nestjs/common';
import { type ConfigType } from '@nestjs/config';
import authConfig from './config/auth.config';

@Injectable()
export class AuthService {
  constructor(@Inject(authConfig.KEY) private readonly authConfiguration:ConfigType<typeof authConfig>){}


  login(){
    console.log(this.authConfiguration)
    console.log(this.authConfiguration.sharedSecret)

    return "ok "
  }
}

