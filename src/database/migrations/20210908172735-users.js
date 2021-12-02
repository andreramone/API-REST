module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,

    },
    nome: {
      type: Sequelize.STRING,
      defaultValue: '',
      allowNull: false,
    },

    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      defaultValue: '',

    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('users'),
};
