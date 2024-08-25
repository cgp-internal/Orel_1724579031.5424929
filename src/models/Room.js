class Room {
  constructor(id, name, createdBy) {
    this.id = id;
    this.name = name;
    this.createdBy = createdBy;
  }

  static async create(db, name, createdBy) {
    const roomId = await db.run(`INSERT INTO rooms (name, created_by) VALUES (?, ?)`, name, createdBy);
    return new Room(roomId, name, createdBy);
  }

  static async getAll(db) {
    const rooms = await db.all(`SELECT * FROM rooms`);
    return rooms.map((room) => new Room(room.id, room.name, room.created_by));
  }

  static async delete(db, id) {
    await db.run(`DELETE FROM rooms WHERE id = ?`, id);
  }
}

module.exports = { Room };