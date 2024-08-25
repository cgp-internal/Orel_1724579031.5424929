const AWS = require('aws-sdk');

let roomService = {};

roomService.createRoom = async function(name, createdBy) {
  const lambda = new AWS.Lambda({ region: 'your-region' });
  const params = {
    FunctionName: 'createRoom',
    InvocationType: 'RequestResponse',
    Payload: JSON.stringify({ name, createdBy }),
  };
  const response = await lambda.invoke(params).promise();
  return JSON.parse(response.Payload);
}

roomService.getRooms = async function() {
  const lambda = new AWS.Lambda({ region: 'your-region' });
  const params = {
    FunctionName: 'getRooms',
    InvocationType: 'RequestResponse',
  };
  const response = await lambda.invoke(params).promise();
  return JSON.parse(response.Payload);
}

roomService.deleteRoom = async function(id) {
  const lambda = new AWS.Lambda({ region: 'your-region' });
  const params = {
    FunctionName: 'deleteRoom',
    InvocationType: 'RequestResponse',
    Payload: JSON.stringify({ id }),
  };
  const response = await lambda.invoke(params).promise();
  return JSON.parse(response.Payload);
}

module.exports = { createRoom: roomService.createRoom, getRooms: roomService.getRooms, deleteRoom: roomService.deleteRoom };