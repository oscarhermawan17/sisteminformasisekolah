'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Kelas', [{
        nama_kelas: 'I IPA I',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'I IPA II',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'I IPA III',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'I IPA IV',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'I IPS I',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'I IPS II',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'I IPS III',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'II IPA I',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'II IPA II',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'II IPA III',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'II IPA IV',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'II IPS I',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'II IPS II',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'II IPS III',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'III IPA I',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'III IPA II',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'III IPA III',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'III IPA IV',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'III IPS I',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'III IPS II',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_kelas: 'III IPS III',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },], {});
  },

  down: (queryInterface, Sequelize) => {
  }
};
