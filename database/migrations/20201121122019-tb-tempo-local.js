module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_tempo_local', {
      id: {
        allowNull: false,

        autoIncrement: true,

        primaryKey: true,

        type: Sequelize.INTEGER,
      },

      nome: {
        allowNull: false,

        type: Sequelize.STRING,
      },

      ativo: {
        allowNull: false,

        type: Sequelize.BOOLEAN,

        defaultValue: true,
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
    return queryInterface.dropTable('tb_tempo_local')
  },
}
