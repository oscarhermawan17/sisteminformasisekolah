'use strict';
module.exports = (sequelize, DataTypes) => {
  var MataPelajaran = sequelize.define('MataPelajaran', {
    nama_mata_pelajaran: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    status: DataTypes.STRING
  }, {});
  MataPelajaran.associate = function(models) {
    // associations can be defined here
    MataPelajaran.belongsToMany(models.User, {
      through: 'GuruMataPelajaran',
      as: 'mata_pelajaran',
      foreignKey: 'id_mata_pelajaran',
    });
  };
  return MataPelajaran;
};