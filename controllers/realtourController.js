const path = require("path");
const router = require("express").Router();
const Realtour = require("../models/realtour");
const newUser = require("../models/users")
const user_saved = require("../models/user_saved")

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
    findbyId: function(req,res){
        Realtour
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))

    },
    createUser: function(req,res){
        newUser
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    saveListing: function(req,res){
        user_saved
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAllSaved: function(req,res){
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

router.post("/api/register",realtourFunctions.createUser);
router.get("/api/listings", realtourFunctions.findAll);
router.post("/api/post_listing", realtourFunctions.create);
router.get("/api/listing/:id",realtourFunctions.findbyId);
router.post("/api/save_listing",realtourFunctions.saveListing);
router.get("/api/saved/listings",realtourFunctions.findAll);


router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})
module.exports = router;