var DataTypes = require("sequelize").DataTypes;
var _detall = require("./detall");
var _factura = require("./factura");
var _producte = require("./producte");

function initModels(sequelize) {
  var detall = _detall(sequelize, DataTypes);
  var factura = _factura(sequelize, DataTypes);
  var producte = _producte(sequelize, DataTypes);

  factura.belongsToMany(producte, { as: 'detall_producte_id_productes', through: detall, foreignKey: "detall_factura_id", otherKey: "detall_producte_id" });
  producte.belongsToMany(factura, { as: 'detall_factura_id_facturas', through: detall, foreignKey: "detall_producte_id", otherKey: "detall_factura_id" });
  detall.belongsTo(factura, { as: "detall_factura", foreignKey: "detall_factura_id"});
  factura.hasMany(detall, { as: "detalls", foreignKey: "detall_factura_id"});
  detall.belongsTo(producte, { as: "detall_producte", foreignKey: "detall_producte_id"});
  producte.hasMany(detall, { as: "detalls", foreignKey: "detall_producte_id"});

  return {
    detall,
    factura,
    producte,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
