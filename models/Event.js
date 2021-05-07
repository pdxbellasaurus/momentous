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
   title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: true,
  },
/*
description - text
venue
Type
address
city
state
zip
event start
event end
*/
user_id: {
  type: DataTypes.INTEGER,
  references: {
    model: 'user',
    key: 'id',
  },
},
guest_id: {
  type: DataTypes.INTEGER,
  references: {
    model: 'guest',
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
