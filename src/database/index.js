import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Users from '../app/models/User';
import Recipients from '../app/models/Recipient';

const models = [Users, Recipients];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    // Chamando o metodo init de todos os models
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
