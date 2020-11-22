module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_atendimentos', {
      id: {
        allowNull: false,

        autoIncrement: true,

        primaryKey: true,

        type: Sequelize.INTEGER,
      },

      telefone: {
        allowNull: true,

        type: Sequelize.STRING,
      },

      descricao: {
        allowNull: true,

        type: Sequelize.TEXT,
      },

      horaAtendimento: {
        allowNull: true,

        type: Sequelize.TIME,
      },

      inicioAtuacao: {
        allowNull: true,

        type: Sequelize.TIME,
      },

      fimAtuacao: {
        allowNull: true,

        type: Sequelize.TIME,
      },

      formaSolicitacao: {
        allowNull: true,

        type: Sequelize.INTEGER,
      },

      nomeSolicitante: {
        allowNull: true,

        type: Sequelize.STRING,
      },

      qualificadoEnvolvido: {
        allowNull: true,

        type: Sequelize.BOOLEAN,

        defaultValue: true,
      },

      outros: {
        allowNull: true,

        type: Sequelize.TEXT,
      },

      enderecoId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tb_enderecos',
          key: 'id',
        },
      },

      oficialId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tb_oficiais',
          key: 'id',
        },
      },

      finalizado: {
        allowNull: true,

        type: Sequelize.BOOLEAN,

        defaultValue: false,
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
    return queryInterface.dropTable('tb_atendimentos')
  },
}
