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
        allowNull: false,

        type: Sequelize.STRING,
      },

      inicio: {
        allowNull: false,

        type: Sequelize.DATE,
      },

      fim: {
        allowNull: false,

        type: Sequelize.DATE,
      },

      descricao: {
        allowNull: false,

        type: Sequelize.TEXT,
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
    return queryInterface.dropTable('tb_avisos')
  },
}
