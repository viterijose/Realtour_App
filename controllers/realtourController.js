const path = require("path");
const router = require("express").Router();
const Realtour = require("../models/realtour");

const User = require("../models/users");
const Appointment = require("../models/appointments");
const user_saved = require("../models/user_saved")

const realtourFunctions = {
    createListing: function (req, res) {
        // console.log("BODY FOR DB: \n"+req.body);
        Realtour
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeListing: function (req, res) {
        Realtour
            .findById({ _id: req.params.id }, req.body)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAllListings: function (req, res) {
        Realtour
            .find(req.query)
            .sort({ pub_date: -1 })
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
        User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createAppt: function (req, res) {
        Appointment
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
    getUserListings: function (req, res) {
        Realtour
            .findOne({owner: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createOpenHouse: function(req, res) {
        Realtour
            .update({owner: req.body.id}, {$set: {openHouse: {start: req.body.start, end: req.body.end}}})
            .then(res.json(200))
            .catch(err => res.status(422).json(err));
    },
    findAllSaved: function (req, res) {
        user_saved
            .find(req.query)
            // .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
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

router.post("/register", realtourFunctions.createUser);
router.get("/listings", realtourFunctions.findAllListings);
router.post("/listing", realtourFunctions.createListing);
router.get('/userListings/:id', realtourFunctions.getUserListings);
router.post('/openhouse', realtourFunctions.createOpenHouse);
router.get("/listing/:id", realtourFunctions.findbyId);
router.post("/save/listing", realtourFunctions.saveListing);
router.delete("/listing/:id", realtourFunctions.removeListing);

// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"))
// })
module.exports = router;