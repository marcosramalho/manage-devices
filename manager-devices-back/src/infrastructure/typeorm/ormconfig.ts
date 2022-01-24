import { ConnectionOptions } from 'typeorm'
import path from 'path'

import {
  TYPEORM_TYPE,
  TYPEORM_HOST,
  TYPEORM_PORT,
  TYPEORM_PASSWORD,
  TYPEORM_USERNAME,
  TYPEORM_DATABASE,
} from '../../utils/environment'

export default {
  type: TYPEORM_TYPE,
  host: TYPEORM_HOST,
  port: TYPEORM_PORT,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  logging: false,
  entities: [
    path.join(__dirname, '..', '..', 'domain', 'entities', '**', '*.*'),
    path.join(__dirname, '..', '..', 'domain', 'entities', '*.*'),
  ],
  migrations: [path.join(__dirname, 'migrations', '*.*')],
  cli: {
    migrationsDir: path.join(__dirname, 'migrations', '*.*'),
  },
} as ConnectionOptions
