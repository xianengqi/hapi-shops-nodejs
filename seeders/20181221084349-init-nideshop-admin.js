const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_admin',
    [{
        id: 1,
        username: 'admin',
        password: 'bb87bf23d14b27de74530dec20e234f3',
        password_salt: 'ABCDEF',
        last_login_ip: '::ffff:127.0.0.1',
        last_login_time: 1505484711,
        add_time: 0,
        update_time: 0,
        avatar: '/',
        admin_role_id: 0,
        ...timestamps
      },
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_admin', {
      id: {
        [Op.in]: [1]
      }
    }, {});
  },
};
