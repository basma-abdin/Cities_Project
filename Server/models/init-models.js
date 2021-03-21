var DataTypes = require("sequelize").DataTypes;
var _villes_france_free = require("./villes_france_free");

function initModels(sequelize) {
  var villes_france_free = _villes_france_free(sequelize, DataTypes);


  return {
    villes_france_free,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
