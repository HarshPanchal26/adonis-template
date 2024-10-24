/*
|--------------------------------------------------------------------------
| Validating Environment Variables
|--------------------------------------------------------------------------
|
| In this file we define the rules for validating environment variables.
| By performing validation we ensure that your application is running in
| a stable environment with correct configuration values.
|
| This file is read automatically by the framework during the boot lifecycle
| and hence do not rename or move this file to a different location.
|
*/

import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  HOST: Env.schema.string({ format: 'host' }),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  APP_NAME: Env.schema.string(),
  CACHE_VIEWS: Env.schema.boolean(),
  SESSION_DRIVER: Env.schema.string(),
  DRIVE_DISK: Env.schema.enum(['local', 's3'] as const),
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),

  AWS_S3_KEY: Env.schema.string.optional(), //FIXME: temp change to optional
  AWS_S3_SECRET: Env.schema.string.optional(), //FIXME: temp change to optional
  AWS_S3_BUCKET: Env.schema.string.optional(), //FIXME: temp change to optional
  AWS_S3_REGION: Env.schema.string.optional(), //FIXME: temp change to optional
  AWS_S3_ENDPOINT: Env.schema.string.optional(),

  DB_CONNECTION: Env.schema.string(),
  MYSQL_HOST: Env.schema.string({ format: 'host' }),
  MYSQL_PORT: Env.schema.number(),
  MYSQL_USER: Env.schema.string(),
  MYSQL_PASSWORD: Env.schema.string.optional(),
  MYSQL_DB_NAME: Env.schema.string(),

  // BULL_SERVER_PORT: Env.schema.number.optional(),
  // BULL_CONNECTION: Env.schema.enum(['bull', 'direct_uri'] as const),

  // REDIS_DATABASE: Env.schema.number.optional(),
  // REDIS_HOST: Env.schema.string({ format: 'host' }),
  // REDIS_PORT: Env.schema.number.optional(),
  // REDIS_PASSWORD: Env.schema.string.optional(),
  // REDIS_URI: Env.schema.string.optional(),

  SMTP_HOST: Env.schema.string({ format: 'host' }),
  SMTP_PORT: Env.schema.number(),
  SMTP_USERNAME: Env.schema.string(),
  SMTP_PASSWORD: Env.schema.string(),
  COMPANY_EMAIL: Env.schema.string(),
})
