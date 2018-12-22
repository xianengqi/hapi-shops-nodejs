'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_user',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      birthday: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      register_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      last_login_time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: false,
      },
      last_login_ip: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_level_id: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      register_ip: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weixin_openid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: queryInterface => queryInterface.dropTable('nideshop_user')
};
