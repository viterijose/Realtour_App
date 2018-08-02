require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const realtourController = require("./controllers/realtourController")
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use('/api/', realtourController);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/realtourDB",
  {
    useMongoClient: true
  }
);


// Drone setup 
server = require("http").createServer(app);
const io = require('socket.io')();


//phase 2 
var arDrone = require('ar-drone');
var drone = arDrone.createClient();

///




io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      let time = `${new Date()}`

      let batteryLevel = drone.battery();

      client.emit('timer', [{ time, name: 'battery', value: batteryLevel } ]);
    }, interval);
  });
});

//phase 2


// setInterval(function(){
//   var batteryLevel = drone.battery();
//   socket.emit('event', { name: 'battery',value: batteryLevel});
// },1000);

///

const port = 3002;
io.listen(port);
console.log('listening on port ', port);

require("dronestream").listen(3010);
// -Donald

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});