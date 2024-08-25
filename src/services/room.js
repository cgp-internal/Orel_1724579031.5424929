const { createRoom, getRooms, deleteRoom } = require('./api/room');

let roomService = {};

roomService.createRoom = async function(name, createdBy) {
  return createRoom(name, createdBy);
}

roomService.getRooms = async function() {
  return getRooms();
}

roomService.deleteRoom = async function(id) {
  return deleteRoom(id);
}

module.exports = { createRoom: roomService.createRoom, getRooms: roomService.getRooms, deleteRoom: roomService.deleteRoom };