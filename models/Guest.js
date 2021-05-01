const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Guest extends Model {}

Guest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
type: DataTypes.STRING,
allowNull: false,
    },
// DATATYPES FOR THE GUEST
/*
email?
*/
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'event',
        key: 'id',
      },
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
     },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'guest',
  }
);

module.exports = Guest;