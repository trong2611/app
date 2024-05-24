'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ticket', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DOUBLE,
      },
      departureAddress: {
        type: Sequelize.STRING,
      },
      destinationAddress: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      ticketTypeId: {
        type: Sequelize.BIGINT,
      },
      address: {
        type: Sequelize.STRING,
      },
      stateId: {
        type: Sequelize.BIGINT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ticket');
  }
};