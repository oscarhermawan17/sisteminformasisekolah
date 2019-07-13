'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    nomor_induk: DataTypes.STRING,
    nama_lengkap: DataTypes.STRING,
    alamat: DataTypes.STRING,
    nomor_hp:DataTypes.STRING,
    email:DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role, { foreignKey:'role', targetKey:'id'})
  };
  return User;
};