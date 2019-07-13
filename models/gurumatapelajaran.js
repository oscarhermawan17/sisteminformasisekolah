'use strict';
module.exports = (sequelize, DataTypes) => {
  var GuruMataPelajaran = sequelize.define('GuruMataPelajaran', {
    id_guru: DataTypes.INTEGER,
    id_mata_pelajaran: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  GuruMataPelajaran.associate = function(models) {
    // associations can be defined here
  };
  return GuruMataPelajaran;
};