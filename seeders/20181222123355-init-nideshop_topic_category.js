const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_topic_category',
    [
      {
        "id": "1",
        "title": "严选幕后",
        "pic_url": "https://yanxuan.nosdn.127.net/dc1b671ad54e16339f1b26cfeec6a1ea.jpg"
      }, {
        "id": "2",
        "title": "丁磊私物推荐",
        "pic_url": "https://yanxuan.nosdn.127.net/1de4da49367dd7c01af1f7a2b23b0237.jpg"
      }, {
        "id": "3",
        "title": "特色系列",
        "pic_url": "https://yanxuan.nosdn.127.net/14939888170021096.png"
      }, {
        "id": "4",
        "title": "明星商品",
        "pic_url": "https://yanxuan.nosdn.127.net/14939888168151095.png"
      }, {
        "id": "5",
        "title": "严选推荐",
        "pic_url": "https://yanxuan.nosdn.127.net/d943675462a06f817d33062d4eb059f5.jpg"
      }
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_topic_category', {
      id: {
        [Op.in]: [1, 2,3,4,5]
      }
    }, {});
  },
};
