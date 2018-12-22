const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_collect',
    [
      {
        "id": "64",
        'user_id': "dfsfsdfsdf",
        "value_id": "1015007",
        "add_time": "0",
        "is_attention": "0",
        "type_id": "0",
        ...timestamps
      }, {
        "id": "18",
        "user_id": "sfsdffsf",
        "value_id": "1015007",
        "add_time": "1495466325",
        "is_attention": "0",
        "type_id": "0",
        ...timestamps
      }, {
        "id": "19",
        "user_id": "sdfsfsfsdfs",
        "value_id": "1152161",
        "add_time": "1495970357",
        "is_attention": "0",
        "type_id": "0",
        ...timestamps
      }, {
        "id": "21",
        "user_id": "ewrfsdfsf",
        "value_id": "1156006",
        "add_time": "1497685421",
        "is_attention": "0",
        "type_id": "0",
        ...timestamps
      }, {
        "id": "47",
        "user_id": "ewrewfsdfsdfs",
        "value_id": "1009012",
        "add_time": "1500987979",
        "is_attention": "0",
        "type_id": "0",
        ...timestamps
      }, {
        "id": "44",
        "user_id": "wersdffsdfewr",
        "value_id": "1134030",
        "add_time": "1500987695",
        "is_attention": "0",
        "type_id": "0",
        ...timestamps
      }, {
        "id": "33",
        "user_id": "sfdwerwerwe",
        "value_id": "1015007",
        "add_time": "1500823262",
        "is_attention": "0",
        "type_id": "0",
        ...timestamps
      }, {
        "id": "31",
        "user_id": "sewrrwerwfe",
        "value_id": "1011004",
        "add_time": "1500822827",
        "is_attention": "0",
        "type_id": "0",
        ...timestamps
      }, {
        "id": "68",
        "user_id": "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
        "value_id": "1134030",
        "add_time": "0",
        "is_attention": "0",
        "type_id": "0",
        ...timestamps
      }
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_collect', {
      id: {
        [Op.in]: [64, 18, 19, 21, 47, 44, 33, 31, 68]
      }
    }, {});
  },
};
