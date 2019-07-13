'use strict';
module.exports = (sequelize, DataTypes) => {
  var MataPelajaran = sequelize.define('MataPelajaran', {
    nama_mata_pelajaran: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  MataPelajaran.associate = function(models) {
    // associations can be defined here
  };
  return MataPelajaran;
};