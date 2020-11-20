module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'tb_oficial',
      [
        {
          id: 1,
          nome_oficial: 'Administrador',
          nome_usuario: 'admin',
          senha: '$2a$10$Ac3OoKpWg5ynXyOXh0VphujY8/yNzBnihsFlIOr2tKPXdyur1G5tC',
          chapa: '1',
          funcional: '1',
          admin: true,
        },
      ],
      {}
    )
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('tb_oficial', null, {})
  },
}
