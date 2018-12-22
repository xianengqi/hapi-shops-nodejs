const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_user',
    [
      {
        "id": "1",
        "username": "heyusuo",
        "password": "123456",
        "gender": "0",
        "birthday": "0",
        "register_time": "0",
        "last_login_time": "0",
        "last_login_ip": "",
        "user_level_id": "0",
        "nickname": "heyushuo",
        "mobile": "15175794123",
        "register_ip": "",
        "avatar": "http://img1.imgtn.bdimg.com/it/u=1514241375,2114605636&fm=27&gp=0.jpg",
        "weixin_openid": ""
      }
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_user', {
      id: {
        [Op.in]: [1]
      }
    }, {});
  },
};
