'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('MataPelajarans', [{
        nama_mata_pelajaran: 'Matematika',
        status: 'available',
        deskripsi:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna eget molestie vehicula. Aliquam sed orci suscipit, finibus orci quis, semper diam. Praesent et velit id massa finibus aliquet.',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Fisika',
        status: 'available',
        deskripsi:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna eget molestie vehicula. Aliquam sed orci suscipit, finibus orci quis, semper diam. Praesent et velit id massa finibus aliquet.',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Kimia',
        status: 'available',
        deskripsi:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna eget molestie vehicula. Aliquam sed orci suscipit, finibus orci quis, semper diam. Praesent et velit id massa finibus aliquet.',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Biologi',
        status: 'available',
        deskripsi:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna eget molestie vehicula. Aliquam sed orci suscipit, finibus orci quis, semper diam. Praesent et velit id massa finibus aliquet.',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Geografi',
        status: 'available',
        deskripsi:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna eget molestie vehicula. Aliquam sed orci suscipit, finibus orci quis, semper diam. Praesent et velit id massa finibus aliquet.',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'TIK',
        status: 'available',
        deskripsi:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna eget molestie vehicula. Aliquam sed orci suscipit, finibus orci quis, semper diam. Praesent et velit id massa finibus aliquet.',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Bahasa Indonesia',
        status: 'available',
        deskripsi:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna eget molestie vehicula. Aliquam sed orci suscipit, finibus orci quis, semper diam. Praesent et velit id massa finibus aliquet.',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Bahasa Inggris',
        status: 'available',
        deskripsi:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna eget molestie vehicula. Aliquam sed orci suscipit, finibus orci quis, semper diam. Praesent et velit id massa finibus aliquet.',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Ekonomi',
        status: 'available',
        deskripsi:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna eget molestie vehicula. Aliquam sed orci suscipit, finibus orci quis, semper diam. Praesent et velit id massa finibus aliquet.',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Akuntansi',
        status: 'available',
        deskripsi:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna eget molestie vehicula. Aliquam sed orci suscipit, finibus orci quis, semper diam. Praesent et velit id massa finibus aliquet.',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Agama',
        status: 'available',
        deskripsi:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna eget molestie vehicula. Aliquam sed orci suscipit, finibus orci quis, semper diam. Praesent et velit id massa finibus aliquet.',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Sosiologi',
        status: 'available',
        deskripsi:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna eget molestie vehicula. Aliquam sed orci suscipit, finibus orci quis, semper diam. Praesent et velit id massa finibus aliquet.',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        nama_mata_pelajaran: 'Penjaskes',
        status: 'available',
        deskripsi:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna eget molestie vehicula. Aliquam sed orci suscipit, finibus orci quis, semper diam. Praesent et velit id massa finibus aliquet.',
        createdAt:new Date(),
        updatedAt:new Date()
      },], {});
  },

  down: (queryInterface, Sequelize) => {
  }
};
