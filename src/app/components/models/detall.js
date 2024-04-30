const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detall', {
    detall_factura_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'factura',
        key: 'factura_id'
      }
    },
    detall_producte_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'producte',
        key: 'producte_id'
      }
    },
    detall_quantitat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    detall_preu: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    detall_oferta: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'detall',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "detall_factura_id" },
          { name: "detall_producte_id" },
        ]
      },
      {
        name: "fk_detall_producte",
        using: "BTREE",
        fields: [
          { name: "detall_producte_id" },
        ]
      },
    ]
  });
};
