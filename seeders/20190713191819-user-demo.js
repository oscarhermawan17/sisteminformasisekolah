'use strict';
var BulkUsers = []
    let random_name = ['Agus', 'Kofifah', 'Oscar', 'Hendra', 'Drajat', 'Wisnu', 'Komariah', 'Dewi', 'Lestari', 'Indah', 'Ningsih', 'Dini', 'Enjel', 'Nugraha', 'Kodir', 'Kaleb', 'Bokir', 'Superman', 'Ninja', 'Taro', 'Disini', 'Dia']
    let gender_value = ['Pria', 'Wanita']
    for(let i=0;i<10;i++){
      let random_1_name = Math.floor(Math.random() * ((random_name.length-1) - 0 + 1)) + 0;
      let random_2_name = Math.floor(Math.random() * ((random_name.length-1) - 0 + 1)) + 0;
      let role_generate_random = Math.floor(Math.random() * (3 - 2 + 1)) + 2;
      let gender_generate_random = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      BulkUsers.push({
        nomor_induk:`000${i}`,
        nama_lengkap:`${random_name[random_1_name]} ${random_name[random_2_name]}`,
        username:`000${i}`,
        password:`$2b$10$XW5rxhgrUB4sTyCUlSNX4ueJxPlEHw/ftOGYfYzwIrruVNvzqHEYO`,
        alamat:`000${i}`,
        gender:gender_value[gender_generate_random],
        nomor_hp:`000${i}`,
        email:`000${i}`,
        role: role_generate_random,
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
