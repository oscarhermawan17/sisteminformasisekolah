'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    nis: DataTypes.STRING,
    nama_siswa: DataTypes.STRING,
    alamat: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};