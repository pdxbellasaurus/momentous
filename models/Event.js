const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    unique_id: {
    type: DataTypes.STRING,
    allowNull: false
    },
   //ADD DATATYPES TO CAPTURE FOR EVENTS AND REFERENCE TO USER
   name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
/*
description - text
venue
Type
address
city
state
zip
*/
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
    modelName: 'event',
  }
);

module.exports = Event;
