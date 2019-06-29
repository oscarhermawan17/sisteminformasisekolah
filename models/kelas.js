'use strict';
module.exports = (sequelize, DataTypes) => {
  var Kelas = sequelize.define('Kelas', {
    nama_kelas: DataTypes.STRING
  }, {});
  Kelas.associate = function(models) {
    // associations can be defined here
  };
  return Kelas;
};