module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_enderecos', {
      id: {
        allowNull: false,

        autoIncrement: true,

        primaryKey: true,

        type: Sequelize.INTEGER,
      },

      cep: {
        allowNull: true,

        type: Sequelize.STRING,
      },

      estado: {
        allowNull: true,

        type: Sequelize.STRING,
      },

      cidade: {
        allowNull: true,

        type: Sequelize.STRING,
      },

      bairro: {
        allowNull: true,

        type: Sequelize.STRING,
      },

      logradouro: {
        allowNull: true,

        type: Sequelize.STRING,
      },

      endereco: {
        allowNull: true,

        type: Sequelize.STRING,
      },

      numero: {
        allowNull: true,

        type: Sequelize.STRING,
      },

      complemento: {
        allowNull: true,

        type: Sequelize.STRING,
      },

      referencia: {
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
    return queryInterface.dropTable('tb_enderecos')
  },
}
