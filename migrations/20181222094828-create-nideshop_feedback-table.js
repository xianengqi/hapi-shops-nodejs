'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'nideshop_feedback',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false,
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      connect: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      msg_content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      msg_time: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false,
      }
    }
  ),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
