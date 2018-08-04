
const router = require("express").Router();
const Realtour = require("../models/realtour");
// const fileUpload = require("express-fileupload")

const User = require("../models/users");
const Appointment = require("../models/appointments");
const user_saved = require("../models/user_saved")

const realtourFunctions = {
    createListing: function (req, res) {
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
    updateListing: function (req, res) {
        // console.log(req.params.id)
        Realtour
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))

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
    findByZipcode: function(req,res){
        Realtour
        .find()
        .where("zipcode").equals(req.params.zipcode)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    findByCity: function(req,res){
        Realtour
        .find()
        .where("city").equals(req.params.city)
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
            .findOne({ owner: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createOpenHouse: function (req, res) {
        Realtour
            .update({ owner: req.body.id }, { $set: { openHouse: { start: req.body.start, end: req.body.end } } })
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
    // createAppointment: function(req,res){
    //     Realtour
    //     .update({ owner: req.body.id }, { $set: { openHouse: { start: req.body.start, end: req.body.end } } })
    //     .then(res.json(200))
    //     .catch(err => res.status(422).json(err));
    // }
}


router.post("/register", realtourFunctions.createUser);
router.get("/listings", realtourFunctions.findAllListings);
router.post("/postListing", realtourFunctions.createListing);
router.get('/userListings/:id', realtourFunctions.getUserListings);
router.post('/openhouse', realtourFunctions.createOpenHouse);
router.get("/listing/:id", realtourFunctions.findbyId);
router.post("/savedListing", realtourFunctions.saveListing);
router.delete("/listing/:id", realtourFunctions.removeListing);
router.patch("/updateListing/:id", realtourFunctions.updateListing)
router.post('/appointment', realtourFunctions.createAppt);
router.get("/findListings/zipcode/:zipcode",realtourFunctions.findByZipcode);
router.get("/findListings/city/:city",realtourFunctions.findByCity);

// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"))
// })
module.exports = router;