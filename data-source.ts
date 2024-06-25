import "reflect-metadata"
import { DataSource } from "typeorm"

const { API_DB_NAME, API_DB_HOST, API_DB_PORT, API_DB_USERNAME, API_DB_PASSWORD } = process.env;

export const dataSource = new DataSource({
    type: "postgres",
    host: API_DB_HOST,
    port: parseInt(API_DB_PORT || '5432'),
    username: API_DB_USERNAME,
    password: API_DB_PASSWORD,
    database: API_DB_NAME,
    synchronize: false,
    logging: false,
    migrationsTransactionMode: 'each',
    entities: [`./build/src/database/entities/*.{ts,js}`],
    migrations: [`./build/src/database/migrations/*.{ts,js}`],
    subscribers: []
})
