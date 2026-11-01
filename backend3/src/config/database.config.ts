import { registerAs } from "@nestjs/config";  // bydefault function hai
export default registerAs('database',()=>({
     host:     process.env.DB_HOST || 'PRAKASH',
            port:     parseInt(process.env.DB_PORT ?? '3306'),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            name:     process.env.DB_DATABASE,

            syncronize:       process.env.DB_SYNC === 'true',
            autoLoadEntities: process.env.AUTO_LOAD === 'true',
        
}))