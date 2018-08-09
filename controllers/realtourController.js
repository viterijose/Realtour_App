
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
            .findById({ _id: req.params.id })
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
    findApptByListingId: function (req, res) {
        Appointment
            .find({listing:req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))

    },
    findByZipcode: function (req, res) {
        Realtour
            .find()
            .where("zipcode").equals(req.params.zipcode)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findByCity: function (req, res) {
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
    getUser: function (req, res) {
        // console.log(req.body.email)
        User
            .find()
            .where("email").equals(req.params.user)
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
        User
            .update({ _id: req.params.user }, { $push: req.body })
            // .findByIdAndUpdate(req.params.user, { $set:{ savedListings:req.body.data } }, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    getUserListings: function (req, res) {
        Realtour
            .find({ owner: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createOpenHouse: function (req, res) {
        Realtour
            // .create(req.body)
            .update({ owner: req.body.id, _id: req.body.listingId }, { $set: { openHouse: { start: req.body.start, end: req.body.end } } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAllSaved: function (req, res) {
        User
            .findById(req.params.user)
            // .sort({ date: -1 })
            .populate("savedListings")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateUser: function (req, res) {
        // console.log(req.body.listingData)
        User
            // .findByIdAndUpdate(req.params.user, { $set: { savedListings: req.body.listingData } })
            .update({ _id: req.params.user }, { $pull: { savedListings: req.body.listingId } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))

    },
    // createAppointment: function(req,res){
    //     Realtour
    //     .update({ owner: req.body.id }, { $set: { openHouse: { start: req.body.start, end: req.body.end } } })
    //     .then(res.json(200))
    //     .catch(err => res.status(422).json(err));
    // }
}


router.post("/register", realtourFunctions.createUser);
router.get("/user/:user", realtourFunctions.getUser);
router.get("/listings", realtourFunctions.findAllListings);
router.post("/post/listing", realtourFunctions.createListing);
router.get('/userListings/:id', realtourFunctions.getUserListings);
router.post('/openhouse', realtourFunctions.createOpenHouse);
router.get("/listing/:id", realtourFunctions.findbyId);
router.post("/save/listing/:user", realtourFunctions.saveListing);
router.get("/saved/listings/:user", realtourFunctions.findAllSaved)
router.delete("/listing/:id", realtourFunctions.removeListing);
router.patch("/updateListing/:id", realtourFunctions.updateListing)
router.patch("/updateUser/:user", realtourFunctions.updateUser)
router.post('/appointment', realtourFunctions.createAppt);
router.get("/findListings/zipcode/:zipcode", realtourFunctions.findByZipcode);
router.get("/findListings/city/:city", realtourFunctions.findByCity);
router.get("/appointment/:id",realtourFunctions.findApptByListingId)
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"))
// })
module.exports = router;