module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_oficiais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome_oficial: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      chapa: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      funcional: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      nome_usuario: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      senha: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      admin: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      ativo: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: true,
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
    return queryInterface.dropTable('tb_oficiais')
  },
}
