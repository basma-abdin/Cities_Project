const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('villes_france_free', {
    ville_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ville_departement: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ville_slug: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "ville_slug"
    },
    ville_nom: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ville_nom_simple: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ville_nom_reel: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ville_nom_soundex: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ville_nom_metaphone: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    ville_code_postal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ville_commune: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ville_code_commune: {
      type: DataTypes.STRING(5),
      allowNull: false,
      unique: "ville_code_commune_2"
    },
    ville_arrondissement: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    ville_canton: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ville_amdi: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    ville_population_2010: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    ville_population_1999: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    ville_population_2012: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      comment: "approximatif"
    },
    ville_densite_2010: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ville_surface: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ville_longitude_deg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ville_latitude_deg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ville_longitude_grd: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    ville_latitude_grd: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ville_longitude_dms: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    ville_latitude_dms: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ville_zmin: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    ville_zmax: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'villes_france_free',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ville_id" },
        ]
      },
      {
        name: "ville_code_commune_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ville_code_commune" },
        ]
      },
      {
        name: "ville_slug",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ville_slug" },
        ]
      },
      {
        name: "ville_departement",
        using: "BTREE",
        fields: [
          { name: "ville_departement" },
        ]
      },
      {
        name: "ville_nom",
        using: "BTREE",
        fields: [
          { name: "ville_nom" },
        ]
      },
      {
        name: "ville_nom_reel",
        using: "BTREE",
        fields: [
          { name: "ville_nom_reel" },
        ]
      },
      {
        name: "ville_code_commune",
        using: "BTREE",
        fields: [
          { name: "ville_code_commune" },
        ]
      },
      {
        name: "ville_code_postal",
        using: "BTREE",
        fields: [
          { name: "ville_code_postal" },
        ]
      },
      {
        name: "ville_longitude_latitude_deg",
        using: "BTREE",
        fields: [
          { name: "ville_longitude_deg" },
          { name: "ville_latitude_deg" },
        ]
      },
      {
        name: "ville_nom_soundex",
        using: "BTREE",
        fields: [
          { name: "ville_nom_soundex" },
        ]
      },
      {
        name: "ville_nom_metaphone",
        using: "BTREE",
        fields: [
          { name: "ville_nom_metaphone" },
        ]
      },
      {
        name: "ville_population_2010",
        using: "BTREE",
        fields: [
          { name: "ville_population_2010" },
        ]
      },
      {
        name: "ville_nom_simple",
        using: "BTREE",
        fields: [
          { name: "ville_nom_simple" },
        ]
      },
    ]
  });
};
