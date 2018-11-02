//Connect to Mongo database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//your local database url
//27017 is the default mongoDB port
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/Passport-JWT-MERN_DB";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(uri).then(
    () => {
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
  
      console.log("Connected to Mongo");
    },
    err => {
      /** handle initial connection error */
  
      console.log("error connecting to Mongo: ");
      console.log(err);
    }
  );
}

module.exports = mongoose.connection;
