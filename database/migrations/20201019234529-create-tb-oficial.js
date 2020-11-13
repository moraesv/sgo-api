module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_oficial', {
      id_oficial: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome_oficial: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      chapa: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      funcional: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      nome_usuario: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      admin: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('tb_oficial')
  },
}
