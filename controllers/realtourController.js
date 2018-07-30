const path = require("path");
const router = require("express").Router();
const Realtour = require("../models/realtour");
const newUser = require("../models/users");
const user_saved = require("../models/user_saved");

const videostream = require("../models/videosteam");

const realtourFunctions = {
    create: function (req, res) {
        Realtour
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        Realtour
            .findById({ _id: req.params.id }, req.body)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        Realtour
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findbyId: function (req, res) {
        Realtour
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))

    },
    createUser: function (req, res) {
        newUser
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    saveListing: function (req, res) {
        user_saved
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAllSaved: function (req, res) {
        user_saved
            .find(req.query)
            // .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    videostream:function(req, res){
      //  videostream()
      console.log("In the vidoe contoller ");
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.end(lastPng);
      
    }
}

// const userFunctions = {
//     createUser: function(req,res){
//         newUser
//         .create(req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     remove: function(req,res){
//         newUser
//         .findById({_id:req.params.id},req.body)
//         .then(dbModel => dbModel.remove())
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     }
// }


//create a connection to the drone

//require("dronestream").listen(3002);


var io = require('socket.io').listen(3003);
io.serveClient('log level', 1);

io.sockets.on('connection', function(socket){
 console.log(" the Socket IO is connected.");

 var arDrone = require('ar-drone');
 var client = arDrone.createClient();




 socket.on('event', function (data) {
    console.log("IO is now running 1")
    if(data.name=="takeoff"){
        console.log("Browser asked Ar Drone to Take Off");
        client.takeoff();
    }
    if(data.name=="spin"){
        console.log("Browser asked Ar Drone to Start Spinning");
        client.clockwise(1);
    }
    if(data.name=="stop"){
        console.log("Browser asked Ar Drone to Stay and Hover");
        client.stop();
    }
    if(data.name=="land"){
        console.log("Browser asked Ar Drone to Land");
        client.land();
    }

});


});







router.post("/api/register", realtourFunctions.createUser);
router.get("/api/listings", realtourFunctions.findAll);
router.post("/api/post/listing", realtourFunctions.create);
router.get("/api/listing/:id", realtourFunctions.findbyId);
router.post("/api/save/listing", realtourFunctions.saveListing);
router.get("/api/saved/listings", realtourFunctions.findAll);
router.delete("/api/listing/:id", realtourFunctions.remove);
router.get("/api/video", realtourFunctions.videostream);


router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})
module.exports = router;