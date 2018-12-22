const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'nideshop_search_history',
    [
      {
        "id": "23",
        "keyword": "母亲节",
        "from": "",
        "add_time": "1500564813",
        "user_id": "1"
      }, {
        "id": "24",
        "keyword": "日式",
        "from": "",
        "add_time": "1500564816",
        "user_id": "1"
      }, {
        "id": "25",
        "keyword": "日式",
        "from": "",
        "add_time": "1500564822",
        "user_id": "1"
      }, {
        "id": "26",
        "keyword": "清新",
        "from": "",
        "add_time": "1500564835",
        "user_id": "1"
      }, {
        "id": "27",
        "keyword": "日式",
        "from": "",
        "add_time": "1500638161",
        "user_id": "1"
      }, {
        "id": "28",
        "keyword": "母亲节",
        "from": "",
        "add_time": "1532614717",
        "user_id": "0"
      }, {
        "id": "29",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614734",
        "user_id": "0"
      }, {
        "id": "30",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614737",
        "user_id": "0"
      }, {
        "id": "31",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614740",
        "user_id": "0"
      }, {
        "id": "32",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614743",
        "user_id": "0"
      }, {
        "id": "33",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614745",
        "user_id": "0"
      }, {
        "id": "34",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614746",
        "user_id": "0"
      }, {
        "id": "35",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614747",
        "user_id": "0"
      }, {
        "id": "36",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614747",
        "user_id": "0"
      }, {
        "id": "37",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614747",
        "user_id": "0"
      }, {
        "id": "38",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614748",
        "user_id": "0"
      }, {
        "id": "39",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614748",
        "user_id": "0"
      }, {
        "id": "40",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614749",
        "user_id": "0"
      }, {
        "id": "41",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614751",
        "user_id": "0"
      }, {
        "id": "42",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532614751",
        "user_id": "0"
      }, {
        "id": "43",
        "keyword": "日式和风懒人沙发",
        "from": "",
        "add_time": "1532617204",
        "user_id": "0"
      }, {
        "id": "44",
        "keyword": "母亲节礼物-舒适安睡组合",
        "from": "",
        "add_time": "1532619637",
        "user_id": "0"
      }, {
        "id": "45",
        "keyword": "母亲节礼物-舒适安睡组合",
        "from": "",
        "add_time": "1532619691",
        "user_id": "0"
      }, {
        "id": "46",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532965603",
        "user_id": "0"
      }, {
        "id": "47",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532965612",
        "user_id": "0"
      }, {
        "id": "48",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532965613",
        "user_id": "0"
      }, {
        "id": "49",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532965615",
        "user_id": "0"
      }, {
        "id": "50",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532965616",
        "user_id": "0"
      }, {
        "id": "51",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1532965617",
        "user_id": "0"
      }, {
        "id": "89",
        "keyword": "女式蝶边真丝内裤",
        "from": "",
        "add_time": "1535208091",
        "user_id": "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"
      }, {
        "id": "90",
        "keyword": "单鞋",
        "from": "",
        "add_time": "1535208464",
        "user_id": "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"
      }, {
        "id": "91",
        "keyword": "夏凉被",
        "from": "",
        "add_time": "1535208751",
        "user_id": "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"
      }
    ], {},
  ),

  down: (queryInterface, Sequelize) => {
    const {
      Op
    } = Sequelize;
    return queryInterface.bulkDelete('nideshop_search_history', {
      id: {
        [Op.in]: [23, , 24, , 25, , 26, , 27, , 28, , 29, , 30, , 31, , 32, , 33, , 34, , 35, , 36, , 37, , 38, , 39, , 40, , 41, , 42, , 43, , 44, , 45, , 46, , 47, , 48, , 49, , 50, , 51, , 89, , 90, , 91,
]
      }
    }, {});
  },
};
