const User = require('./User');
const Event = require('./Event');
const Guest = require('./Guest');

// DEFINE USER RELATIONSHIPS
User.hasMany(Event, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  })

// DEFINE EVENT RELATIONSHIPS
Event.belongsTo(User, {
    foreignKey: 'user_id'
})

//DEFINE GUEST RELATIONSHIPS
Guest.belongsTo(Event,{
    foreignKey: 'event_id'
})

Event.hasMany(Guest,{
    foreignKey: 'guest_id'
})

module.exports = { User, Event, Guest };
