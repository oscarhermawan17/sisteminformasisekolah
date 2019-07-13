'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('MataPelajarans', [{
        nama_mata_pelajaran: 'Matematika',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Fisika',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Kimia',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Biologi',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Geografi',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'TIK',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Bahasa Indonesia',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Bahasa Inggris',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Ekonomi',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Akuntansi',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Agama',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Sosiologi',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Penjaskes',
        status: 'available',
        createdAt:new Date(),
        updatedAt:new Date()
      },], {});
  },

  down: (queryInterface, Sequelize) => {
  }
};
