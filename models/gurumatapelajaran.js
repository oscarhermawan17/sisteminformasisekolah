'use strict';
module.exports = (sequelize, DataTypes) => {
  var GuruMataPelajaran = sequelize.define('GuruMataPelajaran', {
    id_guru: DataTypes.INTEGER,
    id_mata_pelajaran: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  GuruMataPelajaran.associate = function(models) {
    GuruMataPelajaran.belongsTo(models.User, { foreignKey:'id_guru', targetKey:'id'})
    GuruMataPelajaran.belongsTo(models.MataPelajaran, { foreignKey:'id_mata_pelajaran', targetKey:'id'})
  };
  return GuruMataPelajaran;
};