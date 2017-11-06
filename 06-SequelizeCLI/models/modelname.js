'use strict';
module.exports = (sequelize, DataTypes) => {
  var ModelName = sequelize.define('ModelName', {
    attribute1: DataTypes.
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ModelName;
};