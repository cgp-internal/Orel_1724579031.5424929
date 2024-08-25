const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sqlite');

const { Room } = require('./models/Room');

async function createRoom(name, createdBy) {
  return Room.create(db, name, createdBy);
}

async function getRooms() {
  return Room.getAll(db);
}

async function deleteRoom(id) {
  return Room.delete(db, id);
}

module.exports = { createRoom, getRooms, deleteRoom };