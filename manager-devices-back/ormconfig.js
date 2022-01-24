"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("./src/utils/environment");
module.exports = {
    type: environment_1.TYPEORM_TYPE,
    host: environment_1.TYPEORM_HOST,
    port: environment_1.TYPEORM_PORT,
    username: environment_1.TYPEORM_USERNAME,
    password: environment_1.TYPEORM_PASSWORD,
    database: environment_1.TYPEORM_DATABASE,
    logging: false,
    migrations: ['./src/infrastructure/typeorm/migrations/*.ts'],
    entities: ['./src/domain/entities/*.ts'],
    cli: {
        migrationsDir: './src/infrastructure/typeorm/migrations',
    },
};
