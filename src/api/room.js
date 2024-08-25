const mongoose = require('mongoose');
const Room = require('./models/Room');

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

async function createRoom(name, createdBy) {
  return Room.create({ name, createdBy });
}

async function getRooms() {
  return Room.find().exec();
}

async function deleteRoom(id) {
  return Room.findByIdAndRemove(id).exec();
}

module.exports = { createRoom, getRooms, deleteRoom };