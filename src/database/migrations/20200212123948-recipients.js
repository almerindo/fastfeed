module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('recipients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: queryInterface => queryInterface.dropTable('recipients'),
};
