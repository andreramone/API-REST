const bcryptjs = require('bcrypt');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users', // tabela que quero inserir o seed
    [
      {
        nome: 'Luiz',
        email: 'luiz1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz2',
        email: 'luiz2@gmail.com',
        password_hash: await bcryptjs.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz3',
        email: 'luiz3@gmail.com',
        password_hash: await bcryptjs.hash('123456123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
