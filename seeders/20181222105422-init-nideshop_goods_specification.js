const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_goods_specification',
    [
      {
        "id": "1",
        "goods_id": "1181000",
        "specification_id": "1",
        "value": "1.5m床垫*1+枕头*2",
        "pic_url": ""
      }, {
        "id": "2",
        "goods_id": "1181000",
        "specification_id": "1",
        "value": "1.8m床垫*1+枕头*2",
        "pic_url": ""
      }, {
        "id": "3",
        "goods_id": "1181000",
        "specification_id": "2",
        "value": "浅杏粉",
        "pic_url": "http://yanxuan.nosdn.127.net/10022c73fa7aa75c2c0d736e96cc56d5.png?quality=90&thumbnail=200x200&imageView"
      }, {
        "id": "4",
        "goods_id": "1181000",
        "specification_id": "2",
        "value": "玛瑙红",
        "pic_url": "http://yanxuan.nosdn.127.net/29442127f431a1a1801c195905319427.png?quality=90&thumbnail=200x200&imageView"
      }, {
        "id": "5",
        "goods_id": "1181000",
        "specification_id": "2",
        "value": "烟白灰",
        "pic_url": "http://yanxuan.nosdn.127.net/36f64a7161b67e7fb8ea45be32ecfa25.png?quality=90&thumbnail=200x200&imageView"
      }
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_goods_specification', {
      id: {
        [Op.in]: [1, 2,3,4,5]
      }
    }, {});
  },
};
