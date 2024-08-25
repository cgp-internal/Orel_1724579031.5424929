const awsLambda = require('aws-lambda');
const Room = require('./models/Room');

let db;

async function connectToDB() {
  if (!db) {
    db = await require('mongoose').createConnection(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  }
  return db;
}

async function createRoom(event, context) {
  const db = await connectToDB();
  const room = new Room({ name: event.name, createdBy: event.createdBy });
  return room.save();
}

async function getRooms(event, context) {
  const db = await connectToDB();
  return Room.find().exec();
}

async function deleteRoom(event, context) {
  const db = await connectToDB();
  return Room.findByIdAndRemove(event.id).exec();
}

exports.handler = async function(event, context) {
  switch (event.path) {
    case '/room':
      if (event.httpMethod === 'POST') {
        return createRoom(event, context);
      }
      break;
    case '/rooms':
      if (event.httpMethod === 'GET') {
        return getRooms(event, context);
      }
      break;
    case '/room/{id}':
      if (event.httpMethod === 'DELETE') {
        return deleteRoom(event, context);
      }
      break;
    default:
      return { statusCode: 404 };
  }
}