module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_avisos', {
      id: {
        allowNull: false,

        autoIncrement: true,

        primaryKey: true,

        type: Sequelize.INTEGER,
      },

      titulo: {
        allowNull: true,

        type: Sequelize.STRING,
      },

      inicio: {
        allowNull: true,

        type: Sequelize.DATE,
      },

      fim: {
        allowNull: true,

        type: Sequelize.DATE,
      },

      descricao: {
        allowNull: true,

        type: Sequelize.TEXT,
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
    return queryInterface.dropTable('tb_avisos')
  },
}
