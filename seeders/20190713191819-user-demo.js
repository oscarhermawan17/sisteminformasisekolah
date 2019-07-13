'use strict';
var BulkUsers = []
    for(let i=0;i<10;i++){
      BulkUsers.push({
        nomor_induk:`000${i}`,
        nama_lengkap:'testing pejing',
        username:`000${i}`,
        password:`$2b$10$XW5rxhgrUB4sTyCUlSNX4ueJxPlEHw/ftOGYfYzwIrruVNvzqHEYO`,
        alamat:`000${i}`,
        nomor_hp:`000${i}`,
        email:`000${i}`,
        role:`000${i}`,
        status_angkatan:`satu`,
        status:`available`,
        createdAt:new Date(),
        updatedAt:new Date()
      })
    }

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', 
      BulkUsers, {});
  },

  down: (queryInterface, Sequelize) => {
  }
};
