// var io = require('socket.io').listen(3002);
// io.serveClient('log level', 1);

// io.sockets.on('connection', function(socket){
//  console.log(" the Socket IO is connected.");

//  var arDrone = require('ar-drone');
//  var client = arDrone.createClient();




//  socket.on('event', function (data) {
//     //console.log("IO is now running 1")
//     if(data.name=="takeoff"){
//         console.log("Browser asked Ar Drone to Take Off");
//         client.takeoff();
//     }
//     if(data.name=="spin"){
//         console.log("Browser asked Ar Drone to Start Spinning");
//         client.clockwise(1);
//     }
//     if(data.name=="stop"){
//         console.log("Browser asked Ar Drone to Stay and Hover");
//         client.stop();
//     }
//     if(data.name=="land"){
//         console.log("Browser asked Ar Drone to Land");
//         client.land();
//     }

// });


// });