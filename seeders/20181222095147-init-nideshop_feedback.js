const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'feedbacks',
    [
      {
        "id": "1",
        "user_id": "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
        "user_name": "夏能啟",
        "connect": "15175794013",
        "msg_content": "写的很好,想和你深入交流一下!!",
        "msg_time": "15351899623.16"
      }, {
        "id": "2",
        "user_id": "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
        "user_name": "夏能啟",
        "connect": "123456",
        "msg_content": "某某地方存在严重bug",
        "msg_time": "15352061173.83"
      }, {
        "id": "3",
        "user_id": "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
        "user_name": "何玉硕",
        "connect": "123456789",
        "msg_content": "某某处存在严重bug请及时修复",
        "msg_time": "15352061614.72"
      }
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('feedbacks', {
      id: {
        [Op.in]: [1, 2, 3]
      }
    }, {});
  },
};
