require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const realtourController = require("./controllers/realtourController")
const app = express();
const PORT = process.env.PORT || 3001;

const server = require("http").createServer(app);
const io = require('socket.io')();
const arDrone = require('ar-drone');
const drone = arDrone.createClient();
const port = 3002;
require("dronestream").listen(3010);




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

//Drone setup code
//@Donald Blanc

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      let time = `${new Date()}`
      let batteryLevel = drone.battery();
      client.emit('timer', [{ time, name: 'battery', value: batteryLevel }]);
    }, interval);
    
    client.on('event', function (data) {
      if (data.name == "takeoff") {
        console.log("received command to land to Take Off");
        drone.takeoff();
      }
      if (data.name == "spin") {
        console.log("received command to land Start Spinning");
        drone.clockwise(1);
      }
      if (data.name == "stop") {
        console.log("received command to hover drone");
        drone.stop();
      }
      if (data.name == "land") {
        console.log("received command to land drone");
        drone.land();
      }
      if (data.name == "demo") {
        console.log("performing the Demo")
        drone.takeoff();
        drone.after(3000, function () {
          console.log("about to land");
          this.stop();
          this.land();
          console.log("landed");
        });
      }
    });
  });
});

//setting up Socket IO connection
io.listen(port);
console.log('listening on port ', port);



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});