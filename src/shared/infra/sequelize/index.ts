import { Sequelize } from 'sequelize';
import dbConfig from '../../config/database';

const models = []; // Sequelize models

const connection = new Sequelize(dbConfig);

models.map(model => model.init(connection));
models.map(model => model.associate(connection.models));

export default connection;
