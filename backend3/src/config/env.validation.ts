import * as Joi from  'Joi'

export default Joi.object({
    NODE_ENV:Joi.string()
    .valid('development','test','priduction')
    .default('development'),

    DB_PORT:Joi.number().port().default(9000),
    DB_PASSWORD:Joi.string().required(),
        DB_USERNAME:Joi.string().required(),
            DB_NAME:Joi.string().required(),
                DB_HOST:Joi.string().required(),
            SECRET_KEY:Joi.string().required()


})