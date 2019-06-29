'use strict';
module.exports = (sequelize, DataTypes) => {
  var SiswaKelas = sequelize.define('SiswaKelas', {
    id_kelas: DataTypes.INT,
    id_siswa: DataTypes.INTEGER
  }, {});
  SiswaKelas.associate = function(models) {
    // associations can be defined here
  };
  return SiswaKelas;
};