'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookingDetail', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      ticketId: {
        type: Sequelize.BIGINT,
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      unitPrice: {
        type: Sequelize.DOUBLE
      },
      totalPrice: {
        type: Sequelize.DOUBLE
      },
      bookingId: {
        type: Sequelize.BIGINT
      },
      qrCode: {
        type: Sequelize.STRING
      },
      qrStatusId: {
        type: Sequelize.TINYINT,
        defaultValue: 0
      },
      validUntil: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('BookingDetail');
  }
};