import { registerAs } from "@nestjs/config"


export default registerAs('appConfig',()=>({
     envioroment: process.env.NODE_ENV || 'production',
}))
