import {
  TYPEORM_TYPE,
  TYPEORM_HOST,
  TYPEORM_PORT,
  TYPEORM_PASSWORD,
  TYPEORM_USERNAME,
  TYPEORM_DATABASE,
} from './src/utils/environment'

module.exports = {
  type: TYPEORM_TYPE,
  host: TYPEORM_HOST,
  port: TYPEORM_PORT,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  logging: false,
  migrations: ['./src/infrastructure/typeorm/migrations/*.ts'],
  entities: ['./src/domain/entities/*.ts'],
  cli: {
    migrationsDir: './src/infrastructure/typeorm/migrations',
  },
}
