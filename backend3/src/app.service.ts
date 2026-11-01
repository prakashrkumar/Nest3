import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
constructor(  private readonly configService :ConfigService){}
  

getAllUser(){
  const env=this.configService.get('ENV_MODE')
  console.log(env)
  return "ok nest js"
  
  
}
}
