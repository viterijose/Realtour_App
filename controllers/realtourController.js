const path = require("path");
const router = require("express").Router();
const Realtour = require("../models/realtour");
const newUser = require("../models/users")

const realtourFunctions = {
    create: function (req, res) {
        // console.log("BODY FOR DB: \n"+req.body);
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
    createUser: function(req,res){
        newUser
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
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

router.post("/api/register",realtourFunctions.createUser);
router.get("/api/listings", realtourFunctions.findAll);
router.post("/api/listing", realtourFunctions.create);


router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})
module.exports = router;