module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_tipo_pista', {
      id: {
        allowNull: false,

        autoIncrement: true,

        primaryKey: true,

        type: Sequelize.INTEGER,
      },

      nome: {
        allowNull: true,

        type: Sequelize.STRING,
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
    return queryInterface.dropTable('tb_tipo_pista')
  },
}
