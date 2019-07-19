'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Roles', 
      [{
        role:'Admin',
      },{
        role:'Siswa',
      },{
        role:'Guru',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
  }
};
