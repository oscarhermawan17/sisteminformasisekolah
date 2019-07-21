'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Roles', 
      [{
        role:'Admin',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        role:'Siswa',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        role:'Guru',
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
  }
};
