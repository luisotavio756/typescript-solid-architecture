import 'dotenv';
import { Dialect, Options } from 'sequelize/types';

interface IDatabaseConfig extends Options {
  dialect: Dialect;
  host: string | undefined;
  username: string;
  password: string;
  database: string;
  define?: {
    timestamps: boolean;
    underscored: boolean;
  };
}

const dialect = (process.env.DB_DIALECT || 'mysql') as Dialect;

const config: IDatabaseConfig = {
  dialect,
  host: process.env.DB_HOST || '',
  username: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || '',
  define: {
    timestamps: true,
    underscored: true,
  },
};

export default config;
