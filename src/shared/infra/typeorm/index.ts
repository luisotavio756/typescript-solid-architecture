import { createConnections, ConnectionOptions } from 'typeorm';
import path from 'path';
import dbConfig from '../../config/database';

const { database, dialect, host, port, password, username } = dbConfig;

const connection: ConnectionOptions[] = [
  {
    name: 'default',
    type: dialect,
    host,
    port: Number(port),
    username,
    password,
    database,
    entities: [`${path.resolve(__dirname, '..', '..', '..', 'entities/*.ts')}`],
    migrations: ['./migrations/*.ts'],
    cli: {
      migrationsDir: './migrations',
    },
  },
];

createConnections(connection);
