const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producte', {
    producte_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    producte_nom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    producte_descripcio: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    producte_preu: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    producte_oferta: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    producte_gust: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    producte_pasta: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    producte_imatge: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'producte',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "producte_id" },
        ]
      },
    ]
  });
};
