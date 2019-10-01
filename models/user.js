'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    nomor_induk: DataTypes.STRING,
    nomor_induk_pegawai: DataTypes.STRING,
    nama_lengkap: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    password_orang_tua: DataTypes.STRING,
    alamat: DataTypes.STRING,
    gender: DataTypes.STRING,
    nomor_hp:DataTypes.STRING,
    nomor_hp_orang_tua:DataTypes.STRING,
    email:DataTypes.STRING,
    role: DataTypes.INTEGER,
    status_angkatan:DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role, { foreignKey:'role', targetKey:'id'})
    User.belongsToMany(models.MataPelajaran, {
      through: 'GuruMataPelajaran',
      as: 'guru',
      foreignKey: 'id_guru',
    });
  };
  return User;
};