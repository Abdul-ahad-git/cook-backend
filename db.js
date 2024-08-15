const mongoose = require("mongoose");

// Replace the URI string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://Abdul-mongo:WDz5ChBRSZKupsRS@test.8m0whz3.mongodb.net/?retryWrites=true&w=majority&appName=test"; // or use your Atlas URI

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "connection error:"));

// Bind connection to open event (to confirm successful connection)
db.once("open", function () {
  console.log("Connected to MongoDB");
});

module.exports = db;
