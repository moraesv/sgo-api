module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'Administrador',
          email: 'admin@admin.com',
          password: 'password',
        },
      ],
      {}
    )
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {})
  },
}
