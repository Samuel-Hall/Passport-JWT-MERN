//Connect to Mongo database
const mongoose = require("mongoose");
const env = require("../environment");
mongoose.Promise = global.Promise;

const mongoUri = `mongodb://${env.dbName}:${env.key}@${
  env.dbName
}.documents.azure.com:${env.port}/?ssl=true`;

function connect() {
  return mongoose.connect(
    mongoUri,
    { useMongoClient: true }
  );
}

module.exports = {
  connect,
  mongoose
};
