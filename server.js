const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const realtourController = require("./controllers/realtourController")
const app = express();
const PORT = process.env.PORT || 3001;

server = require("http").createServer(app);

//Socket IO setup 

const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

const port = 3002;
io.listen(port);
console.log('listening on port ', port);



///////




// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(realtourController);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/realtourDB",
  {
    useMongoClient: true
  }
);

//require("./controllers/drone/controller");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});